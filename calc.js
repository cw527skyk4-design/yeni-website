// Calculator engine — port of hesaplamaMotoru.ts
window.CALC = (function () {
  const STOPAJ = 0.2;

  function tl(n) {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
  }
  function pct(o) {
    return new Intl.NumberFormat('tr-TR', { style: 'percent', minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(o);
  }

  function saatlik(t, n) {
    const T = {
      ticari:       [1500, 3200, 3300, 3400],
      isciIsveren:  [1130, 2460, 2560, 2660],
      kiraOrtaklik: [1170, 2540, 2640, 2740],
      aile:         [1000, 2200, 2300, 2400],
      tuketici:     [1000, 2200, 2300, 2400],
      diger:        [1000, 2200, 2300, 2400],
    }[t];
    if (n === 2) return T[0];
    if (n >= 3 && n <= 5) return T[1];
    if (n >= 6 && n <= 10) return T[2];
    return T[3];
  }

  function nisbi(tutar) {
    const k = [
      { l: 600000, o: 0.06,  L: '%6' },
      { l: 960000, o: 0.05,  L: '%5' },
      { l: 1560000, o: 0.04, L: '%4' },
      { l: 3120000, o: 0.03, L: '%3' },
      { l: 9360000, o: 0.02, L: '%2' },
      { l: 12480000, o: 0.015, L: '%1,5' },
      { l: 24960000, o: 0.01, L: '%1' },
      { l: Infinity, o: 0.005, L: '%0,5' },
    ];
    let total = 0, kalan = tutar; const detay = []; let first = true;
    for (const r of k) {
      if (kalan <= 0) break;
      const t = Math.min(kalan, r.l);
      const u = t * r.o;
      total += u;
      const pre = first ? 'İlk' : 'Sonraki';
      detay.push(r.l === Infinity ? `• Kalan ${tl(t)} için ${r.L} = ${tl(u)}` : `• ${pre} ${tl(t)} için ${r.L} = ${tl(u)}`);
      kalan -= t; first = false;
    }
    return { toplam: total, detay: detay.join('\n') };
  }

  function savcilik(g) {
    const s = saatlik(g.uyusmazlikTuru, g.tarafSayisi);
    const ikiSaat = s * 2;
    const brut = g.tarafSayisi === 2 ? ikiSaat * 2 : ikiSaat;
    const kdv = brut / 6;
    const netKdvHaric = brut * 5 / 6;
    const stopaj = netKdvHaric * STOPAJ;
    const net = brut - stopaj;
    const aciklama = g.tarafSayisi === 2
      ? `Anlaşma olmadığı için savcılığa her iki taraf için 2 saatlik ücret makbuzu kesilecek (${tl(s * 2)} × 2 taraf = ${tl(brut)}). KDV dahil brüt tutardır. İçinde ${tl(kdv)} KDV ve ${tl(stopaj)} stopaj vardır.`
      : `Anlaşma yoksa taraf sayısına bakılmaksızın tarifede yazılı 2 saatlik ücret ödenir (${tl(s)} × 2 = ${tl(brut)}). KDV dahil brüt tutardır. İçinde ${tl(kdv)} KDV ve ${tl(stopaj)} stopaj vardır.`;
    return {
      brut, stopaj, net,
      paylar: [{ ad: 'Savcılık Makbuzu', brut, kdv, stopaj, net, oran: STOPAJ }],
      detay: { saatlik: s, saat: 2, nisbi: null, aciklama, kademe: null },
    };
  }

  function senaryolar(brut, n, t) {
    if (n <= 0) return [];
    const kdv = brut / 6;
    const netKdvHaric = brut * 5 / 6;
    const sadeceSahis = t === 'aile';
    const arr = [];
    if (!sadeceSahis) {
      const tStop = netKdvHaric * STOPAJ;
      arr.push({ ad: 'Tek Taraf Ödeyecek — Tüzel Kişi', brut, kdv, stopaj: tStop, net: brut - tStop, oran: STOPAJ });
    }
    arr.push({ ad: 'Tek Taraf Ödeyecek — Gerçek Kişi', brut, kdv, stopaj: 0, net: brut, oran: 0 });
    const eP = brut / n, eK = kdv / n, eN = netKdvHaric / n, eS = eN * STOPAJ;
    if (!sadeceSahis) arr.push({ ad: 'Eşit Ödeme — Tüzel Kişi (Her Biri)', brut: eP, kdv: eK, stopaj: eS, net: eP - eS, oran: STOPAJ });
    arr.push({ ad: 'Eşit Ödeme — Gerçek Kişi (Her Biri)', brut: eP, kdv: eK, stopaj: 0, net: eP, oran: 0 });
    return arr;
  }

  function anlasma(g) {
    let brut, oran = null, aciklama = '', kademe = null;
    const asgari = g.uyusmazlikTuru === 'ticari' ? 13000 : 9000;
    if (g.anlasmaTutari > 0) {
      const r = nisbi(g.anlasmaTutari);
      brut = r.toplam; kademe = r.detay; oran = g.anlasmaTutari > 0 ? brut / g.anlasmaTutari : 0;
      if (brut < asgari) { aciklama = `Hesaplanan ücret asgari ücretin altında olduğu için asgari ücret (${tl(asgari)}) uygulandı.`; brut = asgari; kademe = null; }
      else aciklama = `Anlaşma tutarı (${tl(g.anlasmaTutari)}) üzerinden kademeli nisbi ücret hesaplandı:`;
    } else {
      brut = asgari;
      aciklama = `Para ile değerlendirilemeyen uyuşmazlık için asgari ücret (${tl(asgari)}) uygulandı.`;
    }
    if (g.uyusmazlikTuru === 'aile') aciklama += '\n\nNot: Aile hukuku uyuşmazlıklarında sadece gerçek kişiler taraf olabilir.';
    const paylar = senaryolar(brut, g.tarafSayisi, g.uyusmazlikTuru);
    const tStop = paylar.reduce((a, p) => a + p.stopaj, 0);
    const tNet  = paylar.reduce((a, p) => a + p.net, 0);
    return { brut, stopaj: tStop, net: tNet, paylar, detay: { saatlik: null, saat: null, nisbi: oran, aciklama, kademe } };
  }

  function tukSatici(brut, aciklama, kademe, oran) {
    const kdv = brut / 6, netKdvHaric = brut * 5 / 6, stop = netKdvHaric * STOPAJ;
    const paylar = [
      { ad: 'Satıcı/Sağlayıcı (Tüzel — Stopajlı)', brut, kdv, stopaj: stop, net: brut - stop, oran: STOPAJ },
      { ad: 'Satıcı/Sağlayıcı (Gerçek — Stopajsız)', brut, kdv, stopaj: 0, net: brut, oran: 0 },
    ];
    const a = aciklama + `\n\nTüketici özel durumu:\n• Ödeme: Satıcı/Sağlayıcı tamamını ödeyecek\n• Toplam ücret: ${tl(brut)}`;
    return { brut, stopaj: stop, net: brut, paylar, detay: { saatlik: null, saat: null, nisbi: oran, aciklama: a, kademe } };
  }

  function tukEsit(g, brut, aciklama, kademe, oran) {
    const total = g.saticiSayisi + g.tuketiciSayisi;
    if (total <= 0 || g.saticiSayisi <= 0 || g.tuketiciSayisi <= 0)
      return { brut, stopaj: 0, net: brut, paylar: [], detay: { saatlik: null, saat: null, nisbi: oran, aciklama: 'Hata: Geçersiz taraf sayısı', kademe: null } };
    const s = saatlik('tuketici', total);
    const ikiSaat = s * 2;
    const savUcret = total === 2 ? ikiSaat : ikiSaat / 2;
    const tarafBasi = brut / total;
    const sToplam = tarafBasi * g.saticiSayisi;
    const tToplam = tarafBasi * g.tuketiciSayisi;
    const tBakiye = tToplam - savUcret;
    const tBakiyeHer = tBakiye > 0 ? tBakiye / g.tuketiciSayisi : 0;
    const sHer = sToplam / g.saticiSayisi;
    const paylar = [];
    const sKdv = sHer / 6, sNK = sHer * 5 / 6, sStop = sNK * STOPAJ;
    paylar.push({ ad: 'Satıcı/Sağlayıcı (Tüzel — Her Biri)', brut: sHer, kdv: sKdv, stopaj: sStop, net: sHer - sStop, oran: STOPAJ });
    paylar.push({ ad: 'Satıcı/Sağlayıcı (Gerçek — Her Biri)', brut: sHer, kdv: sKdv, stopaj: 0, net: sHer, oran: 0 });
    const svKdv = savUcret / 6, svNK = savUcret * 5 / 6, svStop = svNK * STOPAJ;
    paylar.push({ ad: 'Tüketiciler (Savcılık Makbuzu — Tümü)', brut: savUcret, kdv: svKdv, stopaj: svStop, net: savUcret - svStop, oran: STOPAJ });
    if (tBakiyeHer > 0) {
      const bK = tBakiyeHer / 6, bNK = tBakiyeHer * 5 / 6, bS = bNK * STOPAJ;
      paylar.push({ ad: 'Tüketici Bakiye (Tüzel — Her Biri)', brut: tBakiyeHer, kdv: bK, stopaj: bS, net: tBakiyeHer - bS, oran: STOPAJ });
      paylar.push({ ad: 'Tüketici Bakiye (Gerçek — Her Biri)', brut: tBakiyeHer, kdv: bK, stopaj: 0, net: tBakiyeHer, oran: 0 });
    }
    const tStop2 = paylar.reduce((a, p) => a + p.stopaj, 0);
    const tNet2  = paylar.reduce((a, p) => a + p.net, 0);
    let a = aciklama;
    a += '\n\nTüketici özel durumu:\n';
    a += '• Ödeme: Eşit ödenecek\n';
    a += `• Toplam taraf: ${total} (${g.saticiSayisi} satıcı + ${g.tuketiciSayisi} tüketici)\n`;
    a += `• Taraf başına: ${tl(tarafBasi)}\n`;
    a += `• Her satıcı: ${tl(sHer)}\n`;
    a += `• Savcılık tüm tüketiciler için: ${tl(savUcret)}`;
    if (tBakiye > 0) a += `\n• Tüketici bakiye toplamı: ${tl(tBakiye)} (her biri ${tl(tBakiyeHer)})`;
    return { brut, stopaj: tStop2, net: tNet2, paylar, detay: { saatlik: s, saat: 2, nisbi: oran, aciklama: a, kademe } };
  }

  function tukAnlasma(g) {
    let brut, oran = null, aciklama = '', kademe = null;
    if (g.anlasmaTutari > 0) {
      const r = nisbi(g.anlasmaTutari);
      brut = r.toplam; kademe = r.detay; oran = brut / g.anlasmaTutari;
      if (brut < 9000) { aciklama = 'Hesaplanan ücret asgari ücretin altında olduğu için asgari ücret (₺9.000,00) uygulandı.'; brut = 9000; kademe = null; }
      else aciklama = `Anlaşma tutarı (${tl(g.anlasmaTutari)}) üzerinden kademeli nisbi ücret hesaplandı:`;
    } else {
      brut = 9000;
      aciklama = 'Para ile değerlendirilemeyen uyuşmazlık için asgari ücret uygulandı.';
    }
    return g.tuketiciOdemeTipi === 'saticiOdeyecek'
      ? tukSatici(brut, aciklama, kademe, oran)
      : tukEsit(g, brut, aciklama, kademe, oran);
  }

  function hesapla(g) {
    if (!g.anlasmaVar) return savcilik(g);
    if (g.uyusmazlikTuru === 'tuketici') return tukAnlasma(g);
    return anlasma(g);
  }

  return { hesapla, tl, pct };
})();
