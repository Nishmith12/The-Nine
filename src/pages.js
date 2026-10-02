/**
 * pages.js — Thenine LLP Core Page Templates
 * 1. Investors Page (Investment Opportunities, Core Business, Patent Techs, Thesis, Founder Leadership, 6-Member Team, SAFE)
 * 2. Careers Page (Join 6-member founding engineering team, Technical Roles)
 * 3. Services Page (From idea to prototype to IP, 4-stage process, 6+ IPs track record)
 */

// ─── 01. INVESTORS PAGE ──────────────────────────────
export function renderInvestorsPage() {
  return `
    <!-- Investors Hero -->
    <section class="page-hero" id="investors-hero">
      <div class="hero__content">
        <div class="section-label">THENINE // PROPRIETARY TECHNOLOGY PLATFORM</div>
        <div class="hero__headline-container">
          <div class="hero__line-mask">
            <h1 class="hero__line">Robots built for</h1>
          </div>
          <div class="hero__line-mask">
            <h1 class="hero__line hero__line--accent">the real world.</h1>
          </div>
        </div>
        <p class="hero__description">
          THENINE is building a portfolio of proprietary technologies under one technology platform — led by our core Agri-Robotics business, with additional patent-backed projects progressing toward commercialization and investment.
        </p>
        <div class="hero__actions">
          <a href="#opportunities" class="btn btn--primary">
            <span>Explore Investment Opportunities</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <button class="btn btn--secondary" data-open-modal="contact" data-prefill="investor">
            <span>Contact Founders</span>
          </button>
        </div>
        <div class="hero__meta">
          <div class="hero__meta-col">
            <span class="meta-label">CORE BUSINESS</span>
            <span class="meta-value">Arecanut Agri-Robotics (RaaS)</span>
          </div>
          <div class="hero__meta-col">
            <span class="meta-label">PROPRIETARY ASSETS</span>
            <span class="meta-value">6+ IPs Filed | 2+ Articles</span>
          </div>
          <div class="hero__meta-col">
            <span class="meta-label">FOUNDING SQUAD</span>
            <span class="meta-value">6 Team Members</span>
          </div>
        </div>
      </div>
      <div class="hero__scroll-indicator">
        <div class="scroll-mouse"><div class="scroll-wheel"></div></div>
        <span>SCROLL TO EXPLORE OPPORTUNITIES</span>
      </div>
    </section>

    <!-- ─── VERIFIED COMPANY METRICS RIBBON ───────────── -->
    <section class="metrics-ribbon-section">
      <div class="container">
        <div class="metrics-ribbon">
          <div class="metric-pill">
            <div class="metric-pill__num">6+</div>
            <div class="metric-pill__info">
              <span class="metric-pill__label">IPs Filed</span>
              <span class="metric-pill__sub">Proprietary Inventions</span>
            </div>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-pill">
            <div class="metric-pill__num">6</div>
            <div class="metric-pill__info">
              <span class="metric-pill__label">Team Members</span>
              <span class="metric-pill__sub">Multidisciplinary Engineering</span>
            </div>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-pill">
            <div class="metric-pill__num">2+</div>
            <div class="metric-pill__info">
              <span class="metric-pill__label">Research Articles</span>
              <span class="metric-pill__sub">Peer-Reviewed R&D</span>
            </div>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-pill metric-pill--email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <div class="metric-pill__info">
              <span class="metric-pill__label">Official Contact</span>
              <a href="mailto:info@thenine.co.in" class="metric-pill__link">info@thenine.co.in</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 01. INVESTMENT OPPORTUNITIES SECTION ──────── -->
    <section class="investors-opportunities-section" id="opportunities">
      <div class="container">
        <div class="section-intro">
          <div class="section-label">// INVESTMENT OPPORTUNITIES</div>
          <h2 class="section-headline reveal-heading">Proprietary technologies under one platform.</h2>
          <p class="section-lead reveal-body">
            THENINE is building a portfolio of proprietary technologies under one technology platform — led by our core Agri-Robotics business, with additional patent-backed projects progressing toward commercialization and investment.
          </p>
        </div>

        <div class="opportunities-grid">

          <!-- 01 — CORE BUSINESS (Flagship Spotlight) -->
          <article class="opportunity-card opportunity-card--featured reveal-card">
            <div class="opp-card__glow-border"></div>
            <div class="opp-card__header">
              <div class="opp-card__index-wrap">
                <span class="opp-card__index">01 — CORE BUSINESS</span>
                <span class="opp-badge opp-badge--core">
                  <span class="pulse-dot pulse-dot--green"></span>
                  CORE BUSINESS — IN DEVELOPMENT
                </span>
              </div>
              <span class="opp-card__tag">FLAGSHIP COMMERCIAL PLATFORM</span>
            </div>

            <div class="opp-card__body">
              <h3 class="opp-card__title">Autonomous Arecanut Robotics Platform</h3>
              <p class="opp-card__desc">
                Our primary business is end-to-end robotic solutions for arecanut farming. We are developing a multifunctional robotic system capable of performing harvesting, spraying, inspection, and other agricultural operations through a Robotics-as-a-Service (RaaS) model.
              </p>

              <div class="opp-features-grid">
                <div class="opp-feature-item">
                  <span class="opp-feature-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </span>
                  <div>
                    <strong>Robotics-as-a-Service (RaaS)</strong>
                    <p>Lowers upfront capital barriers for farmers with pay-per-acre / seasonal subscription economics.</p>
                  </div>
                </div>

                <div class="opp-feature-item">
                  <span class="opp-feature-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24"/></svg>
                  </span>
                  <div>
                    <strong>Precision Harvesting & Reach</strong>
                    <p>Eliminates dangerous manual tree-climbing with specialized gripping and cutting kinematics.</p>
                  </div>
                </div>

                <div class="opp-feature-item">
                  <span class="opp-feature-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                  </span>
                  <div>
                    <strong>Targeted Canopy Spraying</strong>
                    <p>Autonomous targeted delivery reducing expensive agrochemical usage and human toxicity exposure.</p>
                  </div>
                </div>

                <div class="opp-feature-item">
                  <span class="opp-feature-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </span>
                  <div>
                    <strong>Vision-Guided Crop Inspection</strong>
                    <p>Multimodal computer vision mapping ripeness stages, disease hotspots, and yield estimations.</p>
                  </div>
                </div>
              </div>

              <div class="opp-card__footer">
                <div class="opp-card__specs">
                  <span class="spec-chip">Status: In Active Field Prototyping</span>
                  <span class="spec-chip">Model: RaaS Deployment</span>
                  <span class="spec-chip">Sector: Agri-Tech & Physical Automation</span>
                </div>
                <button class="btn btn--primary" data-open-modal="contact" data-prefill="arecanut">
                  <span>Inquire on Agri-Robotics Platform</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>
          </article>

          <!-- 02 — PATENT TECHNOLOGY: Easy Fix Modular Socket -->
          <article class="opportunity-card reveal-card">
            <div class="opp-card__header">
              <div class="opp-card__index-wrap">
                <span class="opp-card__index">02 — PATENT TECHNOLOGY</span>
                <span class="opp-badge opp-badge--patent">
                  <span class="pulse-dot pulse-dot--amber"></span>
                  R&D / PROTOTYPE
                </span>
              </div>
              <span class="opp-card__tag">PATENT-BACKED HARDWARE</span>
            </div>

            <div class="opp-card__body">
              <h3 class="opp-card__title">Easy Fix Modular Socket</h3>
              <p class="opp-card__desc">
                A modular electrical socket technology designed to simplify installation, replacement, maintenance, and future configuration of electrical connections.
              </p>

              <ul class="opp-card__bullet-list">
                <li>
                  <strong>Tool-Free Modular Installation:</strong>
                  Snap-in mechanical locking interface allowing effortless replacement without exposed electrical wire handling.
                </li>
                <li>
                  <strong>Simplified Maintenance & Safety:</strong>
                  Eliminates downtime and shock hazards during commercial and residential electrical socket servicing.
                </li>
                <li>
                  <strong>Future-Proof Upgrades:</strong>
                  Universal base accommodates smart IoT sensor modules, USB-C Power Delivery, and smart power management.
                </li>
                <li>
                  <strong>Proprietary IP:</strong>
                  Covered by filed patent applications for mechanical engagement and safety terminal contact structure.
                </li>
              </ul>

              <div class="opp-card__footer">
                <div class="opp-card__specs">
                  <span class="spec-chip">Stage: Functional Prototype</span>
                  <span class="spec-chip">IP: Filed Patent</span>
                </div>
                <button class="btn btn--secondary btn--full" data-open-modal="contact" data-prefill="socket">
                  <span>Inquire on Modular Socket</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>
          </article>

          <!-- 03 — PATENT TECHNOLOGY: Ultra-Low-Head Energy System -->
          <article class="opportunity-card reveal-card">
            <div class="opp-card__header">
              <div class="opp-card__index-wrap">
                <span class="opp-card__index">03 — PATENT TECHNOLOGY</span>
                <span class="opp-badge opp-badge--patent">
                  <span class="pulse-dot pulse-dot--cyan"></span>
                  PROTOTYPE
                </span>
              </div>
              <span class="opp-card__tag">CLEAN DISTRIBUTED POWER</span>
            </div>

            <div class="opp-card__body">
              <h3 class="opp-card__title">Ultra-Low-Head Energy System</h3>
              <p class="opp-card__desc">
                An energy-conversion technology designed to generate power from ultra-low-head canal and irrigation systems, targeting distributed energy generation.
              </p>

              <ul class="opp-card__bullet-list">
                <li>
                  <strong>Sub-2m Hydraulic Head Capture:</strong>
                  Proprietary kinetic runner designed specifically for ultra-low elevation drops where traditional hydro turbines cannot operate.
                </li>
                <li>
                  <strong>Direct Irrigation & Canal Integration:</strong>
                  Taps into pre-existing agricultural and canal waterways with minimal civil infrastructure and zero damming.
                </li>
                <li>
                  <strong>24/7 Distributed Baseload:</strong>
                  Produces continuous clean electrical energy to power local microgrids, agricultural pumps, and rural installations.
                </li>
                <li>
                  <strong>Patented IP:</strong>
                  Covered by filed patent applications protecting hydrodynamic design, debris deflection, and kinetic efficiency.
                </li>
              </ul>

              <div class="opp-card__footer">
                <div class="opp-card__specs">
                  <span class="spec-chip">Stage: Verified Prototype</span>
                  <span class="spec-chip">IP: Filed Patent</span>
                </div>
                <button class="btn btn--secondary btn--full" data-open-modal="contact" data-prefill="energy">
                  <span>Inquire on Energy System</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- 02 / THESIS SECTION -->
    <section class="investors-thesis-section" id="thesis">
      <div class="container">
        <div class="section-label">02 // THESIS</div>
        <div class="thesis-callout reveal-card">
          <h2 class="thesis-statement">
            &ldquo;Fixed automation works when the world is predictable.<br>
            We are building robotics &amp; patented technologies for when it isn't.&rdquo;
          </h2>
          <div class="thesis-body">
            <p>
              Traditional industrial automation requires hyper-controlled environments where every component arrives at an exact coordinate under sterile lighting. High-value agricultural tasks — such as arecanut harvesting and tree operations — feature high biological entropy, variable heights, and unpredictable weather.
            </p>
            <p style="margin-top: 16px;">
              THENINE solves this through a unified physical platform: adaptive perception, resilient mechanical mechanisms, and field-tested hardware. Concurrently, our engineering pipeline incubates patent-protected hardware innovations that address systemic infrastructure needs.
            </p>
          </div>
          <div class="variation-factors-grid">
            <div class="factor-tag">Biological & Canopy Variation</div>
            <div class="factor-tag">Dynamic Outdoor Lighting</div>
            <div class="factor-tag">Non-Standard Agricultural Geometry</div>
            <div class="factor-tag">Ultra-Low-Head Fluid Dynamics</div>
            <div class="factor-tag">Modular Touch-Safe Electrical Architecture</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 03 / FOUNDING LEADERSHIP & 6-MEMBER SQUAD -->
    <section class="investors-team-section" id="team">
      <div class="container">
        <div class="section-intro">
          <div class="section-label">03 // FOUNDING LEADERSHIP &amp; TEAM</div>
          <h2 class="section-headline reveal-heading">Leadership with conviction in deep-tech execution.</h2>
          <p class="section-lead reveal-body">
            Meet the founders leading THENINE — backed by a tight-knit squad of 6 multidisciplinary engineers and researchers, 6+ filed patents, and 2+ peer-reviewed research publications.
          </p>
        </div>

        <!-- Co-Founders Showcase Grid -->
        <div class="founders-grid">
          <!-- Founder & CEO: Mr. Shravan Kumar -->
          <article class="founder-card reveal-card">
            <div class="founder-card__profile">
              <div class="founder-img-wrap">
                <img src="./shravan-kumar.jpg" alt="Mr. Shravan Kumar — Founder & CEO" class="founder-img" />
              </div>
              <div class="founder-card__titles">
                <span class="founder-role-badge">FOUNDER &amp; CEO</span>
                <h3 class="founder-name">Mr. Shravan Kumar</h3>
                <span style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--text-muted); letter-spacing: 0.06em;">THENINE LLP</span>
              </div>
            </div>

            <blockquote class="founder-quote">
              &ldquo;We are building the future today. At the pre-seed stage, our focus over the next year is to build, validate, and demonstrate indigenous robotic technologies that contribute to India’s growing robotics ecosystem. With a clear five-year vision, we are laying the technological, intellectual property, and organizational foundation to take Indian robotics from innovation to global impact.&rdquo;
            </blockquote>

            <div class="founder-tags">
              <span class="founder-tag">Vision &amp; Strategy</span>
              <span class="founder-tag">Indigenous Robotics</span>
              <span class="founder-tag">IP Strategy</span>
              <span class="founder-tag">Ecosystem Impact</span>
            </div>
          </article>

          <!-- Co-founder & CFO: Mr. Ganesh Kumar -->
          <article class="founder-card reveal-card">
            <div class="founder-card__profile">
              <div class="founder-img-wrap">
                <img src="./ganesh-kumar.jpg" alt="Mr. Ganesh Kumar — Co-founder & CFO" class="founder-img" />
              </div>
              <div class="founder-card__titles">
                <span class="founder-role-badge">CO-FOUNDER &amp; CFO</span>
                <h3 class="founder-name">Mr. Ganesh Kumar</h3>
                <span style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--text-muted); letter-spacing: 0.06em;">THENINE LLP</span>
              </div>
            </div>

            <blockquote class="founder-quote">
              &ldquo;We are confident that THENINE presents an opportunity to build long-term value for our investors. With disciplined financial management, strategic capital deployment, and a clear growth roadmap, we aim to create sustainable value as THENINE scales.&rdquo;
            </blockquote>

            <div class="founder-tags">
              <span class="founder-tag">Financial Architecture</span>
              <span class="founder-tag">Capital Deployment</span>
              <span class="founder-tag">Investor Governance</span>
              <span class="founder-tag">Scale &amp; Value Creation</span>
            </div>
          </article>
        </div>

        <!-- 6-Member Multidisciplinary Engineering Pillars -->
        <div style="margin-top: 40px; margin-bottom: 24px;">
          <div class="section-label" style="margin-bottom: 8px;">// TECHNICAL EXECUTION SQUAD</div>
          <h3 style="font-family: var(--font-display); font-size: 1.8rem; color: var(--text-white);" class="reveal-heading">
            6 Team Members Driving End-to-End Robotics &amp; Patented R&amp;D
          </h3>
          <p style="color: var(--text-secondary); font-size: 0.95rem; margin-top: 6px;">
            A multidisciplinary team combining mechanical precision, real-time control, perception, and patent prosecution — with 6+ IPs filed and 2+ research articles published.
          </p>
        </div>

        <div class="team-pillars-grid">
          <div class="team-pillar-card reveal-card">
            <div class="pillar-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>
            <span class="team-role-badge">PILLAR 01</span>
            <h4 class="team-name">Robotics Systems & Architecture</h4>
            <p class="team-bio">
              Orchestrating end-to-end mechatronics, system integration, and autonomous field operational loops for the Arecanut platform.
            </p>
            <div class="team-tags">
              <span>Agri-Robotics</span><span>Systems Design</span><span>RaaS Ops</span>
            </div>
          </div>

          <div class="team-pillar-card reveal-card">
            <div class="pillar-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </div>
            <span class="team-role-badge">PILLAR 02</span>
            <h4 class="team-name">Mechanical CAD & Kinematics</h4>
            <p class="team-bio">
              Designing tree-climbing gripping mechanisms, harvesting end-effectors, modular socket snap geometries, and lightweight chassis.
            </p>
            <div class="team-tags">
              <span>Kinematics</span><span>CAD / FEA</span><span>End-Effectors</span>
            </div>
          </div>

          <div class="team-pillar-card reveal-card">
            <div class="pillar-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <span class="team-role-badge">PILLAR 03</span>
            <h4 class="team-name">Embedded Firmware & Controls</h4>
            <p class="team-bio">
              Developing real-time motor actuation, closed-loop sensor telemetry, wireless remote monitoring, and power management electronics.
            </p>
            <div class="team-tags">
              <span>Embedded C++</span><span>BLDC Drivers</span><span>Real-Time Telemetry</span>
            </div>
          </div>

          <div class="team-pillar-card reveal-card">
            <div class="pillar-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <span class="team-role-badge">PILLAR 04</span>
            <h4 class="team-name">Perception & Computer Vision</h4>
            <p class="team-bio">
              Building vision pipelines for canopy depth estimation, bunch ripeness segmentation, and precision targeting in outdoor agricultural light.
            </p>
            <div class="team-tags">
              <span>Edge Vision</span><span>Depth Mapping</span><span>Ripeness AI</span>
            </div>
          </div>

          <div class="team-pillar-card reveal-card">
            <div class="pillar-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"/></svg>
            </div>
            <span class="team-role-badge">PILLAR 05</span>
            <h4 class="team-name">Fluid & Power Systems Engineering</h4>
            <p class="team-bio">
              Engineering the Ultra-Low-Head hydrodynamic kinetic runners, flow channel dynamics, and clean energy power generation interfaces.
            </p>
            <div class="team-tags">
              <span>Hydrodynamics</span><span>Clean Energy</span><span>Canal Power</span>
            </div>
          </div>

          <div class="team-pillar-card reveal-card">
            <div class="pillar-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <span class="team-role-badge">PILLAR 06</span>
            <h4 class="team-name">Patent Strategy & Technical R&D</h4>
            <p class="team-bio">
              Leading technical invention disclosures, patent claims drafting, 6+ filed IP prosecutions, and authoring peer-reviewed research publications.
            </p>
            <div class="team-tags">
              <span>6+ Filed IPs</span><span>2+ Articles</span><span>IP Defense</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 04 / SAFE FUNDRAISE SECTION -->
    <section class="investors-fundraise-section" id="fundraise">
      <div class="container">
        <div class="section-label">04 // FUNDRAISE</div>
        <div class="fundraise-panel reveal-card">
          <div class="fundraise-stats">
            <div>
              <h3 style="font-family: var(--font-display); font-size: 2rem; color: var(--text-white); margin-bottom: 8px;">
                Accelerating Thenine's Technology Platform.
              </h3>
              <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
                Raising pre-seed capital under a standard SAFE to scale field trials of our Autonomous Arecanut Robotics platform and fast-track the commercialization of our patent portfolio.
              </p>
            </div>
            <div class="fundraise-stat-item">
              <span class="stat-key">INSTRUMENT</span>
              <span class="stat-val">SAFE Round</span>
            </div>
            <div class="fundraise-stat-item">
              <span class="stat-key">CORE VEHICLE</span>
              <span class="stat-val">Agri-Robotics RaaS</span>
            </div>
            <div class="fundraise-stat-item">
              <span class="stat-key">IP PIPELINE</span>
              <span class="stat-val">6+ Filed Patents</span>
            </div>
            <div class="fundraise-stat-item">
              <span class="stat-key">DIRECT INQUIRIES</span>
              <span class="stat-val" style="font-size: 0.95rem; word-break: break-all;">info@thenine.co.in</span>
            </div>
          </div>

          <div>
            <h4 class="fundraise-breakdown-title">Planned Allocation of Pre-Seed Capital:</h4>
            <ul class="fundraise-use-list">
              <li>Field robotics hardware iterations, BLDC motors, sensors & actuators</li>
              <li>Extended multi-acre farm trials for arecanut harvesting and spraying</li>
              <li>Production tooling & compliance certification for Easy Fix Modular Socket</li>
              <li>Canal deployment testbed for Ultra-Low-Head Energy System</li>
              <li>Continued prosecution and defense of our portfolio of 6+ filed patents</li>
              <li>Core engineering squad scale-up and key technical talent</li>
            </ul>
            <div style="margin-top: 36px; display: flex; flex-direction: column; gap: 12px;">
              <button class="btn btn--primary btn--full" data-open-modal="contact" data-prefill="investor">
                <span>Request Investor Briefing</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
              <a href="mailto:info@thenine.co.in?subject=THENINE%20Investor%20Inquiry" class="btn btn--secondary btn--full" style="text-align: center; justify-content: center;">
                <span>Email Founders: info@thenine.co.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INVESTOR FINAL CTA -->
    <section class="cinematic-cta-section">
      <div class="cta-radial-glow"></div>
      <div class="container cta-container">
        <div class="section-label">// CONNECT WITH FOUNDERS</div>
        <h2 class="cta-headline">
          &ldquo;Partner with THENINE on the next frontier of real-world robotics &amp; clean innovation.&rdquo;
        </h2>
        <p class="cta-subtext">
          Direct dialogue with our founders and engineering squad. Accredited investor introductions, RaaS deployment partners, and IP licensing inquiries are welcome.
        </p>
        <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn--primary btn--large" data-open-modal="contact" data-prefill="investor">
            <span>Contact Thenine</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <a href="mailto:info@thenine.co.in" class="btn btn--secondary btn--large">
            <span>info@thenine.co.in</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

// ─── 02. CAREERS PAGE ────────────────────────────────
export function renderCareersPage() {
  return `
    <!-- Careers Hero -->
    <section class="page-hero" id="careers-hero">
      <div class="hero__content">
        <div class="section-label">JOIN THENINE // 6-MEMBER FOUNDING TEAM</div>
        <div class="hero__headline-container">
          <div class="hero__line-mask">
            <h1 class="hero__line">Build the machine</h1>
          </div>
          <div class="hero__line-mask">
            <h1 class="hero__line hero__line--accent">from the ground up.</h1>
          </div>
        </div>
        <p class="hero__description">
          Join our multidisciplinary engineering team building real-world agricultural robots and patented energy & hardware systems. Work directly on physical prototypes tested outside the lab.
        </p>
        <div class="hero__actions">
          <a href="#open-roles" class="btn btn--primary">
            <span>View 5 Technical Openings</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <button class="btn btn--secondary" data-open-modal="contact" data-prefill="careers">
            <span>Pitch Your Skills</span>
          </button>
        </div>
        <div class="hero__meta">
          <div class="hero__meta-col">
            <span class="meta-label">CURRENT TEAM</span>
            <span class="meta-value">6 Core Members</span>
          </div>
          <div class="hero__meta-col">
            <span class="meta-label">PORTFOLIO</span>
            <span class="meta-value">Agri-Robotics & 6+ IPs</span>
          </div>
          <div class="hero__meta-col">
            <span class="meta-label">LOCATION</span>
            <span class="meta-value">On-Site Lab & Fields</span>
          </div>
        </div>
      </div>
      <div class="hero__scroll-indicator">
        <div class="scroll-mouse"><div class="scroll-wheel"></div></div>
        <span>SCROLL TO EXPLORE ROLES</span>
      </div>
    </section>

    <!-- WHY JOIN EARLY -->
    <section class="careers-why-section" id="why-join">
      <div class="container">
        <div class="section-intro">
          <div class="section-label">WHY JOIN EARLY</div>
          <h2 class="section-headline reveal-heading">The advantage of joining at pre-seed.</h2>
          <p class="section-lead reveal-body">
            You won't be managing layers of bureaucracy or maintaining legacy codebases. You will design, build, test, and ship physical machines that interact with the real world.
          </p>
        </div>

        <div class="why-grid why-early-grid">
          <div class="why-card why-early-card reveal-card">
            <span class="why-number why-card-icon">01</span>
            <h4 class="why-title why-card-title">True Hardware Ownership</h4>
            <p class="why-desc why-card-desc">
              Own complete subsystems from first sketch in CAD to machining, PCB assembly, firmware, field testing, and patent filing.
            </p>
          </div>

          <div class="why-card why-early-card reveal-card">
            <span class="why-number why-card-icon">02</span>
            <h4 class="why-title why-card-title">High-Impact Equity & Growth</h4>
            <p class="why-desc why-card-desc">
              Join during the foundational phase of our technology platform alongside dedicated technical colleagues with generous founding equity.
            </p>
          </div>

          <div class="why-card why-early-card reveal-card">
            <span class="why-number why-card-icon">03</span>
            <h4 class="why-title why-card-title">Real Field Validation</h4>
            <p class="why-desc why-card-desc">
              Our robots deploy directly into real commercial farms, canals, and test facilities. Instant feedback from real physics, not synthetic simulations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5 TECHNICAL ROLES -->
    <section class="careers-roles-section" id="open-roles">
      <div class="container">
        <div class="section-intro">
          <div class="section-label">CURRENT OPENINGS</div>
          <h2 class="section-headline reveal-heading">5 Technical roles to expand our team.</h2>
          <p class="section-lead reveal-body">
            We are looking for builders who love physical engineering, low-level firmware, perception, and patent-grade problem solving.
          </p>
        </div>

        <div class="roles-list roles-stack">
          <!-- Role 01 -->
          <div class="role-row-card reveal-card">
            <div class="role-col-title">
              <span class="role-number">ROLE 01 // MECHATRONICS</span>
              <h3 class="role-name">Robotics Systems Engineer</h3>
            </div>
            <div>
              <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 12px;">
                Lead mechatronic system integration for the Autonomous Arecanut platform, bridging tree-climbing actuators, power systems, and fail-safe field operations.
              </p>
              <div class="role-focus-tags">
                <span class="role-tag">Mechatronics</span>
                <span class="role-tag">Agri-Robotics</span>
                <span class="role-tag">System Integration</span>
                <span class="role-tag">Actuators</span>
              </div>
            </div>
            <div class="role-apply-btn">
              <button class="btn btn--primary" data-open-modal="contact" data-prefill="careers" data-role="Robotics Systems Engineer">
                Apply Role →
              </button>
            </div>
          </div>

          <!-- Role 02 -->
          <div class="role-row-card reveal-card">
            <div class="role-col-title">
              <span class="role-number">ROLE 02 // EMBEDDED</span>
              <h3 class="role-name">Firmware & Motor Control Engineer</h3>
            </div>
            <div>
              <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 12px;">
                Develop ultra-reliable real-time motor control loops, FOC algorithms, CAN-bus communication, and battery telemetry for outdoor field robots.
              </p>
              <div class="role-focus-tags">
                <span class="role-tag">Embedded C/C++</span>
                <span class="role-tag">BLDC / FOC</span>
                <span class="role-tag">CAN-bus</span>
                <span class="role-tag">STM32 / ESP32</span>
              </div>
            </div>
            <div class="role-apply-btn">
              <button class="btn btn--primary" data-open-modal="contact" data-prefill="careers" data-role="Firmware & Motor Control Engineer">
                Apply Role →
              </button>
            </div>
          </div>

          <!-- Role 03 -->
          <div class="role-row-card reveal-card">
            <div class="role-col-title">
              <span class="role-number">ROLE 03 // VISION & AI</span>
              <h3 class="role-name">Computer Vision Engineer</h3>
            </div>
            <div>
              <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 12px;">
                Implement edge vision models for agricultural canopy detection, arecanut bunch ripeness segmentation, and visual servoing for robotic harvesting arms.
              </p>
              <div class="role-focus-tags">
                <span class="role-tag">OpenCV / PyTorch</span>
                <span class="role-tag">Edge AI</span>
                <span class="role-tag">Depth Perception</span>
                <span class="role-tag">Visual Servoing</span>
              </div>
            </div>
            <div class="role-apply-btn">
              <button class="btn btn--primary" data-open-modal="contact" data-prefill="careers" data-role="Computer Vision Engineer">
                Apply Role →
              </button>
            </div>
          </div>

          <!-- Role 04 -->
          <div class="role-row-card reveal-card">
            <div class="role-col-title">
              <span class="role-number">ROLE 04 // MECHANICAL</span>
              <h3 class="role-name">Mechanical Design Engineer</h3>
            </div>
            <div>
              <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 12px;">
                Spearhead mechanical design of tree-gripping mechanisms, harvesting cutters, and modular electrical hardware for our patent pipeline.
              </p>
              <div class="role-focus-tags">
                <span class="role-tag">SolidWorks / Fusion</span>
                <span class="role-tag">Mechanism Design</span>
                <span class="role-tag">Rapid Prototyping</span>
                <span class="role-tag">CNC / DFM</span>
              </div>
            </div>
            <div class="role-apply-btn">
              <button class="btn btn--primary" data-open-modal="contact" data-prefill="careers" data-role="Mechanical Design Engineer">
                Apply Role →
              </button>
            </div>
          </div>

          <!-- Role 05 -->
          <div class="role-row-card reveal-card">
            <div class="role-col-title">
              <span class="role-number">ROLE 05 // CLEAN-TECH</span>
              <h3 class="role-name">Hydro-Kinetic Systems Engineer</h3>
            </div>
            <div>
              <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 12px;">
                Advance the hydro-kinetic turbine and fluid dynamics modeling for our Ultra-Low-Head Energy System deployed in canal and irrigation channels.
              </p>
              <div class="role-focus-tags">
                <span class="role-tag">Fluid Dynamics</span>
                <span class="role-tag">Hydro Turbines</span>
                <span class="role-tag">Clean Energy</span>
                <span class="role-tag">Generators</span>
              </div>
            </div>
            <div class="role-apply-btn">
              <button class="btn btn--primary" data-open-modal="contact" data-prefill="careers" data-role="Hydro-Kinetic Systems Engineer">
                Apply Role →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CAREERS FINAL CTA -->
    <section class="cinematic-cta-section">
      <div class="cta-radial-glow"></div>
      <div class="container cta-container">
        <div class="section-label">// APPLICATION</div>
        <h2 class="cta-headline">&ldquo;Help build the machine.&rdquo;</h2>
        <p class="cta-subtext">
          Send your portfolio, GitHub, or videos of what you've physically built directly to our engineering team at <a href="mailto:info@thenine.co.in" style="color: var(--blue-accent);">info@thenine.co.in</a>.
        </p>
        <button class="btn btn--primary btn--large" data-open-modal="contact" data-prefill="careers">
          <span>Apply to Thenine</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    </section>
  `;
}

// ─── 03. SERVICES PAGE ───────────────────────────────
export function renderServicesPage() {
  return `
    <!-- Services Hero -->
    <section class="page-hero" id="services-hero">
      <div class="hero__content">
        <div class="section-label">THENINE R&D // 6+ IPs FILED</div>
        <div class="hero__headline-container">
          <div class="hero__line-mask">
            <h1 class="hero__line">From robotics idea</h1>
          </div>
          <div class="hero__line-mask">
            <h1 class="hero__line">to prototype</h1>
          </div>
          <div class="hero__line-mask">
            <h1 class="hero__line hero__line--accent">to IP.</h1>
          </div>
        </div>
        <p class="hero__description">
          We help founders and enterprise partners turn ambitious robotics and hardware concepts into validated working prototypes, backed by rigorous technical documentation and patent filings.
        </p>
        <div class="hero__actions">
          <button class="btn btn--primary" data-open-modal="contact" data-prefill="services">
            <span>Discuss your project</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <a href="#services-process" class="btn btn--secondary">
            <span>Our 4-Stage Process</span>
          </a>
        </div>
        <div class="hero__meta">
          <div class="hero__meta-col">
            <span class="meta-label">TRACK RECORD</span>
            <span class="meta-value">6+ IPs Filed | 2+ Articles</span>
          </div>
          <div class="hero__meta-col">
            <span class="meta-label">TEAM STRENGTH</span>
            <span class="meta-value">6 Multidisciplinary Engineers</span>
          </div>
          <div class="hero__meta-col">
            <span class="meta-label">DIRECT EMAIL</span>
            <span class="meta-value">info@thenine.co.in</span>
          </div>
        </div>
      </div>
      <div class="hero__scroll-indicator">
        <div class="scroll-mouse"><div class="scroll-wheel"></div></div>
        <span>SCROLL FOR 4-STAGE PROCESS</span>
      </div>
    </section>

    <!-- SERVICES PROCESS (INTERACTIVE 4-STAGE SHOWCASE) -->
    <section class="services-process-section" id="services-process">
      <div class="container">
        
        <div class="section-intro">
          <div class="section-label">PROCESS // END-TO-END R&D</div>
          <h2 class="section-headline reveal-heading">The 4-Stage Lifecycle</h2>
          <p class="section-lead reveal-body">
            From initial physics & feasibility to custom hardware engineering, empirical field testing, and defensible IP protection.
          </p>
        </div>

        <!-- Stage Navigation Tabs -->
        <div class="services-tabs-nav" role="tablist">
          <button class="stage-nav-btn active" data-stage="0" role="tab" aria-selected="true">
            <span class="nav-step">01</span>
            <span class="nav-title">Feasibility</span>
          </button>
          <button class="stage-nav-btn" data-stage="1" role="tab" aria-selected="false">
            <span class="nav-step">02</span>
            <span class="nav-title">Prototype</span>
          </button>
          <button class="stage-nav-btn" data-stage="2" role="tab" aria-selected="false">
            <span class="nav-step">03</span>
            <span class="nav-title">Testing</span>
          </button>
          <button class="stage-nav-btn" data-stage="3" role="tab" aria-selected="false">
            <span class="nav-step">04</span>
            <span class="nav-title">IP Filing</span>
          </button>
        </div>

        <!-- Interactive 2-Column Stage Showcase -->
        <div class="services-showcase-grid">
          
          <!-- Left Column: Telemetry HUD Card -->
          <div class="services-hud-card reveal-card">
            <div class="hud-top">
              <div class="hud-badge-wrap">
                <span class="pulse-dot pulse-dot--cyan"></span>
                <span class="hud-badge" id="service-hud-badge">01 // IDEA & FEASIBILITY</span>
              </div>
              <span class="hud-coord" id="service-hud-coord">SYS_VEC: [1.88, 0.42, -0.15]</span>
            </div>

            <!-- Waveform visualizer -->
            <div class="hud-waveform-panel">
              <div class="hud-wave-label">DYNAMIC KINEMATIC FREQUENCY</div>
              <div class="hud-waveform">
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
              </div>
            </div>

            <!-- Stage Telemetry Specs -->
            <div class="hud-metrics-grid">
              <div class="hud-metric">
                <span class="metric-label">PHASE INDEX</span>
                <span class="metric-val" id="hud-metric-index">01 / 04</span>
              </div>
              <div class="hud-metric">
                <span class="metric-label">CYCLE DURATION</span>
                <span class="metric-val" id="hud-metric-timeline">2 – 4 Weeks</span>
              </div>
              <div class="hud-metric">
                <span class="metric-label">PRIMARY FOCUS</span>
                <span class="metric-val" id="hud-metric-focus">Physics & Limits</span>
              </div>
              <div class="hud-metric">
                <span class="metric-label">CORE DELIVERABLE</span>
                <span class="metric-val" id="hud-metric-deliverable">Kinematic Model</span>
              </div>
            </div>

            <!-- Stage Navigation Controls -->
            <div class="hud-controls">
              <button class="btn btn--outline-sm" id="services-prev-btn" aria-label="Previous Stage">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                <span>Prev Phase</span>
              </button>
              <div class="hud-stage-dots">
                <span class="stage-dot active" data-stage="0"></span>
                <span class="stage-dot" data-stage="1"></span>
                <span class="stage-dot" data-stage="2"></span>
                <span class="stage-dot" data-stage="3"></span>
              </div>
              <button class="btn btn--outline-sm" id="services-next-btn" aria-label="Next Stage">
                <span>Next Phase</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          </div>

          <!-- Right Column: Active Stage Card Stack -->
          <div class="services-cards-stack">
            <!-- Stage 01 -->
            <article class="service-card active" id="service-card-0" data-service="0">
              <div class="card__header">
                <span class="card__number">STAGE 01</span>
                <span class="card__tag">CONCEPT & FEASIBILITY</span>
              </div>
              <h3 class="card__title">Idea & Feasibility</h3>
              <p class="card__desc">
                We start by rigorously analyzing the target use case, technical constraints, physics boundaries, and whether the robotics idea can realistically and commercially be built.
              </p>
              
              <div class="card__section-label">KEY ACTIVITIES</div>
              <div class="card__activities">
                <span class="activity-badge">Requirements Formulation</span>
                <span class="activity-badge">Kinematic Feasibility</span>
                <span class="activity-badge">System Architecture</span>
                <span class="activity-badge">Component Selection</span>
                <span class="activity-badge">Technical Risk Derisking</span>
              </div>

              <div class="card__section-label" style="margin-top: 20px;">KEY DELIVERABLES</div>
              <ul class="card__deliverables-list">
                <li>Mathematical & kinematic feasibility model</li>
                <li>CAD operating envelope definition</li>
                <li>Component selection & BOM cost derisking</li>
                <li>Actuator sizing and power profile analysis</li>
              </ul>

              <div class="card__action-row">
                <button class="btn btn--primary" data-open-modal="contact" data-prefill="services" data-role="Stage 01 Feasibility">
                  <span>Inquire on Feasibility</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </article>

            <!-- Stage 02 -->
            <article class="service-card" id="service-card-1" data-service="1">
              <div class="card__header">
                <span class="card__number">STAGE 02</span>
                <span class="card__tag">PHYSICAL SYSTEM SYNTHESIS</span>
              </div>
              <h3 class="card__title">Prototype Build</h3>
              <p class="card__desc">
                We design, machine, wire, and program the first integrated working robotic prototype. Moving seamlessly across mechanical, electronic, firmware, and software boundaries.
              </p>

              <div class="card__section-label">KEY ACTIVITIES</div>
              <div class="card__activities">
                <span class="activity-badge">Mechanical CAD & FEA</span>
                <span class="activity-badge">Custom Motor Electronics</span>
                <span class="activity-badge">Embedded Firmware</span>
                <span class="activity-badge">Robotics Software Stack</span>
                <span class="activity-badge">Rapid CNC & Machining</span>
              </div>

              <div class="card__section-label" style="margin-top: 20px;">KEY DELIVERABLES</div>
              <ul class="card__deliverables-list">
                <li>Integrated 3D CAD assemblies & manufacturing drawings</li>
                <li>Custom PCB design, board fabrication & harness routing</li>
                <li>Low-latency real-time motor control firmware</li>
                <li>Fully functional physical prototype unit assembled</li>
              </ul>

              <div class="card__action-row">
                <button class="btn btn--primary" data-open-modal="contact" data-prefill="services" data-role="Stage 02 Prototype">
                  <span>Inquire on Prototype Build</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </article>

            <!-- Stage 03 -->
            <article class="service-card" id="service-card-2" data-service="2">
              <div class="card__header">
                <span class="card__number">STAGE 03</span>
                <span class="card__tag">EMPIRICAL CALIBRATION</span>
              </div>
              <h3 class="card__title">Testing & Iteration</h3>
              <p class="card__desc">
                We rigorously test against real-world variation, identify mechanical and algorithmic failure modes, and iterate rapidly to drive the system toward robust repeatability.
              </p>

              <div class="card__section-label">KEY ACTIVITIES</div>
              <div class="card__activities">
                <span class="activity-badge">Stress & Duty Profiling</span>
                <span class="activity-badge">Telemetry Data Collection</span>
                <span class="activity-badge">Reliability Benchmarking</span>
                <span class="activity-badge">Kinematic Revisions</span>
                <span class="activity-badge">Control Loop Tuning</span>
              </div>

              <div class="card__section-label" style="margin-top: 20px;">KEY DELIVERABLES</div>
              <ul class="card__deliverables-list">
                <li>Empirical testing datasets & failure mode analysis</li>
                <li>Thermal and continuous duty cycle validation</li>
                <li>Firmware fail-safes and sensor calibration routines</li>
                <li>Hardened revision 2 mechanical CAD updates</li>
              </ul>

              <div class="card__action-row">
                <button class="btn btn--primary" data-open-modal="contact" data-prefill="services" data-role="Stage 03 Testing">
                  <span>Inquire on Testing & Validation</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </article>

            <!-- Stage 04 -->
            <article class="service-card" id="service-card-3" data-service="3">
              <div class="card__header">
                <span class="card__number">STAGE 04</span>
                <span class="card__tag">IP STRUCTURE & FILING</span>
              </div>
              <h3 class="card__title">IP Filing</h3>
              <p class="card__desc">
                With 6+ patents already filed by our team, we help structure technical work so novel inventions, kinematics, and control mechanisms are prepared for defensible IP prosecution.
              </p>

              <div class="card__section-label">KEY ACTIVITIES</div>
              <div class="card__activities">
                <span class="activity-badge">Technical Invention Disclosures</span>
                <span class="activity-badge">Engineering Schematics</span>
                <span class="activity-badge">Claim Technical Support</span>
                <span class="activity-badge">Patent Counsel Briefing</span>
                <span class="activity-badge">Defensible Novelty Prep</span>
              </div>

              <div class="card__section-label" style="margin-top: 20px;">KEY DELIVERABLES</div>
              <ul class="card__deliverables-list">
                <li>Comprehensive invention disclosure technical document</li>
                <li>Exploded patent-grade mechanical illustration sheets</li>
                <li>Novelty claim differentiators & kinematic formulations</li>
                <li>Direct engineering coordination with IP attorneys</li>
              </ul>

              <div class="card__action-row">
                <button class="btn btn--primary" data-open-modal="contact" data-prefill="services" data-role="Stage 04 IP Filing">
                  <span>Inquire on IP & Patent Filing</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </article>
          </div>

        </div>

      </div>
    </section>

    <!-- WHO WE WORK WITH -->
    <section class="services-audience-section" id="who-its-for">
      <div class="container">
        <div class="section-intro">
          <div class="section-label">WHO WE WORK WITH</div>
          <h2 class="section-headline reveal-heading">Built for founders needing an elite engineering squad.</h2>
          <p class="section-lead reveal-body">
            We partner with operators who understand market problems but need high-horsepower robotics capability to build the physical solution.
          </p>
        </div>

        <div class="audience-grid">
          <div class="audience-card reveal-card">
            <span class="audience-number">AUDIENCE 01 //</span>
            <h4 class="audience-title">Agricultural & Industrial Operators</h4>
            <p class="audience-desc">
              "You operate commercial agricultural or industrial operations needing custom automated physical machines to solve labor and safety challenges."
            </p>
          </div>

          <div class="audience-card reveal-card">
            <span class="audience-number">AUDIENCE 02 //</span>
            <h4 class="audience-title">Pre-Seed Hardware Startups</h4>
            <p class="audience-desc">
              "You need a credible, working physical prototype to prove feasibility to investors and enterprise customers before raising your next round."
            </p>
          </div>

          <div class="audience-card reveal-card">
            <span class="audience-number">AUDIENCE 03 //</span>
            <h4 class="audience-title">Teams Protecting Technical IP</h4>
            <p class="audience-desc">
              "You want to validate, prototype, and rigorously document technical inventions before broadly pitching or scaling commercial development."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ENGAGEMENT MODELS -->
    <section class="services-models-section" id="engagement-models">
      <div class="container">
        <div class="section-intro">
          <div class="section-label">ENGAGEMENT MODELS</div>
          <h2 class="section-headline reveal-heading">Two ways to work with Thenine.</h2>
          <p class="section-lead reveal-body">
            Transparent, milestone-driven technical partnerships tailored to your stage and speed.
          </p>
        </div>

        <div class="models-grid">
          <div class="model-card reveal-card">
            <span class="model-option-tag">OPTION 01 // DEFINED MILESTONE</span>
            <h3 class="model-title">Fixed-Scope Project</h3>
            <p class="model-desc">
              Ideal for a clearly defined prototype, specific technical milestone, feasibility study, or functional proof-of-concept. Scope, deliverables, and project milestones are defined upfront.
            </p>
            <ul class="model-bullets">
              <li>Clearly bounded technical deliverables</li>
              <li>Fixed timeline and transparent delivery gates</li>
              <li>Complete IP and source code assignment</li>
            </ul>
            <button class="btn btn--primary" data-open-modal="contact" data-prefill="services">
              <span>Discuss your project</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>

          <div class="model-card reveal-card">
            <span class="model-option-tag">OPTION 02 // EMBEDDED TEAM</span>
            <h3 class="model-title">Ongoing R&D Partner</h3>
            <p class="model-desc">
              Best for longer development cycles, repeated experimentation, evolving requirements, and startups without an internal robotics team. Thenine operates as your extended technical R&D lab.
            </p>
            <ul class="model-bullets">
              <li>Full access to mechanical, embedded, and software engineers</li>
              <li>Iterative weekly sprints and hardware testing cycles</li>
              <li>Flexible roadmap adaptation as your startup discovers market fit</li>
            </ul>
            <button class="btn btn--primary" data-open-modal="contact" data-prefill="services">
              <span>Discuss your project</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES FINAL CTA -->
    <section class="cinematic-cta-section">
      <div class="cta-radial-glow"></div>
      <div class="container cta-container">
        <div class="section-label">// GET STARTED</div>
        <h2 class="cta-headline">
          &ldquo;Have the idea.<br>Need the machine?&rdquo;
        </h2>
        <p class="cta-subtext">
          Tell us what you're trying to build. Reach our engineering team at <a href="mailto:info@thenine.co.in" style="color: var(--blue-accent);">info@thenine.co.in</a>.
        </p>
        <button class="btn btn--primary btn--large" data-open-modal="contact" data-prefill="services">
          <span>Start a conversation</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    </section>
  `;
}
