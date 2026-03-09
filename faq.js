/**
 * faq.js — Working Excellence FAQ Component
 * Reads from faq-data.json (CMS), renders animated accordions
 * Usage: <div class="faq-mount" data-faq="category-key"></div>
 */

(function () {
  'use strict';

  /* ── inject styles once ── */
  const CSS = `
    .faq-block { display: flex; flex-direction: column; gap: 0; }

    .faq-item {
      border-top: 1px solid var(--border);
      overflow: hidden;
    }
    .faq-item:last-child { border-bottom: 1px solid var(--border); }

    .faq-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background: transparent;
      border: none;
      padding: 22px 0;
      cursor: pointer;
      gap: 20px;
      text-align: left;
    }

    .faq-question {
      font-family: 'Roboto', sans-serif;
      font-size: .97rem;
      font-weight: 600;
      color: var(--white);
      line-height: 1.45;
      transition: color .2s;
      flex: 1;
    }

    .faq-trigger:hover .faq-question,
    .faq-item.open .faq-question { color: var(--orange); }

    .faq-icon {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1.5px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: border-color .2s, background .2s, transform .35s cubic-bezier(.4,0,.2,1);
      position: relative;
    }
    .faq-icon::before,
    .faq-icon::after {
      content: '';
      position: absolute;
      background: var(--grey-300);
      border-radius: 2px;
      transition: background .2s, transform .35s cubic-bezier(.4,0,.2,1), opacity .25s;
    }
    .faq-icon::before { width: 12px; height: 1.5px; }
    .faq-icon::after  { width: 1.5px; height: 12px; }

    .faq-trigger:hover .faq-icon {
      border-color: var(--orange);
    }
    .faq-trigger:hover .faq-icon::before,
    .faq-trigger:hover .faq-icon::after { background: var(--orange); }

    .faq-item.open .faq-icon {
      border-color: var(--orange);
      background: rgba(241,143,10,.1);
      transform: rotate(45deg);
    }
    .faq-item.open .faq-icon::before,
    .faq-item.open .faq-icon::after { background: var(--orange); }

    .faq-body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows .38s cubic-bezier(.4,0,.2,1);
    }
    .faq-item.open .faq-body {
      grid-template-rows: 1fr;
    }
    .faq-body-inner {
      overflow: hidden;
    }
    .faq-answer {
      padding-bottom: 22px;
      font-size: .88rem;
      color: var(--grey-300);
      line-height: 1.75;
      transform: translateY(-6px);
      opacity: 0;
      transition: opacity .3s ease .05s, transform .3s ease .05s;
    }
    .faq-item.open .faq-answer {
      opacity: 1;
      transform: translateY(0);
    }

    /* number badge option */
    .faq-num {
      font-family: 'DM Mono', monospace;
      font-size: .6rem;
      color: var(--orange);
      letter-spacing: .1em;
      min-width: 24px;
    }

    /* entry animation */
    @keyframes faqSlideIn {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .faq-item { animation: faqSlideIn .4s ease both; }
  `;

  function injectStyles() {
    if (document.getElementById('wex-faq-styles')) return;
    const s = document.createElement('style');
    s.id = 'wex-faq-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ── build single FAQ item ── */
  function buildItem(q, a, index) {
    const item = document.createElement('div');
    item.className = 'faq-item fade-up';
    item.style.animationDelay = `${index * 0.06}s`;

    item.innerHTML = `
      <button class="faq-trigger" aria-expanded="false" aria-controls="faq-body-${index}">
        <span class="faq-num">${String(index + 1).padStart(2, '0')}</span>
        <span class="faq-question">${q}</span>
        <span class="faq-icon" aria-hidden="true"></span>
      </button>
      <div class="faq-body" id="faq-body-${index}" role="region">
        <div class="faq-body-inner">
          <div class="faq-answer">${a}</div>
        </div>
      </div>
    `;

    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      /* close all siblings */
      item.closest('.faq-block').querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    return item;
  }

  /* ── render into a mount point ── */
  function renderFAQ(mount, data) {
    const category = mount.dataset.faq;
    const section = data[category];
    if (!section) {
      console.warn(`[FAQ] No data found for category: "${category}"`);
      return;
    }

    const block = document.createElement('div');
    block.className = 'faq-block';
    section.items.forEach((item, i) => {
      block.appendChild(buildItem(item.q, item.a, i));
    });

    mount.innerHTML = '';
    mount.appendChild(block);
  }

  /* ── main init ── */
  function init() {
    const mounts = document.querySelectorAll('.faq-mount[data-faq]');
    if (!mounts.length) return;

    injectStyles();

    /* determine base path for JSON */
    const isInSubdir = window.location.pathname.includes('/aws/');
    const base = isInSubdir ? '../' : './';

    fetch(`${base}faq-data.json?v=${Date.now()}`)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(data => {
        mounts.forEach(mount => renderFAQ(mount, data));
      })
      .catch(err => {
        console.error('[FAQ] Failed to load faq-data.json:', err);
        /* graceful fallback — keep mount empty rather than breaking page */
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
