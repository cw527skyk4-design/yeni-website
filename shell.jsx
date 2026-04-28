/* global React, ReactDOM */
const { useState, useEffect, useRef, useMemo } = React;

/* ---------- Routing & i18n hooks ---------- */
function useHashRoute() {
  const get = () => {
    const h = (window.location.hash || '#/').replace(/^#/, '') || '/';
    return h;
  };
  const [path, setPath] = useState(get);
  useEffect(() => {
    const on = () => { setPath(get()); window.scrollTo({ top: 0, behavior: 'instant' }); };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return path;
}

function useLang() {
  const [lang, setLang] = useState(() => localStorage.getItem('sy.lang') || 'tr');
  useEffect(() => { localStorage.setItem('sy.lang', lang); document.documentElement.lang = lang; }, [lang]);
  return [lang, setLang];
}

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    document.querySelectorAll('.reveal:not(.in)').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

function useScrolled() {
  const [s, setS] = useState(false);
  useEffect(() => {
    const on = () => setS(window.scrollY > 8);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return s;
}

/* ---------- Theme ---------- */
const THEME_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "ivory",
  "mode": "light"
}/*EDITMODE-END*/;

function applyTheme(t, m) {
  document.documentElement.setAttribute('data-theme', t);
  document.documentElement.setAttribute('data-mode', m);
}

/* ---------- Header ---------- */
function Header({ lang, setLang, theme, mode, setTheme, setMode }) {
  const path = useHashRoute();
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [path]);
  const t = window.T[lang];
  const navItems = window.NAV;

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="wrap">
        <a href="#/" className="brand" aria-label="Selim Yalçın">
          <span className="brand-mark">SY</span>
          <span className="brand-stack">
            <span className="brand-name">Selim Yalçın</span>
            <span className="brand-tag">{lang === 'tr' ? 'Avukat · Arabulucu' : 'Attorney · Mediator'}</span>
          </span>
        </a>

        <ul className="nav-list">
          {navItems.map((n) => {
            const href = '#' + n.path;
            const isActive = ('/' + (path.replace(/^\//, '').split('/')[0])) === n.path || (n.path === '/' && (path === '/' || path === ''));
            return (
              <li key={n.id}>
                <a href={href} className={isActive ? 'active' : ''}>
                  {lang === 'tr' ? n.labelTR : n.labelEN}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="header-tools">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button className={lang === 'tr' ? 'active' : ''} onClick={() => setLang('tr')}>TR</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <button className="icon-btn" aria-label="Theme" onClick={() => {
            const next = mode === 'light' ? 'dark' : 'light';
            setMode(next);
          }}>
            {mode === 'dark'
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.5A9 9 0 1 1 11.5 3a7 7 0 0 0 9.5 9.5z"/></svg>
            }
          </button>
          <a href="#/iletisim" className="btn btn-primary" style={{ marginLeft: 6 }}>
            {t.appointment} <span className="arrow">→</span>
          </a>
          <button className="icon-btn menu-toggle" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round"/></svg>
            }
          </button>
        </div>
      </div>

      <div className={"mobile-nav" + (open ? " open" : "")}>
        <ul>
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={'#' + n.path}
                 className={('/' + (path.replace(/^\//, '').split('/')[0])) === n.path ? 'active' : ''}>
                {lang === 'tr' ? n.labelTR : n.labelEN}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

/* ---------- Footer ---------- */
function Footer({ lang }) {
  const t = window.T[lang];
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="grid">
          <div>
            <a href="#/" className="brand" style={{ marginBottom: 16 }}>
              <span className="brand-mark">SY</span>
              <span className="brand-stack">
                <span className="brand-name">Selim Yalçın</span>
                <span className="brand-tag">{lang === 'tr' ? 'Avukat · Arabulucu' : 'Attorney · Mediator'}</span>
              </span>
            </a>
            <p className="text-soft" style={{ fontSize: 14, maxWidth: 320, marginTop: 16 }}>
              {lang === 'tr' ? 'Avukatlık ve Arabuluculuk hizmetleri. Güven ve uzmanlık.' : 'Attorney & Mediation services. Trust and expertise.'}
            </p>
          </div>
          <div>
            <h4>{t.foot_h_services}</h4>
            <ul>
              <li><a href="#/arabuluculuk">{lang === 'tr' ? 'Arabuluculuk' : 'Mediation'}</a></li>
              <li><a href="#/avukatlik">{lang === 'tr' ? 'Avukatlık' : 'Legal counsel'}</a></li>
              <li><a href="#/ucret-hesaplama">{lang === 'tr' ? 'Ücret Hesaplama' : 'Fee calculator'}</a></li>
              <li><a href="#/uygulamalar">{lang === 'tr' ? 'Uygulamalar' : 'Applications'}</a></li>
            </ul>
          </div>
          <div>
            <h4>{t.foot_h_firm}</h4>
            <ul>
              <li><a href="#/ozgecmis">{lang === 'tr' ? 'Özgeçmiş' : 'Profile'}</a></li>
              <li><a href="#/blog">{lang === 'tr' ? 'Yazılar' : 'Notes'}</a></li>
              <li><a href="#/iletisim">{lang === 'tr' ? 'İletişim' : 'Contact'}</a></li>
            </ul>
          </div>
          <div>
            <h4>{t.foot_h_contact}</h4>
            <ul>
              <li style={{ whiteSpace: 'pre-line' }}>{window.SITE.contact.address[lang]}</li>
              <li><a href={"mailto:" + window.SITE.contact.email}>{window.SITE.contact.email}</a></li>
              <li><a href="https://instagram.com/avselimyalcin" target="_blank" rel="noreferrer">{window.SITE.contact.instagram}</a></li>
            </ul>
          </div>
        </div>
        <div className="colophon">
          <span>© {new Date().getFullYear()} · Selim Yalçın · {t.foot_rights}</span>
          <span>{t.foot_baro}</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Toast ---------- */
function Toast({ msg, onDone }) {
  useEffect(() => {
    if (!msg) return;
    const id = setTimeout(onDone, 3500);
    return () => clearTimeout(id);
  }, [msg, onDone]);
  return <div className={"toast" + (msg ? " show" : "")}>{msg || '\u00a0'}</div>;
}

Object.assign(window, { useHashRoute, useLang, useReveal, useScrolled, applyTheme, THEME_DEFAULTS, Header, Footer, Toast });
