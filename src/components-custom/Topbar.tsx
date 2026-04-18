'use client';

import { useEffect } from 'react';

export default function Topbar() {
  useEffect(() => {
    const sections = ['work', 'projects', 'stack', 'awards', 'contact']
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const links = document.querySelectorAll<HTMLAnchorElement>('.nav-link[data-section]');

    const onScroll = () => {
      const y = window.scrollY + 120;
      let active = 'work';
      sections.forEach(s => { if (s.offsetTop <= y) active = s.id; });
      links.forEach(l => l.classList.toggle('active', l.dataset.section === active));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <header className="topbar">
      <div className="shell topbar-inner">
        <a href="#" className="brand" aria-label="Khairi home">
          <span className="brand-name">Khairi M.</span>
          <span className="brand-sep">/</span>
          <span className="brand-role">Fullstack Engineer</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {(['work', 'projects', 'stack', 'contact'] as const).map(id => (
            <a
              key={id}
              href={`#${id}`}
              className="nav-link"
              data-section={id}
              onClick={scrollTo(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a href="/cv.pdf" className="nav-link" target="_blank" rel="noopener">CV ↗</a>
        </nav>
      </div>
    </header>
  );
}
