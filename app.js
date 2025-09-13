import { researchPapers } from './data.js';

// Function to render the research log
function renderResearchLog() {
    const logContainer = document.getElementById('research-log');
    if (!logContainer) return;

    // Separate papers into different statuses
    const spotlightPapers = researchPapers.filter(paper => paper.status === 'spotlight');
    const currentlyReading = researchPapers.filter(paper => paper.status === 'reading');
    const readingArchive = researchPapers.filter(paper => paper.status === 'read');

    let html = '';

    // Generate HTML for 'spotlight' papers
    if (spotlightPapers.length > 0) {
        html += '<h3 class="text-xl font-bold text-sky-300 mb-4">Featured Research</h3>';
        html += '<div class="space-y-4 mb-12">';
        spotlightPapers.forEach(paper => {
            html += `
                <div class="spotlight-card">
                    <a href="${paper.link}" ${paper.link === '#' ? '' : 'target="_blank" rel="noopener noreferrer"'}>
                        <p class="font-bold text-lg text-white">${paper.title}</p>
                    </a>
                    <p class="text-sm text-gray-400 mt-1">${paper.authors} (${paper.year})</p>
                    <p class="text-gray-300 mt-3">${paper.description}</p>
                </div>
            `;
        });
        html += '</div>';
    }
    
    // Generate HTML for 'currently reading' papers
    if (currentlyReading.length > 0) {
        html += '<h3 class="text-xl font-bold text-sky-300 mb-4">Currently Exploring</h3>';
        html += '<div class="space-y-4 mb-8">';
        currentlyReading.forEach(paper => {
            html += `
                <a href="${paper.link}" target="_blank" rel="noopener noreferrer" class="paper-card block">
                    <p class="font-semibold text-white">${paper.title}</p>
                    <p class="text-sm text-gray-400">${paper.authors} (${paper.year})</p>
                </a>
            `;
        });
        html += '</div>';
    }

    // Generate HTML for the reading archive
    if (readingArchive.length > 0) {
        html += '<h3 class="text-xl font-bold text-sky-300 mb-4">Reading Archive</h3>';
        html += '<div class="space-y-4">';
        readingArchive.forEach(paper => {
            html += `
                <a href="${paper.link}" target="_blank" rel="noopener noreferrer" class="paper-card block">
                    <p class="font-semibold text-white">${paper.title}</p>
                    <p class="text-sm text-gray-400">${paper.authors} (${paper.year})</p>
                </a>
            `;
        });
        html += '</div>';
    }

    logContainer.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderResearchLog();
});

