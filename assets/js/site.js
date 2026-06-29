/* ============================================
   DSPURY.COM — V2 Site JS
   ============================================ */

// ---- DATA ----

const projects = [
  {
    title: "New Balance × Willful Bias",
    subtitle: "Sneaker Release Film",
    number: "01",
    media: {
      type: "video",
      src: "assets/02_selected_works/newbalance_wb/nb_main.mp4",
      thumb: "assets/02_selected_works/newbalance_wb/nb_thumb.jpg",
      alt: "New Balance × Willful Bias"
    },
    role: "On-Set VFX Supervision & Lead Editor — compositing, 3D asset creation, promo trailer",
    description: "On-set VFX and 3D work for New Balance × Willful Bias — compositing live-action footage with procedural elements and building 3D assets for the promo trailer. Working inside a fast-moving production environment where creative direction meets technical execution.",
    processNotes: [
      "On-set VFX compositing and shot supervision",
      "3D modeling and animation for promo trailer sequences",
      "Integration of procedural elements with live-action footage",
      "Collaboration with creative team on visual direction"
    ],
    outcome: "Promo trailer blending live-action production with 3D and procedural VFX — delivered for launch campaign.",
    tags: ["Houdini", "VFX", "3D", "On-Set"]
  },
  {
    title: "50 Years of Hip Hop",
    subtitle: "Roc Nation × Puma",
    number: "02",
    media: {
      type: "image",
      src: "assets/02_selected_works/rocnation_puma/rocpuma_thumb.jpg",
      thumb: "assets/02_selected_works/rocnation_puma/rocpuma_thumb.jpg",
      alt: "Roc Nation × Puma"
    },
    role: "Editor / Producer — multicam edit, motion graphics, event visuals",
    description: "Large-scale event visuals for the 50 Years of Hip Hop campaign — Roc Nation × Puma. Multicam edit, 3D animation overlays, and generative AI backgrounds across social and broadcast formats.",
    processNotes: [
      "Event footage capture and multicam edit",
      "3D animation and motion graphics overlays",
      "Generative AI backgrounds for cultural mashups",
      "Final delivery across social and broadcast formats"
    ],
    outcome: "Campaign visuals that achieved 1M+ social impressions.",
    tags: ["Motion", "AI", "Cultural", "Editing"]
  },
  {
    title: "Grain",
    subtitle: "Visual Reference System",
    number: "03",
    media: {
      type: "image",
      src: "assets/02_selected_works/grain/placeholder.svg",
      thumb: "assets/02_selected_works/grain/placeholder.svg",
      alt: "Grain"
    },
    role: "Full-Stack Developer — React, FastAPI, SQLite, CLI tools, agent integration",
    description: "A visual reference system for curating and organizing creative assets at scale. Full-stack application with real-time search, image analysis, curation workflows, and a robust CLI — built to solve the problem of managing thousands of visual references across projects.",
    processNotes: [
      "Full CLI toolset for search, tag, promote, archive, and batch operations",
      "Embedded agent harness for AI-assisted curation and tagging",
      "FastAPI backend with SQLite + FTS5 full-text search",
      "Image analysis pipeline: palette extraction, perceptual hashing, dimension detection",
      "React SPA with filterable grid, inbox triage, and collection management",
      "Restic backup pipeline for asset durability"
    ],
    outcome: "Production application managing 1000+ curated assets with dashboard, CLI tools, agent-driven workflows, and full-text search.",
    tags: ["React", "FastAPI", "SQLite", "Python", "CLI"]
  },
  {
    title: "Higgsfield Experiment",
    subtitle: "Video Generation Pipeline",
    number: "04",
    media: {
      type: "image",
      src: "assets/02_selected_works/higgsfield/placeholder.svg",
      thumb: "assets/02_selected_works/higgsfield/placeholder.svg",
      alt: "Higgsfield Experiment"
    },
    role: "Creative Technologist — video generation, prompt engineering, pipeline design",
    description: "A focused experiment in AI video generation — from concept through prompt iteration to final output. Documenting the full pipeline of working with generative video tools to produce intentional, directed content.",
    processNotes: [
      "Concept development and visual direction",
      "Prompt engineering and iteration across generation cycles",
      "Frame selection, upscaling, and temporal consistency passes",
      "Final edit, color grade, and audio integration"
    ],
    outcome: "Directed video generation piece with full process documentation — demonstrating fluency with the emerging AI video pipeline.",
    tags: ["Higgsfield", "AI", "Video Gen", "Prompt Engineering"]
  },
  {
    title: "ComfyUI × TouchDesigner",
    subtitle: "Audio-Reactive Generative Visuals",
    number: "05",
    media: {
      type: "image",
      src: "assets/02_selected_works/comfyui_td/placeholder.svg",
      thumb: "assets/02_selected_works/comfyui_td/placeholder.svg",
      alt: "ComfyUI × TouchDesigner"
    },
    role: "Creative Technologist — generative pipeline, real-time visuals, audio reactivity",
    description: "Combining generative AI with real-time creative tools. ComfyUI generates visual assets, TouchDesigner processes them in real-time with audio reactivity — a pipeline that bridges static generation and live performance.",
    processNotes: [
      "ComfyUI / Stable Diffusion asset generation pipeline",
      "TouchDesigner network for real-time processing",
      "Audio analysis driving visual parameter modulation",
      "Output capture across image and video formats"
    ],
    outcome: "Audio-reactive generative visuals pipeline — proof of concept for combining AI asset generation with real-time creative tools.",
    tags: ["ComfyUI", "TouchDesigner", "AI", "Real-time"]
  },
  {
    title: "Blender / 3D Compilation",
    subtitle: "Production Pipeline Showcase",
    number: "06",
    media: {
      type: "image",
      src: "assets/02_selected_works/blender_comp/placeholder.svg",
      thumb: "assets/02_selected_works/blender_comp/placeholder.svg",
      alt: "Blender / 3D Compilation"
    },
    role: "3D Artist — modeling, lighting, animation, rendering",
    description: "A curated collection of Blender work spanning product visualization, environment design, and procedural animation. Demonstrating end-to-end creative production pipelines.",
    processNotes: [
      "Concept and reference gathering",
      "Modeling, sculpting, and UV unwrap",
      "Material authoring and lighting design",
      "Rendering and post-production compositing"
    ],
    outcome: "Compilation reel demonstrating range across 3D production — from photorealistic product viz to stylized environments.",
    tags: ["Blender", "3D", "Cycles", "Modeling"]
  },
  {
    title: "Media Management Tools",
    subtitle: "Production Pipeline Automation",
    number: "07",
    media: {
      type: "image",
      src: "assets/02_selected_works/media_tools/placeholder.svg",
      thumb: "assets/02_selected_works/media_tools/placeholder.svg",
      alt: "Media Management Tools"
    },
    role: "Developer — Python, automation, production tooling",
    description: "Production tools built to solve real creative ops problems — media offloading, checksum verification, and pipeline automation. Built for the Limitless YouTube production system.",
    processNotes: [
      "Automated media offloading with checksum verification",
      "Pipeline orchestration for multi-project production",
      "Integration with existing production workflows",
      "Error handling and logging for production reliability"
    ],
    outcome: "Tooling that reduced manual media management overhead and improved production pipeline reliability.",
    tags: ["Python", "Automation", "CLI", "Production"]
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

// ---- RENDER SPREADS ----

(function renderSpreads() {
  const container = document.getElementById('work');
  if (!container) return;

  // Clear existing spreads
  container.innerHTML = '<div class="section-label">01 / selected work</div>';

  const layouts = ['spread-a', 'spread-b', 'spread-c'];

  projects.forEach((project, idx) => {
    const layout = layouts[idx % layouts.length];
    const article = document.createElement('article');
    article.className = `spread ${layout}`;
    article.setAttribute('data-project', idx);

    if (layout === 'spread-a') {
      // Image left, text right
      article.innerHTML = `
        <div class="spread-media">
          <div class="spread-media-inner">
            <img src="${project.media.thumb}" alt="${project.media.alt}" loading="lazy">
            ${project.media.type === 'video' ? `<video muted loop playsinline src="${project.media.src}"></video>` : ''}
          </div>
        </div>
        <div class="spread-text">
          <span class="spread-number">${project.number}</span>
          <h2 class="spread-title">${project.title}</h2>
          <p class="spread-role">${project.role}</p>
          <div class="spread-tags">${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          <p class="spread-desc">${project.description}</p>
          <button class="spread-cta" onclick="openModal(projects[${idx}])">View Project →</button>
        </div>`;
    } else if (layout === 'spread-b') {
      // Text big, image overlapping
      article.innerHTML = `
        <div class="spread-text">
          <span class="spread-number">${project.number}</span>
          <h2 class="spread-title">${project.title}</h2>
          <p class="spread-role">${project.role}</p>
          <div class="spread-tags">${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          <p class="spread-desc">${project.description}</p>
          <button class="spread-cta" onclick="openModal(projects[${idx}])">View Project →</button>
        </div>
        <div class="spread-media spread-media-overlap">
          <div class="spread-media-inner">
            <img src="${project.media.thumb}" alt="${project.media.alt}" loading="lazy">
            ${project.media.type === 'video' ? `<video muted loop playsinline src="${project.media.src}"></video>` : ''}
          </div>
        </div>`;
    } else {
      // Full bleed, text overlaid
      article.innerHTML = `
        <div class="spread-media spread-media-full">
          <div class="spread-media-inner">
            <img src="${project.media.thumb}" alt="${project.media.alt}" loading="lazy">
            ${project.media.type === 'video' ? `<video muted loop playsinline src="${project.media.src}"></video>` : ''}
          </div>
          <div class="spread-overlay">
            <span class="spread-number">${project.number}</span>
            <h2 class="spread-title">${project.title}</h2>
            <p class="spread-role">${project.role}</p>
            <div class="spread-tags">${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
            <button class="spread-cta" onclick="openModal(projects[${idx}])">View Project →</button>
          </div>
        </div>`;
    }

    container.appendChild(article);
  });
})();

// ---- SCROLL REVEALS ----

(function initReveals() {
  // Add reveal classes to elements after spreads are rendered
  document.querySelectorAll('.spread-text').forEach((el, i) => {
    el.classList.add(i % 2 === 0 ? 'reveal-left' : 'reveal-right');
  });
  document.querySelectorAll('.spread-media').forEach((el, i) => {
    el.classList.add(i % 2 === 0 ? 'reveal-right' : 'reveal-left');
  });
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
