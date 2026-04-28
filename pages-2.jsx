/* global React */
const { useState, useEffect, useMemo } = React;

/* =========================== ARABULUCULUK =========================== */
function MediationPage({ lang }) {
  const t = window.T[lang];
  useReveal();
  return (
    <div className="page-root">
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow reveal">{t.med_eyebrow}</div>
          <h1 className="h-display reveal" data-delay="1" style={{ fontSize: 'clamp(64px, 10vw, 160px)', marginTop: 28 }}>
            {t.med_title}
          </h1>
          <div className="hero-foot" style={{ marginTop: 56 }}>
            <p className="lede reveal" data-delay="2">{t.med_lede}</p>
            <div className="reveal" data-delay="3">
              <a href="#/iletisim" className="btn btn-primary">{lang === 'tr' ? 'Görüşme talep et' : 'Request session'} <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid-3">
            {t.med_pillars.map(([k, d, badge], i) => (
              <div key={k} className="reveal" data-delay={i} style={{ borderTop: '1px solid var(--ink)', paddingTop: 24 }}>
                <div className="font-mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '.14em' }}>{badge}</div>
                <h3 className="h-display" style={{ fontSize: 48, marginTop: 16 }}>{k}</h3>
                <p className="text-soft" style={{ fontSize: 15, marginTop: 12, lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="wrap">
          <div style={{ marginBottom: 56 }} className="reveal">
            <div className="eyebrow">{t.med_fields_eyebrow}</div>
            <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginTop: 18, maxWidth: 720 }}>{t.med_fields_title}</h2>
          </div>
          <div className="editorial-list reveal" data-delay="1">
            {t.med_fields.map(([k, d], i) => (
              <div key={k} className="row">
                <span className="num">{String(i + 1).padStart(2, '0')} /</span>
                <span className="ttl">{k}</span>
                <span className="desc">{d}</span>
                <span />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ marginBottom: 48 }} className="reveal">
            <div className="eyebrow">{t.med_proc_eyebrow}</div>
            <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginTop: 18 }}>{t.med_proc_title}</h2>
          </div>
          <div className="process-grid reveal" data-delay="1">
            {t.med_proc.map(([ttl, d], i) => (
              <div key={ttl} className="step">
                <span className="n">0{i + 1}</span>
                <h4>{ttl}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================== AVUKATLIK =========================== */
function LawPage({ lang }) {
  const t = window.T[lang];
  useReveal();
  return (
    <div className="page-root">
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow reveal">{t.law_eyebrow}</div>
          <h1 className="h-display reveal" data-delay="1" style={{ fontSize: 'clamp(64px, 10vw, 160px)', marginTop: 28 }}>
            {t.law_title}
          </h1>
          <div className="hero-foot" style={{ marginTop: 56 }}>
            <p className="lede reveal" data-delay="2">{t.law_lede}</p>
            <div className="reveal" data-delay="3">
              <a href="#/iletisim" className="btn btn-primary">{lang === 'tr' ? 'Randevu al' : 'Book consultation'} <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ marginBottom: 48 }} className="reveal">
            <div className="eyebrow">{lang === 'tr' ? 'Uzmanlık' : 'Practice'}</div>
            <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginTop: 18 }}>{lang === 'tr' ? 'Çalışma alanları' : 'Practice areas'}</h2>
          </div>
          <div className="editorial-list reveal" data-delay="1">
            {t.law_practices.map(([k, d], i) => (
              <div key={k} className="row">
                <span className="num">{String(i + 1).padStart(2, '0')} /</span>
                <span className="ttl">{k}</span>
                <span className="desc">{d}</span>
                <span />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="wrap">
          <div className="grid-2">
            <div className="reveal">
              <div className="eyebrow">{t.law_why_eyebrow}</div>
              <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginTop: 18 }}>{t.law_why_title}</h2>
              <p className="text-soft" style={{ fontSize: 16, marginTop: 24, lineHeight: 1.65 }}>{t.law_why_text}</p>
            </div>
            <div className="reveal" data-delay="1">
              <div style={{ borderTop: '1px solid var(--rule)' }}>
                {t.law_why_pts.map(([k, d], i) => (
                  <div key={k} style={{ padding: '20px 0', borderBottom: '1px solid var(--rule)' }}>
                    <div className="font-mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '.14em' }}>0{i + 1}</div>
                    <h4 style={{ fontFamily: '"Fraunces", serif', fontWeight: 350, fontSize: 22, marginTop: 8, marginBottom: 6, letterSpacing: '-0.015em' }}>{k}</h4>
                    <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================== CALCULATOR =========================== */
function CalcPage({ lang }) {
  const t = window.T[lang];
  useReveal();
  const [tip, setTip] = useState('ticari');
  const [tar, setTar] = useState(2);
  const [anlVar, setAnlVar] = useState(false);
  const [tutar, setTutar] = useState('');
  const [tukOdeme, setTukOdeme] = useState('esitOdenecek');
  const [tukSay, setTukSay] = useState(1);
  const [satSay, setSatSay] = useState(1);
  const [sonuc, setSonuc] = useState(null);

  const tukOzelGoster = anlVar && tip === 'tuketici';

  function compute() {
    const g = {
      uyusmazlikTuru: tip,
      tarafSayisi: tar,
      anlasmaVar: anlVar,
      anlasmaTutari: parseFloat((tutar || '').replace(/[^\d.,]/g, '').replace(',', '.')) || 0,
      tuketiciOdemeTipi: tukOdeme,
      tuketiciSayisi: tukSay,
      saticiSayisi: satSay,
    };
    setSonuc(window.CALC.hesapla(g));
  }
  function reset() {
    setTip('ticari'); setTar(2); setAnlVar(false); setTutar(''); setTukOdeme('esitOdenecek'); setTukSay(1); setSatSay(1); setSonuc(null);
  }

  return (
    <div className="page-root">
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow reveal">{t.calc_eyebrow}</div>
          <h1 className="h-display reveal" data-delay="1" style={{ fontSize: 'clamp(48px, 7vw, 104px)', marginTop: 28 }}>
            {t.calc_title}
          </h1>
          <p className="lede reveal" data-delay="2" style={{ marginTop: 28, maxWidth: 640 }}>{t.calc_lede}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="calc-grid">
            <div>
              <div className="calc-block">
                <h3>{t.calc_dispute}</h3>
                <div className="option-grid cols-2">
                  {t.dispute_types.map(([id, lbl]) => (
                    <button key={id} className={"option" + (tip === id ? ' selected' : '')} onClick={() => setTip(id)}>
                      <span className="dot" />{lbl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="calc-block">
                <h3>{t.calc_parties}</h3>
                <div className="option-grid cols-4">
                  {t.parties.map(([lbl, v]) => (
                    <button key={v} className={"option" + (tar === v ? ' selected' : '')} onClick={() => setTar(v)}>
                      <span className="dot" />{lbl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="calc-block">
                <h3>{t.calc_agree}</h3>
                <div className="option-grid cols-2">
                  <button className={"option" + (!anlVar ? ' selected' : '')} onClick={() => setAnlVar(false)}><span className="dot" />{t.calc_no_agree}</button>
                  <button className={"option" + (anlVar ? ' selected' : '')} onClick={() => setAnlVar(true)}><span className="dot" />{t.calc_yes_agree}</button>
                </div>
                {anlVar && (
                  <div className="field" style={{ marginTop: 24 }}>
                    <label>{t.calc_amount}</label>
                    <input type="text" inputMode="decimal" value={tutar} onChange={(e) => setTutar(e.target.value)} placeholder="250.000" />
                    <div className="hint">{t.calc_amount_hint}</div>
                  </div>
                )}
              </div>

              {tukOzelGoster && (
                <div className="calc-block">
                  <h3>{t.calc_consumer}</h3>
                  <div className="option-grid cols-2">
                    <button className={"option" + (tukOdeme === 'esitOdenecek' ? ' selected' : '')} onClick={() => setTukOdeme('esitOdenecek')}><span className="dot" />{t.calc_equal}</button>
                    <button className={"option" + (tukOdeme === 'saticiOdeyecek' ? ' selected' : '')} onClick={() => setTukOdeme('saticiOdeyecek')}><span className="dot" />{t.calc_seller}</button>
                  </div>
                  {tukOdeme === 'esitOdenecek' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 20 }}>
                      <div className="field" style={{ marginBottom: 0 }}>
                        <label>{t.calc_seller_count}</label>
                        <input type="number" min={1} value={satSay} onChange={(e) => setSatSay(Math.max(1, parseInt(e.target.value) || 1))} />
                      </div>
                      <div className="field" style={{ marginBottom: 0 }}>
                        <label>{t.calc_consumer_count}</label>
                        <input type="number" min={1} value={tukSay} onChange={(e) => setTukSay(Math.max(1, parseInt(e.target.value) || 1))} />
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
                <button className="btn btn-primary" onClick={compute}>{t.calc_compute} <span className="arrow">→</span></button>
                <button className="btn btn-secondary" onClick={reset}>{t.calc_reset}</button>
              </div>
            </div>

            <div style={{ position: 'sticky', top: 100 }}>
              {sonuc ? (
                <div className="result-card">
                  <div className="head">
                    <div className="label">{t.calc_brut}</div>
                    <div className="amt">{window.CALC.tl(sonuc.brut)}</div>
                    {sonuc.detay.nisbi !== null && sonuc.detay.nisbi > 0 && (
                      <div className="sub">{t.calc_avg_rate} · {window.CALC.pct(sonuc.detay.nisbi)}</div>
                    )}
                  </div>
                  <div className="scenarios">
                    <div style={{ padding: '20px 0 8px' }}>
                      <div className="font-mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '.16em', textTransform: 'uppercase' }}>{t.calc_scenarios}</div>
                    </div>
                    {sonuc.paylar.map((p, i) => (
                      <div key={i} className="scenario">
                        <div className="name">{p.ad}</div>
                        <div className="grid">
                          <span>{t.calc_brut_l}</span><span className="v">{window.CALC.tl(p.brut)}</span>
                          <span>{t.calc_kdv_l}</span><span className="v">{window.CALC.tl(p.kdv)}</span>
                          <span>{t.calc_stopaj_l}</span><span className="v">{window.CALC.tl(p.stopaj)}</span>
                          <span>{t.calc_net_l}</span><span className="v net">{window.CALC.tl(p.net)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="explain">
                    <div className="heading">{t.calc_explain}</div>
                    {sonuc.detay.aciklama}
                    {sonuc.detay.kademe && (<>
                      <div className="heading">{t.calc_kademe}</div>
                      {sonuc.detay.kademe}
                    </>)}
                  </div>
                  <div style={{ padding: 20, fontSize: 11, color: 'var(--ink-mute)', borderTop: '1px solid var(--rule)', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '.04em' }}>{t.calc_disclaimer}</div>
                </div>
              ) : (
                <div className="result-empty">{t.calc_empty}</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================== APPS =========================== */
function AppsPage({ lang }) {
  const t = window.T[lang];
  useReveal();
  return (
    <div className="page-root">
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow reveal">{t.apps_eyebrow}</div>
          <h1 className="h-display reveal" data-delay="1" style={{ fontSize: 'clamp(64px, 10vw, 160px)', marginTop: 28 }}>{t.apps_title}</h1>
          <p className="lede reveal" data-delay="2" style={{ marginTop: 28, maxWidth: 720 }}>{t.apps_lede}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)' }}>
            {t.apps_list.map(([slug, ttl, d, tag], i) => (
              <a key={slug} href="#/iletisim" className="reveal" data-delay={i} style={{ background: 'var(--bg)', padding: 36, display: 'flex', flexDirection: 'column', minHeight: 360, transition: 'background 240ms' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-soft)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg)'}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="chip">{tag}</span>
                  <span style={{ color: 'var(--ink-mute)' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div style={{ flex: 1 }} />
                <h3 className="h-display" style={{ fontSize: 32 }}>{ttl}</h3>
                <p className="text-soft" style={{ fontSize: 14, marginTop: 12, lineHeight: 1.6 }}>{d}</p>
                <div style={{ marginTop: 20, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>{lang === 'tr' ? 'İncele →' : 'Explore →'}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--rule)' }}>
        <div className="wrap" style={{ maxWidth: 800, textAlign: 'center' }}>
          <h2 className="h-display reveal" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>{t.apps_cta}</h2>
          <p className="text-soft reveal" data-delay="1" style={{ fontSize: 16, marginTop: 24 }}>{t.apps_cta_sub}</p>
          <div className="reveal" data-delay="2" style={{ marginTop: 28 }}>
            <a href="#/iletisim" className="btn btn-primary">{lang === 'tr' ? 'İletişime geç' : 'Get in touch'} <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================== BLOG =========================== */
function BlogPage({ lang }) {
  const t = window.T[lang];
  useReveal();
  const [filter, setFilter] = useState('all');
  const cats = useMemo(() => Array.from(new Set(t.blog_posts.map((p) => p[4]))), [lang]);
  const filtered = filter === 'all' ? t.blog_posts : t.blog_posts.filter((p) => p[4] === filter);

  return (
    <div className="page-root">
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow reveal">{t.blog_eyebrow}</div>
          <h1 className="h-display reveal" data-delay="1" style={{ fontSize: 'clamp(64px, 10vw, 160px)', marginTop: 28 }}>{t.blog_title}</h1>
          <p className="lede reveal" data-delay="2" style={{ marginTop: 28, maxWidth: 720 }}>{t.blog_lede}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="reveal" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', borderBottom: '1px solid var(--rule)', paddingBottom: 24, marginBottom: 0 }}>
            <button className={"chip" + (filter === 'all' ? '' : '')} onClick={() => setFilter('all')} style={{ cursor: 'pointer', background: filter === 'all' ? 'var(--ink)' : 'transparent', color: filter === 'all' ? 'var(--bg)' : 'var(--ink-soft)', borderColor: filter === 'all' ? 'var(--ink)' : 'var(--rule)' }}>{lang === 'tr' ? 'Tümü' : 'All'}</button>
            {cats.map((c) => (
              <button key={c} className="chip" onClick={() => setFilter(c)} style={{ cursor: 'pointer', background: filter === c ? 'var(--ink)' : 'transparent', color: filter === c ? 'var(--bg)' : 'var(--ink-soft)', borderColor: filter === c ? 'var(--ink)' : 'var(--rule)' }}>{c}</button>
            ))}
          </div>

          <div className="editorial-list" style={{ borderTop: 0 }}>
            {filtered.map(([slug, title, ex, date, cat, read]) => (
              <a key={slug} className="row" href="#/blog">
                <span className="num">{new Date(date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', { year: 'numeric', month: 'short' })}</span>
                <span className="ttl">{title}</span>
                <span className="desc">{ex}<br /><span className="font-mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '.1em', marginTop: 6, display: 'inline-block' }}>{cat} · {read}</span></span>
                <span className="arrow-r">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================== CONTACT =========================== */
function ContactPage({ lang, showToast }) {
  const t = window.T[lang];
  useReveal();
  const [f, setF] = useState({ ad: '', telefon: '', eposta: '', konu: t.ctc_subjects[0], mesaj: '' });
  const [errors, setErrors] = useState({});
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));

  function validate() {
    const e = {};
    if (!f.ad.trim()) e.ad = t.ctc_required;
    if (!f.telefon.trim()) e.telefon = t.ctc_required;
    else if (!/^[\d\s+()\-]{7,}$/.test(f.telefon)) e.telefon = t.ctc_invalid_phone;
    if (!f.eposta.trim()) e.eposta = t.ctc_required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.eposta)) e.eposta = t.ctc_invalid_email;
    if (!f.mesaj.trim()) e.mesaj = t.ctc_required;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    showToast(t.ctc_sent);
    setF({ ad: '', telefon: '', eposta: '', konu: t.ctc_subjects[0], mesaj: '' });
    setErrors({});
  }

  return (
    <div className="page-root">
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow reveal">{t.ctc_eyebrow}</div>
          <h1 className="h-display reveal" data-delay="1" style={{ fontSize: 'clamp(64px, 10vw, 160px)', marginTop: 28 }}>{t.ctc_title}</h1>
          <p className="lede reveal" data-delay="2" style={{ marginTop: 28, maxWidth: 640 }}>{t.ctc_lede}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80 }}>
            <aside className="reveal">
              {[
                [t.ctc_office, window.SITE.contact.address[lang]],
                [t.ctc_email, window.SITE.contact.email, "mailto:" + window.SITE.contact.email],
                [t.ctc_ig, window.SITE.contact.instagram, "https://instagram.com/avselimyalcin"],
                [t.ctc_hours, window.SITE.contact.hours[lang]],
              ].map(([k, v, href], i) => (
                <div key={k} style={{ padding: '24px 0', borderTop: i === 0 ? '1px solid var(--ink)' : '1px solid var(--rule)', borderBottom: i === 3 ? '1px solid var(--rule)' : 'none' }}>
                  <div className="font-mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '.16em', textTransform: 'uppercase' }}>{k}</div>
                  {href
                    ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ display: 'block', marginTop: 8, fontFamily: '"Fraunces", serif', fontSize: 18, fontWeight: 350, whiteSpace: 'pre-line' }}>{v}</a>
                    : <div style={{ marginTop: 8, fontFamily: '"Fraunces", serif', fontSize: 18, fontWeight: 350, whiteSpace: 'pre-line' }}>{v}</div>}
                </div>
              ))}
              <div className="ph-image" style={{ aspectRatio: '4/3', marginTop: 32 }}>
                <span>{lang === 'tr' ? 'Ofis Görseli' : 'Office Photo'}</span>
              </div>
            </aside>

            <form className="reveal" data-delay="1" onSubmit={submit} noValidate>
              <h2 className="h-display" style={{ fontSize: 36, marginBottom: 12 }}>{t.ctc_form_h}</h2>
              <p className="text-soft" style={{ fontSize: 14, marginBottom: 36 }}>{t.ctc_form_sub}</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                <div className={"field" + (errors.ad ? ' has-error' : '')}>
                  <label>{t.ctc_name}</label>
                  <input value={f.ad} onChange={set('ad')} />
                  {errors.ad && <div className="err">{errors.ad}</div>}
                </div>
                <div className={"field" + (errors.telefon ? ' has-error' : '')}>
                  <label>{t.ctc_phone}</label>
                  <input value={f.telefon} onChange={set('telefon')} />
                  {errors.telefon && <div className="err">{errors.telefon}</div>}
                </div>
              </div>

              <div className={"field" + (errors.eposta ? ' has-error' : '')}>
                <label>{t.ctc_emailf}</label>
                <input type="email" value={f.eposta} onChange={set('eposta')} />
                {errors.eposta && <div className="err">{errors.eposta}</div>}
              </div>

              <div className="field">
                <label>{t.ctc_subject}</label>
                <select value={f.konu} onChange={set('konu')}>
                  {t.ctc_subjects.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div className={"field" + (errors.mesaj ? ' has-error' : '')}>
                <label>{t.ctc_message}</label>
                <textarea rows={5} value={f.mesaj} onChange={set('mesaj')} />
                {errors.mesaj && <div className="err">{errors.mesaj}</div>}
              </div>

              <div style={{ marginTop: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                <span className="font-mono" style={{ fontSize: 11, letterSpacing: '.1em', color: 'var(--ink-mute)' }}>{lang === 'tr' ? 'KVKK kapsamında işlenir' : 'Processed under data-protection law'}</span>
                <button className="btn btn-primary" type="submit">{t.ctc_submit} <span className="arrow">→</span></button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { MediationPage, LawPage, CalcPage, AppsPage, BlogPage, ContactPage });
