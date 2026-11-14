type Experience = {
  name: string;
  company: string;
  link: string;
  desc: string;
  points?: string[];
  date: string;
  products: { t: string; h: string }[];
  tags: string[];
};

const experiences: Experience[] = [
  {
    name: 'Software Engineer',
    company: 'K3 Advisory Group',
    link: '#',
    desc: 'Building an internal AI assistant with chat, document workflows, Microsoft 365 tools, and user-defined skills. Stack: Next.js 15 / React 19 on Azure App Service, App Router route handlers as the backend, Vercel AI SDK v6 for the agent loop, PostgreSQL 16 + pgvector through Drizzle, and Azure Blob Storage.',
    points: [
      'Data privacy: zero data retention (ZDR) for all model requests, and EU data residency on Azure.',
      'Identity and access: Microsoft Entra ID single sign-on, role-based access for users and for machine clients, and row-level security in PostgreSQL.',
      'Long-running chat runs that continue on the server after a browser disconnect.',
      'Tool integrations: Microsoft 365, RAG on company knowledge, Office document generation, image generation, and web search.',
      'A headless API with an OpenAPI contract, so other internal systems can use the assistant.',
      'An automated ingestion pipeline that moves SharePoint documents into the RAG knowledge base.',
      'An MCP integration with the company data platform for company lookups.',
      'A usage and cost reporting API for the FinOps team.',
      'Observability, usage quotas, and LLM evals in CI.',
    ],
    date: 'Dec 2025 - Present',
    products: [],
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Vercel AI SDK', 'MCP', 'PostgreSQL', 'pgvector', 'Drizzle', 'Entra ID', 'MS Graph', 'Azure App Service', 'Azure Blob Storage', 'Azure Logic Apps', 'OpenAPI'],
  },
  {
    name: 'Dev Services Consultant - Fullstack',
    company: 'The Access Group UK',
    link: 'https://www.theaccessgroup.com/',
    desc: 'I worked directly with client teams in the UK and APAC (NZ/AU), from requirements to delivery. I used AI to build fullstack web app integrations that extend the ERP system to new use cases.',
    points: [
      'Custom React + TypeScript micro frontends for specific ERP use cases.',
      '.NET Web APIs, webhook integrations, and background services.',
      'A React BACS payment-approval app that cut admin effort by 70% across hundreds of ERP databases.',
      '£17,850 ARR from billable client work within four months.',
    ],
    date: 'Dec 2024 - Dec 2025',
    products: [{ t: 'Belgian e-Invoicing (Peppol/Ecosio)', h: '#' }],
    tags: ['React', 'TypeScript', 'Micro Frontend', 'C#', '.NET Web API', 'MSSQL', 'Crystal Reports', 'Peppol'],
  },
  {
    name: 'Software Engineer',
    company: 'AirAsia / Capital A',
    link: 'https://www.capitala.com',
    desc: "Led blog initiatives at ikhlas.com - lifted user retention by 8% and grew upsell/cross-sell. Migrated the GraphQL pipeline from Contentstack to Stellate's Edge Cache, moved Next.js 12 → 13 with edge-runtime, and automated EZQurban webhook flows that took peak-season manual confirmations to ~0 hours.",
    date: 'Dec 2022 - Dec 2024',
    products: [
      { t: 'ikhlas.com', h: 'https://ikhlas.com' },
      { t: 'Ikhlas iOS', h: 'https://apps.apple.com/my/app/ikhlas-your-companion/id1550705035' },
      { t: 'Ikhlas Android', h: 'https://play.google.com/store/apps/details?id=com.ikhlas.mobile' },
    ],
    tags: ['Next.js', 'React', 'GraphQL', 'Hasura', 'Stellate', 'Contentstack', 'Edge Runtime', 'Handlebars'],
  },
  {
    name: 'Software Developer',
    company: 'Dex Labs',
    link: 'https://www.dex-labs.com/',
    desc: "Built client web and mobile apps on Dex's in-house Bubl React component library. Shipped a bike-fit web app for athletes, integrated SNYK for PCI-DSS on a payment gateway, and led the release of a Unity AR app across all three major stores - cutting APK size 30% by compressing .glb/.gltf assets.",
    date: 'Feb 2022 - Dec 2022',
    products: [
      { t: 'Ohsem AR!', h: 'https://play.google.com/store/apps/details?id=com.blindspotstudios.ohsem' },
      { t: 'VO2Max', h: 'https://vo2.dex-labs.com/' },
      { t: 'LILA+', h: '#' },
    ],
    tags: ['React', 'React Native', 'Node.js', 'Unity AR', 'C#', 'PCI-DSS', 'AWS Lambda'],
  },
  {
    name: 'Web Application Developer',
    company: 'Appasia Berhad',
    link: 'https://www.appasia.com/',
    desc: "Modernized yellowpages.my's advertiser dashboard - translated Adobe XD mockups to responsive UI, built modular Angular components for reuse, used SCSS to cut style duplication, and leaned on PHP Laravel for backend and DB migration.",
    date: 'Jul 2021 - Feb 2022',
    products: [{ t: 'yellowpages.my', h: 'https://yellowpages.my' }],
    tags: ['Angular', 'PHP', 'Laravel', 'SCSS', 'MySQL'],
  },
  {
    name: 'Junior Software Engineer',
    company: 'Kerry Network Limited',
    link: 'https://www.kerrylogistics.com/',
    desc: 'Built responsive interfaces with Angular 8+, used AWS (EC2, Lambda, S3, CloudFront, Redis), and managed Postgres/MSSQL/Oracle DBs.',
    date: 'Jul 2020 - Jul 2021',
    products: [{ t: 'Kerry WMS v3', h: '#' }],
    tags: ['Angular', 'AWS', 'PostgreSQL', 'MSSQL', 'Oracle'],
  },
];

const projects = [
  {
    name: 'khaairi.com',
    desc: 'Personal portfolio on Next.js 14, deployed to Vercel. Migrated the domain from GoDaddy to Google Domains, cutting subscription cost by 37%.',
    tags: ['Next.js 14', 'Vercel'],
    href: 'https://khaairi.com',
  },
  {
    name: 'KaruApp · Final Year Project',
    desc: 'Peer-to-peer Android rental app - list items, chat with renters, authenticate. Built on Firebase Realtime DB, Firestore, and Firebase Auth.',
    tags: ['Android', 'Firebase'],
    href: '#',
  },
];

const awards = [
  {
    name: 'Mobile Apps Ideation Competition',
    org: 'Universiti Malaya - Software Eng. Innovation Day',
    year: '2017',
    detail: '1st place - lead presenter for a student event-management app, pitched to a 4-judge panel.',
  },
  {
    name: 'ICPC · Al-Khawarizmi National Programming Comp.',
    org: 'International Collegiate Programming Contest',
    year: '2019',
    detail: 'Team competition across Klang Valley universities.',
  },
];

const stack = [
  { label: 'AI / Security', items: 'OpenRouter, Vercel AI SDK, MCP, RAG (pgvector), LLM evals, Langfuse, zero data retention (ZDR), EU data residency, Entra ID (OBO), row-level security' },
  { label: 'Frontend', items: 'React, Next.js, TypeScript, Micro Frontends, Angular 8+' },
  { label: 'Backend', items: 'C#, .NET Web API, Node.js, Go, PHP' },
  { label: 'Data', items: 'PostgreSQL, pgvector, Drizzle, MSSQL, MongoDB' },
  { label: 'Cloud / Infra', items: 'Azure, AWS, GCP, Vercel' },
];

const ArrowIcon = () => (
  <svg
    className="xp-arrow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <main className="shell" id="root">
      {/* Hero */}
      <section className="hero">
        <div className="ident">
          <div className="avatar">
            <img src="/profile-removed.webp" alt="Khairi Musa" />
          </div>
          <div>
            <h1 className="ident-name">Khairi Musa</h1>
            <div className="ident-meta">Software Engineer · Kuala Lumpur, MY</div>
          </div>
        </div>
        <div>
          <p className="lede">
            Software Engineer at <strong>K3 Advisory Group</strong>, building an internal AI assistant: a Next.js and PostgreSQL application on Azure with Entra ID authentication, Microsoft 365
            integration, RAG on pgvector, and a headless API for other internal systems. All model traffic is zero
            data retention (ZDR), with EU data residency.
          </p>
          <p className="lede">
            Before that, I was a consultant at{' '}
            <a href="https://www.theaccessgroup.com/" target="_blank" rel="noopener">
              The Access Group UK
            </a>
            . I worked directly with client teams and used AI to build fullstack web apps and custom micro frontends
            that extend the ERP system for their use cases.
          </p>
        </div>
        <div>
          <div className="hero-actions">
            <a href="/cv.pdf" className="btn primary" target="_blank" rel="noopener">
              Download CV
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
            <a href="mailto:khairimusa60@gmail.com" className="btn">
              Get in touch
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

      </section>

      {/* Work */}
      <section className="block" id="work">
        <div className="section-head">
          <h2>Work</h2>
          <span className="meta">2020 - present</span>
        </div>
        <div className="xp">
          {experiences.map((xp, i) => (
            <div key={i} className="xp-item">
              <div className="xp-date">{xp.date}</div>
              <div>
                <div className="xp-title">
                  <span>{xp.name}</span>
                  <span className="sep">·</span>
                  {xp.link === '#' ? (
                    <span className="company">{xp.company}</span>
                  ) : (
                    <a className="company" href={xp.link} target="_blank" rel="noopener">
                      {xp.company}
                      <ArrowIcon />
                    </a>
                  )}
                </div>
                <p className="xp-desc">{xp.desc}</p>
                {xp.points && (
                  <ul className="xp-points">
                    {xp.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                )}
                {xp.products.length > 0 && (
                  <div className="xp-products">
                    {xp.products.map((p, j) =>
                      p.h === '#' ? (
                        <span key={j} className="xp-product">{p.t}</span>
                      ) : (
                        <a key={j} className="xp-product" href={p.h} target="_blank" rel="noopener">
                          {p.t}
                        </a>
                      ),
                    )}
                  </div>
                )}
                <div className="xp-tags">
                  {xp.tags.map((tag, k) => (
                    <span key={k} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="block" id="projects">
        <div className="section-head">
          <h2>Side Projects</h2>
          <span className="meta">{projects.length} entries</span>
        </div>
        <div className="xp">
          {projects.map((p, i) => (
            <div key={i} className="xp-item">
              <div className="xp-date">PROJECT</div>
              <div>
                <div className="xp-title">
                  {p.href === '#' ? (
                    <span>{p.name}</span>
                  ) : (
                    <a className="company" href={p.href} target="_blank" rel="noopener" style={{ color: 'var(--fg)' }}>
                      {p.name}
                      <ArrowIcon />
                    </a>
                  )}
                </div>
                <p className="xp-desc">{p.desc}</p>
                <div className="xp-tags">
                  {p.tags.map((tag, k) => (
                    <span key={k} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="block" id="stack">
        <div className="section-head">
          <h2>Stack</h2>
          <span className="meta">2026</span>
        </div>
        <dl className="stack">
          {stack.map(row => (
            <div key={row.label} className="spec-row">
              <dt>{row.label}</dt>
              <dd>{row.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Awards */}
      <section className="block" id="awards">
        <div className="section-head">
          <h2>Recognition</h2>
          <span className="meta">A couple of nice ones</span>
        </div>
        <div className="xp">
          {awards.map((a, i) => (
            <div key={i} className="xp-item no-hover">
              <div className="xp-date">{a.year}</div>
              <div>
                <div className="xp-title">
                  <span>{a.name}</span>
                </div>
                <p className="xp-desc" style={{ marginBottom: '0.4rem' }}>
                  <span style={{ color: 'var(--fg-muted)' }}>{a.org}</span> - {a.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="block" id="contact">
        <div className="section-head">
          <h2>Contact</h2>
          <span className="meta">Open to chat</span>
        </div>
        <div className="contact">
          <a href="mailto:khairimusa60@gmail.com">
            <div className="contact-row">
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <div>
                <div className="contact-name">Email</div>
                <div className="contact-handle">khairimusa60@gmail.com</div>
              </div>
            </div>
            <span className="contact-arrow">↗</span>
          </a>
          <a href="https://github.com/khairimusa" target="_blank" rel="noopener">
            <div className="contact-row">
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.74.4-1.26.73-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.95 10.95 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.7 5.36-5.27 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.66.8.55C20.21 21.39 23.5 17.08 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                </svg>
              </span>
              <div>
                <div className="contact-name">GitHub</div>
                <div className="contact-handle">@khairimusa</div>
              </div>
            </div>
            <span className="contact-arrow">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/khairimusa/" target="_blank" rel="noopener">
            <div className="contact-row">
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-1.34-.48-2.25-1.68-2.25-.92 0-1.46.62-1.7 1.22-.09.21-.11.51-.11.81V19h-3V8h3v1.27c.4-.62 1.11-1.5 2.7-1.5 1.97 0 3.79 1.29 3.79 4.05V19z" />
                </svg>
              </span>
              <div>
                <div className="contact-name">LinkedIn</div>
                <div className="contact-handle">in/khairimusa</div>
              </div>
            </div>
            <span className="contact-arrow">↗</span>
          </a>
          <a href="https://stackoverflow.com/users/7228601/khairi" target="_blank" rel="noopener">
            <div className="contact-row">
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.36 20.13v-5.78h1.93V22H4v-7.65h1.93v5.78h11.43zM7.86 14.32l9.43 1.97.4-1.88-9.43-1.97-.4 1.88zm1.25-4.5l8.73 4.07.81-1.74-8.73-4.07-.81 1.74zm2.43-4.27l7.4 6.16 1.23-1.48-7.4-6.16-1.23 1.48zM16.4 2l-1.55 1.15 5.74 7.74L22.14 9.7 16.4 2zM7.66 18.3h9.62v-1.92H7.66v1.92z" />
                </svg>
              </span>
              <div>
                <div className="contact-name">Stack Overflow</div>
                <div className="contact-handle">u/7228601</div>
              </div>
            </div>
            <span className="contact-arrow">↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>© {year} Mohammad Khairi</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </main>
  );
}
