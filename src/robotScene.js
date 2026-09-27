/**
 * robotScene.js — Thenine Blue 3D Orbital & Kinematics Visualizer
 * Styled after the Thenine official logo: orbital paths, trajectory arcs,
 * electric blue point clouds (#1D6FFF), deep navy (#071E8C), and precision coordinate grids.
 */
import * as THREE from 'three';

const CONFIG = {
  particleCount: 4200,
  dpr: Math.min(window.devicePixelRatio || 1, 2),
};

let scene, camera, renderer;
let particleSystem, particleGeometry, particleMaterial;
let orbitalRingsGroup;
let shapes = [];
let currentBuffer;
let animFrameId;
let startTime = performance.now();
let lastTime = performance.now();

// Interactive & Scroll State
let scrollState = {
  heroProgress: 0,
  servicesProgress: 0,
  activeServiceIndex: 0,
  activeServiceMix: 0,
  globalProgress: 0,
};

let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
let particleGroup;
let ambientOrbs = [];

// ─── Shape Generators ────────────────────────────────

// 0: Orbital Mechanism & Adaptive Torus (Investors / Idea Feasibility)
function createOrbitalMechanism(count) {
  const pos = new Float32Array(count * 3);
  const r = 2.1;
  const tube = 0.65;

  for (let i = 0; i < count; i++) {
    // 35% of particles form sweeping orbital ellipse matching Thenine logo
    if (i < count * 0.35) {
      const angle = (i / (count * 0.35)) * Math.PI * 2;
      const arcR = 2.5 + (Math.random() - 0.5) * 0.2;
      const tilt = Math.PI / 4.5;
      const x = Math.cos(angle) * arcR;
      const y = Math.sin(angle) * arcR * Math.cos(tilt);
      const z = Math.sin(angle) * arcR * Math.sin(tilt);
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    } else {
      // Kinematic central torus & sensor cloud
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      const curR = r + (Math.random() - 0.5) * 0.15;
      const curTube = tube * (0.8 + Math.random() * 0.4);

      const x = (curR + curTube * Math.cos(v)) * Math.cos(u);
      const y = (curR + curTube * Math.cos(v)) * Math.sin(u);
      const z = curTube * Math.sin(v) + Math.sin(u * 2) * 0.25;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
  }
  return pos;
}

// 1: CAD Kinematic Linkage & Orthogonal Matrix (Prototype Build)
function createCADLinkage(count, size = 2.5) {
  const pos = new Float32Array(count * 3);
  const half = size / 2;

  // Robotic Arm Linkages & joints
  const joints = [
    { x: -1.2, y: -1.4, z: 0, r: 0.6 }, // Base
    { x: -0.6, y: -0.3, z: 0, r: 0.4 }, // Shoulder
    { x: 0.5, y: 0.6, z: 0, r: 0.35 },  // Elbow
    { x: 1.4, y: 1.1, z: 0, r: 0.25 },  // Wrist
  ];

  for (let i = 0; i < count; i++) {
    const mode = Math.random();
    if (mode < 0.45) {
      // On one of the joints
      const j = joints[Math.floor(Math.random() * joints.length)];
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      pos[i * 3] = j.x + j.r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = j.y + j.r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = j.z + j.r * Math.cos(phi);
    } else if (mode < 0.75) {
      // Connecting linkages
      const jIdx = Math.floor(Math.random() * (joints.length - 1));
      const j1 = joints[jIdx];
      const j2 = joints[jIdx + 1];
      const t = Math.random();
      const radius = 0.12;
      const angle = Math.random() * Math.PI * 2;
      pos[i * 3] = j1.x + (j2.x - j1.x) * t + Math.cos(angle) * radius;
      pos[i * 3 + 1] = j1.y + (j2.y - j1.y) * t + Math.sin(angle) * radius;
      pos[i * 3 + 2] = j1.z + (j2.z - j1.z) * t + (Math.random() - 0.5) * 0.1;
    } else {
      // Outer coordinate bounding cage
      const axis = Math.floor(Math.random() * 3);
      const sign1 = Math.random() > 0.5 ? 1 : -1;
      const sign2 = Math.random() > 0.5 ? 1 : -1;
      const t = (Math.random() - 0.5) * 2 * half;
      if (axis === 0) { pos[i * 3] = t; pos[i * 3 + 1] = sign1 * half; pos[i * 3 + 2] = sign2 * half; }
      else if (axis === 1) { pos[i * 3] = sign1 * half; pos[i * 3 + 1] = t; pos[i * 3 + 2] = sign2 * half; }
      else { pos[i * 3] = sign1 * half; pos[i * 3 + 1] = sign2 * half; pos[i * 3 + 2] = t; }
    }
  }
  return pos;
}

// 2: Point Cloud & Adaptive Sensor Sweep (Testing & Iteration)
function createSensorPointCloud(count) {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Spherical range scanner point-cloud with dynamic variation waves
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * Math.PI * 2;
    // Harmonic ripples representing environmental variation
    const variation = 1 + 0.22 * Math.sin(phi * 6) * Math.sin(theta * 6);
    const r = (1.8 + Math.random() * 0.4) * variation;

    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi);
  }
  return pos;
}

// 3: Crystalline Architecture & IP Vector Spec (Filed IP)
function createIPVectorSpec(count) {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const isPlane = Math.random() < 0.6;
    if (isPlane) {
      // Stratified technical patent layers
      const layer = Math.floor(Math.random() * 5) - 2;
      const y = layer * 0.7;
      const u = (Math.random() - 0.5) * 3.4;
      const v = (Math.random() - 0.5) * 2.6;
      pos[i * 3] = u;
      pos[i * 3 + 1] = y + (Math.random() - 0.5) * 0.05;
      pos[i * 3 + 2] = v;
    } else {
      // Radiant focal core
      const angle = Math.random() * Math.PI * 2;
      const elevation = (Math.random() - 0.5) * Math.PI;
      const dist = 0.4 + Math.random() * 2.2;
      pos[i * 3] = Math.cos(angle) * Math.cos(elevation) * dist;
      pos[i * 3 + 1] = Math.sin(elevation) * dist;
      pos[i * 3 + 2] = Math.sin(angle) * Math.cos(elevation) * dist;
    }
  }
  return pos;
}

// ─── Initialize Scene ────────────────────────────────
export function initScene(container) {
  if (!container) return null;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 7.2);
  camera.lookAt(0, 0, 0);

  const isMobile = window.innerWidth < 768;
  renderer = new THREE.WebGLRenderer({
    antialias: !isMobile,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(isMobile ? 1 : CONFIG.dpr);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Group containing particles and vector orbits
  particleGroup = new THREE.Group();
  if (!isMobile) {
    particleGroup.position.set(1.4, 0, 0);
  } else {
    particleGroup.position.set(0, 0.3, 0);
    particleGroup.scale.set(0.75, 0.75, 0.75);
  }
  scene.add(particleGroup);

  // Pre-generate 4 shapes
  shapes = [
    createOrbitalMechanism(CONFIG.particleCount), // 0: Orbital Mechanism
    createCADLinkage(CONFIG.particleCount),       // 1: Prototype Build
    createSensorPointCloud(CONFIG.particleCount), // 2: Testing & Iteration
    createIPVectorSpec(CONFIG.particleCount),     // 3: Filed IP
  ];

  // Particle Buffer Geometry
  particleGeometry = new THREE.BufferGeometry();
  currentBuffer = new Float32Array(CONFIG.particleCount * 3);
  currentBuffer.set(shapes[0]);

  const colors = new Float32Array(CONFIG.particleCount * 3);
  const sizes = new Float32Array(CONFIG.particleCount);

  // Thenine Blue Palette: Electric Blue (#1D6FFF), Royal Blue (#1455F5), Accent (#75A7FF), Crisp White (#F5F7FA)
  const cElectric = new THREE.Color(0x1d6fff);
  const cRoyal = new THREE.Color(0x1455f5);
  const cAccent = new THREE.Color(0x75a7ff);
  const cWhite = new THREE.Color(0xf5f7fa);

  for (let i = 0; i < CONFIG.particleCount; i++) {
    const seed = Math.random();
    let col;
    if (seed < 0.45) {
      col = cElectric.clone().lerp(cRoyal, Math.random() * 0.6);
    } else if (seed < 0.8) {
      col = cAccent.clone().lerp(cElectric, Math.random() * 0.5);
    } else {
      col = cWhite.clone().lerp(cAccent, Math.random() * 0.3);
    }

    colors[i * 3] = col.r;
    colors[i * 3 + 1] = col.g;
    colors[i * 3 + 2] = col.b;

    sizes[i] = 1.0 + Math.random() * 2.2;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(currentBuffer, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  // Custom Shader for Thenine Electric Blue Particles
  particleMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: renderer.getPixelRatio() },
      uColorShift: { value: 0.0 },
    },
    vertexShader: `
      attribute float size;
      varying vec3 vColor;
      varying float vDist;
      uniform float uTime;
      uniform float uPixelRatio;

      void main() {
        vColor = color;
        vec3 p = position;
        float wave = sin(uTime * 1.1 + p.x * 2.2 + p.y * 1.6) * 0.035;
        p += normalize(p + 0.001) * wave;

        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        vDist = -mvPosition.z;
        gl_PointSize = size * uPixelRatio * (6.6 / max(-mvPosition.z, 0.4));
        gl_PointSize = clamp(gl_PointSize, 1.5, 42.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vDist;
      uniform float uColorShift;

      void main() {
        float d = distance(gl_PointCoord, vec2(0.5));
        if (d > 0.5) discard;

        float core = 1.0 - smoothstep(0.0, 0.24, d);
        float halo = 1.0 - smoothstep(0.0, 0.5, d);
        float intensity = core * 1.15 + pow(halo, 1.6) * 0.95;

        // Shift subtly toward pure electric highlight
        vec3 shiftedColor = mix(vColor, vec3(0.11, 0.43, 1.0), uColorShift * 0.25);
        gl_FragColor = vec4(shiftedColor, min(intensity * 1.12, 1.0));
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });

  particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  particleGroup.add(particleSystem);

  // Subtle Orbital Vector Ring (Echoes the Thenine logo orbit)
  createOrbitalRings();

  // Background Royal Blue Glow
  createAmbientGlows();

  // Listeners
  window.addEventListener('resize', onResize);
  window.addEventListener('mousemove', onMouseMove, { passive: true });

  animate();
  return { scene, camera, renderer, particleGroup };
}

// ─── Orbital Vector Lines ─────────────────────────────
function createOrbitalRings() {
  orbitalRingsGroup = new THREE.Group();

  const orbitCurve = new THREE.EllipseCurve(0, 0, 2.6, 2.0, 0, 2 * Math.PI, false, 0);
  const points = orbitCurve.getPoints(96);
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  const mat = new THREE.LineBasicMaterial({
    color: 0x1d6fff,
    transparent: true,
    opacity: 0.28,
    blending: THREE.AdditiveBlending,
  });

  const line1 = new THREE.Line(geo, mat);
  line1.rotation.x = Math.PI / 3;
  line1.rotation.y = Math.PI / 6;
  orbitalRingsGroup.add(line1);

  const line2 = new THREE.Line(geo.clone(), mat.clone());
  line2.rotation.x = -Math.PI / 4;
  line2.rotation.z = Math.PI / 8;
  orbitalRingsGroup.add(line2);

  particleGroup.add(orbitalRingsGroup);
}

// ─── Ambient Glow ────────────────────────────────────
function createAmbientGlows() {
  const geo = new THREE.PlaneGeometry(16, 16);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0x071e8c) }, // Deep Thenine navy/royal blue
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        float d = distance(vUv, vec2(0.5));
        float glow = exp(-d * 3.4) * 0.28;
        glow += exp(-d * 1.5) * 0.10;
        glow *= 0.95 + 0.06 * sin(uTime * 0.4);
        gl_FragColor = vec4(uColor, glow);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });

  const glowMesh = new THREE.Mesh(geo, mat);
  glowMesh.position.set(0, 0, -4);
  scene.add(glowMesh);
  ambientOrbs.push(glowMesh);
}

// ─── Event Handlers ──────────────────────────────────
function onResize() {
  if (!renderer || !camera) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  if (particleMaterial?.uniforms?.uPixelRatio) {
    particleMaterial.uniforms.uPixelRatio.value = renderer.getPixelRatio();
  }
}

function onMouseMove(e) {
  mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
}

// ─── Scrollytelling Update Hook ──────────────────────
export function updateSceneScroll({
  heroProgress = 0,
  servicesProgress = 0,
  activeServiceIndex = 0,
  activeServiceMix = 0,
  globalProgress = 0,
}) {
  scrollState.heroProgress = heroProgress;
  scrollState.servicesProgress = servicesProgress;
  scrollState.activeServiceIndex = Math.min(Math.max(activeServiceIndex, 0), 3);
  scrollState.activeServiceMix = activeServiceMix;
  scrollState.globalProgress = globalProgress;
}

// ─── Animation Loop ──────────────────────────────────
function animate() {
  animFrameId = requestAnimationFrame(animate);

  const now = performance.now();
  const elapsed = (now - startTime) * 0.001;
  lastTime = now;

  mouse.x += (mouse.targetX - mouse.x) * 0.05;
  mouse.y += (mouse.targetY - mouse.y) * 0.05;

  const isMobile = window.innerWidth < 768;

  // Spatial positioning
  if (particleGroup) {
    let targetX = 0;
    let targetY = 0;
    let targetScale = 1.0;

    if (!isMobile) {
      if (scrollState.servicesProgress > 0 && scrollState.servicesProgress < 1) {
        targetX = -1.9;
        targetY = 0.0;
        targetScale = 1.05;
      } else if (scrollState.heroProgress < 1) {
        targetX = THREE.MathUtils.lerp(1.4, -1.9, scrollState.heroProgress);
        targetY = 0.0;
        targetScale = 1.0;
      } else {
        targetX = THREE.MathUtils.lerp(-1.9, 0.0, Math.min(scrollState.globalProgress * 1.5, 1));
        targetY = -0.15;
        targetScale = 0.95;
      }
    } else {
      targetX = 0;
      targetY = scrollState.servicesProgress > 0 ? 0.75 : 0.25;
      targetScale = 0.65;
    }

    particleGroup.position.x += (targetX - particleGroup.position.x) * 0.06;
    particleGroup.position.y += (targetY - particleGroup.position.y) * 0.06;

    // Continuous purposeful rotation + scroll scrub rotation
    const scrubRotY = scrollState.servicesProgress * Math.PI * 3 + scrollState.heroProgress * Math.PI;
    const baseRotY = elapsed * 0.15 + scrubRotY;
    const baseRotX = Math.sin(elapsed * 0.12) * 0.08 + (scrollState.servicesProgress * 0.4);

    particleGroup.rotation.y += (baseRotY + mouse.x * 0.2 - particleGroup.rotation.y) * 0.04;
    particleGroup.rotation.x += (baseRotX + mouse.y * 0.15 - particleGroup.rotation.x) * 0.04;

    particleGroup.scale.setScalar(
      particleGroup.scale.x + (targetScale - particleGroup.scale.x) * 0.05
    );
  }

  // Rotate orbital vector rings
  if (orbitalRingsGroup) {
    orbitalRingsGroup.rotation.z = elapsed * 0.08;
    orbitalRingsGroup.rotation.y = elapsed * 0.05;
  }

  // Particle Shape Interpolation
  if (particleGeometry && shapes.length === 4) {
    const currIdx = scrollState.activeServiceIndex;
    const nextIdx = Math.min(currIdx + 1, 3);
    const mix = scrollState.activeServiceMix;

    const sourceShape = shapes[currIdx];
    const targetShape = shapes[nextIdx];
    const posArr = currentBuffer;

    let hasChange = false;
    for (let i = 0; i < CONFIG.particleCount * 3; i++) {
      const desired = sourceShape[i] * (1.0 - mix) + targetShape[i] * mix;
      const diff = desired - posArr[i];
      if (Math.abs(diff) > 0.0005) {
        posArr[i] += diff * 0.08;
        hasChange = true;
      }
    }

    if (hasChange) {
      particleGeometry.attributes.position.needsUpdate = true;
    }
  }

  // Shader Uniforms
  if (particleMaterial) {
    particleMaterial.uniforms.uTime.value = elapsed;
    particleMaterial.uniforms.uColorShift.value = scrollState.servicesProgress;
  }

  ambientOrbs.forEach(orb => {
    if (orb.material?.uniforms?.uTime) {
      orb.material.uniforms.uTime.value = elapsed;
    }
  });

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

export function disposeScene() {
  if (animFrameId) cancelAnimationFrame(animFrameId);
  window.removeEventListener('resize', onResize);
  window.removeEventListener('mousemove', onMouseMove);
  if (renderer) {
    renderer.dispose();
    renderer.domElement?.remove();
  }
}
