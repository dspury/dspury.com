/* ============================================
   DSPURY.COM - Catalog Interface
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
    role: "Director — creative direction, VFX integration, AI-enhanced texturing",
    description: "A kinetic exploration of product design through procedural animation. Combining Houdini's particle systems with AI-enhanced texturing to create a launch film that feels both organic and futuristic.",
    processNotes: [
      "Concept development and storyboard with creative team",
      "Houdini particle simulation for dynamic sneaker geometry",
      "AI-assisted texture generation for organic surface details",
      "Compositing and color grade in DaVinci Resolve"
    ],
    outcome: "High-energy launch content blending procedural animation with generative AI textures.",
    tags: ["Houdini", "AI", "VFX", "Branding"],
    assets: {
      header: {
        type: "video",
        src: "assets/02_selected_works/newbalance_wb/nb_main.mp4",
        poster: "assets/02_selected_works/newbalance_wb/nb_thumb.jpg",
        label: "Header Film"
      },
      feature: {
        type: "placeholder",
        label: "Primary 16:9 Video / Embed"
      },
      grid: [
        { type: "placeholder", label: "Still 01" },
        { type: "placeholder", label: "Still 02" },
        { type: "placeholder", label: "Motion 01" },
        { type: "placeholder", label: "Detail 01" }
      ]
    }
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
    role: "Editor / Producer — event coverage, motion graphics, cultural storytelling",
    description: "Large-scale event visuals that honor hip-hop's legacy while pushing creative boundaries. Campaign visuals that achieved 1M+ social impressions.",
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
    role: "Full-Stack Developer — React, FastAPI, SQLite, image analysis pipeline",
    description: "A visual reference system for curating and organizing creative assets. Full-stack application with real-time search, image analysis, curation workflows, and a dual-register UI — built to solve the problem of managing thousands of visual references across projects.",
    processNotes: [
      "Designed curation pipeline with AI-assisted tagging and bucket classification",
      "Built React SPA with two register styles (contemporary + cyberdeck)",
      "FastAPI backend with SQLite + FTS5 full-text search",
      "Image analysis pipeline: palette extraction, perceptual hashing, dimension detection",
      "Restic backup pipeline for asset durability"
    ],
    outcome: "Production application managing 176+ curated assets with dashboard, inbox triage, search, and collection management.",
    tags: ["React", "FastAPI", "SQLite", "Python", "Full-Stack"]
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
    indexTitle: "ComfyUI × TD",
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
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "class") node.className = value;
    else if (key === "html") node.innerHTML = value;
    else if (key === "text") node.textContent = value;
    else node.setAttribute(key, value);
  });
  children.forEach((child) => node.appendChild(child));
  return node;
}

function mediaNode(project, mode = "thumb") {
  const media = project.media || {};
  const source = mode === "full" ? media.src : media.thumb || media.src;

  if (media.type === "video" && source) {
    return el("video", {
      src: source,
      muted: "true",
      autoplay: "true",
      loop: "true",
      playsinline: "true",
      poster: media.thumb || "",
      "aria-label": media.alt || project.title
    });
  }

  return el("img", {
    src: source || "",
    alt: media.alt || project.title,
    loading: mode === "full" ? "eager" : "lazy"
  });
}

function assetNode(asset = {}, className = "") {
  const node = el("div", { class: `asset-frame ${className}`.trim() });
  const label = el("span", { class: "asset-label", text: asset.label || "Project Asset" });

  if ((asset.type === "video" || asset.type === "embed") && asset.src) {
    node.appendChild(el("video", {
      src: asset.src,
      muted: "true",
      autoplay: "true",
      loop: "true",
      playsinline: "true",
      poster: asset.poster || ""
    }));
  } else if (asset.type === "image" && asset.src) {
    node.appendChild(el("img", {
      src: asset.src,
      alt: asset.alt || asset.label || "Project asset",
      loading: "lazy"
    }));
  }

  node.appendChild(label);
  return node;
}

function renderStageAssets(project, container) {
  const assets = project.assets || {};
  const header = assets.header || {
    type: project.media?.type,
    src: project.media?.src,
    poster: project.media?.thumb,
    label: "Project Header"
  };
  const feature = assets.feature || { type: "placeholder", label: "Primary 16:9 Video / Embed" };
  const grid = assets.grid?.length ? assets.grid : [
    { type: "placeholder", label: "Still 01" },
    { type: "placeholder", label: "Still 02" },
    { type: "placeholder", label: "Motion 01" },
    { type: "placeholder", label: "Detail 01" }
  ];

  container.innerHTML = "";
  container.appendChild(assetNode(header, "asset-header"));
  container.appendChild(assetNode(feature, "asset-feature"));

  const gridNode = el("div", { class: "asset-grid" });
  grid.forEach((asset) => gridNode.appendChild(assetNode(asset, "asset-square")));
  container.appendChild(gridNode);
}

// ---- TICKER ----

const weatherCities = [
  { label: "Los Angeles", lat: 34.05, lon: -118.24 },
  { label: "Chicago", lat: 41.88, lon: -87.63 },
  { label: "Austin", lat: 30.27, lon: -97.74 },
  { label: "New York", lat: 40.71, lon: -74.01 },
  { label: "Miami", lat: 25.76, lon: -80.19 }
];

const tickerFallback = [
  "DSPURY.COM / INDEX 2026",
  "SELECTED WORK / CLICK TO INSPECT",
  "LIVE WEATHER / STATUS PENDING",
  "LOS ANGELES / CHICAGO / AUSTIN / NEW YORK / MIAMI"
];

function setTickerSegments(segments) {
  const ticker = document.getElementById("weatherTicker");
  if (!ticker) return;

  ticker.innerHTML = "";
  [...segments, ...segments].forEach((segment) => {
    ticker.appendChild(el("span", { text: segment }));
  });
}

async function fetchCityWeather(city) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 4500);
  const params = new URLSearchParams({
    latitude: String(city.lat),
    longitude: String(city.lon),
    current: "temperature_2m,weather_code",
    temperature_unit: "fahrenheit",
    timezone: "auto"
  });

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, {
      signal: controller.signal
    });
    if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);
    const data = await response.json();
    const temp = Math.round(data.current?.temperature_2m);
    if (!Number.isFinite(temp)) throw new Error("Weather response missing temperature");
    return `${city.label} ${temp}F`;
  } finally {
    window.clearTimeout(timeout);
  }
}

async function initTicker() {
  setTickerSegments(tickerFallback);

  try {
    const citySegments = await Promise.all(weatherCities.map(fetchCityWeather));
    setTickerSegments([
      "DSPURY.COM / INDEX 2026",
      "SELECTED WORK / CLICK TO INSPECT",
      ...citySegments
    ]);
  } catch {
    setTickerSegments(tickerFallback);
  }
}

// ---- CATALOG ----

let selectedProject = null;
let expandedProject = null;

function renderTags(container, tags = []) {
  container.innerHTML = "";
  tags.forEach((tag) => {
    container.appendChild(el("span", { class: "tag", text: tag }));
  });
}

function setAppState() {
  const app = document.getElementById("work");
  app.classList.toggle("no-selection", !selectedProject && !expandedProject);
  app.classList.toggle("has-selection", Boolean(selectedProject) && !expandedProject);
  app.classList.toggle("is-expanded", Boolean(expandedProject));
}

function scrollMobileTarget(selector) {
  if (!window.matchMedia("(max-width: 760px)").matches) return;
  const target = document.querySelector(selector);
  if (!target) return;
  window.setTimeout(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

function updatePreview(project) {
  const preview = document.querySelector(".catalog-preview");
  preview.setAttribute("aria-hidden", project ? "false" : "true");

  if (!project) {
    document.getElementById("previewMedia").innerHTML = "";
    document.getElementById("previewNumber").textContent = "";
    document.getElementById("previewKicker").textContent = "";
    document.getElementById("previewTitle").textContent = "";
    document.getElementById("previewRole").textContent = "";
    document.getElementById("previewDesc").textContent = "";
    document.getElementById("previewTags").innerHTML = "";
    return;
  }

  document.getElementById("previewNumber").textContent = project.number;
  document.getElementById("previewKicker").textContent = project.subtitle || "Selected Work";
  document.getElementById("previewTitle").textContent = project.title;
  document.getElementById("previewRole").textContent = project.role || "";
  document.getElementById("previewDesc").textContent = project.description || "";

  const previewMedia = document.getElementById("previewMedia");
  previewMedia.innerHTML = "";
  previewMedia.appendChild(mediaNode(project, "full"));

  renderTags(document.getElementById("previewTags"), project.tags || []);
}

function updateStage(project) {
  const stage = document.getElementById("projectStage");
  stage.setAttribute("aria-hidden", project ? "false" : "true");

  if (!project) {
    document.getElementById("stageMedia").innerHTML = "";
    document.getElementById("stageProcess").innerHTML = "";
    renderTags(document.getElementById("stageTags"), []);
    return;
  }

  document.getElementById("stageNumber").textContent = project.number;
  document.getElementById("stageKicker").textContent = project.subtitle || "Selected Work";
  document.getElementById("stageTitle").textContent = project.title;
  document.getElementById("stageRole").textContent = project.role || "";
  document.getElementById("stageDesc").textContent = project.description || "";
  document.getElementById("stageOutcome").textContent = project.outcome || "";

  const stageMedia = document.getElementById("stageMedia");
  renderStageAssets(project, stageMedia);

  const process = document.getElementById("stageProcess");
  process.innerHTML = "";
  (project.processNotes || []).forEach((note) => {
    process.appendChild(el("li", { text: note }));
  });

  renderTags(document.getElementById("stageTags"), project.tags || []);
}

function syncRows() {
  document.querySelectorAll(".project-row").forEach((row) => {
    const project = projects[Number(row.dataset.project)];
    const isSelected = selectedProject === project;
    const isExpanded = expandedProject === project;
    row.classList.toggle("active", isSelected || isExpanded);
    row.classList.toggle("expanded-active", isExpanded);
    row.setAttribute("aria-pressed", isSelected || isExpanded ? "true" : "false");
  });
}

function selectProject(project) {
  selectedProject = project;
  expandedProject = null;
  setAppState();
  updatePreview(project);
  updateStage(null);
  syncRows();
  scrollMobileTarget(".catalog-preview");
}

function expandProject(project = selectedProject) {
  if (!project) return;
  selectedProject = project;
  expandedProject = project;
  setAppState();
  updatePreview(null);
  updateStage(project);
  syncRows();
  scrollMobileTarget(".project-stage");
}

function backToIndex() {
  selectedProject = null;
  expandedProject = null;
  setAppState();
  updatePreview(null);
  updateStage(null);
  syncRows();
  scrollMobileTarget(".catalog-board");
}

function backToPreview(project = expandedProject) {
  if (!project) {
    backToIndex();
    return;
  }
  selectedProject = project;
  expandedProject = null;
  setAppState();
  updatePreview(project);
  updateStage(null);
  syncRows();
  scrollMobileTarget(".catalog-preview");
}

function renderCatalog() {
  const index = document.getElementById("projectIndex");
  if (!index) return;

  index.innerHTML = "";

  projects.forEach((project, idx) => {
    const row = el("button", {
      class: `project-row${idx === 0 ? " active" : ""}`,
      type: "button",
      "data-project": String(idx)
    });

    row.innerHTML = `
      <span class="row-number">
        <span class="row-number-label">${project.number}</span>
        <span class="row-back-label" aria-hidden="true">←</span>
      </span>
      <span class="row-media">
        <img src="${project.media.thumb || project.media.src}" alt="" loading="lazy">
      </span>
      <span class="row-copy">
        <span class="row-kicker">${project.subtitle || "Selected Work"}</span>
        <span class="row-title">${project.indexTitle || project.title}</span>
      </span>
      <span class="row-action">Inspect</span>
    `;

    row.addEventListener("click", () => {
      if (expandedProject === project) {
        backToPreview(project);
      } else if (expandedProject) {
        expandProject(project);
      } else {
        selectProject(project);
      }
    });

    index.appendChild(row);
  });

  document.getElementById("previewOpen").addEventListener("click", () => expandProject(selectedProject));
  document.getElementById("railBack")?.addEventListener("click", backToIndex);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && (expandedProject || selectedProject)) backToIndex();
  });
  setAppState();
  updatePreview(null);
  updateStage(null);
  syncRows();
}

// ---- THREE.JS MESH ----

function initMesh() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.z = 4;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const geo = new THREE.IcosahedronGeometry(1.5, 1);
  const mat = new THREE.LineBasicMaterial({ color: 0x0066ff, transparent: true, opacity: 0.42 });
  const mesh = new THREE.LineSegments(new THREE.EdgesGeometry(geo), mat);
  scene.add(mesh);

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  document.addEventListener("mousemove", (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  function onResize() {
    camera.aspect = canvas.clientWidth / canvas.clientHeight || 1;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  }

  window.addEventListener("resize", onResize);
  onResize();

  let frame = 0;
  function animate() {
    requestAnimationFrame(animate);
    frame += 0.003;
    targetX += (mouseX - targetX) * 0.02;
    targetY += (mouseY - targetY) * 0.02;

    mesh.rotation.x = frame * 0.35 + targetY * 0.18;
    mesh.rotation.y = frame * 0.22 + targetX * 0.2;
    renderer.render(scene, camera);
  }

  animate();
}

// ---- INIT ----

renderCatalog();
initTicker();
initMesh();

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
