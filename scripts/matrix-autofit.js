/**
 * Universal Signage Font Sizing Engine
 * matrix-autofit.js
 */
(function(window) {
  function fitElement(el, options = {}) {
    if (!el || !el.parentElement) return;
    const maxRem = options.maxRem || 5.8;
    const minRem = options.minRem || 2.2;
    const step = options.step || 0.15;
    const parent = el.parentElement;
    const maxW = parent.clientWidth * (options.widthRatio || 0.94);
    const maxH = parseFloat(getComputedStyle(el).maxHeight) || (parent.clientHeight * 0.45);

    let currentRem = maxRem;
    el.style.fontSize = `${currentRem}rem`;

    let iterations = 0;
    while (currentRem > minRem && iterations < 35) {
      iterations++;
      if (el.scrollWidth <= maxW && el.scrollHeight <= maxH) break;
      currentRem -= step;
      el.style.fontSize = `${currentRem}rem`;
    }
  }

  function fitContainer(containerEl) {
    if (!containerEl) return;
    const h1s = containerEl.querySelectorAll('.premium-title, .special-title, .social-title, .advert-title, .slide-title, .slide h1, .fit-h1');
    h1s.forEach(el => fitElement(el, { maxRem: 5.6, minRem: 2.8 }));

    const h2s = containerEl.querySelectorAll('.premium-subtitle, .special-subtitle, .social-handle, .advert-subtitle, .slide-subtitle, .slide h2, .fit-h2');
    h2s.forEach(el => fitElement(el, { maxRem: 3.2, minRem: 1.6 }));

    const cardTitles = containerEl.querySelectorAll('.card-title, .drink-name, .timeline-time');
    cardTitles.forEach(el => fitElement(el, { maxRem: 2.4, minRem: 1.4, widthRatio: 0.96 }));
  }

  window.MatrixAutoFit = { fitElement, fitContainer };
})(typeof window !== 'undefined' ? window : this);
