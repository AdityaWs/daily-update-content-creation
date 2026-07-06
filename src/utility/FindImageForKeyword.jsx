/**
 * findImageForKeyword.js
 * -----------------------
 * Utility murni (bukan komponen React) untuk mencari 1 URL gambar dari
 * Wikipedia, fallback ke Wikimedia Commons kalau tidak ketemu.
 * Dipisah dari komponen tampilan supaya bisa dipakai ulang di mana saja
 * (deck viewer ini, atau proyek lain).
 */

export function firstKeyword(raw) {
  if (!raw || typeof raw !== 'string') return raw;
  return raw.includes(',') ? raw.split(',')[0].trim() : raw.trim();
}

export async function findImageForKeyword(keyword, lang = 'en') {
  if (!keyword) return null;

  try {
    const searchUrl = `https://${lang}.wikipedia.org/w/api.php?` + new URLSearchParams({
      action: 'query', list: 'search', srsearch: keyword, format: 'json', origin: '*', srlimit: '1',
    });
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();
    const title = searchData?.query?.search?.[0]?.title;

    if (title) {
      const imageUrl = `https://${lang}.wikipedia.org/w/api.php?` + new URLSearchParams({
        action: 'query', titles: title, prop: 'pageimages', format: 'json', origin: '*', pithumbsize: '1000',
      });
      const imgRes = await fetch(imageUrl);
      const imgData = await imgRes.json();
      const pages = imgData?.query?.pages || {};
      const page = Object.values(pages)[0];
      if (page?.thumbnail?.source) return page.thumbnail.source;
    }
  } catch (_) {}

  try {
    const url = `https://commons.wikimedia.org/w/api.php?` + new URLSearchParams({
      action: 'query', list: 'search', srsearch: `${keyword} filetype:bitmap`,
      srnamespace: '6', format: 'json', origin: '*', srlimit: '1',
    });
    const res = await fetch(url);
    const data = await res.json();
    const titles = (data?.query?.search || []).map((r) => r.title);
    if (titles.length === 0) return null;

    const infoUrl = `https://commons.wikimedia.org/w/api.php?` + new URLSearchParams({
      action: 'query', titles: titles.join('|'), prop: 'imageinfo', iiprop: 'url', format: 'json', origin: '*',
    });
    const infoRes = await fetch(infoUrl);
    const infoData = await infoRes.json();
    const pages = infoData?.query?.pages || {};
    const first = Object.values(pages)[0];
    return first?.imageinfo?.[0]?.url || null;
  } catch (_) {
    return null;
  }
}