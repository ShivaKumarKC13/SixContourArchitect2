/**
 * 6 CONTOUR ARCHITECTS — MASTER CONTROLLER
 * Single-viewport application architecture with Bauhaus minimalist aesthetics.
 * 5 Interactive 3D Architectural Collections via PageFlip Engine.
 */

import { PageFlip } from 'page-flip';
import { createIcons, icons } from 'lucide';
import confetti from 'canvas-confetti';
import { COLLECTIONS_DATA } from './collectionsData.js';

// ============================================================================
// 1. TACTILE AUDIO AMBIANCE SYNTHESIZER (Web Audio API - Offline & Zero Deps)
// ============================================================================
class TactileAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  playPaperRustle() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      // Generate subtle warm paper rustle through filtered pink noise
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.12); // 120ms
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= (1 - i / bufferSize); // fade out
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.2, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
    } catch {
      // Audio autoplay gracefully handled
    }
  }

  playSubtleClick() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(620, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {
      // Audio fallback
    }
  }

  toggle() {
    this.isMuted = !this.isMuted;
    return !this.isMuted;
  }
}

const audio = new TactileAudioEngine();

// ============================================================================
// 2. VIEW NAVIGATION CONTROLLER (Single-viewport, No body scroll)
// ============================================================================
const views = ['hero', 'about', 'works', 'contact'];
let currentView = 'hero';

const viewLabels = {
  hero: 'VIEW // 00 INDEX & SHOWCASE',
  about: 'VIEW // 01 ABOUT ATELIER',
  works: 'VIEW // 02 WORKS (PROJECT BOOK)',
  contact: 'VIEW // 03 COMMISSIONS & CONTACT'
};

// Check initial view from query param or hash immediately
const urlParams = new URLSearchParams(window.location.search);
const initialViewParam = urlParams.get('view') || window.location.hash.replace('#', '').toLowerCase();
if (views.includes(initialViewParam)) {
  currentView = initialViewParam;
}

function switchView(targetView) {
  if (!views.includes(targetView)) return;
  currentView = targetView;

  // Play subtle navigation feedback
  audio.playSubtleClick();

  // Update panels
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  const activePanel = document.getElementById(`view-${targetView}`);
  if (activePanel) {
    activePanel.classList.add('active');
  }

  // Update desktop nav
  document.querySelectorAll('.desktop-nav .nav-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === targetView);
  });

  // Update mobile nav items
  document.querySelectorAll('.mobile-nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === targetView);
  });

  // Update footer status
  const footerLabel = document.getElementById('active-view-name');
  if (footerLabel) {
    footerLabel.textContent = viewLabels[targetView] || targetView.toUpperCase();
  }

  // Update hash state
  try {
    history.replaceState(null, '', `#${targetView}`);
  } catch {}

  // Close mobile nav if open
  closeMobileNav();

  // Ensure icons are created
  try {
    createIcons({ icons });
  } catch {}

  // If entering Works view, refresh book dimensions
  if (targetView === 'works' && window.monographBook) {
    setTimeout(() => {
      try {
        if (typeof window.monographBook.update === 'function') {
          window.monographBook.update();
        }
      } catch (err) {
        console.warn('Book update notice:', err);
      }
      initBeforeAfterDimensions();
    }, 150);
  }
}

window.switchView = switchView;

// ============================================================================
// 3. MOBILE FULL-PAGE OVERLAY MENU (Column-aligned)
// ============================================================================
const mobileSheet = document.getElementById('mobile-nav-overlay');
const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
const mobileCloseBtn = document.getElementById('mobile-close-btn');

function openMobileNav() {
  if (mobileSheet) {
    mobileSheet.classList.add('open');
    mobileSheet.setAttribute('aria-hidden', 'false');
    audio.playSubtleClick();
  }
}

function closeMobileNav() {
  if (mobileSheet && mobileSheet.classList.contains('open')) {
    mobileSheet.classList.remove('open');
    mobileSheet.setAttribute('aria-hidden', 'true');
    audio.playSubtleClick();
  }
}

// ============================================================================
// 4. HERO SECTION 5-SECOND SLIDER & DYNAMIC DATA
// ============================================================================
const heroSlides = [
  {
    title: 'THE BRISE-SOLEIL VILLA',
    details: 'KYOTO, JAPAN — 640 M² RESIDENTIAL',
    coords: '35.0116° N, 135.7681° E',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85'
  },
  {
    title: 'THE ALPINE MONOLITH',
    details: 'VALS, SWITZERLAND — 820 M² RETREAT',
    coords: '46.6186° N, 9.1804° E',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85'
  },
  {
    title: 'KŌSEN CULTURAL PAVILION',
    details: 'TOKYO, JAPAN — 1,450 M² PUBLIC GALLERY',
    coords: '35.6762° N, 139.6503° E',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85'
  },
  {
    title: 'THE HORIZON COURTYARD',
    details: 'MALLORCA, SPAIN — 520 M² ATELIER',
    coords: '39.6953° N, 3.0176° E',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85'
  },
  {
    title: 'QUARRY CONTEMPORARY ARCHIVE',
    details: 'TUSCANY, ITALY — 2,100 M² ADAPTIVE REUSE',
    coords: '43.7711° N, 11.2486° E',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85'
  }
];

let heroSlideIndex = 0;
const HERO_INTERVAL_MS = 5000;
let heroTimer = null;
let heroProgressAnim = null;
let heroProgressStartTime = null;

function setHeroSlide(index) {
  heroSlideIndex = (index + heroSlides.length) % heroSlides.length;
  const slideData = heroSlides[heroSlideIndex];

  // Update DOM slides
  const slideElements = document.querySelectorAll('#hero-carousel .hero-slide');
  slideElements.forEach((el, idx) => {
    el.classList.toggle('active', idx === heroSlideIndex);
  });

  // Update left column info text
  const slideNumEl = document.getElementById('slide-num');
  const slideTitleEl = document.getElementById('slide-title');
  const slideDetailsEl = document.getElementById('slide-details');
  const scaleCoordsEl = document.getElementById('scale-coords');

  if (slideNumEl) slideNumEl.textContent = String(heroSlideIndex + 1).padStart(2, '0');
  if (slideTitleEl) slideTitleEl.textContent = slideData.title;
  if (slideDetailsEl) slideDetailsEl.textContent = slideData.details;
  if (scaleCoordsEl) scaleCoordsEl.textContent = slideData.coords;

  // Update navigation pills
  const pills = document.querySelectorAll('#slide-pills .pill');
  pills.forEach((pill, idx) => {
    pill.classList.toggle('active', idx === heroSlideIndex);
  });

  // Reset 5s interval & progress bar
  startHeroTimer();
}

function startHeroTimer() {
  if (heroTimer) clearInterval(heroTimer);
  if (heroProgressAnim) cancelAnimationFrame(heroProgressAnim);

  const progressBar = document.getElementById('slide-progress');
  if (progressBar) progressBar.style.width = '0%';

  heroProgressStartTime = performance.now();

  function updateProgress(now) {
    const elapsed = now - heroProgressStartTime;
    const progressPercent = Math.min((elapsed / HERO_INTERVAL_MS) * 100, 100);
    if (progressBar) {
      progressBar.style.width = `${progressPercent}%`;
    }

    if (elapsed < HERO_INTERVAL_MS) {
      heroProgressAnim = requestAnimationFrame(updateProgress);
    }
  }
  heroProgressAnim = requestAnimationFrame(updateProgress);

  heroTimer = setInterval(() => {
    setHeroSlide(heroSlideIndex + 1);
  }, HERO_INTERVAL_MS);
}

// ============================================================================
// 5. WORKS SECTION: 5 INTERACTIVE 3D ARCHITECTURAL BOOKS
// ============================================================================
let pageFlipInstance = null;
let currentCollectionKey = 'resort';
const TOTAL_BOOK_PAGES = 12;

// Check if a collection is specified in the URL query string
const initialCollectionParam = urlParams.get('collection');
if (initialCollectionParam && COLLECTIONS_DATA[initialCollectionParam]) {
  currentCollectionKey = initialCollectionParam;
}

/**
 * Generates the semantic HTML structure for the 12 pages of any collection.
 * Follows Bauhaus magazine editorial aesthetics, technical tables, and Before/After slider.
 */
function generateBookHTML(col) {
  return `
    <!-- PAGE 1: BESPOKE HARDCOVER COVER PAGE -->
    <div class="book-page page-cover ${col.coverClass}">
      <div class="page-content">
        <div class="cover-emboss-border">
          <div class="cover-top">
            <span>6 CONTOUR ARCHITECTS</span>
            <span class="cover-glyph-badge">${col.coverGlyph}</span>
            <span>${col.coverTag}</span>
          </div>

          <div class="cover-artwork-frame">
            <img src="${col.coverImg}" class="cover-img" alt="${col.title} Cover Monograph" />
            <div class="cover-foil-seal">
              <span>${col.coverSeal}</span>
            </div>
          </div>

          <div class="cover-footer">
            <h1 class="cover-title">${col.coverTitle}</h1>
            <div class="cover-meta">
              <span>${col.coverSub}</span>
              <span>FOLIO EDITION // LIMITED MONOGRAPH</span>
            </div>
            <div class="cover-hint">DRAG CORNER OR CLICK NEXT TO OPEN MONOGRAPH →</div>
          </div>
        </div>
      </div>
    </div>

    <!-- PAGE 2: EDITORIAL PREFACE & ARCHITECTURAL PHILOSOPHY -->
    <div class="book-page editorial-page">
      <div class="page-content">
        <div class="page-header-rule">
          <span>6 CONTOUR // MONOGRAPHS</span>
          <span class="folio-num">${col.prefaceFolio}</span>
        </div>

        <div class="preface-body">
          <h2 class="preface-heading">${col.prefaceTitle}</h2>
          <p class="preface-text">
            <span class="dropcap">${col.prefaceDropcap}</span>${col.prefaceP1}
          </p>

          <div class="preface-sketch">
            <svg viewBox="0 0 400 120" class="arch-sketch">
              ${col.sketchSvg}
            </svg>
            <span class="sketch-caption">${col.sketchCaption}</span>
          </div>

          <p class="preface-text">
            ${col.prefaceP2}
          </p>

          <div class="preface-signature">
            <span class="sig-name">${col.sigName}</span>
            <span class="sig-title">${col.sigTitle}</span>
          </div>
        </div>

        <div class="page-footer-rule">
          <span>ARCHITECTURAL THEORY</span>
          <span class="folio-num">P. 02</span>
        </div>
      </div>
    </div>

    <!-- PAGE 3: TABLE OF CONTENTS (INTERACTIVE JUMP INDEX) -->
    <div class="book-page editorial-page">
      <div class="page-content">
        <div class="page-header-rule">
          <span>INDEX OF MONOGRAPH WORKS</span>
          <span class="folio-num">TABLE OF CONTENTS</span>
        </div>

        <div class="toc-body">
          <h3 class="toc-title">${col.title}</h3>
          <div class="toc-list">
            ${col.toc.map(item => `
              <div class="toc-item" data-goto-page="${item.page}">
                <span class="toc-num">${item.num}</span>
                <div class="toc-desc">
                  <span class="toc-name">${item.name}</span>
                  <span class="toc-sub">${item.sub}</span>
                </div>
                <span class="toc-dots"></span>
                <span class="toc-target">${item.pageLabel}</span>
              </div>
            `).join('')}
          </div>

          <div class="toc-hint-box">
            <i data-lucide="compass"></i>
            <span>Click any project entry above to jump directly to its technical spread.</span>
          </div>
        </div>

        <div class="page-footer-rule">
          <span>CATALOG RECORD</span>
          <span class="folio-num">P. 03</span>
        </div>
      </div>
    </div>

    <!-- PAGE 4: PROJECT 1 — FULL BLEED VISUAL SPREAD -->
    <div class="book-page editorial-page visual-spread-page">
      <div class="page-header-rule">
        <span>${col.project1.folio} // ARCHITECTURAL PLATE</span>
        <span class="folio-num">P. 04</span>
      </div>

      <div class="spread-img-container">
        <img src="${col.project1.img}" class="spread-full-img" alt="${col.project1.title}" />
        <div class="img-badge-overlay">${col.project1.tag}</div>
      </div>

      <div class="spread-caption-bar">
        <span class="caption-label">PHOTOGRAPHY:</span>
        <span>${col.project1.photoBy}</span>
      </div>

      <div class="page-footer-rule">
        <span>${col.project1.coords}</span>
        <span class="folio-num">PLATE 1.1</span>
      </div>
    </div>

    <!-- PAGE 5: PROJECT 1 — TECTONIC DOSSIER & SPECIFICATIONS -->
    <div class="book-page editorial-page">
      <div class="page-content">
        <div class="page-header-rule">
          <span>TECTONIC DOSSIER</span>
          <span class="folio-num">P. 05</span>
        </div>

        <div class="project-dossier-body">
          <span class="project-tag-brass">${col.project1.tag}</span>
          <h3 class="project-title">${col.project1.title}</h3>
          <div class="project-location-lead">${col.project1.location}</div>

          <p class="project-narrative">
            ${col.project1.narrative}
          </p>

          <div class="project-specs-table">
            ${col.project1.specs.map(spec => `
              <div class="spec-row">
                <span class="spec-key">${spec[0]}</span>
                <span class="spec-val">${spec[1]}</span>
              </div>
            `).join('')}
          </div>

          <div class="project-client-quote">
            ${col.project1.quote}
            <span class="quote-author">${col.project1.quoteAuthor}</span>
          </div>
        </div>

        <div class="page-footer-rule">
          <span>${col.title}</span>
          <span class="folio-num">PAGE 05</span>
        </div>
      </div>
    </div>

    <!-- PAGE 6: PROJECT 2 — FULL BLEED VISUAL SPREAD -->
    <div class="book-page editorial-page visual-spread-page">
      <div class="page-header-rule">
        <span>${col.project2.folio} // ARCHITECTURAL PLATE</span>
        <span class="folio-num">P. 06</span>
      </div>

      <div class="spread-img-container">
        <img src="${col.project2.img}" class="spread-full-img" alt="${col.project2.title}" />
        <div class="img-badge-overlay">${col.project2.tag}</div>
      </div>

      <div class="spread-caption-bar">
        <span class="caption-label">PHOTOGRAPHY:</span>
        <span>${col.project2.photoBy}</span>
      </div>

      <div class="page-footer-rule">
        <span>${col.project2.coords}</span>
        <span class="folio-num">PLATE 2.1</span>
      </div>
    </div>

    <!-- PAGE 7: PROJECT 2 — TECTONIC DOSSIER & MATERIAL SPECS -->
    <div class="book-page editorial-page">
      <div class="page-content">
        <div class="page-header-rule">
          <span>TECTONIC DOSSIER</span>
          <span class="folio-num">P. 07</span>
        </div>

        <div class="project-dossier-body">
          <span class="project-tag-brass">${col.project2.tag}</span>
          <h3 class="project-title">${col.project2.title}</h3>
          <div class="project-location-lead">${col.project2.location}</div>

          <p class="project-narrative">
            ${col.project2.narrative}
          </p>

          <div class="project-specs-table">
            ${col.project2.specs.map(spec => `
              <div class="spec-row">
                <span class="spec-key">${spec[0]}</span>
                <span class="spec-val">${spec[1]}</span>
              </div>
            `).join('')}
          </div>

          <div class="materials-tasting-notes">
            ${col.project2.pills.map(pill => `<span class="note-pill">${pill}</span>`).join('')}
          </div>
        </div>

        <div class="page-footer-rule">
          <span>${col.title}</span>
          <span class="folio-num">PAGE 07</span>
        </div>
      </div>
    </div>

    <!-- PAGE 8: PROJECT 3 — FULL BLEED VISUAL SPREAD -->
    <div class="book-page editorial-page visual-spread-page">
      <div class="page-header-rule">
        <span>${col.project3.folio} // ARCHITECTURAL PLATE</span>
        <span class="folio-num">P. 08</span>
      </div>

      <div class="spread-img-container">
        <img src="${col.project3.img}" class="spread-full-img" alt="${col.project3.title}" />
        <div class="img-badge-overlay">${col.project3.tag}</div>
      </div>

      <div class="spread-caption-bar">
        <span class="caption-label">PHOTOGRAPHY:</span>
        <span>${col.project3.photoBy}</span>
      </div>

      <div class="page-footer-rule">
        <span>${col.project3.coords}</span>
        <span class="folio-num">PLATE 3.1</span>
      </div>
    </div>

    <!-- PAGE 9: PROJECT 3 — TECTONIC DOSSIER & CURATORIAL NOTE -->
    <div class="book-page editorial-page">
      <div class="page-content">
        <div class="page-header-rule">
          <span>TECTONIC DOSSIER</span>
          <span class="folio-num">P. 09</span>
        </div>

        <div class="project-dossier-body">
          <span class="project-tag-brass">${col.project3.tag}</span>
          <h3 class="project-title">${col.project3.title}</h3>
          <div class="project-location-lead">${col.project3.location}</div>

          <p class="project-narrative">
            ${col.project3.narrative}
          </p>

          <div class="project-specs-table">
            ${col.project3.specs.map(spec => `
              <div class="spec-row">
                <span class="spec-key">${spec[0]}</span>
                <span class="spec-val">${spec[1]}</span>
              </div>
            `).join('')}
          </div>

          <div class="curator-commentary">
            ${col.project3.commentary}
          </div>
        </div>

        <div class="page-footer-rule">
          <span>${col.title}</span>
          <span class="folio-num">PAGE 09</span>
        </div>
      </div>
    </div>

    <!-- PAGE 10: BEFORE & AFTER INTERACTIVE COMPARISON PLATE -->
    <div class="book-page editorial-page visual-spread-page">
      <div class="page-header-rule">
        <span>${col.beforeAfter.folio} // ${col.beforeAfter.subTitle.toUpperCase()}</span>
        <span class="folio-num">P. 10</span>
      </div>

      <!-- Before & After Interactive Element -->
      <div class="before-after-wrapper" id="ba-container">
        <!-- After Layer (Full Bleed Background) -->
        <div class="ba-image-layer ba-after">
          <img src="${col.beforeAfter.afterImg}" alt="${col.beforeAfter.afterLabel}" />
          <div class="ba-pill ba-pill-after">AFTER // ${col.beforeAfter.afterLabel}</div>
        </div>

        <!-- Before Layer (Clipped via CSS variable) -->
        <div class="ba-image-layer ba-before">
          <img src="${col.beforeAfter.beforeImg}" alt="${col.beforeAfter.beforeLabel}" />
          <div class="ba-pill ba-pill-before">BEFORE // ${col.beforeAfter.beforeLabel}</div>
        </div>

        <!-- Draggable Brass Divider Handle -->
        <div class="ba-divider">
          <div class="divider-line"></div>
          <div class="divider-handle-brass" id="ba-handle">
            <i data-lucide="move-horizontal"></i>
          </div>
          <div class="divider-line"></div>
        </div>

        <div class="ba-hint">DRAG TO COMPARE SITE TRANSFORMATION</div>
      </div>

      <div class="spread-caption-bar">
        <span class="caption-label">INTERACTIVE COMPARISON:</span>
        <span>Drag brass handle to reveal transformation</span>
      </div>

      <div class="page-footer-rule">
        <span>${col.beforeAfter.coords}</span>
        <span class="folio-num">PLATE 4.1</span>
      </div>
    </div>

    <!-- PAGE 11: BEFORE & AFTER TRANSFORMATION DOSSIER -->
    <div class="book-page editorial-page">
      <div class="page-content">
        <div class="page-header-rule">
          <span>TRANSFORMATION REPORT</span>
          <span class="folio-num">P. 11</span>
        </div>

        <div class="project-dossier-body">
          <span class="project-tag-brass">${col.beforeAfter.tag}</span>
          <h3 class="project-title">${col.beforeAfter.title}</h3>
          <div class="project-location-lead">${col.beforeAfter.location}</div>

          <p class="project-narrative">
            ${col.beforeAfter.narrative}
          </p>

          <div class="project-specs-table">
            ${col.beforeAfter.specs.map(spec => `
              <div class="spec-row">
                <span class="spec-key">${spec[0]}</span>
                <span class="spec-val">${spec[1]}</span>
              </div>
            `).join('')}
          </div>

          <div class="curator-commentary">
            ${col.beforeAfter.commentary}
          </div>
        </div>

        <div class="page-footer-rule">
          <span>${col.title}</span>
          <span class="folio-num">PAGE 11</span>
        </div>
      </div>
    </div>

    <!-- PAGE 12: BACK COVER & COLOPHON -->
    <div class="book-page page-back-cover">
      <div class="page-content">
        <div class="back-cover-border">
          <div class="back-header">
            <div class="back-brand">6 CONTOUR</div>
            <div class="back-motto">ARCHITECTURAL MONOGRAPHS // ${col.vol}</div>
          </div>

          <div class="back-monogram">
            <div class="monogram-rings">
              <span></span><span></span><span></span>
            </div>
          </div>

          <div class="back-colophon">
            <p class="colophon-p">
              Published by 6 Contour Publications, Berlin &amp; Tokyo.<br />
              Set in Bauhaus, Syne &amp; Jost on 170gsm uncoated archival stock.<br />
              ${col.colophon.edition}
            </p>

            <div class="barcode-sim">
              <div class="barcode-lines"></div>
              <span class="barcode-num">${col.colophon.isbn}</span>
            </div>
          </div>

          <div class="back-actions">
            <button class="back-nav-btn" id="btn-restart-book">
              <i data-lucide="rotate-ccw"></i>
              <span>RETURN TO COVER</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Loads a specified architectural monograph collection into the 3D book engine.
 * Safely destroys previous instance and creates a fresh PageFlip instance.
 */
function loadCollection(collectionKey, startPage = 0) {
  const col = COLLECTIONS_DATA[collectionKey];
  if (!col) return;

  currentCollectionKey = collectionKey;

  // Update shelf bar tab states
  document.querySelectorAll('.folio-shelf-bar .folio-tab').forEach(tab => {
    const isCurrent = tab.dataset.collection === collectionKey;
    tab.classList.toggle('active', isCurrent);
    tab.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
  });

  // Update top toolbar badge
  const volBadge = document.getElementById('book-vol-badge');
  if (volBadge) {
    volBadge.textContent = `${col.vol} — ${col.key.toUpperCase()}`;
  }

  // Update share modal labels & prefill text to match active collection
  const btnHardcover = document.getElementById('btn-order-hardcover');
  if (btnHardcover) {
    btnHardcover.dataset.isbn = col.colophon.isbn;
    btnHardcover.dataset.collectionTitle = col.title;
  }

  // Destroy previous PageFlip instance cleanly
  if (pageFlipInstance) {
    try {
      pageFlipInstance.destroy();
    } catch (err) {
      console.warn('PageFlip destroy warning:', err);
    }
    pageFlipInstance = null;
  }

  // Ensure root element exists inside #book-stage-area
  const stage = document.getElementById('book-stage-area');
  if (!stage) return;

  let bookEl = document.getElementById('magazine-flipbook');
  if (!bookEl) {
    bookEl = document.createElement('div');
    bookEl.id = 'magazine-flipbook';
    bookEl.className = 'flipbook-root';
    stage.appendChild(bookEl);
  }

  // Inject 12 semantic pages for the active collection
  bookEl.innerHTML = generateBookHTML(col);

  try {
    pageFlipInstance = new PageFlip(bookEl, {
      width: 500, // base page width
      height: 640, // base page height
      size: 'stretch',
      minWidth: 320,
      maxWidth: 720,
      minHeight: 420,
      maxHeight: 820,
      maxShadowOpacity: 0.35,
      showCover: true,
      mobileScrollSupport: false,
      drawShadow: true,
      flippingTime: 850,
      usePortrait: true,
      startPage: startPage,
      autoSize: true,
      useMouseEvents: true,
      swipeDistance: 25
    });

    const pageNodes = bookEl.querySelectorAll('.book-page');
    pageFlipInstance.loadFromHTML(pageNodes);
    window.monographBook = pageFlipInstance;

    // Listen to flip events
    pageFlipInstance.on('flip', (e) => {
      audio.playPaperRustle();
      updateBookToolbarStatus(e.data);
    });

    // Listen to state changes
    pageFlipInstance.on('changeState', () => {
      setTimeout(initBeforeAfterDimensions, 100);
    });

    createBookPills(TOTAL_BOOK_PAGES);
    updateBookToolbarStatus(startPage);

  } catch (err) {
    console.error('PageFlip initialization error:', err);
    initSimpleBookFallback();
  }

  // Bind interactive Table of Contents jump links
  bookEl.querySelectorAll('.toc-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetPage = parseInt(item.dataset.gotoPage, 10);
      if (!isNaN(targetPage)) {
        flipToPage(targetPage);
      }
    });
  });

  // Bind Back Cover return to cover button
  const btnRestart = document.getElementById('btn-restart-book');
  if (btnRestart) {
    btnRestart.addEventListener('click', (e) => {
      e.stopPropagation();
      flipToPage(0);
    });
  }

  // Bind Before & After interactive slider
  initBeforeAfterSlider();

  // Render Lucide SVG icons within newly injected pages
  try {
    createIcons({ icons });
  } catch (err) {
    console.warn('Lucide icon rendering warning:', err);
  }

  // Play tactile paper sound
  audio.playPaperRustle();
}

window.loadCollection = loadCollection;

function updateBookToolbarStatus(pageIndex) {
  const statusEl = document.getElementById('book-page-indicator');
  if (!statusEl) return;

  if (pageIndex === 0) {
    statusEl.textContent = 'COVER PAGE';
  } else if (pageIndex >= TOTAL_BOOK_PAGES - 1) {
    statusEl.textContent = 'EPILOGUE & COLOPHON';
  } else {
    const leftPage = pageIndex % 2 === 0 ? pageIndex : pageIndex;
    const rightPage = leftPage + 1;
    statusEl.textContent = `SPREAD // PAGES ${leftPage}-${Math.min(rightPage, TOTAL_BOOK_PAGES)}`;
  }

  // Update pills
  const pills = document.querySelectorAll('#book-nav-pills .page-scrub-pill');
  pills.forEach((p, idx) => {
    p.classList.toggle('active', idx === pageIndex);
  });
}

function createBookPills(pageCount) {
  const pillsBar = document.getElementById('book-nav-pills');
  if (!pillsBar) return;
  pillsBar.innerHTML = '';

  for (let i = 0; i < pageCount; i++) {
    const pill = document.createElement('button');
    pill.className = `page-scrub-pill ${i === 0 ? 'active' : ''}`;
    pill.title = `Jump to page ${i + 1}`;
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      flipToPage(i);
    });
    pillsBar.appendChild(pill);
  }
}

function flipToPage(pageNum) {
  if (pageFlipInstance) {
    try {
      pageFlipInstance.flip(pageNum);
      audio.playPaperRustle();
    } catch {
      // fallback
    }
  }
}

// Graceful fallback in case browser rejects WebGL/Canvas
function initSimpleBookFallback() {
  const pages = document.querySelectorAll('.book-page');
  let currentIdx = 0;

  function showSpread(idx) {
    pages.forEach((p, i) => {
      p.style.display = (i === idx || i === idx + 1) ? 'block' : 'none';
    });
    updateBookToolbarStatus(idx);
  }

  window.monographBook = {
    flipNext: () => {
      currentIdx = Math.min(currentIdx + 2, pages.length - 1);
      showSpread(currentIdx);
    },
    flipPrev: () => {
      currentIdx = Math.max(0, currentIdx - 2);
      showSpread(currentIdx);
    },
    flip: (idx) => {
      currentIdx = idx;
      showSpread(currentIdx);
    }
  };

  showSpread(0);
}

// ============================================================================
// 6. FEATURE 5: BEFORE & AFTER COMPARISON SLIDER CONTROLLER
// ============================================================================
function initBeforeAfterSlider() {
  const container = document.getElementById('ba-container');
  const handle = document.getElementById('ba-handle');
  if (!container) return;

  let isDragging = false;

  function setSliderPosition(clientX) {
    const rect = container.getBoundingClientRect();
    if (rect.width === 0) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);

    container.style.setProperty('--clip-pos', `${percent}%`);
  }

  // Prevent PageFlip page drag while dragging Before & After handle
  const stopProp = (e) => e.stopPropagation();

  container.addEventListener('pointerdown', (e) => {
    isDragging = true;
    container.setPointerCapture(e.pointerId);
    setSliderPosition(e.clientX);
    stopProp(e);
  });

  container.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    setSliderPosition(e.clientX);
    stopProp(e);
  });

  const stopDrag = (e) => {
    if (isDragging) {
      isDragging = false;
      try {
        container.releasePointerCapture(e.pointerId);
      } catch {
        // pointer capture fallback
      }
    }
  };

  container.addEventListener('pointerup', stopDrag);
  container.addEventListener('pointercancel', stopDrag);

  // Prevent drag interference from mouse and touch
  container.addEventListener('mousedown', stopProp);
  container.addEventListener('touchstart', stopProp);
}

function initBeforeAfterDimensions() {
  // CSS clip-path handles layout automatically without JS size adjustments
}

// ============================================================================
// 7. FULLSCREEN BOOK MODE
// ============================================================================
function toggleBookFullscreen() {
  const stage = document.getElementById('view-works');
  if (!stage) return;

  const maxIcon = document.querySelector('.icon-maximize');
  const minIcon = document.querySelector('.icon-minimize');

  if (!document.fullscreenElement) {
    if (stage.requestFullscreen) {
      stage.requestFullscreen();
    } else if (stage.webkitRequestFullscreen) {
      stage.webkitRequestFullscreen();
    }
    if (maxIcon) maxIcon.classList.add('hide');
    if (minIcon) minIcon.classList.remove('hide');
    showToast('Fullscreen Mode', 'Portfolio book expanded to full screen.');
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    if (maxIcon) maxIcon.classList.remove('hide');
    if (minIcon) minIcon.classList.add('hide');
  }
}

// ============================================================================
// 8. TOAST NOTIFICATION SYSTEM
// ============================================================================
let toastTimeout = null;

function showToast(title, message) {
  const toast = document.getElementById('toast-message');
  const titleEl = document.getElementById('toast-title');
  const bodyEl = document.getElementById('toast-body');

  if (!toast || !titleEl || !bodyEl) return;

  titleEl.textContent = title;
  bodyEl.textContent = message;

  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 4200);
}

// ============================================================================
// 9. SHARE & EXPORT MODAL CONTROLLER
// ============================================================================
const shareModal = document.getElementById('modal-share');

function openShareModal() {
  if (shareModal) {
    shareModal.classList.add('open');
    shareModal.setAttribute('aria-hidden', 'false');
    audio.playSubtleClick();
  }
}

function closeShareModal() {
  if (shareModal) {
    shareModal.classList.remove('open');
    shareModal.setAttribute('aria-hidden', 'true');
    audio.playSubtleClick();
  }
}

// ============================================================================
// 10. STUDIO TIME TICKER (Berlin CET)
// ============================================================================
function updateStudioClock() {
  const clockEl = document.getElementById('berlin-time');
  if (!clockEl) return;

  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Berlin',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    clockEl.textContent = `${formatter.format(now)} CET`;
  } catch {
    clockEl.textContent = '16:30 CET';
  }
}

// ============================================================================
// 11. BENTO MATERIAL SWATCH INTERACTION
// ============================================================================
function initMaterialSwatches() {
  const swatches = document.querySelectorAll('.swatch-item');
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      audio.playSubtleClick();
      const matName = swatch.querySelector('.swatch-name')?.textContent || 'Material';
      showToast('Tactile Registry', `Inspecting specification: ${matName}`);
    });
  });
}

// ============================================================================
// 12. INITIALIZATION & EVENT LISTENERS
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // If starting with specific view from query param or hash
  if (currentView !== 'hero') {
    switchView(currentView);
  }

  // Render initial Lucide SVG icons
  try {
    createIcons({ icons });
  } catch (err) {
    console.warn('Lucide icon render error:', err);
  }

  // Support URL hash routing (e.g. #about, #works, #contact)
  function handleHashChange() {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (views.includes(hash)) {
      switchView(hash);
    }
  }
  window.addEventListener('hashchange', handleHashChange);
  if (window.location.hash) {
    handleHashChange();
  }

  // Top Nav view switching
  document.querySelectorAll('.desktop-nav .nav-link').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.view;
      if (target) switchView(target);
    });
  });

  // Mobile menu trigger & close
  if (mobileMenuTrigger) {
    mobileMenuTrigger.addEventListener('click', openMobileNav);
  }
  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileNav);
  }

  // Mobile nav buttons
  document.querySelectorAll('.mobile-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.view;
      if (target) switchView(target);
    });
  });

  // Brand Logo click returns to Hero
  const brandLogo = document.getElementById('brand-logo');
  if (brandLogo) {
    brandLogo.addEventListener('click', () => switchView('hero'));
  }

  // Hero CTAs
  const btnOpenMonograph = document.getElementById('btn-open-monograph');
  if (btnOpenMonograph) {
    btnOpenMonograph.addEventListener('click', () => switchView('works'));
  }
  const btnHeroContact = document.getElementById('btn-hero-contact');
  if (btnHeroContact) {
    btnHeroContact.addEventListener('click', () => switchView('contact'));
  }

  // Hero Slider Pills
  document.querySelectorAll('#slide-pills .pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const idx = parseInt(pill.dataset.index, 10);
      if (!isNaN(idx)) setHeroSlide(idx);
    });
  });

  // Sound toggle button
  const soundBtn = document.getElementById('sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const isSoundOn = audio.toggle();
      const iconOn = soundBtn.querySelector('.icon-sound-on');
      const iconOff = soundBtn.querySelector('.icon-sound-off');
      if (iconOn && iconOff) {
        iconOn.classList.toggle('hide', !isSoundOn);
        iconOff.classList.toggle('hide', isSoundOn);
      }
      showToast('Audio Ambiance', isSoundOn ? 'Tactile acoustics enabled' : 'Acoustics muted');
    });
  }

  // Initialize the 5 Collections Folio Shelf Tabs
  document.querySelectorAll('.folio-shelf-bar .folio-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const targetCol = tab.dataset.collection;
      if (targetCol && targetCol !== currentCollectionKey) {
        loadCollection(targetCol, 0);
        showToast('Collection Switched', `Now viewing ${COLLECTIONS_DATA[targetCol].vol} — ${COLLECTIONS_DATA[targetCol].title}`);
      }
    });
  });

  // Load the initial collection into the 3D flipbook
  loadCollection(currentCollectionKey, 0);

  // Book Navigation Buttons (Toolbar)
  const btnBookNext = document.getElementById('btn-book-next');
  if (btnBookNext) {
    btnBookNext.addEventListener('click', () => {
      if (pageFlipInstance) pageFlipInstance.flipNext();
    });
  }

  const btnBookPrev = document.getElementById('btn-book-prev');
  if (btnBookPrev) {
    btnBookPrev.addEventListener('click', () => {
      if (pageFlipInstance) pageFlipInstance.flipPrev();
    });
  }

  const btnBookToc = document.getElementById('btn-book-toc');
  if (btnBookToc) {
    btnBookToc.addEventListener('click', () => flipToPage(2)); // Table of contents on page 3 (0-indexed 2)
  }

  // Fullscreen book mode
  const btnFullscreen = document.getElementById('btn-book-fullscreen');
  if (btnFullscreen) {
    btnFullscreen.addEventListener('click', toggleBookFullscreen);
  }

  // Share & Export Monograph Modal
  const btnBookShare = document.getElementById('btn-book-share');
  if (btnBookShare) {
    btnBookShare.addEventListener('click', openShareModal);
  }
  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeShareModal);
  }
  if (shareModal) {
    shareModal.addEventListener('click', (e) => {
      if (e.target === shareModal) closeShareModal();
    });
  }

  // PDF Export Action
  const btnExportPdf = document.getElementById('btn-export-pdf');
  if (btnExportPdf) {
    btnExportPdf.addEventListener('click', () => {
      closeShareModal();
      showToast('Preparing Monograph', 'Launching executive print compilation...');
      setTimeout(() => {
        window.print();
      }, 500);
    });
  }

  // Copy Presentation Link Action
  const btnCopyLink = document.getElementById('btn-copy-link');
  if (btnCopyLink) {
    btnCopyLink.addEventListener('click', async () => {
      try {
        const url = `${window.location.origin}${window.location.pathname}?collection=${currentCollectionKey}#works`;
        await navigator.clipboard.writeText(url);
        showToast('Link Copied', `Direct ${COLLECTIONS_DATA[currentCollectionKey].vol} link copied to clipboard.`);
      } catch {
        showToast('Direct Link', window.location.href);
      }
      closeShareModal();
    });
  }

  // Hardcover Folio Request Action
  const btnOrderHardcover = document.getElementById('btn-order-hardcover');
  if (btnOrderHardcover) {
    btnOrderHardcover.addEventListener('click', () => {
      const activeCol = COLLECTIONS_DATA[currentCollectionKey];
      closeShareModal();
      switchView('contact');
      const msgArea = document.getElementById('project-message');
      if (msgArea) {
        msgArea.value = `Requesting reservation for Limited Edition Monograph ${activeCol.vol} — ${activeCol.title} Hardcover Folio (${activeCol.colophon.isbn}). Please advise delivery allocation.`;
      }
      showToast('Hardcover Monograph', 'Dossier form populated. Transmit your dispatch details.');
    });
  }

  // Initialize Material Swatches
  initMaterialSwatches();

  // Contact Form Submission Handler
  const contactForm = document.getElementById('architect-inquiry-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Trigger high-end celebration confetti in bronze, ivory, and charcoal
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#ff7237', '#252A29', '#fefefd', '#ffa278']
        });
      } catch {
        // Confetti fallback
      }

      showToast(
        'Brief Transmitted',
        'Atelier Directorate has received your spatial brief. We will respond within 24 hours under NDA.'
      );
      contactForm.reset();
    });
  }

  // Keyboard navigation shortcuts
  window.addEventListener('keydown', (e) => {
    // Prevent interfering if user is filling in form inputs
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      return;
    }

    if (e.key === '1') switchView('hero');
    if (e.key === '2') switchView('about');
    if (e.key === '3') switchView('works');
    if (e.key === '4') switchView('contact');

    // Arrow keys for book flipping
    if (currentView === 'works' && pageFlipInstance) {
      if (e.key === 'ArrowRight') pageFlipInstance.flipNext();
      if (e.key === 'ArrowLeft') pageFlipInstance.flipPrev();
    }

    if (e.key === 'Escape') {
      closeMobileNav();
      closeShareModal();
    }
  });

  // Window resize handler
  window.addEventListener('resize', () => {
    initBeforeAfterDimensions();
    if (pageFlipInstance && typeof pageFlipInstance.update === 'function') {
      pageFlipInstance.update();
    }
  });

  // Start hero 5-second automatic progression
  startHeroTimer();

  // Start studio clock
  updateStudioClock();
  setInterval(updateStudioClock, 30000);
});
