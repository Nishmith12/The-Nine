/**
 * caseStudiesData.js — Case Studies data & visual renderers
 */

export const CASE_STUDIES = [
  {
    id: 'kore-robotics',
    number: '01',
    title: 'Kore Robotics OS',
    category: 'Autonomous Physical Intelligence',
    client: 'Global Logistics & Sorting',
    year: '2026',
    description: 'A breakthrough real-time operating system that orchestrates multi-agent heterogeneous robotic arms under unpredictable real-world parcel variations.',
    metrics: [
      { label: 'Variance Tolerance', value: '100%' },
      { label: 'Decision Latency', value: '< 1.4ms' },
      { label: 'Uptime Reliability', value: '99.99%' },
    ],
    tags: ['Vision-Language-Action', 'Real-time Linux', 'Distributed Mesh'],
    accent: '#a855f7',
    visualSvg: `
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="case-study-svg">
        <defs>
          <linearGradient id="kg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#9333ea" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#3b0764" stop-opacity="0.2"/>
          </linearGradient>
          <linearGradient id="kg2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#c084fc"/>
            <stop offset="100%" stop-color="#6366f1"/>
          </linearGradient>
          <filter id="kgl">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <!-- Background Grid -->
        <g opacity="0.15">
          <line x1="50" y1="0" x2="50" y2="400" stroke="#a855f7" stroke-width="1"/>
          <line x1="150" y1="0" x2="150" y2="400" stroke="#a855f7" stroke-width="1"/>
          <line x1="250" y1="0" x2="250" y2="400" stroke="#a855f7" stroke-width="1"/>
          <line x1="350" y1="0" x2="350" y2="400" stroke="#a855f7" stroke-width="1"/>
          <line x1="450" y1="0" x2="450" y2="400" stroke="#a855f7" stroke-width="1"/>
          <line x1="550" y1="0" x2="550" y2="400" stroke="#a855f7" stroke-width="1"/>
          <line x1="0" y1="100" x2="600" y2="100" stroke="#a855f7" stroke-width="1"/>
          <line x1="0" y1="200" x2="600" y2="200" stroke="#a855f7" stroke-width="1"/>
          <line x1="0" y1="300" x2="600" y2="300" stroke="#a855f7" stroke-width="1"/>
        </g>
        <!-- Isometric Hub Node -->
        <circle cx="300" cy="200" r="90" fill="url(#kg1)" stroke="#a855f7" stroke-width="1.5" filter="url(#kgl)"/>
        <circle cx="300" cy="200" r="140" stroke="#8b5cf6" stroke-width="1" stroke-dasharray="4 6" opacity="0.6"/>
        <circle cx="300" cy="200" r="50" stroke="#c084fc" stroke-width="2"/>
        <circle cx="300" cy="200" r="12" fill="#ffffff" filter="url(#kgl)"/>
        <!-- Satellite Nodes -->
        <circle cx="160" cy="130" r="24" fill="#0f0c24" stroke="#a855f7" stroke-width="1.5"/>
        <line x1="184" y1="140" x2="240" y2="170" stroke="url(#kg2)" stroke-width="2"/>
        <circle cx="440" cy="140" r="28" fill="#0f0c24" stroke="#8b5cf6" stroke-width="1.5"/>
        <line x1="412" y1="155" x2="350" y2="185" stroke="url(#kg2)" stroke-width="2"/>
        <circle cx="430" cy="280" r="20" fill="#0f0c24" stroke="#c084fc" stroke-width="1.5"/>
        <line x1="410" y1="268" x2="360" y2="235" stroke="url(#kg2)" stroke-width="2"/>
        <circle cx="170" cy="290" r="22" fill="#0f0c24" stroke="#6366f1" stroke-width="1.5"/>
        <line x1="192" y1="278" x2="245" y2="235" stroke="url(#kg2)" stroke-width="2"/>
        <!-- Telemetry Labels -->
        <text x="50" y="50" fill="#a855f7" font-family="'JetBrains Mono', monospace" font-size="11" letter-spacing="2">SYS_NODE // 01 KORE_KERNEL</text>
        <text x="50" y="70" fill="#9ca3af" font-family="'JetBrains Mono', monospace" font-size="10">STATUS: DISTRIBUTED SYNCHRONIZED</text>
        <path d="M 50 350 L 120 350 L 150 320 L 220 320 L 250 350 L 340 350" stroke="#c084fc" stroke-width="1.5" fill="none"/>
        <text x="440" y="370" fill="#c084fc" font-family="'JetBrains Mono', monospace" font-size="10">FEEDBACK: 1,200 HZ</text>
      </svg>
    `,
  },
  {
    id: 'aether-vision',
    number: '02',
    title: 'Aether Vision Engine',
    category: 'Edge Neural Perception',
    client: 'Autonomous Micro-Assembly',
    year: '2025',
    description: 'Sub-millimeter multi-camera depth neural network enabling dynamic grasping of transparent, reflective, and deformable items at high cycle speed.',
    metrics: [
      { label: 'Spatial Precision', value: '0.04mm' },
      { label: 'Inference FPS', value: '180 FPS' },
      { label: 'Reflectance Rejection', value: '99.4%' },
    ],
    tags: ['Edge CUDA', 'Stereo Depth', 'Synthetic Training'],
    accent: '#8b5cf6',
    visualSvg: `
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="case-study-svg">
        <defs>
          <linearGradient id="avg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#6366f1" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#2e1065" stop-opacity="0.1"/>
          </linearGradient>
          <filter id="avgl">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <!-- Targeting Reticle -->
        <circle cx="300" cy="200" r="110" stroke="#8b5cf6" stroke-width="1" stroke-dasharray="6 8" opacity="0.5"/>
        <circle cx="300" cy="200" r="75" stroke="#a855f7" stroke-width="1.5"/>
        <line x1="160" y1="200" x2="210" y2="200" stroke="#c084fc" stroke-width="2"/>
        <line x1="390" y1="200" x2="440" y2="200" stroke="#c084fc" stroke-width="2"/>
        <line x1="300" y1="60" x2="300" y2="110" stroke="#c084fc" stroke-width="2"/>
        <line x1="300" y1="290" x2="300" y2="340" stroke="#c084fc" stroke-width="2"/>
        <!-- 3D Depth Point Cloud Representation -->
        <g filter="url(#avgl)">
          <rect x="250" y="150" width="100" height="100" rx="8" fill="url(#avg1)" stroke="#8b5cf6" stroke-width="1.5"/>
          <path d="M 230 180 L 250 150 L 350 150 L 330 180 Z" fill="#6366f1" opacity="0.4"/>
          <path d="M 350 150 L 370 180 L 370 280 L 350 250 Z" fill="#4f46e5" opacity="0.3"/>
          <circle cx="300" cy="200" r="4" fill="#ffffff"/>
        </g>
        <!-- Bounding Box Annotations -->
        <rect x="180" y="110" width="240" height="180" rx="4" stroke="#a855f7" stroke-width="1" stroke-dasharray="2 4" opacity="0.7"/>
        <text x="190" y="130" fill="#a855f7" font-family="'JetBrains Mono', monospace" font-size="10">CONF: 99.87% // DEFORM_TENSOR</text>
        <text x="50" y="50" fill="#c084fc" font-family="'JetBrains Mono', monospace" font-size="11" letter-spacing="2">VISION_STREAM // 4K STEREO</text>
        <text x="50" y="360" fill="#9ca3af" font-family="'JetBrains Mono', monospace" font-size="10">VOXEL_GRID: 512³ // LATENCY: 1.1ms</text>
      </svg>
    `,
  },
  {
    id: 'veloce-dynamics',
    number: '03',
    title: 'Veloce Kinetic Manipulator',
    category: 'Kinematics & Control',
    client: 'Next-Gen Semiconductor Cleanroom',
    year: '2025',
    description: 'Ultra-lightweight direct-drive robotic arm engineered with carbon-fiber topology optimization, moving payloads with zero backlash at 5G acceleration.',
    metrics: [
      { label: 'Max Acceleration', value: '5.2 G' },
      { label: 'Backlash Repeatability', value: '±0.005mm' },
      { label: 'Payload-to-Weight', value: '1.4 : 1' },
    ],
    tags: ['Direct-Drive Motors', 'Topology Optimization', 'FPGA Motion'],
    accent: '#c084fc',
    visualSvg: `
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="case-study-svg">
        <defs>
          <linearGradient id="vg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#7c3aed"/>
            <stop offset="100%" stop-color="#c084fc"/>
          </linearGradient>
          <filter id="vgl">
            <feGaussianBlur stdDeviation="8" result="glow"/>
            <feMerge>
              <feMergeNode in="glow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <!-- Kinetic Vectors & Arc -->
        <path d="M 120 320 Q 220 180 340 140 T 480 180" stroke="url(#vg1)" stroke-width="3" fill="none" filter="url(#vgl)"/>
        <path d="M 130 310 Q 230 190 330 160 T 460 200" stroke="#a855f7" stroke-width="1" stroke-dasharray="4 6" opacity="0.5" fill="none"/>
        <!-- Arm Link Silhouette -->
        <g stroke="#ffffff" stroke-width="1.5">
          <circle cx="160" cy="300" r="18" fill="#1e1b4b"/>
          <line x1="160" y1="300" x2="280" y2="180" stroke="#c084fc" stroke-width="6" stroke-linecap="round"/>
          <circle cx="280" cy="180" r="14" fill="#2e1065"/>
          <line x1="280" y1="180" x2="420" y2="160" stroke="#a855f7" stroke-width="4" stroke-linecap="round"/>
          <circle cx="420" cy="160" r="10" fill="#ffffff" filter="url(#vgl)"/>
        </g>
        <text x="50" y="50" fill="#a855f7" font-family="'JetBrains Mono', monospace" font-size="11" letter-spacing="2">KINEMATIC_VECTOR // 6-DOF TORQUE</text>
        <text x="50" y="70" fill="#9ca3af" font-family="'JetBrains Mono', monospace" font-size="10">ACCEL_VECTOR: PEAK 5.2G ACTIVE</text>
        <text x="380" y="350" fill="#c084fc" font-family="'JetBrains Mono', monospace" font-size="10">SERVO_POLL: 8,000 HZ FPGA</text>
      </svg>
    `,
  },
  {
    id: 'synthetix',
    number: '04',
    title: 'Synthetix Hardware',
    category: 'Generative Biomechanics',
    client: 'Defense & Extreme Environments',
    year: '2024',
    description: 'Generatively designed compliant gripper mechanism fabricated via 3D additive titanium sintering, offering passive conformability across arbitrary shapes.',
    metrics: [
      { label: 'Grip Adaptability', value: 'Universal' },
      { label: 'Weight Reduction', value: '62%' },
      { label: 'Thermal Window', value: '-40°C to 180°C' },
    ],
    tags: ['Titanium Additive', 'Compliant Mechanisms', 'Tactile Arrays'],
    accent: '#9333ea',
    visualSvg: `
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="case-study-svg">
        <defs>
          <linearGradient id="sg1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#4c1d95"/>
            <stop offset="100%" stop-color="#a855f7"/>
          </linearGradient>
          <filter id="sgl">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <!-- Generative Lattice Pattern -->
        <g stroke="#8b5cf6" stroke-width="1.2" opacity="0.6">
          <polygon points="260,120 340,120 380,190 340,260 260,260 220,190" fill="url(#sg1)" opacity="0.3"/>
          <line x1="260" y1="120" x2="340" y2="260"/>
          <line x1="340" y1="120" x2="260" y2="260"/>
          <line x1="220" y1="190" x2="380" y2="190"/>
          <circle cx="300" cy="190" r="30" stroke="#c084fc" stroke-width="2" fill="#0f0c24"/>
          <circle cx="300" cy="190" r="8" fill="#ffffff" filter="url(#sgl)"/>
        </g>
        <path d="M 220 190 Q 180 150 150 190 T 110 190" stroke="#c084fc" stroke-width="2" fill="none"/>
        <path d="M 380 190 Q 420 150 450 190 T 490 190" stroke="#c084fc" stroke-width="2" fill="none"/>
        <text x="50" y="50" fill="#a855f7" font-family="'JetBrains Mono', monospace" font-size="11" letter-spacing="2">SYNTHETIX_LATTICE // ADDITIVE Ti-6Al-4V</text>
        <text x="50" y="360" fill="#9ca3af" font-family="'JetBrains Mono', monospace" font-size="10">FINITE_ELEMENT: ZERO STRESS CONCENTRATION</text>
      </svg>
    `,
  },
];
