/* ============================================
   DSPURY.COM - Editorial Catalog Interface
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
    title: "Roc-Nation: 50 Years of Hip Hop",
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
    title: "Higgsfield Short Film",
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
      "Character consistency across shots and sequences",
      "Frame selection, upscaling, and temporal consistency passes",
      "Final edit, color grade, and audio integration"
    ],
    outcome: "Directed video generation piece with full process documentation — demonstrating fluency with the emerging AI video pipeline, including character consistency techniques.",
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
    title: "Blender 3D",
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
    title: "Media-Mate",
    subtitle: "Production Pipeline Automation",
    number: "07",
    media: {
      type: "image",
      src: "assets/02_selected_works/media_tools/placeholder.svg",
      thumb: "assets/02_selected_works/media_tools/placeholder.svg",
      alt: "Media-Mate"
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
    else if (key === "muted") node.muted = true;
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

function createNumberPlaceholder(project, className = "") {
  if (!project.numberImage) {
    return el("span", {
      class: "row-number-text",
      text: project.number,
      "aria-hidden": "true"
    });
  }

  return el("img", {
    class: className,
    alt: "",
    "aria-hidden": "true",
    src: project.numberImage
  });
}

// ---- TICKER ----

const weatherCities = [
  { label: "Los Angeles", lat: 34.05, lon: -118.24 },
  { label: "Chicago", lat: 41.88, lon: -87.63 },
  { label: "Austin", lat: 30.27, lon: -97.74 },
  { label: "New York", lat: 40.71, lon: -74.01 },
  { label: "Miami", lat: 25.76, lon: -80.19 },
  { label: "Charlotte", lat: 35.23, lon: -80.84 },
  { label: "Boston", lat: 42.36, lon: -71.06 },
  { label: "Atlanta", lat: 33.75, lon: -84.39 },
  { label: "San Francisco", lat: 37.77, lon: -122.42 }
];

const tickerFallback = [
  "SELECTED WORK / CLICK TO INSPECT",
  "LIVE WEATHER / STATUS PENDING",
  "LOS ANGELES / CHICAGO / AUSTIN / NEW YORK / MIAMI / CHARLOTTE / BOSTON / ATLANTA / SAN FRANCISCO"
];

// WMO weather interpretation codes → forecast glyph
function weatherEmoji(code) {
  if (code === 0) return "☀️";
  if (code === 1 || code === 2) return "🌤️";
  if (code === 3) return "☁️";
  if (code === 45 || code === 48) return "🌫️";
  if (code >= 51 && code <= 57) return "🌦️";
  if (code >= 61 && code <= 67) return "🌧️";
  if (code >= 71 && code <= 77) return "❄️";
  if (code >= 80 && code <= 82) return "🌧️";
  if (code === 85 || code === 86) return "🌨️";
  if (code >= 95) return "⛈️";
  return "";
}

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
    const emoji = weatherEmoji(data.current?.weather_code);
    return `${city.label} ${temp}°F${emoji ? ` ${emoji}` : ""}`;
  } finally {
    window.clearTimeout(timeout);
  }
}

async function initTicker() {
  setTickerSegments(tickerFallback);

  const results = await Promise.allSettled(weatherCities.map(fetchCityWeather));
  const citySegments = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  if (!citySegments.length) return;

  setTickerSegments([
    "SELECTED WORK / CLICK TO INSPECT",
    ...citySegments
  ]);
}

// ---- THEME ----

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#0a0a0a" : "#e3e2de");

  const button = document.getElementById("themeToggle");
  if (button) {
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
}

function initTheme() {
  applyTheme(currentTheme());

  const button = document.getElementById("themeToggle");
  if (!button) return;

  button.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable */
    }
  });
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

const mobileLayout = window.matchMedia("(max-width: 760px)");

function scrollMobileTarget(selector) {
  if (!mobileLayout.matches) return;
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
  scrollMobileTarget(".catalog-board");
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
      class: "project-row",
      type: "button",
      "data-project": String(idx)
    });
    row.style.setProperty("--stagger", String(idx));

    const numberCell = el("span", { class: "row-number" });
    numberCell.appendChild(createNumberPlaceholder(project, "row-number-art"));
    numberCell.appendChild(el("span", { class: "row-back-label", text: "Back", "aria-hidden": "true" }));

    const media = el("span", { class: "row-media" }, [mediaNode(project, "thumb")]);
    const copy = el("span", { class: "row-copy" });
    copy.appendChild(el("span", { class: "row-kicker", text: project.subtitle || "Selected Work" }));
    copy.appendChild(el("span", { class: "row-title", text: project.indexTitle || project.title }));

    row.appendChild(numberCell);
    row.appendChild(media);
    row.appendChild(copy);

    row.addEventListener("click", () => {
      // Mobile navigates straight to the project page; the preview
      // panel is a desktop/tablet affordance.
      if (mobileLayout.matches) {
        if (expandedProject === project) backToIndex();
        else expandProject(project);
        return;
      }

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

// ---- LEFT RAIL MATRIX ----

function initRailMatrix() {
  const canvas = document.getElementById("railMatrix");
  const rail = document.querySelector(".catalog-masthead");
  if (!canvas || !rail) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let pointerActive = false;
  let pointerX = 0;
  let pointerY = 0;
  let smoothedX = 0;
  let smoothedY = 0;

  const spacing = 16;
  const radius = 150;
  const baseAlpha = 0.075;
  const maxAlpha = 0.26;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let dotColor = "90, 75, 83";

  // Theme-toggle ripple: a wavefront that travels through the grid.
  const rippleDuration = 1400;
  const rippleSpeed = 0.85; // px per ms
  const rippleWidth = 42;
  let ripple = null;

  // Row-hover scan band: the rail acknowledges the row under the pointer.
  let bandTarget = -1;
  let bandY = 0;
  let bandStrength = 0;

  function readDotColor() {
    const value = getComputedStyle(document.documentElement).getPropertyValue("--matrix-dot").trim();
    if (value) dotColor = value;
  }

  function startRipple() {
    if (reduceMotion.matches) return;
    const railRect = rail.getBoundingClientRect();
    const toggle = document.getElementById("themeToggle");
    let x = railRect.width / 2;
    let y = 40;

    if (toggle && toggle.offsetParent !== null) {
      const toggleRect = toggle.getBoundingClientRect();
      x = toggleRect.left + toggleRect.width / 2 - railRect.left;
      y = toggleRect.top + toggleRect.height / 2 - railRect.top;
    }

    ripple = { x, y, start: performance.now() };
  }

  readDotColor();

  new MutationObserver(() => {
    readDotColor();
    startRipple();
  }).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"]
  });

  const indexEl = document.getElementById("projectIndex");
  if (indexEl) {
    indexEl.addEventListener("mouseover", (event) => {
      const row = event.target.closest(".project-row");
      if (!row) return;
      const count = indexEl.querySelectorAll(".project-row").length || 1;
      bandTarget = (Number(row.dataset.project) + 0.5) / count;
    });
    indexEl.addEventListener("mouseleave", () => {
      bandTarget = -1;
    });
  }

  function resize() {
    const rect = rail.getBoundingClientRect();
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function updatePointer(event) {
    const rect = rail.getBoundingClientRect();
    pointerX = event.clientX - rect.left;
    pointerY = event.clientY - rect.top;
    if (!pointerActive) {
      smoothedX = pointerX;
      smoothedY = pointerY;
    }
    pointerActive = true;
  }

  rail.addEventListener("pointermove", updatePointer);
  rail.addEventListener("pointerenter", updatePointer);
  rail.addEventListener("pointerleave", () => {
    pointerActive = false;
  });

  window.addEventListener("resize", resize);

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(resize);
    observer.observe(rail);
  }

  resize();

  function draw() {
    context.clearRect(0, 0, width, height);

    if (pointerActive) {
      smoothedX += (pointerX - smoothedX) * 0.14;
      smoothedY += (pointerY - smoothedY) * 0.14;
    }

    const now = performance.now();

    let rippleRadius = -1;
    let rippleFade = 0;
    if (ripple) {
      const elapsed = now - ripple.start;
      if (elapsed > rippleDuration) {
        ripple = null;
      } else {
        rippleRadius = elapsed * rippleSpeed;
        rippleFade = 1 - elapsed / rippleDuration;
      }
    }

    const bandActive = bandTarget >= 0 && !reduceMotion.matches;
    bandStrength += ((bandActive ? 1 : 0) - bandStrength) * 0.12;
    if (bandActive) {
      const target = bandTarget * height;
      if (bandStrength < 0.03) bandY = target;
      else bandY += (target - bandY) * 0.12;
    }

    for (let y = spacing * 0.65; y < height + spacing; y += spacing) {
      const bandDelta = y - bandY;
      const bandInfluence = bandStrength > 0.01
        ? Math.exp(-(bandDelta * bandDelta) / (2 * 26 * 26)) * bandStrength * 0.85
        : 0;
      const offsetX = Math.round(y / spacing) % 2 === 0 ? spacing * 0.5 : 0;

      for (let x = spacing * 0.65 + offsetX; x < width + spacing; x += spacing) {
        const distance = pointerActive ? Math.hypot(x - smoothedX, y - smoothedY) : radius;
        const pointerInfluence = pointerActive ? Math.max(0, 1 - distance / radius) : 0;

        let rippleInfluence = 0;
        if (rippleRadius >= 0) {
          const fromWave = Math.hypot(x - ripple.x, y - ripple.y) - rippleRadius;
          rippleInfluence = Math.exp(-(fromWave * fromWave) / (2 * rippleWidth * rippleWidth)) * rippleFade;
        }

        const influence = Math.max(pointerInfluence, bandInfluence, rippleInfluence);
        const alpha = baseAlpha + influence * (maxAlpha - baseAlpha);
        const dotRadius = 1.15 + influence * 1.5;

        context.beginPath();
        context.fillStyle = `rgba(${dotColor}, ${alpha})`;
        context.arc(x, y, dotRadius, 0, Math.PI * 2);
        context.fill();
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

// ---- INIT ----

initTheme();
renderCatalog();
initTicker();
initRailMatrix();

document.getElementById("work")?.classList.add("has-booted");
