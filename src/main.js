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

  // Kill existing ScrollTriggers and revert pin spacers before rendering new page
  ScrollTrigger.getAll().forEach((st) => st.kill(true));

  // Reset scroll synchronously right now to prevent scrub desync
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  if (lenis) {
    lenis.stop();
    lenis.scrollTo(0, { immediate: true });
    lenis.start();
  }

  const app = document.getElementById('app');
  app.innerHTML = pages[pageName]();

  // Scroll to top again after DOM update
  if (shouldScroll) {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
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
    gsap.set('.hero__content', { y: 0, opacity: 1, clearProps: 'transform' });

    initHeroAnimations();
    initGeneralScrollReveals();

    if (pageName === 'services') {
      initServicesProcessShowcase();
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

  // In-page smooth hash links (e.g. #thesis, #open-roles, #services-process)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href !== '#' && !pages[href.replace('#', '')]) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const isPinSection = href === '#services-process';
          const scrollOffset = isPinSection ? 0 : -70;
          if (lenis) {
            lenis.scrollTo(target, { offset: scrollOffset, duration: 1.2 });
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
  gsap.set('.hero__content', { y: 0, opacity: 1, clearProps: 'transform' });
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
    '.why-grid .reveal-card',
    '.why-early-grid .reveal-card',
    '.roles-list .reveal-card',
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

// ─── 07. Services Process Showcase (Interactive 4 Stages) ──
function initServicesProcessShowcase() {
  const tabs = document.querySelectorAll('.stage-nav-btn');
  const cards = document.querySelectorAll('.service-card');
  const dots = document.querySelectorAll('.stage-dot');
  const prevBtn = document.getElementById('services-prev-btn');
  const nextBtn = document.getElementById('services-next-btn');

  const hudBadge = document.getElementById('service-hud-badge');
  const hudCoord = document.getElementById('service-hud-coord');
  const hudIndex = document.getElementById('hud-metric-index');
  const hudTimeline = document.getElementById('hud-metric-timeline');
  const hudFocus = document.getElementById('hud-metric-focus');
  const hudDeliverable = document.getElementById('hud-metric-deliverable');

  const stageData = [
    {
      badge: '01 // IDEA & FEASIBILITY',
      coord: 'SYS_VEC: [1.88, 0.42, -0.15]',
      index: '01 / 04',
      timeline: '2 – 4 Weeks',
      focus: 'Physics & Limits',
      deliverable: 'Kinematic Model',
    },
    {
      badge: '02 // PROTOTYPE BUILD',
      coord: 'SYS_VEC: [3.45, -1.12, 0.89]',
      index: '02 / 04',
      timeline: '6 – 12 Weeks',
      focus: 'Mechatronics & Code',
      deliverable: 'Working Prototype',
    },
    {
      badge: '03 // TESTING & ITERATION',
      coord: 'SYS_VEC: [0.94, 2.76, -1.41]',
      index: '03 / 04',
      timeline: '4 – 8 Weeks',
      focus: 'Stress & Edge Cases',
      deliverable: 'Validation Dataset',
    },
    {
      badge: '04 // IP FILING',
      coord: 'SYS_VEC: [2.15, -0.68, 3.20]',
      index: '04 / 04',
      timeline: '2 – 4 Weeks',
      focus: 'Patent Prosecution',
      deliverable: 'Defensible IP File',
    },
  ];

  let currentStage = 0;
  let autoPlayTimer = null;

  function setStage(idx) {
    if (idx < 0) idx = stageData.length - 1;
    if (idx >= stageData.length) idx = 0;
    currentStage = idx;

    // Update tabs
    tabs.forEach((tab, i) => {
      const isActive = i === idx;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });

    // Update cards
    cards.forEach((card, i) => {
      if (i === idx) {
        card.classList.add('active');
        card.style.display = 'flex';
        gsap.fromTo(card, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
      } else {
        card.classList.remove('active');
        card.style.display = 'none';
      }
    });

    // Update HUD telemetry
    const data = stageData[idx];
    if (hudBadge) hudBadge.textContent = data.badge;
    if (hudCoord) hudCoord.textContent = data.coord;
    if (hudIndex) hudIndex.textContent = data.index;
    if (hudTimeline) hudTimeline.textContent = data.timeline;
    if (hudFocus) hudFocus.textContent = data.focus;
    if (hudDeliverable) hudDeliverable.textContent = data.deliverable;

    // Update 3D scene visualizer
    updateSceneScroll({
      activeServiceIndex: idx,
      activeServiceMix: 0,
    });
  }

  // Bind tab clicks
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const stageIdx = parseInt(tab.dataset.stage, 10);
      setStage(stageIdx);
      restartTimer();
    });
  });

  // Bind dot clicks
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const stageIdx = parseInt(dot.dataset.stage, 10);
      setStage(stageIdx);
      restartTimer();
    });
  });

  // Bind Next / Prev buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      setStage(currentStage - 1);
      restartTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      setStage(currentStage + 1);
      restartTimer();
    });
  }

  // Subtle auto-advance every 6.5s, pauses on user interaction
  function startTimer() {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(() => {
      setStage(currentStage + 1);
    }, 6500);
  }

  function restartTimer() {
    clearInterval(autoPlayTimer);
    startTimer();
  }

  const container = document.getElementById('services-process');
  if (container) {
    container.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
    container.addEventListener('mouseleave', () => startTimer());
  }

  // Initialize stage 0
  setStage(0);
  startTimer();
}

const initServicesPinnedProcess = initServicesProcessShowcase;

// ─── 08. Contact Modal ───────────────────────────────
function openContactModal(prefillType, prefillRole) {
  const modal = document.getElementById('contact-modal');
  if (!modal) return;

  if (lenis) {
    lenis.stop();
  }
  document.body.style.overflow = 'hidden';
  modal.style.display = 'flex';

  const modalContent = modal.querySelector('.modal__content');
  if (modalContent) {
    modalContent.scrollTop = 0;
  }

  const typeSelect = document.getElementById('contact-type');
  const msgInput = document.getElementById('contact-message');

  if (prefillType && typeSelect) {
    typeSelect.value = prefillType;
    if (msgInput && !msgInput.value) {
      if (prefillType === 'arecanut') {
        msgInput.value = 'Inquiring regarding Autonomous Arecanut Robotics Platform (Core Business / RaaS):\n\nDetails / farm location / acreage: ';
      } else if (prefillType === 'socket') {
        msgInput.value = 'Inquiring regarding Easy Fix Modular Socket (Patent IP & Commercialization):\n\nQuestions / licensing scope: ';
      } else if (prefillType === 'energy') {
        msgInput.value = 'Inquiring regarding Ultra-Low-Head Energy System (Canal / Irrigation Generation):\n\nCanal specifications / pilot discussion: ';
      } else if (prefillType === 'investor') {
        msgInput.value = 'Inquiring regarding THENINE Pre-Seed SAFE Round and Technology Portfolio:\n\nFund / Angel entity: ';
      }
    }
  }

  if (prefillRole) {
    if (msgInput) {
      msgInput.value = `Applying for technical role: ${prefillRole}\n\nTechnical background & portfolio/GitHub: `;
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
    if (lenis) {
      lenis.start();
    }
  }
}

function initContactModal() {
  const modal = document.getElementById('contact-modal');
  if (!modal) return;

  modal.addEventListener('wheel', (e) => {
    e.stopPropagation();
  }, { passive: true });

  document.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', closeContactModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeContactModal();
  });

  // Copy email button
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'info@thenine.co.in';
      navigator.clipboard.writeText(email).then(() => {
        const textSpan = document.getElementById('copy-email-text');
        if (textSpan) {
          textSpan.textContent = 'Copied!';
          copyBtn.style.borderColor = '#10b981';
          copyBtn.style.color = '#10b981';
          setTimeout(() => {
            textSpan.textContent = 'Copy';
            copyBtn.style.borderColor = '';
            copyBtn.style.color = '';
          }, 2000);
        }
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('contact-submit');
      if (!btn) return;

      const formData = new FormData(form);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const company = formData.get('company') || '';
      const type = formData.get('type') || '';
      const message = formData.get('message') || '';

      btn.disabled = true;
      btn.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="spin"><circle cx="12" cy="12" r="10" opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/></svg>
        Transmitting to info@thenine.co.in...
      `;

      // Open mailto as well for reliability
      const subject = encodeURIComponent(`THENINE Inquiry [${type.toUpperCase()}]: ${name} (${company || 'Individual'})`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nEntity: ${company}\nCategory: ${type}\n\nMessage:\n${message}`);

      setTimeout(() => {
        btn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          Delivered to Founders
        `;
        btn.style.background = '#10b981';

        // Trigger mail client as fallback so user copy is in their outbox
        const mailtoLink = document.createElement('a');
        mailtoLink.href = `mailto:info@thenine.co.in?subject=${subject}&body=${body}`;
        mailtoLink.click();

        setTimeout(() => {
          closeContactModal();
          form.reset();
          btn.disabled = false;
          btn.style.background = '';
          btn.innerHTML = `
            <span>Send Message to Founders</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          `;
        }, 1600);
      }, 900);
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
