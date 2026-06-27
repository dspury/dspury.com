/* ============================================
   DSPURY.COM — V2 Site JS
   ============================================ */

// ---- DATA ----

const projects = [
  {
    title: "New Balance × Willful Bias",
    subtitle: "Sneaker Release Film",
    media: {
      type: "video",
      src: "assets/02_selected_works/newbalance_wb/nb_main.mp4",
      thumb: "assets/02_selected_works/newbalance_wb/nb_thumb.jpg",
      alt: "New Balance × Willful Bias"
    },
    role: "Director — creative direction, VFX integration, AI-enhanced texturing",
    description: "A kinetic exploration of product design through procedural animation.",
    processNotes: [
      "Concept development and storyboard with creative team",
      "Houdini particle simulation for dynamic sneaker geometry",
      "AI-assisted texture generation for organic surface details",
      "Compositing and color grade in DaVinci Resolve"
    ],
    outcome: "High-energy launch content blending procedural animation with generative AI textures.",
    tags: ["Houdini", "AI", "VFX", "Branding"]
  },
  {
    title: "ALTEC Lansing",
    subtitle: "3D Product Universe",
    media: {
      type: "video",
      src: "assets/02_selected_works/altec_speakers/altec3d_main.mp4",
      thumb: "assets/02_selected_works/altec_speakers/altec_thumb.jpg",
      alt: "ALTEC Lansing"
    },
    role: "Producer — 3D modeling, lighting, product visualization",
    description: "Photorealistic product visualization that goes beyond traditional e-commerce.",
    processNotes: [
      "High-poly modeling and UV unwrap in Blender",
      "Realistic material authoring with procedural shaders",
      "Studio lighting setup for product hero shots",
      "Render passes composited for final output"
    ],
    outcome: "3D product renders and motion assets for trade shows and digital campaigns.",
    tags: ["Blender", "Cycles", "Product", "Lookdev"]
  },
  {
    title: "50 Years of Hip Hop",
    subtitle: "Roc Nation × Puma",
    media: {
      type: "image",
      src: "assets/02_selected_works/rocnation_puma/rocpuma_thumb.jpg",
      thumb: "assets/02_selected_works/rocnation_puma/rocpuma_thumb.jpg",
      alt: "Roc Nation × Puma"
    },
    role: "Editor / Producer — event coverage, motion graphics, cultural storytelling",
    description: "Large-scale event visuals that honor hip-hop's legacy while pushing creative boundaries.",
    processNotes: [
      "Event footage capture and multicam edit",
      "3D animation and motion graphics overlays",
      "Generative AI backgrounds for cultural mashups",
      "Final delivery across social and broadcast formats"
    ],
    outcome: "Campaign visuals that achieved 1M+ social impressions.",
    tags: ["Motion", "AI", "Cultural", "Editing"]
  }
];

const labPieces = [
  {
    label: "Blender / 3D Compilation",
    description: "Curated Blender work — production pipelines end-to-end",
    tags: ["Blender", "3D"],
    span: "span 5 / span 4"
  },
  {
    label: "Higgsfield Experiment",
    description: "Video generation with full process documentation",
    tags: ["Higgsfield", "AI"],
    span: "span 4 / span 3"
  },
  {
    label: "Media Management Tools",
    description: "Production tools for media offloading and pipeline ops",
    tags: ["Python", "Automation"],
    span: "span 3 / span 4"
  },
  {
    label: "ComfyUI × TouchDesigner",
    description: "Audio-reactive generative visuals pipeline",
    tags: ["ComfyUI", "TD"],
    span: "span 6 / span 3"
  },
  {
    label: "Transcript → Content",
    description: "LLM-powered workflow for content production",
    tags: ["Claude", "MCP"],
    span: "span 4 / span 3"
  },
  {
    label: "AI Portraits",
    description: "Generative portrait experiments with Stable Diffusion",
    tags: ["SD", "ComfyUI"],
    span: "span 3 / span 3"
  }
];

// ---- UTILS ----

function el(tag, attrs = {}, children = []) {
  const n = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') n.className = v;
    else if (k === 'html') n.innerHTML = v;
    else if (k === 'style') Object.assign(n.style, v);
    else n.setAttribute(k, v);
  });
  children.forEach(c => n.appendChild(c));
  return n;
}

// ---- MODAL ----

function closeModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('projectModal').addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) closeModal();
});

function openModal(project) {
  const modal = document.getElementById('projectModal');
  document.getElementById('modalTitle').innerHTML = `${project.title}<br><small style="color:var(--muted);font-size:0.8rem;">${project.subtitle || ''}</small>`;
  document.getElementById('modalRole').textContent = project.role || '';
  document.getElementById('modalOutcome').textContent = project.outcome || '';

  const toolsBlock = document.getElementById('modalTools');
  toolsBlock.innerHTML = '';
  (project.tags || []).forEach(tag => {
    toolsBlock.appendChild(el('span', { class: 'tag', html: tag }));
  });

  const process = document.getElementById('modalProcess');
  process.innerHTML = '';
  (project.processNotes || []).forEach(n => {
    process.appendChild(el('li', { html: n }));
  });

  const media = document.getElementById('modalMedia');
  media.innerHTML = '';
  if (project.media?.type === 'video' && project.media.src) {
    media.appendChild(el('video', { src: project.media.src, autoplay: 'true', loop: 'true', playsinline: 'true', muted: 'true' }));
  } else if (project.media?.type === 'image' && project.media.src) {
    media.appendChild(el('img', { src: project.media.src, alt: project.media.alt || '' }));
  }

  const bts = document.getElementById('modalBTS');
  const btsPreview = document.getElementById('btsPreview');
  bts.innerHTML = '';
  btsPreview.innerHTML = '';
  const ph = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><rect width="100%" height="100%" fill="%23111"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23444" font-family="monospace" font-size="14">BTS PREVIEW</text></svg>`);
  btsPreview.appendChild(el('img', { src: ph }));

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ---- RENDER LAB ----

(function renderLab() {
  const grid = document.getElementById('labGrid');
  if (!grid) return;

  labPieces.forEach((piece, idx) => {
    const tile = document.createElement('div');
    tile.className = 'lab-tile';
    const [col, row] = piece.span.split(' / ');
    tile.style.gridColumn = col;
    tile.style.gridRow = row;

    // Vary rotation slightly
    const rotations = [0, 0, 0.5, -0.5, 1, -1];
    tile.style.transform = `rotate(${rotations[idx % rotations.length]}deg)`;

    const label = document.createElement('div');
    label.className = 'lab-tile-label';
    label.textContent = piece.label;
    tile.appendChild(label);

    if (piece.tags && piece.tags.length) {
      const tagRow = document.createElement('div');
      tagRow.className = 'lab-tile-tags';
      piece.tags.forEach(t => {
        tagRow.appendChild(el('span', { class: 'tag', html: t }));
      });
      tile.appendChild(tagRow);
    }

    const desc = document.createElement('div');
    desc.className = 'lab-tile-desc';
    desc.textContent = piece.description;
    tile.appendChild(desc);

    grid.appendChild(tile);
  });
})();

// ---- SCROLL REVEALS ----

(function initReveals() {
  // Add reveal classes to elements
  document.querySelectorAll('.spread-text').forEach((el, i) => {
    el.classList.add(i % 2 === 0 ? 'reveal-left' : 'reveal-right');
  });
  document.querySelectorAll('.spread-media').forEach((el, i) => {
    el.classList.add(i % 2 === 0 ? 'reveal-right' : 'reveal-left');
  });
  document.querySelectorAll('.lab-tile').forEach(el => el.classList.add('reveal'));
  document.querySelectorAll('.about-content').forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
})();

// ---- NAV ----

document.querySelectorAll('.nav-index-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ---- SPREAD VIDEO HOVER ----

document.querySelectorAll('.spread').forEach(spread => {
  const video = spread.querySelector('video');
  if (!video) return;
  spread.addEventListener('mouseenter', () => {
    try { video.currentTime = 0; video.play(); } catch(e) {}
  });
  spread.addEventListener('mouseleave', () => {
    try { video.pause(); } catch(e) {}
  });
});

// ---- THREE.JS HERO MESH ----

(function heroMesh() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.z = 4;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Icosahedron wireframe
  const geo = new THREE.IcosahedronGeometry(1.6, 1);
  const edges = new THREE.EdgesGeometry(geo);
  const mat = new THREE.LineBasicMaterial({ color: 0x0055ff, transparent: true, opacity: 0.5 });
  const mesh = new THREE.LineSegments(edges, mat);
  scene.add(mesh);

  // Inner smaller mesh
  const geo2 = new THREE.IcosahedronGeometry(0.7, 2);
  const edges2 = new THREE.EdgesGeometry(geo2);
  const mat2 = new THREE.LineBasicMaterial({ color: 0x0055ff, transparent: true, opacity: 0.2 });
  const mesh2 = new THREE.LineSegments(edges2, mat2);
  scene.add(mesh2);

  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; });

  function onResize() {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  }
  window.addEventListener('resize', onResize);

  let frame = 0;
  function animate() {
    requestAnimationFrame(animate);
    frame += 0.002;

    targetX += (mouseX - targetX) * 0.015;
    targetY += (mouseY - targetY) * 0.015;

    mesh.rotation.x = frame * 0.25 + targetY * 0.25;
    mesh.rotation.y = frame * 0.15 + targetX * 0.25;
    mesh2.rotation.x = -frame * 0.35 + targetY * 0.15;
    mesh2.rotation.y = -frame * 0.25 + targetX * 0.15;

    // Fade out as user scrolls past hero
    const heroH = window.innerHeight;
    const fade = Math.max(0, 1 - (scrollY / heroH));
    mat.opacity = 0.5 * fade;
    mat2.opacity = 0.2 * fade;

    renderer.render(scene, camera);
  }
  animate();
})();

// ---- INIT ----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
