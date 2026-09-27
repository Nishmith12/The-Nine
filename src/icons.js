/**
 * icons.js — Clean inline SVG vector icons (unified 1.5px stroke)
 * Zero raw emojis — production-grade iconography.
 */

const s = 'none';
const w = '1.5';
const j = 'round';

export const icons = {
  // Navigation & UI
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowUpRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="2" stroke-linecap="${j}" stroke-linejoin="${j}"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="2" stroke-linecap="${j}" stroke-linejoin="${j}"><polyline points="20 6 9 17 4 12"/></svg>`,
  mail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,

  // Technology
  cpu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
  zap: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  eye: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  target: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  cog: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  layers: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  tool: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  shield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  code: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  box: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  brain: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><path d="M12 2a5 5 0 0 1 5 5c0 1.5-.7 2.8-1.7 3.7L12 14l-3.3-3.3A5 5 0 0 1 12 2z"/><path d="M7 7a5 5 0 0 0-2 4c0 2 1.5 3.8 3.5 4.5"/><path d="M17 7a5 5 0 0 1 2 4c0 2-1.5 3.8-3.5 4.5"/><line x1="12" y1="14" x2="12" y2="22"/></svg>`,

  // Business
  users: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  briefcase: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  trendingUp: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  dollarSign: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  star: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  fileText: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  clock: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  rocket: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  compass: `<svg width="20" height="20" viewBox="0 0 24 24" fill="${s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="${j}" stroke-linejoin="${j}"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
};
