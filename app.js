import { researchPapers, projects, experience } from './data.js';

// ── RESEARCH ──────────────────────────────────────────────────────────────────
function renderResearch() {
    const container = document.getElementById('research-log');
    if (!container) return;

    const spotlight = researchPapers.filter(p => p.status === 'spotlight');
    const reading   = researchPapers.filter(p => p.status === 'reading');
    const archive   = researchPapers.filter(p => p.status === 'read');

    let html = '';

    // Spotlight
    spotlight.forEach(p => {
        html += `
        <div class="spotlight-paper reveal">
            <span class="spotlight-tag">Work in Progress</span>
            ${p.link !== '#'
                ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="paper-title">${p.title}</a>`
                : `<span class="paper-title no-link">${p.title}</span>`
            }
            <p class="paper-meta">${p.authors} · ${p.venue} · ${p.year}</p>
            ${p.description ? `<p class="paper-desc">${p.description}</p>` : ''}
            ${p.tags ? `<div class="paper-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
        </div>`;
    });

    // Reading queue
    if (reading.length > 0) {
        html += `<p class="subsection-title reveal">Reading Queue</p>
                 <div class="paper-list reveal">`;
        reading.forEach(p => { html += paperRow(p, 'reading'); });
        html += `</div>`;
    }

    // Archive
    if (archive.length > 0) {
        html += `<p class="subsection-title reveal">Archive</p>
                 <div class="paper-list reveal">`;
        archive.forEach(p => { html += paperRow(p, 'read'); });
        html += `</div>`;
    }

    container.innerHTML = html;
}

function paperRow(p, statusClass) {
    return `
    <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="paper-row">
        <span class="paper-row-year">${p.year}</span>
        <span class="paper-row-content">
            <span class="paper-row-title">${p.title}</span>
            <span class="paper-row-authors">${p.authors}${p.venue ? ' · ' + p.venue : ''}</span>
        </span>
        <span class="paper-row-status status-${statusClass}">${statusClass === 'reading' ? 'Reading' : 'Read'}</span>
    </a>`;
}

// ── PROJECTS ─────────────────────────────────────────────────────────────────
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    // Sort newest first
    const sorted = [...projects].sort((a, b) => {
        if (b.year !== a.year) return b.year - a.year;
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return months.indexOf(b.month) - months.indexOf(a.month);
    });

    const typeLabel = { research: 'Research', engineering: 'Engineering' };

    grid.innerHTML = sorted.map(p => `
        <div class="project-card reveal">
            <div class="project-card-header">
                <span class="project-icon"><i class="fas ${p.icon}"></i></span>
                <div style="display:flex;align-items:center;gap:10px;">
                    <span class="project-type-badge">${typeLabel[p.type] || p.type}</span>
                    ${p.link && p.link !== '#'
                        ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-arrow" title="View project"><i class="fas fa-arrow-up-right"></i></a>`
                        : ''
                    }
                </div>
            </div>
            <span class="project-name">${p.name}</span>
            <span class="project-date">${p.month ? p.month + ' ' : ''}${p.year}</span>
            <p class="project-desc">${p.summary}</p>
            <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
    `).join('');
}

// ── EXPERIENCE ───────────────────────────────────────────────────────────────
function renderExperience() {
    const container = document.getElementById('experience-list');
    if (!container) return;

    container.innerHTML = experience.map(e => `
        <div class="exp-row reveal">
            <div class="exp-left">
                <span class="exp-role">${e.role}</span>
                <span class="exp-org">${e.org}</span>
            </div>
            <div class="exp-right">
                <span class="exp-period">${e.period}</span>
                ${e.note ? `<span class="exp-note">${e.note}</span>` : ''}
            </div>
        </div>
    `).join('');
}

// ── THEME TOGGLE ─────────────────────────────────────────────────────────────
function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    updateToggleIcon(btn, saved);

    btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateToggleIcon(btn, next);
    });
}

function updateToggleIcon(btn, theme) {
    btn.innerHTML = theme === 'dark'
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    btn.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

// ── SCROLL REVEAL ────────────────────────────────────────────────────────────
function initScrollReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── CURSOR ───────────────────────────────────────────────────────────────────
function initCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor || window.matchMedia('(pointer: coarse)').matches) {
        if (cursor) cursor.style.display = 'none';
        return;
    }
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top  = e.clientY + 'px';
    });
    document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
    document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
}

// ── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderResearch();
    renderProjects();
    renderExperience();
    initThemeToggle();
    initCursor();

    // Reveal runs after DOM is populated
    requestAnimationFrame(() => initScrollReveal());
});
