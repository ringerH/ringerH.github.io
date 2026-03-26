// ── RESEARCH PAPERS ──────────────────────────────────────────────────────────
export const researchPapers = [
    {
        id: "iccr-workshop",
        title: "ICCR: A Diagnostic Framework for Information Discipline in LLMs",
        authors: "Hillol P Kalita",
        venue: "Workshop Paper Draft",
        year: 2026,
        month: "Mar",
        link: "#",
        status: "spotlight",
        tags: ["LLM Security", "Privacy"],
        description: "Introduces the Information-Constrained Compositional Reasoning framework — an oracle-based benchmark and the DMS (Data Minimization Score) metric for measuring whether LLMs access only necessary information during reasoning. Empirically identifies three distinct failure modes validated on LLaMA 3.1 8B."
    },
    {
        id: "survey-llm-reasoning",
        title: "A Survey of Modern LLM Reasoning Frameworks",
        authors: "Hillol P Kalita · Advised by Prof. Ferdous A. Barbhuiya",
        venue: "Technical Report · IIIT Guwahati",
        year: 2025,
        month: "Sep",
        link: "https://drive.google.com/file/d/1VezekkZ-_9YJRTXZS_fBcUIZaL_GybDC/view?usp=drive_link",
        status: "read",
        tags: ["Survey", "Reasoning"],
        description: null
    },
    {
        id: "coat",
        title: "CoAT: Chain-of-Associated-Thoughts Framework for Enhancing Large Language Models Reasoning",
        authors: "J. Pan, S. Deng, S. Huang",
        venue: "arXiv",
        year: 2025,
        month: null,
        link: "https://arxiv.org/abs/2502.02390v2",
        status: "read",
        tags: ["Reasoning"],
        description: null
    },
    {
        id: "gtbench",
        title: "GTBENCH: Uncovering the Strategic Reasoning Limitations of LLMs via Game-Theoretic Evaluations",
        authors: "J. Duan, R. Zhang, J. Diffenderfer, et al.",
        venue: "arXiv",
        year: 2024,
        month: null,
        link: "https://arxiv.org/abs/2402.12348v2",
        status: "read",
        tags: ["Benchmarking", "Reasoning"],
        description: null
    },
    {
        id: "cot",
        title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
        authors: "J. Wei, X. Wang, D. Schuurmans, et al.",
        venue: "NeurIPS",
        year: 2022,
        month: null,
        link: "https://arxiv.org/abs/2201.11903v6",
        status: "read",
        tags: ["Reasoning"],
        description: null
    },
    {
        id: "gsm8k",
        title: "Training Verifiers to Solve Math Word Problems",
        authors: "K. Cobbe, H. Jun, J. Hilton, et al.",
        venue: "arXiv",
        year: 2021,
        month: null,
        link: "https://arxiv.org/abs/2110.14168v2",
        status: "read",
        tags: ["Benchmarking"],
        description: null
    }
];

// ── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
    {
        id: "iccr-framework",
        name: "ICCR Framework",
        year: 2026,
        month: "Feb",
        type: "research",
        summary: "Oracle-based diagnostic benchmark for measuring information access discipline in LLMs during multi-step reasoning. Built modular evaluation pipeline with query logging and real-time DMS calculation.",
        tags: ["Python", "LLM Eval", "Privacy"],
        link: "https://github.com/ringerH/ReasoningAuthenticationFramework-RAFUndergraduate",
        icon: "fa-shield-halved"
    },
    {
        id: "ai-chat-widget",
        name: "AI Support Chat Widget",
        year: 2025,
        month: "Dec",
        type: "engineering",
        summary: "Full-stack AI chat system with failure-first architecture — explicit system states for normal, degraded, and error modes. Provider-agnostic LLM interface, transactional persistence, 0% failure rate under load testing at ~737ms p95.",
        tags: ["SvelteKit", "TypeScript", "PostgreSQL", "Node.js"],
        link: "#",
        icon: "fa-message"
    },
    {
        id: "sarthi",
        name: "Sarthi — Community Hub",
        year: 2025,
        month: "Nov",
        type: "engineering",
        summary: "Microservices platform with real-time ride-sharing and chat. Production-deployed on Render with Google OAuth, role-based access, and a full automated test suite.",
        tags: ["Node.js", "Docker", "Socket.IO", "Redux"],
        link: "#",
        icon: "fa-users"
    }
];

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
export const experience = [
    {
        role: "Graduate Research Assistant",
        org: "IIIT Guwahati",
        period: "Aug 2025 – Present",
        note: "Advisor: Prof. Ferdous A. Barbhuiya · Focus: Privacy & Information Discipline in LLMs"
    },
    {
        role: "Web Dev Intern",
        org: "Amtron (Assam Electronics Development Corp.)",
        period: "Jun – Jul 2024",
        note: "Laravel · RESTful APIs · Deployment pipelines"
    }
];
