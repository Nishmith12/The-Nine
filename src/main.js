/**
 * main.js — Thenine LLP Core Application & Scrollytelling Router
 * Bridges Lenis smooth scroll, GSAP ScrollTrigger, Three.js 3D visualizer,
 * and page transitions across Investors, Careers, and Services.
 */

import './style.css';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initScene, updateSceneScroll } from './robotScene.js';
import { renderInvestorsPage, renderCareersPage, renderServicesPage } from './pages.js';

gsap.registerPlugin(ScrollTrigger);

let lenis;
let currentPage = 'investors';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const pages = {
  investors: renderInvestorsPage,
  careers: renderCareersPage,
  services: renderServicesPage,
};

// ─── 01. Smooth Scroll Setup (Lenis + GSAP) ───────────
function initSmoothScroll() {
  if (prefersReducedMotion) return;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

// ─── 02. Router & Page Transitions ────────────────────
function getPageFromHash() {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash && pages[hash]) return hash;
  return 'investors';
}

function navigateTo(pageName, shouldScroll = true) {
  if (!pages[pageName]) pageName = 'investors';
  currentPage = pageName;
  window.location.hash = pageName;

  // Kill existing ScrollTriggers before rendering new page
  ScrollTrigger.getAll().forEach((st) => st.kill());

  const app = document.getElementById('app');
  app.innerHTML = pages[pageName]();

  // Scroll to top
  if (shouldScroll) {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }

  // Update active navbar link
  document.querySelectorAll('.nav__link').forEach((link) => {
    link.classList.toggle('active', link.dataset.page === pageName);
  });

  // Re-bind modal openers & in-page anchors
  bindPageEvents();

  // Initialize page-specific animations
  requestAnimationFrame(() => {
    initHeroAnimations();
    initGeneralScrollReveals();

    if (pageName === 'services') {
      initServicesPinnedProcess();
    } else if (pageName === 'investors') {
      updateSceneScroll({ activeServiceIndex: 0, activeServiceMix: 0 });
    } else if (pageName === 'careers') {
      updateSceneScroll({ activeServiceIndex: 1, activeServiceMix: 0 });
    }

    ScrollTrigger.refresh();
  });
}

// ─── 03. Navigation Events & Mobile Menu ─────────────
function initNavigation() {
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }, { passive: true });

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Hash change
  window.addEventListener('hashchange', () => {
    const newPage = getPageFromHash();
    if (newPage !== currentPage) {
      navigateTo(newPage);
    }
  });
}

function closeMobileMenu() {
  const menu = document.getElementById('nav-links');
  const toggle = document.getElementById('nav-toggle');
  if (menu) menu.classList.remove('open');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

// ─── 04. Bind Page Click Events ──────────────────────
function bindPageEvents() {
  // Page switch links
  document.querySelectorAll('[data-page]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      navigateTo(page);
      closeMobileMenu();
    });
  });

  // Modal openers
  document.querySelectorAll('[data-open-modal="contact"]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openContactModal(btn.dataset.prefill, btn.dataset.role);
    });
  });

  // In-page smooth hash links (e.g. #thesis, #open-roles)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href !== '#' && !pages[href.replace('#', '')]) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          if (lenis) {
            lenis.scrollTo(target, { offset: -70, duration: 1.2 });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
          closeMobileMenu();
        }
      }
    });
  });
}

// ─── 05. Hero Animations ─────────────────────────────
function initHeroAnimations() {
  if (prefersReducedMotion) {
    gsap.set('.hero__line, .hero__description, .hero__actions, .hero__meta', { opacity: 1, y: 0 });
    return;
  }

  // Initial setup
  gsap.set('.hero__line', { yPercent: 120, opacity: 0 });
  gsap.set('.hero__description', { y: 30, opacity: 0 });
  gsap.set('.hero__actions', { scale: 0.94, opacity: 0 });
  gsap.set('.hero__meta-col', { y: 20, opacity: 0 });
  gsap.set('.hero__scroll-indicator', { opacity: 0 });
  gsap.set('#three-canvas-container', { scale: 0.88, opacity: 0 });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.to('#three-canvas-container', { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' }, 0.1)
    .to('.hero__line', { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.12 }, 0.25)
    .to('.hero__description', { y: 0, opacity: 1, duration: 0.85 }, '-=0.6')
    .to('.hero__actions', { scale: 1, opacity: 1, duration: 0.8 }, '-=0.5')
    .to('.hero__meta-col', { y: 0, opacity: 1, stagger: 0.1, duration: 0.7 }, '-=0.4')
    .to('.hero__scroll-indicator', { opacity: 1, duration: 0.8 }, '-=0.3');

  // Hero scroll scrub
  ScrollTrigger.create({
    trigger: '.page-hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    onUpdate: (self) => {
      const p = self.progress;
      gsap.set('.hero__content', {
        y: -90 * p,
        opacity: Math.max(1 - p * 1.2, 0.05),
      });

      updateSceneScroll({
        heroProgress: p,
      });
    },
  });
}

// ─── 06. General Section Reveals (Headings, Paragraphs, Cards) ──
function initGeneralScrollReveals() {
  if (prefersReducedMotion) return;

  // Headings: y: 60 -> 0, opacity: 0 -> 1
  gsap.utils.toArray('.reveal-heading').forEach((heading) => {
    gsap.fromTo(
      heading,
      { y: 55, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.95,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Paragraphs / leads: y: 30 -> 0, opacity: 0 -> 1
  gsap.utils.toArray('.reveal-body').forEach((lead) => {
    gsap.fromTo(
      lead,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: lead,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Cards with sequential stagger 0.12–0.18s
  const cardSelectors = [
    '.approach-steps-grid .reveal-card',
    '.roadmap-timeline .reveal-card',
    '.team-grid .reveal-card',
    '.why-early-grid .reveal-card',
    '.roles-stack .reveal-card',
    '.audience-grid .reveal-card',
    '.models-grid .reveal-card',
    '.thesis-callout',
    '.fundraise-panel',
  ];

  cardSelectors.forEach((selector) => {
    const items = gsap.utils.toArray(selector);
    if (items.length > 0) {
      gsap.fromTo(
        items,
        { y: 45, scale: 0.96, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: items[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  });

  // Cinematic CTA Radial Glow Expansion
  const ctaGlow = document.querySelector('.cta-radial-glow');
  const ctaSection = document.querySelector('.cinematic-cta-section');
  if (ctaGlow && ctaSection) {
    ScrollTrigger.create({
      trigger: ctaSection,
      start: 'top 80%',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        const p = self.progress;
        gsap.set(ctaGlow, {
          scale: 0.7 + p * 0.7,
          opacity: 0.35 + p * 0.5,
        });
      },
    });
  }
}

// ─── 07. Services Pinned Process (The Core Requirement) ──
function initServicesPinnedProcess() {
  const section = document.getElementById('services-process');
  const viewport = document.getElementById('services-pin');
  const cards = document.querySelectorAll('.service-card');
  const tabs = document.querySelectorAll('.progress-tab');
  const progressLine = document.getElementById('services-progress-line');
  const hudBadge = document.getElementById('service-hud-badge');

  const stageBadges = [
    '01 // IDEA & FEASIBILITY',
    '02 // PROTOTYPE BUILD',
    '03 // TESTING & ITERATION',
    '04 // IP FILING',
  ];

  if (!section || !viewport || cards.length === 0) return;

  if (prefersReducedMotion) {
    cards.forEach((c) => c.classList.add('active'));
    return;
  }

  // Pinned GSAP ScrollTrigger
  ScrollTrigger.create({
    trigger: section,
    pin: viewport,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress; // 0 to 1

      // 4 stages mapped across the 400vh scroll
      // 0.00 – 0.25 -> Stage 01
      // 0.25 – 0.50 -> Stage 02
      // 0.50 – 0.75 -> Stage 03
      // 0.75 – 1.00 -> Stage 04
      const numStages = 4;
      const raw = progress * numStages;
      const activeIdx = Math.min(Math.floor(raw), numStages - 1);
      const frac = raw - activeIdx;

      // Update Card Visibility with Zero Overlap
      cards.forEach((card, idx) => {
        if (idx === activeIdx) {
          card.classList.add('active');
          card.classList.remove('passed');
        } else if (idx < activeIdx) {
          card.classList.remove('active');
          card.classList.add('passed');
        } else {
          card.classList.remove('active');
          card.classList.remove('passed');
        }
      });

      // Update Tabs & Indicator Line
      tabs.forEach((tab, idx) => {
        tab.classList.toggle('active', idx === activeIdx);
      });

      if (progressLine) {
        progressLine.style.transform = `translateX(${activeIdx * 100}%)`;
      }

      // Update Telemetry Badge
      if (hudBadge) {
        hudBadge.textContent = stageBadges[activeIdx];
      }

      // Update 3D Visualizer Morphing
      updateSceneScroll({
        servicesProgress: progress,
        activeServiceIndex: activeIdx,
        activeServiceMix: frac,
      });
    },
  });

  // Clicking progress tabs jumps to stage
  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const targetScroll = sectionTop + (idx / 4) * sectionHeight + 5;
      if (lenis) {
        lenis.scrollTo(targetScroll, { duration: 1.2 });
      } else {
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    });
  });
}

// ─── 08. Contact Modal ───────────────────────────────
function openContactModal(prefillType, prefillRole) {
  const modal = document.getElementById('contact-modal');
  if (!modal) return;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  if (prefillType) {
    const typeSelect = document.getElementById('contact-type');
    if (typeSelect) {
      if (prefillType === 'investor') typeSelect.value = 'investor';
      else if (prefillType === 'careers') typeSelect.value = 'careers';
      else if (prefillType === 'services') typeSelect.value = 'services';
    }
  }

  if (prefillRole) {
    const msg = document.getElementById('contact-message');
    if (msg && !msg.value) {
      msg.value = `Applying for founding role: ${prefillRole}\n\nTechnical background & portfolio/GitHub: `;
    }
  }

  setTimeout(() => {
    document.getElementById('contact-name')?.focus();
  }, 100);
}

function closeContactModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function initContactModal() {
  const modal = document.getElementById('contact-modal');
  if (!modal) return;

  document.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', closeContactModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeContactModal();
  });

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('contact-submit');
      if (!btn) return;

      btn.disabled = true;
      btn.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="spin"><circle cx="12" cy="12" r="10" opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/></svg>
        Transmitting...
      `;

      setTimeout(() => {
        btn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          Message Received
        `;
        btn.style.background = '#10b981';

        setTimeout(() => {
          closeContactModal();
          form.reset();
          btn.disabled = false;
          btn.style.background = '';
          btn.innerHTML = `
            <span>Send Message</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          `;
        }, 1400);
      }, 1000);
    });
  }
}

// ─── 09. Boot Engine ─────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initNavigation();
  initContactModal();

  const container = document.getElementById('three-canvas-container');
  try {
    initScene(container);
  } catch (err) {
    console.error('Three.js scene init failed:', err);
  }

  // Boot into initial page from hash
  navigateTo(getPageFromHash(), false);
});
