/* global React */
const { useState, useEffect, useMemo, useRef } = React;

/* =========================== HOME =========================== */
function HomePage({ lang }) {
  const t = window.T[lang];
  useReveal();

  const services = [
    { href: '#/arabuluculuk', n: '01', title: lang === 'tr' ? 'Arabuluculuk' : 'Mediation', desc: lang === 'tr' ? 'Mahkeme öncesi hızlı, gizli ve bağlayıcı çözümler.' : 'Fast, confidential, binding pre-court resolutions.' },
    { href: '#/avukatlik', n: '02', title: lang === 'tr' ? 'Avukatlık' : 'Legal Counsel', desc: lang === 'tr' ? 'Bireysel ve kurumsal müvekkiller için kapsamlı dava ve danışmanlık.' : 'Litigation and advisory for individuals and corporates.' },
    { href: '#/avukatlik', n: '03', title: lang === 'tr' ? 'Ticaret & İş Hukuku' : 'Commercial & Employment', desc: lang === 'tr' ? 'Sözleşme yönetimi, iş uyuşmazlıkları, ticari alacak takibi.' : 'Contracts, employment disputes, commercial collection.' },
    { href: '#/avukatlik', n: '04', title: lang === 'tr' ? 'Aile Hukuku' : 'Family Law', desc: lang === 'tr' ? 'Boşanma, velayet, nafaka ve mal rejimi davalarında temsil.' : 'Divorce, custody, alimony and marital regime cases.' },
    { href: '#/uygulamalar', n: '05', title: lang === 'tr' ? 'Hukuk Teknolojileri' : 'Legal Technology', desc: lang === 'tr' ? 'Arabulucu Ofis, Hesap ve SMM araçlarıyla dijital iş akışları.' : 'Digital workflows via Mediator Office, Accounting & SMM.' },
    { href: '#/avukatlik', n: '06', title: lang === 'tr' ? 'Tüketici Uyuşmazlıkları' : 'Consumer Disputes', desc: lang === 'tr' ? 'Tüketici hakemleri ve mahkemeleri süreçleri.' : 'Consumer arbitration and court processes.' },
  ];

  const proc = [
    [t.process_eyebrow ? '01' : '01', lang === 'tr' ? 'İlk Görüşme' : 'Intake', lang === 'tr' ? 'Durumunuzu değerlendirir, yol haritasını birlikte belirleriz.' : 'Assess the matter, agree on a plan.'],
    ['02', lang === 'tr' ? 'Strateji' : 'Strategy', lang === 'tr' ? 'Hukuki ve ticari riskleri analiz ederek size özel stratejiyi oluştururuz.' : 'Analyse legal and commercial risks; tailor a strategy.'],
    ['03', lang === 'tr' ? 'Çözüm' : 'Resolve', lang === 'tr' ? 'Arabuluculuk veya dava sürecinde sonuç odaklı şekilde sizi temsil ederiz.' : 'Represent you with focus on outcome — mediation or court.'],
    ['04', lang === 'tr' ? 'Takip' : 'Follow-through', lang === 'tr' ? 'Çözüm sonrası uygulama ve takip süreçlerinde de yanınızdayız.' : 'Stay with you through implementation and follow-up.'],
  ];

  return (
    <div className="page-root">
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-meta">
            <div className="meta-item reveal">
              <span>{t.hero_meta_a}</span>
              <span className="v">{t.hero_meta_a_v}</span>
            </div>
            <div className="meta-item meta-center reveal" data-delay="1">
              <span>{t.hero_meta_b}</span>
              <span className="v">{t.hero_meta_b_v}</span>
            </div>
            <div className="meta-item meta-right reveal" data-delay="2">
              <span>{t.hero_meta_c}</span>
              <span className="v">{t.hero_meta_c_v}</span>
            </div>
          </div>

          <h1 className="h-display hero-name">
            <span className="row reveal">{t.hero_first}</span>
            <span className="row reveal" data-delay="1">
              <span className="ital">Yalçın</span>
            </span>
          </h1>

          <div className="hero-foot">
            <p className="lede reveal" data-delay="2">
              {t.hero_lede}
            </p>
            <div className="reveal" data-delay="3">
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>
                {t.hero_eyebrow}
              </div>
              <p className="font-serif" style={{ fontSize: 22, lineHeight: 1.3, marginTop: 10, fontWeight: 350, letterSpacing: '-0.015em' }}>
                {t.hero_phrase_pre} <em style={{ color: 'var(--accent)' }}>{t.hero_phrase_em}</em>{t.hero_phrase_post}
              </p>
              <div className="hero-cta">
                <a href="#/iletisim" className="btn btn-primary">{t.hero_cta_primary} <span className="arrow">→</span></a>
                <a href="#/avukatlik" className="btn btn-secondary">{t.hero_cta_secondary}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end', marginBottom: 56 }}>
            <div className="reveal">
              <div className="eyebrow">{t.services_eyebrow}</div>
              <h2 className="h-display reveal" style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: 18 }}>
                {t.services_title}
              </h2>
            </div>
            <p className="reveal" data-delay="1" style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.6, alignSelf: 'end' }}>
              {t.services_sub}
            </p>
          </div>
          <div className="editorial-list reveal" data-delay="2">
            {services.map((s) => (
              <a key={s.n} className="row" href={s.href}>
                <span className="num">{s.n} /</span>
                <span className="ttl">{s.title}</span>
                <span className="desc">{s.desc}</span>
                <span className="arrow-r">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section" style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', background: 'var(--bg-soft)' }}>
        <div className="wrap" style={{ maxWidth: 1080 }}>
          <div className="eyebrow reveal">— {lang === 'tr' ? 'Yaklaşım' : 'Approach'}</div>
          <p className="pull-quote reveal" data-delay="1" style={{ marginTop: 24 }}>
            {t.quote}
          </p>
          <div className="reveal" data-delay="2" style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ width: 48, height: 1, background: 'var(--ink-mute)' }} />
            <span className="font-mono" style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>{t.quote_attr}</span>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="wrap">
          <div style={{ marginBottom: 56 }} className="reveal">
            <div className="eyebrow">{t.process_eyebrow}</div>
            <h2 className="h-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: 18, maxWidth: 720 }}>
              {t.process_title}
            </h2>
          </div>
          <div className="process-grid reveal" data-delay="1">
            {proc.map(([n, ttl, d]) => (
              <div key={n} className="step">
                <span className="n">{n}</span>
                <h4>{ttl}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="reveal" style={{
            border: '1px solid var(--rule)',
            padding: '80px 56px',
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 56,
            alignItems: 'center',
          }}>
            <div>
              <div className="eyebrow">{t.cta_eyebrow}</div>
              <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginTop: 18 }}>{t.cta_title}</h2>
              <p className="text-soft" style={{ marginTop: 16, fontSize: 16 }}>{t.cta_sub}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
              <a href="#/iletisim" className="btn btn-primary">{t.cta_primary} <span className="arrow">→</span></a>
              <a href={"mailto:" + window.SITE.contact.email} className="btn btn-secondary">{window.SITE.contact.email}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================== ÖZGEÇMİŞ =========================== */
function CVPage({ lang }) {
  const t = window.T[lang];
  useReveal();
  const [active, setActive] = useState(0);
  const sectionRefs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          const i = parseInt(e.target.dataset.tocIdx, 10);
          if (!isNaN(i)) setActive(i);
        }
      });
    }, { rootMargin: '-30% 0px -55% 0px' });
    sectionRefs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, [lang]);
  const setRef = (i) => (el) => { sectionRefs.current[i] = el; };

  return (
    <div className="page-root">
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="wrap">
          <div className="eyebrow reveal">{t.cv_eyebrow}</div>
          <h1 className="h-display reveal" data-delay="1" style={{ fontSize: 'clamp(56px, 8vw, 120px)', marginTop: 28 }}>
            {t.cv_title}
          </h1>
          <p className="lede reveal" data-delay="2" style={{ marginTop: 24 }}>{t.cv_subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr 280px', gap: 64, alignItems: 'start' }}>
            {/* TOC */}
            <aside className="toc" style={{ display: window.innerWidth < 1100 ? 'none' : 'block' }}>
              <h5>{lang === 'tr' ? 'İçindekiler' : 'Contents'}</h5>
              <ol>
                {t.cv_toc.map((s, i) => (
                  <li key={i} className={active === i ? 'active' : ''} onClick={() => sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                    {String(i + 1).padStart(2, '0')} · {s}
                  </li>
                ))}
              </ol>
            </aside>

            {/* MAIN */}
            <div>
              {/* About */}
              <div ref={setRef(0)} data-toc-idx="0" className="reveal" style={{ marginBottom: 80 }}>
                <div className="eyebrow">01 · {t.cv_toc[0]}</div>
                <h2 className="h-display" style={{ fontSize: 36, marginTop: 16, marginBottom: 24 }}>{t.cv_about_h}</h2>
                {t.cv_about.map((p, i) => (
                  <p key={i} style={{ fontSize: 16.5, lineHeight: 1.7, color: 'var(--ink-soft)', marginTop: i === 0 ? 0 : 14, fontFamily: '"Fraunces", serif', fontWeight: 350 }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Education */}
              <div ref={setRef(1)} data-toc-idx="1" className="reveal" style={{ marginBottom: 80 }}>
                <div className="eyebrow">02 · {t.cv_toc[1]}</div>
                <h2 className="h-display" style={{ fontSize: 36, marginTop: 16, marginBottom: 24 }}>{t.cv_education_h}</h2>
                <div style={{ borderTop: '1px solid var(--rule)' }}>
                  {t.cv_education.map(([school, prog, year], i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: 24, padding: '18px 0', borderBottom: '1px solid var(--rule)', alignItems: 'baseline' }}>
                      <span className="font-mono" style={{ fontSize: 12, color: 'var(--ink-mute)' }}>{year}</span>
                      <div>
                        <div style={{ fontFamily: '"Fraunces", serif', fontSize: 19, fontWeight: 400, letterSpacing: '-0.01em' }}>{school}</div>
                        <div style={{ fontSize: 14, color: 'var(--ink-soft)', marginTop: 2 }}>{prog}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memberships */}
              <div ref={setRef(2)} data-toc-idx="2" className="reveal" style={{ marginBottom: 80 }}>
                <div className="eyebrow">03 · {t.cv_toc[2]}</div>
                <h2 className="h-display" style={{ fontSize: 36, marginTop: 16, marginBottom: 24 }}>{t.cv_memberships_h}</h2>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--rule)' }}>
                  {t.cv_memberships.map((m, i) => (
                    <li key={i} style={{ padding: '16px 0', borderBottom: '1px solid var(--rule)', fontFamily: '"Fraunces", serif', fontSize: 18, fontWeight: 350 }}>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certs */}
              <div ref={setRef(3)} data-toc-idx="3" className="reveal" style={{ marginBottom: 80 }}>
                <div className="eyebrow">04 · {t.cv_toc[3]}</div>
                <h2 className="h-display" style={{ fontSize: 36, marginTop: 16, marginBottom: 24 }}>{t.cv_certs_h}</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {t.cv_certs.map((c) => <span key={c} className="chip">{c}</span>)}
                </div>
              </div>

              {/* Specs */}
              <div ref={setRef(4)} data-toc-idx="4" className="reveal" style={{ marginBottom: 80 }}>
                <div className="eyebrow">05 · {t.cv_toc[4]}</div>
                <h2 className="h-display" style={{ fontSize: 36, marginTop: 16, marginBottom: 24 }}>{t.cv_specs_h}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid var(--rule)' }}>
                  {t.cv_specs.map((s, i) => (
                    <div key={s} style={{ padding: '14px 0', borderBottom: '1px solid var(--rule)', fontSize: 16, color: 'var(--ink-soft)', fontFamily: '"Fraunces", serif', fontWeight: 350 }}>
                      <span className="font-mono" style={{ fontSize: 11, color: 'var(--ink-mute)', marginRight: 12 }}>{String(i + 1).padStart(2, '0')}</span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pubs */}
              <div ref={setRef(5)} data-toc-idx="5" className="reveal">
                <div className="eyebrow">06 · {t.cv_toc[5]}</div>
                <h2 className="h-display" style={{ fontSize: 36, marginTop: 16, marginBottom: 24 }}>{t.cv_pubs_h}</h2>
                <div style={{ borderTop: '1px solid var(--rule)' }}>
                  {t.cv_pubs.map(([title, where, year], i) => (
                    <article key={i} style={{ padding: '24px 0', borderBottom: '1px solid var(--rule)' }}>
                      <div className="font-mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '.1em' }}>{String(i + 1).padStart(2, '0')} · {year}</div>
                      <h3 style={{ fontFamily: '"Fraunces", serif', fontWeight: 350, fontSize: 22, marginTop: 8, marginBottom: 6, lineHeight: 1.3, letterSpacing: '-0.01em' }}>“{title}”</h3>
                      <div style={{ fontSize: 14, color: 'var(--ink-soft)', fontStyle: 'italic' }}>{where}</div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Side card */}
            <aside style={{ position: 'sticky', top: 100 }}>
              <div className="ph-image" style={{ aspectRatio: '3/4' }}>
                <span>{lang === 'tr' ? 'Avukat Portresi' : 'Attorney Portrait'}</span>
              </div>
              <div style={{ marginTop: 20, fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                <div className="font-mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 8 }}>{lang === 'tr' ? 'Diller' : 'Languages'}</div>
                <div>{lang === 'tr' ? 'Türkçe · Anadil' : 'Turkish · Native'}</div>
                <div>{lang === 'tr' ? 'İngilizce · İleri' : 'English · Fluent'}</div>
                <div>{lang === 'tr' ? 'Almanca · Başlangıç' : 'German · Basic'}</div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage, CVPage });
