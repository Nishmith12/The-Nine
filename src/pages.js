/**
 * pages.js — Thenine LLP Core Page Templates
 * 1. Investors Page (Thesis, Problem->Approach, 12-Month Roadmap, Founding Team, SAFE Fundraise)
 * 2. Careers Page (Build from zero, Why join early, 5 Founding Technical Roles)
 * 3. Services Page (From idea to prototype to IP, Pinned 4-stage process, Who it's for, Engagement models)
 */

// ─── 01. INVESTORS PAGE ──────────────────────────────
export function renderInvestorsPage() {
  return `
    <!-- Investors Hero -->
    <section class="page-hero" id="investors-hero">
      <div class="hero__content">
        <div class="section-label">THENINE // ROBOTICS</div>
        <div class="hero__headline-container">
          <div class="hero__line-mask">
            <h1 class="hero__line">Robots built for</h1>
          </div>
          <div class="hero__line-mask">
            <h1 class="hero__line hero__line--accent">the real world.</h1>
          </div>
        </div>
        <p class="hero__description">
          We're building robotic systems that handle real-world variation instead of relying on fixed, perfectly controlled automation.
        </p>
        <div class="hero__actions">
          <button class="btn btn--primary" data-open-modal="contact" data-prefill="investor">
            <span>Investor conversations</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <a href="#thesis" class="btn btn--secondary">
            <span>Our thesis</span>
          </a>
        </div>
        <div class="hero__meta">
          <div class="hero__meta-col">
            <span class="meta-label">FOCUS</span>
            <span class="meta-value">Adaptive Manipulation</span>
          </div>
          <div class="hero__meta-col">
            <span class="meta-label">STAGE</span>
            <span class="meta-value">Pre-Seed Robotics</span>
          </div>
          <div class="hero__meta-col">
            <span class="meta-label">INSTRUMENT</span>
            <span class="meta-value">SAFE Round Open</span>
          </div>
        </div>
      </div>
      <div class="hero__scroll-indicator">
        <div class="scroll-mouse"><div class="scroll-wheel"></div></div>
        <span>SCROLL TO EXPLORE THESIS</span>
      </div>
    </section>

    <!-- 01 / THESIS SECTION -->
    <section class="investors-thesis-section" id="thesis">
      <div class="container">
        <div class="section-label">01 // THESIS</div>
        <div class="thesis-callout reveal-card">
          <h2 class="thesis-statement">
            "Fixed automation works when the world is predictable.<br>
            We are building robots for when it isn't."
          </h2>
          <div class="thesis-body">
            <p>
              Traditional industrial automation performs extremely well in highly structured environments where every component arrives at an exact coordinate under controlled lighting.
            </p>
            <p style="margin-top: 16px;">
              However, many of the most valuable real-world physical tasks contain high entropy. Thenine's core thesis is to build robotic systems capable of conquering real-world variation through unified perception, real-time reasoning, and adaptable manipulation.
            </p>
          </div>
          <div class="variation-factors-grid">
            <div class="factor-tag">Object Variation & Deformability</div>
            <div class="factor-tag">Dynamic Lighting & Specularity</div>
            <div class="factor-tag">Uncertain Physical Geometry</div>
            <div class="factor-tag">Unpredictable Part Positioning</div>
            <div class="factor-tag">Dynamic Human Shared Workspaces</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROBLEM → APPROACH SECTION -->
    <section class="investors-approach-section" id="approach">
      <div class="container">
        <div class="section-intro">
          <div class="section-label">PROBLEM & APPROACH</div>
          <h2 class="section-headline reveal-heading">Real environments don't repeat perfectly.</h2>
          <p class="section-lead reveal-body">
            Rigid automation requires hyper-controlled inputs and expensive custom fixtures. Changing products or shifting environments often demands total re-engineering. Thenine reverses this paradigm:
          </p>
        </div>

        <div style="margin-bottom: 24px;">
          <h3 style="font-family: var(--font-display); font-size: 1.6rem; color: var(--text-white);" class="reveal-heading">
            "Perception first. Adaptation second. Action third."
          </h3>
        </div>

        <div class="approach-steps-grid">
          <div class="approach-step-card reveal-card">
            <span class="step-number">STAGE 01</span>
            <h4 class="step-title">Perceive</h4>
            <p class="step-desc">
              Continuously understand objects, spatial geometry, surface characteristics, and environmental variance with multimodal 3D vision and tactile feedback.
            </p>
          </div>

          <div class="approach-step-card reveal-card">
            <span class="step-number">STAGE 02</span>
            <h4 class="step-title">Reason</h4>
            <p class="step-desc">
              Synthesize real-time situational dynamics to determine how the kinematic mechanism should interact with non-standard situations and unpredictable part shifts.
            </p>
          </div>

          <div class="approach-step-card reveal-card">
            <span class="step-number">STAGE 03</span>
            <h4 class="step-title">Act</h4>
            <p class="step-desc">
              Execute micro-second closed-loop robotic motion with compliant force control, eliminating catastrophic jams and physical tool collisions.
            </p>
          </div>

          <div class="approach-step-card reveal-card">
            <span class="step-number">STAGE 04</span>
            <h4 class="step-title">Learn / Iterate</h4>
            <p class="step-desc">
              Continuously log physical edge-case telemetry to improve system robustness and generalize adaptation across future variations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 02 / 12-MONTH ROADMAP -->
    <section class="investors-roadmap-section" id="roadmap">
      <div class="container">
        <div class="section-intro">
          <div class="section-label">02 // ROADMAP</div>
          <h2 class="section-headline reveal-heading">The next 12 months.</h2>
          <p class="section-lead reveal-body">
            A disciplined, forward-looking engineering trajectory engineered to systematically derisk physical manipulation and validate commercial utility.
          </p>
        </div>

        <div class="roadmap-timeline">
          <div class="roadmap-card reveal-card">
            <span class="roadmap-timeframe">0 – 3 MONTHS</span>
            <h4 class="roadmap-phase-title">Core Platform</h4>
            <ul class="roadmap-deliverables">
              <li>Initial robotics architecture</li>
              <li>Perception & depth sensor stack</li>
              <li>First manipulation experiments</li>
              <li>Prototype hardware testbed</li>
            </ul>
          </div>

          <div class="roadmap-card reveal-card">
            <span class="roadmap-timeframe">3 – 6 MONTHS</span>
            <h4 class="roadmap-phase-title">Integrated Prototype</h4>
            <ul class="roadmap-deliverables">
              <li>Combine perception and closed-loop motion</li>
              <li>Autonomous task execution loops</li>
              <li>Repeated real-world stress testing</li>
              <li>Kinematic reliability improvements</li>
            </ul>
          </div>

          <div class="roadmap-card reveal-card">
            <span class="roadmap-timeframe">6 – 9 MONTHS</span>
            <h4 class="roadmap-phase-title">Real-World Validation</h4>
            <ul class="roadmap-deliverables">
              <li>Deploy into less controlled environments</li>
              <li>Collect failure edge cases</li>
              <li>Improve physical adaptability</li>
              <li>Benchmark system performance metrics</li>
            </ul>
          </div>

          <div class="roadmap-card reveal-card">
            <span class="roadmap-timeframe">9 – 12 MONTHS</span>
            <h4 class="roadmap-phase-title">Demonstration System</h4>
            <ul class="roadmap-deliverables">
              <li>Robust production-ready working prototype</li>
              <li>Repeatable live technical demo</li>
              <li>Third-party technical validation</li>
              <li>Prepare for broader pilots & next round</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 03 / FOUNDING TEAM -->
    <section class="investors-team-section" id="team">
      <div class="container">
        <div class="section-intro">
          <div class="section-label">03 // TEAM</div>
          <h2 class="section-headline reveal-heading">Built by a founding team obsessed with making robots work outside the lab.</h2>
          <p class="section-lead reveal-body">
            Combining mechanical precision, low-level real-time embedded engineering, and modern adaptive perception.
          </p>
        </div>

        <div class="team-grid">
          <div class="team-card reveal-card">
            <span class="team-role-badge">FOUNDER // CEO</span>
            <h3 class="team-name">[Founder Name]</h3>
            <p class="team-bio">[Short background on robotics leadership, engineering vision, and startup execution]</p>
          </div>

          <div class="team-card reveal-card">
            <span class="team-role-badge">FOUNDER // CTO</span>
            <h3 class="team-name">[Founder Name]</h3>
            <p class="team-bio">[Short background on kinematic design, embedded control systems, and autonomous architecture]</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 04 / FUNDRAISE SECTION -->
    <section class="investors-fundraise-section" id="fundraise">
      <div class="container">
        <div class="section-label">04 // FUNDRAISE</div>
        <div class="fundraise-panel reveal-card">
          <div class="fundraise-stats">
            <div>
              <h3 style="font-family: var(--font-display); font-size: 2rem; color: var(--text-white); margin-bottom: 8px;">
                Building the first version of Thenine.
              </h3>
              <p style="color: var(--text-secondary); font-size: 0.95rem;">
                Raising pre-seed capital to assemble our founding technical quintet and accelerate physical prototype validation.
              </p>
            </div>
            <div class="fundraise-stat-item">
              <span class="stat-key">INSTRUMENT</span>
              <span class="stat-val">SAFE</span>
            </div>
            <div class="fundraise-stat-item">
              <span class="stat-key">TARGET RAISE</span>
              <span class="stat-val">[INSERT FUNDRAISING AMOUNT]</span>
            </div>
            <div class="fundraise-stat-item">
              <span class="stat-key">PROJECTED RUNWAY</span>
              <span class="stat-val">[INSERT RUNWAY] MONTHS</span>
            </div>
          </div>

          <div>
            <h4 class="fundraise-breakdown-title">Planned Use of Funds:</h4>
            <ul class="fundraise-use-list">
              <li>Founding engineering team salaries & key technical equity</li>
              <li>Robotics hardware, precision actuators & sensors</li>
              <li>Compute, simulation clusters & development infrastructure</li>
              <li>Prototype manufacturing & rapid CNC/titanium machining</li>
              <li>Rigorous testing, calibration & failure-case iteration</li>
              <li>Core technical IP documentation & legal filing costs</li>
            </ul>
            <div style="margin-top: 36px;">
              <button class="btn btn--primary btn--full" data-open-modal="contact" data-prefill="investor">
                <span>Request Investor Briefing</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INVESTOR FINAL CTA -->
    <section class="cinematic-cta-section">
      <div class="cta-radial-glow"></div>
      <div class="container cta-container">
        <div class="section-label">// CONNECT</div>
        <h2 class="cta-headline">
          "If you're investing in the next generation of real-world robotics, we'd like to talk."
        </h2>
        <p class="cta-subtext">
          Investor introductions and conversations are welcome. Direct dialogue with our founding team.
        </p>
        <button class="btn btn--primary btn--large" data-open-modal="contact" data-prefill="investor">
          <span>Contact Thenine</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
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
        <div class="section-label">JOIN THENINE</div>
        <div class="hero__headline-container">
          <div class="hero__line-mask">
            <h1 class="hero__line">Build robots</h1>
          </div>
          <div class="hero__line-mask">
            <h1 class="hero__line hero__line--accent">from zero.</h1>
          </div>
        </div>
        <p class="hero__description">
          Join the founding engineering team building robotic systems designed for real-world uncertainty. We are hiring our core technical group of 5 engineers.
        </p>
        <div class="hero__actions">
          <a href="#open-roles" class="btn btn--primary">
            <span>See open roles</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
          </a>
          <button class="btn btn--secondary" data-open-modal="contact" data-prefill="careers">
            <span>General application</span>
          </button>
        </div>
        <div class="hero__meta">
          <div class="hero__meta-col">
            <span class="meta-label">TEAM SIZE</span>
            <span class="meta-value">First 5 Engineers</span>
          </div>
          <div class="hero__meta-col">
            <span class="meta-label">EQUITY</span>
            <span class="meta-value">Founding Grants</span>
          </div>
          <div class="hero__meta-col">
            <span class="meta-label">CULTURE</span>
            <span class="meta-value">High Agency & Math Rigor</span>
          </div>
        </div>
      </div>
      <div class="hero__scroll-indicator">
        <div class="scroll-mouse"><div class="scroll-wheel"></div></div>
        <span>SCROLL TO OPEN ROLES</span>
      </div>
    </section>

    <!-- WHY JOIN EARLY -->
    <section class="careers-why-section" id="why-join">
      <div class="container">
        <div class="section-intro">
          <div class="section-label">WHY JOIN EARLY</div>
          <h2 class="section-headline reveal-heading">
            Not employee #200.<br>One of the people who defines the system.
          </h2>
          <p class="section-lead reveal-body">
            At Thenine, you aren't maintaining legacy code or polishing minor sub-features. You are making the architectural choices that will define physical machines for the next decade.
          </p>
        </div>

        <div class="why-early-grid">
          <div class="why-early-card reveal-card">
            <span class="why-card-icon">01 //</span>
            <h4 class="why-card-title">Day-One Architectural Influence</h4>
            <p class="why-card-desc">
              Make foundational decisions on real-time operating systems, motor control loops, and multimodal perception stacks from a clean sheet.
            </p>
          </div>

          <div class="why-early-card reveal-card">
            <span class="why-card-icon">02 //</span>
            <h4 class="why-card-title">Cross Hardware-Software Boundaries</h4>
            <p class="why-card-desc">
              We reject rigid functional silos. Software engineers test on physical dynos; mechanical designers write Python kinematics analyzers.
            </p>
          </div>

          <div class="why-early-card reveal-card">
            <span class="why-card-icon">03 //</span>
            <h4 class="why-card-title">Rapid Physical Prototyping</h4>
            <p class="why-card-desc">
              Tight feedback loops. Ideas formulated in the morning are simulated at noon and machining on CNC or 3D titanium by evening.
            </p>
          </div>

          <div class="why-early-card reveal-card">
            <span class="why-card-icon">04 //</span>
            <h4 class="why-card-title">Foundational Technical Ownership</h4>
            <p class="why-card-desc">
              Own complete subsystems end-to-end. Your algorithms and kinematics directly control multi-axis physical actuators.
            </p>
          </div>

          <div class="why-early-card reveal-card">
            <span class="why-card-icon">05 //</span>
            <h4 class="why-card-title">Simulation to Physical Reality</h4>
            <p class="why-card-desc">
              Experience the profound satisfaction of watching simulated neural policies deploy on heavy steel, moving real payloads.
            </p>
          </div>

          <div class="why-early-card reveal-card">
            <span class="why-card-icon">06 //</span>
            <h4 class="why-card-title">Shape Engineering Culture</h4>
            <p class="why-card-desc">
              Define the standards of rigor, intellectual honesty, and speed that will guide Thenine as the company scales.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5 OPEN ROLES -->
    <section class="careers-roles-section" id="open-roles">
      <div class="container">
        <div class="section-intro">
          <div class="section-label">OPEN TECHNICAL ROLES</div>
          <h2 class="section-headline reveal-heading">Founding Technical Quintet.</h2>
          <p class="section-lead reveal-body">
            Five critical disciplines needed to build machines that master real-world variation.
          </p>
        </div>

        <div class="roles-stack">
          <!-- Role 01 -->
          <div class="role-row-card reveal-card">
            <div class="role-col-title">
              <span class="role-number">ROLE 01 // SOFTWARE</span>
              <h3 class="role-name">Robotics Software Engineer</h3>
            </div>
            <div>
              <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 12px;">
                Design robot control algorithms, motion planners, real-time ROS2/Rust integration, and distributed kinematic systems.
              </p>
              <div class="role-focus-tags">
                <span class="role-tag">Robot Control</span>
                <span class="role-tag">Motion Planning</span>
                <span class="role-tag">ROS / ROS2</span>
                <span class="role-tag">Systems Integration</span>
                <span class="role-tag">Real-Time Linux</span>
              </div>
            </div>
            <div class="role-apply-btn">
              <button class="btn btn--primary" data-open-modal="contact" data-prefill="careers" data-role="Robotics Software Engineer">
                Apply Role →
              </button>
            </div>
          </div>

          <!-- Role 02 -->
          <div class="role-row-card reveal-card">
            <div class="role-col-title">
              <span class="role-number">ROLE 02 // PERCEPTION</span>
              <h3 class="role-name">Perception / Computer Vision Engineer</h3>
            </div>
            <div>
              <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 12px;">
                Develop 3D neural voxel point cloud processing, real-time pose estimation, depth sensing pipelines, and multimodal sensor fusion.
              </p>
              <div class="role-focus-tags">
                <span class="role-tag">Object Detection</span>
                <span class="role-tag">Pose Estimation</span>
                <span class="role-tag">Depth Sensing</span>
                <span class="role-tag">Point Clouds</span>
                <span class="role-tag">Sensor Fusion</span>
              </div>
            </div>
            <div class="role-apply-btn">
              <button class="btn btn--primary" data-open-modal="contact" data-prefill="careers" data-role="Perception / CV Engineer">
                Apply Role →
              </button>
            </div>
          </div>

          <!-- Role 03 -->
          <div class="role-row-card reveal-card">
            <div class="role-col-title">
              <span class="role-number">ROLE 03 // FIRMWARE</span>
              <h3 class="role-name">Embedded / Firmware Engineer</h3>
            </div>
            <div>
              <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 12px;">
                Author micro-second motor control loops, custom board bring-up, fieldbus communications (CAN/EtherCAT), and sensor interfaces.
              </p>
              <div class="role-focus-tags">
                <span class="role-tag">Microcontrollers</span>
                <span class="role-tag">Motor Control (FOC)</span>
                <span class="role-tag">Sensors & IMUs</span>
                <span class="role-tag">Communications</span>
                <span class="role-tag">Real-Time Systems</span>
              </div>
            </div>
            <div class="role-apply-btn">
              <button class="btn btn--primary" data-open-modal="contact" data-prefill="careers" data-role="Embedded / Firmware Engineer">
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
                Spearhead CAD topology optimization, precision gearboxes, compliant end-effectors, actuator sizing, and rapid prototyping.
              </p>
              <div class="role-focus-tags">
                <span class="role-tag">CAD & FEA</span>
                <span class="role-tag">Mechanisms</span>
                <span class="role-tag">Actuators</span>
                <span class="role-tag">End-Effectors</span>
                <span class="role-tag">Design-for-Iteration</span>
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
              <span class="role-number">ROLE 05 // EMBODIED AI</span>
              <h3 class="role-name">ML Engineer — Robotics</h3>
            </div>
            <div>
              <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 12px;">
                Train learning-based robotics policies, multimodal models, imitation and reinforcement learning models, and edge inference runtimes.
              </p>
              <div class="role-focus-tags">
                <span class="role-tag">Learning-based Robotics</span>
                <span class="role-tag">Multimodal Models</span>
                <span class="role-tag">Imitation / RL</span>
                <span class="role-tag">Robotics Datasets</span>
                <span class="role-tag">Inference Pipelines</span>
              </div>
            </div>
            <div class="role-apply-btn">
              <button class="btn btn--primary" data-open-modal="contact" data-prefill="careers" data-role="ML Engineer — Robotics">
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
        <h2 class="cta-headline">"Help build the machine."</h2>
        <p class="cta-subtext">
          We care more about what you can build than how polished your résumé looks. Don't see your exact role? Send us what you've built.
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
        <div class="section-label">THENINE R&D</div>
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
          We help startup founders turn robotics concepts into credible working prototypes and protect the resulting technical IP.
        </p>
        <div class="hero__actions">
          <button class="btn btn--primary" data-open-modal="contact" data-prefill="services">
            <span>Discuss your project</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <a href="#services-process" class="btn btn--secondary">
            <span>How it works</span>
          </a>
        </div>
        <div class="hero__meta">
          <div class="hero__meta-col">
            <span class="meta-label">TARGET CLIENT</span>
            <span class="meta-value">Visionary Founders</span>
          </div>
          <div class="hero__meta-col">
            <span class="meta-label">LIFECYCLE</span>
            <span class="meta-value">Concept to Filed IP</span>
          </div>
          <div class="hero__meta-col">
            <span class="meta-label">DELIVERY</span>
            <span class="meta-value">Turnkey Engineering</span>
          </div>
        </div>
      </div>
      <div class="hero__scroll-indicator">
        <div class="scroll-mouse"><div class="scroll-wheel"></div></div>
        <span>SCROLL FOR 4-STAGE PROCESS</span>
      </div>
    </section>

    <!-- SERVICES PROCESS (PINNED SCROLLYTELLING 400vh) -->
    <section class="services-scrolly-wrapper" id="services-process">
      <div class="services-sticky-viewport" id="services-pin">

        <div class="services-grid">
          <!-- Left: 3D Visualization Target & Telemetry HUD -->
          <div class="services-visual-col">
            <div class="services-3d-target">
              <div class="services-stage-hud">
                <div class="stage-hud__header">
                  <span class="stage-hud__badge" id="service-hud-badge">01 // IDEA & FEASIBILITY</span>
                  <span class="stage-hud__coord">SYS_VEC: [1.88, 0.42, -0.15]</span>
                </div>
                <div class="stage-hud__waveform">
                  <div class="wave-bar"></div>
                  <div class="wave-bar"></div>
                  <div class="wave-bar"></div>
                  <div class="wave-bar"></div>
                  <div class="wave-bar"></div>
                  <div class="wave-bar"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Headings & 4 Stages Card Stack -->
          <div class="services-content-col">
            <div class="services-header">
              <div class="section-label">PROCESS // END-TO-END R&D</div>
              <h2 style="font-family: var(--font-display); font-size: 2.8rem; color: var(--text-white); margin-bottom: 12px; letter-spacing: -0.03em;">
                The 4-Stage Lifecycle
              </h2>
              <p style="color: var(--text-secondary); font-size: 1rem; margin-bottom: 24px;">
                Scroll through each phase. The viewport stays pinned while your concept transforms into a protected physical system.
              </p>
              
              <div class="services-progress-track">
                <div class="progress-tab active" data-index="0">01 Feasibility</div>
                <div class="progress-tab" data-index="1">02 Prototype</div>
                <div class="progress-tab" data-index="2">03 Testing</div>
                <div class="progress-tab" data-index="3">04 IP Filing</div>
                <div class="progress-indicator-line" id="services-progress-line"></div>
              </div>
            </div>

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
                <div class="card__activities">
                  <span class="activity-badge">Requirements Formulation</span>
                  <span class="activity-badge">Kinematic Feasibility</span>
                  <span class="activity-badge">System Architecture</span>
                  <span class="activity-badge">Component Selection</span>
                  <span class="activity-badge">Technical Risk Derisking</span>
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
                <div class="card__activities">
                  <span class="activity-badge">Mechanical CAD & FEA</span>
                  <span class="activity-badge">Custom Motor Electronics</span>
                  <span class="activity-badge">Embedded Firmware</span>
                  <span class="activity-badge">Robotics Software Stack</span>
                  <span class="activity-badge">Rapid CNC & Machining</span>
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
                <div class="card__activities">
                  <span class="activity-badge">Stress & Duty Profiling</span>
                  <span class="activity-badge">Telemetry Data Collection</span>
                  <span class="activity-badge">Reliability Benchmarking</span>
                  <span class="activity-badge">Kinematic Revisions</span>
                  <span class="activity-badge">Control Loop Tuning</span>
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
                  We help structure and document the technical engineering work so all novel inventions, kinematics, and control mechanisms are prepared for IP filing with appropriate legal and patent professionals.
                </p>
                <div class="card__activities">
                  <span class="activity-badge">Technical Invention Disclosures</span>
                  <span class="activity-badge">Engineering Schematics</span>
                  <span class="activity-badge">Claim Technical Support</span>
                  <span class="activity-badge">Patent Counsel Briefing</span>
                  <span class="activity-badge">Defensible Novelty Prep</span>
                </div>
              </article>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- WHO WE WORK WITH -->
    <section class="services-audience-section" id="who-its-for">
      <div class="container">
        <div class="section-intro">
          <div class="section-label">WHO WE WORK WITH</div>
          <h2 class="section-headline reveal-heading">Built for founders needing the engineering team.</h2>
          <p class="section-lead reveal-body">
            We partner with operators who understand market problems but need high-horsepower robotics capability to build the physical solution.
          </p>
        </div>

        <div class="audience-grid">
          <div class="audience-card reveal-card">
            <span class="audience-number">AUDIENCE 01 //</span>
            <h4 class="audience-title">Non-Technical Founders</h4>
            <p class="audience-desc">
              "You understand the problem and the commercial opportunity, but need an elite engineering team capable of building the physical system."
            </p>
          </div>

          <div class="audience-card reveal-card">
            <span class="audience-number">AUDIENCE 02 //</span>
            <h4 class="audience-title">Pre-Seed Startups</h4>
            <p class="audience-desc">
              "You need a credible, working physical prototype to prove feasibility to investors and customers before raising your next round."
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
          "Have the idea.<br>Need the machine?"
        </h2>
        <p class="cta-subtext">
          Tell us what you're trying to build. We'll assess technical feasibility and discuss how to prototype it.
        </p>
        <button class="btn btn--primary btn--large" data-open-modal="contact" data-prefill="services">
          <span>Start a conversation</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    </section>
  `;
}
