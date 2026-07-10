/* ============================================
   DSPURY.COM - Editorial Catalog Interface
   ============================================ */

// ---- DATA ----

const projects = [
  {
    title: "New Balance × Willful Bias",
    subtitle: "Sneaker Release Film",
    number: "01",
    numberImage: "assets/00_site/DS_Num_001.svg",
    media: {
      type: "video",
      src: "assets/02_selected_works/newbalance_wb/nb_main.mp4",
      thumb: "assets/02_selected_works/newbalance_wb/nb_thumb.jpg",
      alt: "New Balance × Willful Bias"
    },
    assets: {
      header: {
        type: "image",
        src: "assets/02_selected_works/newbalance_wb/nb_still_product.jpg",
        alt: "New Balance 990 closeup on concrete steps",
        label: "Product"
      },
      items: [
        {
          type: "video",
          src: "assets/02_selected_works/newbalance_wb/nb_wide_globe.mp4",
          label: "Spinning Globe — VFX Comp"
        },
        {
          type: "video",
          size: "square",
          src: "assets/02_selected_works/newbalance_wb/nb_loop_paper_sq.mp4",
          label: "Paper Transition — VFX Comp"
        },
        {
          type: "video",
          size: "square",
          src: "assets/02_selected_works/newbalance_wb/nb_loop_pencil_sq.mp4",
          label: "Pencil Grab — VFX Comp"
        },
        {
          type: "video",
          src: "assets/02_selected_works/newbalance_wb/nb_wide_clock.mp4",
          label: "Clock Crash Zoom — VFX Comp"
        },
        {
          type: "image",
          src: "assets/02_selected_works/newbalance_wb/nb_still_onset_360.jpg",
          alt: "360-degree capture of the classroom set during production",
          label: "On-Set 360° Capture"
        }
      ]
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
    numberImage: "assets/00_site/DS_Num_002.svg",
    media: {
      type: "video",
      src: "assets/02_selected_works/rocnation_puma/rocpuma_loop_plane_sq.mp4",
      thumb: "assets/02_selected_works/rocnation_puma/rocpuma_thumb.jpg",
      alt: "Roc Nation × Puma"
    },
    assets: {
      header: {
        type: "video",
        src: "assets/02_selected_works/rocnation_puma/rocpuma_header.mp4",
        alt: "CG paper plane flying over the Hudson toward the Manhattan skyline",
        label: "Paper Plane Flyover — CG"
      },
      items: [
        {
          type: "video",
          size: "square",
          src: "assets/02_selected_works/rocnation_puma/rocpuma_loop_sneakers_sq.mp4",
          label: "Sneaker Burst — Practical + AE Comp"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/rocnation_puma/rocpuma_still_neon_plane.jpg",
          alt: "Neon paper plane sign from the event installation",
          label: "Private Pop-Up — NYC"
        },
        {
          type: "video",
          size: "square",
          src: "assets/02_selected_works/rocnation_puma/rocpuma_loop_details_sq.mp4",
          label: "Sneaker Macro — AE Comp"
        },
        {
          type: "video",
          size: "square",
          src: "assets/02_selected_works/rocnation_puma/rocpuma_loop_hoop_sq.mp4",
          label: "Captured Footage"
        },
        {
          type: "video",
          size: "square",
          src: "assets/02_selected_works/rocnation_puma/rocpuma_loop_city_sq.mp4",
          label: "NYC Environment — 3D"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/rocnation_puma/rocpuma_still_puma_store.jpg",
          alt: "Puma storefront at night during the event",
          label: "Puma Pop-Up — NYC"
        }
      ]
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
    numberImage: "assets/00_site/DS_Num_003.svg",
    media: {
      type: "video",
      src: "assets/02_selected_works/grain/grain_main.mp4",
      thumb: "assets/02_selected_works/grain/grain_thumb_gen.jpg",
      alt: "Grain"
    },
    assets: {
      header: {
        type: "video",
        src: "assets/02_selected_works/grain/grain_main.mp4",
        poster: "assets/02_selected_works/grain/grain_thumb.jpg",
        label: "Library Canvas"
      },
      items: [
        {
          type: "diagram",
          src: "assets/02_selected_works/grain/grain_diagram_ingest.svg",
          label: "Ingest Pipeline"
        },
        {
          type: "video",
          size: "square",
          src: "assets/02_selected_works/grain/grain_motion_canvas.mp4",
          label: "Spatial Canvas"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/grain/grain_still_collections.jpg",
          alt: "Grain collections view",
          label: "Collections"
        },
        {
          type: "diagram",
          src: "assets/02_selected_works/grain/grain_diagram_architecture.svg",
          label: "System Architecture"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/grain/grain_still_inspector.jpg",
          alt: "Grain artifact inspector with palette extraction",
          label: "Artifact Inspector"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/grain/grain_still_agent.jpg",
          alt: "Grain agent chat panel",
          label: "Agent Chat"
        },
        {
          type: "image",
          src: "assets/02_selected_works/grain/grain_cli_capture.png",
          alt: "Grain CLI session — doctor, version, and search commands",
          label: "CLI"
        }
      ]
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
    numberImage: "assets/00_site/DS_Num_004.svg",
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
    title: "Lunar Park — After Hours",
    subtitle: "Local AI Film — Overnight Shot Factory",
    number: "05",
    numberImage: "assets/00_site/DS_Num_005.svg",
    media: {
      type: "video",
      src: "assets/02_selected_works/lunar_park/lp_icon_a.mp4",
      thumb: "assets/02_selected_works/lunar_park/lp_thumb.jpg",
      alt: "Lunar Park — After Hours"
    },
    assets: {
      header: {
        type: "video",
        src: "assets/02_selected_works/lunar_park/lp_icon_a.mp4",
        alt: "Colossal sculpted hands holding a glowing star over a dark mirror plaza — Wan 2.2 text-to-video",
        label: "The Icon — Wan 2.2 Text-to-Video"
      },
      items: [
        {
          type: "diagram",
          src: "assets/02_selected_works/lunar_park/lp_diagram_pipeline.svg",
          label: "The Stack — Direction Local, Render Remote"
        },
        {
          type: "image",
          src: "assets/02_selected_works/lunar_park/lp_case_prompt.jpg",
          alt: "The Icon prompt taken apart into subject, camera, and style-bible segments, with four learned prompting rules",
          label: "Prompt Anatomy"
        },
        {
          type: "image",
          src: "assets/02_selected_works/lunar_park/lp_case_ablation.jpg",
          alt: "Side by side: 6-step distilled sampling with diffusion fog versus clean 30-step sampling, same model",
          label: "A/B — Where the Fog Comes From"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/lunar_park/lp_still_park_closed.jpg",
          alt: "Dark closed park at night, silhouetted rides under blue-white moonlight",
          label: "Look Lock — Park Closed"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/lunar_park/lp_still_first_spark.jpg",
          alt: "A single ride waking up in the dark — the first spark",
          label: "Look Lock — First Spark"
        },
        {
          type: "image",
          src: "assets/02_selected_works/lunar_park/lp_card_queue.svg",
          alt: "Terminal session — seven-shot overnight queue rendering unattended on the workstation",
          label: "The Overnight Queue"
        },
        {
          type: "video",
          size: "square",
          src: "assets/02_selected_works/lunar_park/lp_orrery.mp4",
          label: "The Orrery"
        },
        {
          type: "video",
          size: "square",
          src: "assets/02_selected_works/lunar_park/lp_repetition.mp4",
          label: "Repetition"
        },
        {
          type: "image",
          src: "assets/02_selected_works/lunar_park/lp_case_icon.jpg",
          alt: "Case study: plate image to TRELLIS mesh to killed composite route to the prompt-described monument",
          label: "The Icon — Image → 3D → Image"
        },
        {
          type: "image",
          size: "wide",
          src: "assets/02_selected_works/comfyui_td/ctd_td_network.png",
          alt: "TouchDesigner network from the earlier pipeline test — the planned finishing layer",
          label: "Groundwork — TouchDesigner Network"
        }
      ]
    },
    role: "Director / Creative Technologist — creative direction, prompt system, pipeline engineering",
    description: "A short film about a moonlit park that runs itself at night. Every shot is text-to-video on a single 12GB GPU: prompts are written locally, routed to a headless workstation, and rendered overnight through custom ComfyUI graphs. The page walks through how — the prompt system, the A/B that killed the 'AI fog', the 3D detour behind the park's monument, and the queue that runs it all unattended.",
    processNotes: [
      "Style bible written once in cineprompt, appended to every prompt — 13 shots, one look",
      "Direction stays on the laptop; renders route to a headless GPU box over ComfyUI's HTTP API",
      "A custom ComfyUI graph per job type — stills, video, 3D mesh, music",
      "Two sampling paths, picked by A/B: slow full-quality for stills, fast distilled for motion",
      "Overnight queue renders 720p shots unattended; the service stops itself when idle",
      "Keepers get a motion-compensated half-speed retime — the park's tempo, plus edit headroom",
      "Every render embeds its full node graph, so any frame can be reproduced exactly"
    ],
    outcome: "A locked, reproducible pipeline and a growing shot library — the film is in final assembly. No cloud, no stock, no camera.",
    tags: ["Wan 2.2", "ComfyUI", "cineprompt", "TRELLIS", "TouchDesigner"]
  },
  {
    title: "Blender/VFX",
    subtitle: "Production Pipeline Showcase",
    number: "06",
    numberImage: "assets/00_site/DS_Num_006.svg",
    media: {
      type: "video",
      src: "assets/02_selected_works/blender_comp/blender_preview.mp4",
      thumb: "assets/02_selected_works/blender_comp/blender_thumb.jpg",
      alt: "Blender / VFX Reel"
    },
    assets: {
      header: {
        type: "image",
        src: "assets/02_selected_works/blender_comp/blender_thumb.jpg",
        alt: "Altec Lansing speaker — Blender product visualization",
        label: "Blender / VFX"
      },
      feature: {
        type: "video",
        src: "assets/02_selected_works/blender_comp/blender_main.mp4",
        poster: "assets/02_selected_works/blender_comp/blender_thumb.jpg",
        label: "Full Reel"
      },
      grid: [
        {
          type: "image",
          src: "assets/02_selected_works/blender_comp/blender_process_04.jpg",
          label: "Butterfly Coupe — Clay & Blockout"
        },
        {
          type: "image",
          src: "assets/02_selected_works/blender_comp/blender_process_02.jpg",
          label: "Hex Morph — Geometry Nodes"
        },
        {
          type: "image",
          src: "assets/02_selected_works/blender_comp/blender_process_01.jpg",
          label: "Hornets — Camera Track & Comp"
        },
        {
          type: "image",
          src: "assets/02_selected_works/blender_comp/blender_process_03.jpg",
          label: "Ambré — Green Screen to 3D"
        }
      ]
    },
    role: "3D Artist / VFX — modeling, lighting, animation, compositing",
    description: "A curated reel of Blender and VFX work spanning product visualization, environment design, and live-action compositing. Demonstrating end-to-end creative production pipelines.",
    processNotes: [
      "Concept and reference gathering",
      "Modeling, sculpting, and UV unwrap",
      "Material authoring and lighting design",
      "Rendering and post-production compositing"
    ],
    outcome: "Compilation reel demonstrating range across 3D and VFX production — from photorealistic product viz to composited live-action.",
    tags: ["Blender", "3D", "VFX", "Cycles"]
  },
  {
    title: "Media Pipeline",
    subtitle: "Post-Production Media Ops CLI",
    number: "07",
    numberImage: "assets/00_site/DS_Num_007.svg",
    media: {
      type: "image",
      src: "assets/02_selected_works/media_tools/mm_thumb_gen.jpg",
      thumb: "assets/02_selected_works/media_tools/mm_thumb_gen.jpg",
      alt: "Media Pipeline"
    },
    assets: {
      header: {
        type: "image",
        src: "assets/02_selected_works/media_tools/mp_header.png",
        alt: "Media Pipeline — probe, organize, proxy, resolve, verify, audit",
        label: "Media Pipeline"
      },
      items: [
        {
          type: "diagram",
          src: "assets/02_selected_works/media_tools/mm_diagram_pipeline.svg",
          label: "Run Pipeline"
        },
        {
          type: "image",
          src: "assets/02_selected_works/media_tools/mm_cli_pipeline.png",
          alt: "CLI session — probe, organize, proxy, resolve create",
          label: "CLI — Pipeline"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/media_tools/mm_card_tree.png",
          alt: "Organized output tree from one pipeline run",
          label: "Organized Output"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/media_tools/mm_card_manifest.png",
          alt: "DaVinci Resolve project manifest JSON",
          label: "Resolve Manifest"
        },
        {
          type: "diagram",
          src: "assets/02_selected_works/media_tools/mm_diagram_architecture.svg",
          label: "System Architecture"
        },
        {
          type: "image",
          src: "assets/02_selected_works/media_tools/mm_cli_verify.png",
          alt: "Verify catching a missing and a modified file, plus the audit log",
          label: "CLI — Verify & Audit"
        },
        {
          type: "image",
          src: "assets/02_selected_works/media_tools/mm_tui_pipeline.png",
          alt: "Textual TUI pipeline screen with step toggles",
          label: "Textual TUI"
        }
      ]
    },
    role: "Developer — Python, Click, FFmpeg, DaVinci Resolve scripting API",
    description: "A zero-cost CLI for post-production media ops: probe metadata, organize footage by codec and resolution, generate ProRes proxies, build DaVinci Resolve projects, and verify backups — every operation logged to a local SQLite audit trail. Open-source under MIT.",
    processNotes: [
      "ffprobe metadata extraction: codec, resolution, frame rate, color space, audio",
      "Templated organization into codec-family / resolution-bucket layout",
      "ProRes 422 Proxy generation via ffmpeg, aspect-preserving",
      "Resolve project creation through the scripting API, with manifest fallback",
      "Backup verification: xxhash snapshot diffing with cron-friendly exit codes",
      "SQLite audit log as system of record — plus a full Textual TUI"
    ],
    outcome: "Open-source release (v0.1.3) with six composable capabilities, 259 passing tests, mypy strict — the boring-but-critical media layer, made reproducible.",
    tags: ["Python", "Click", "FFmpeg", "SQLite", "CLI"]
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

// Diagram SVGs are fetched once and inlined so their internal classes pick up
// the theme's CSS custom properties (var(--ink), var(--accent), ...).
const diagramCache = new Map();

function loadDiagram(src) {
  if (!diagramCache.has(src)) {
    diagramCache.set(
      src,
      fetch(src)
        .then((response) => (response.ok ? response.text() : Promise.reject(new Error(`missing ${src}`))))
    );
  }
  return diagramCache.get(src);
}

function assetNode(asset = {}, className = "") {
  const node = el("div", { class: `asset-frame ${className}`.trim() });
  const label = el("span", { class: "asset-label", text: asset.label || "Project Asset" });

  if (asset.type === "diagram" && asset.src) {
    loadDiagram(asset.src)
      .then((svg) => node.insertAdjacentHTML("afterbegin", svg))
      .catch(() => {
        // fetch is unavailable under file:// — fall back to a plain <img>,
        // which renders the SVG with its baked-in light-theme colors.
        node.prepend(el("img", {
          src: asset.src,
          alt: asset.alt || asset.label || "Diagram",
          loading: "lazy"
        }));
      });
  } else if ((asset.type === "video" || asset.type === "embed") && asset.src) {
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

  // Ordered layout: assets.items renders top-to-bottom in declaration order.
  // Consecutive size:"square" items pair up into a two-column grid row;
  // size:"feature" keeps the 16:9 crop; everything else is a natural-height
  // full-width frame (diagrams, captures).
  if (assets.items?.length) {
    let squares = [];
    const flushSquares = () => {
      if (!squares.length) return;
      const gridNode = el("div", { class: "asset-grid" });
      squares.forEach((asset) => gridNode.appendChild(assetNode(asset, "asset-square")));
      container.appendChild(gridNode);
      squares = [];
    };
    assets.items.forEach((asset) => {
      if (asset.size === "square") {
        squares.push(asset);
        return;
      }
      flushSquares();
      container.appendChild(assetNode(asset, asset.size === "feature" ? "asset-feature" : "asset-wide"));
    });
    flushSquares();
    return;
  }

  container.appendChild(assetNode(feature, "asset-feature"));

  (assets.system || []).forEach((asset) => {
    container.appendChild(assetNode(asset, "asset-wide"));
  });

  const gridNode = el("div", { class: "asset-grid" });
  grid.forEach((asset) => gridNode.appendChild(assetNode(asset, "asset-square")));
  container.appendChild(gridNode);
}

// Number art SVGs are fetched once and inlined so their paths pick up
// var(--accent) through fill: currentColor in both themes.
const numberArtCache = new Map();

function loadNumberArt(src) {
  if (!numberArtCache.has(src)) {
    numberArtCache.set(
      src,
      fetch(src)
        .then((response) => (response.ok ? response.text() : Promise.reject(new Error(`missing ${src}`))))
        .then((markup) => (markup.includes("<svg") ? markup : Promise.reject(new Error(`not svg: ${src}`))))
    );
  }
  return numberArtCache.get(src);
}

function mountNumberArt(node, project) {
  node.textContent = project.number;
  if (!project.numberImage) return;
  loadNumberArt(project.numberImage)
    .then((markup) => {
      node.innerHTML = markup;
    })
    .catch(() => {
      /* keep text fallback */
    });
}

function createNumberPlaceholder(project) {
  const node = el("span", { class: "row-number-text", "aria-hidden": "true" });
  mountNumberArt(node, project);
  return node;
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

  mountNumberArt(document.getElementById("previewNumber"), project);
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

  mountNumberArt(document.getElementById("stageNumber"), project);
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
