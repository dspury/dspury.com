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
    role: "On-Set VFX Supervision & Lead Editor - compositing, 3D assets, promo trailer",
    description: "On-set VFX and 3D assets for the New Balance × Willful Bias launch. Composited live-action footage with procedural Houdini elements and built the promo trailer in post.",
    processNotes: [
      "Compositing and shot supervision on set",
      "Houdini procedural elements integrated with live action",
      "3D assets and animation for the promo trailer",
      "Delivered for campaign launch"
    ],
    outcome: "Promo trailer - live action composited with procedural and 3D VFX - delivered for launch.",
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
    role: "Editor / Producer - multicam, motion graphics, event visuals",
    description: "Event visuals for the Roc Nation × Puma 50 Years of Hip Hop campaign. Multicam edit, 3D animation overlays, and generative AI backgrounds - social and broadcast delivery.",
    processNotes: [
      "Multicam event footage edit",
      "3D animation overlays",
      "Generative AI backgrounds",
      "Delivered across social and broadcast formats"
    ],
    outcome: "Campaign visuals - 1M+ social impressions.",
    tags: ["Motion", "AI", "Cultural", "Editing"]
  },
  {
    title: "Grain",
    subtitle: "Spatial Visual Reference System",
    number: "03",
    numberImage: "assets/00_site/DS_Num_003.svg",
    media: {
      type: "video",
      src: "assets/02_selected_works/grain/grain_explainer.mp4",
      thumb: "assets/02_selected_works/grain/grain_thumb_v3.jpg",
      alt: "Grain"
    },
    assets: {
      header: {
        type: "video",
        src: "assets/02_selected_works/grain/grain_explainer.mp4",
        poster: "assets/02_selected_works/grain/grain_explainer_poster.jpg",
        alt: "Grain launch explainer — squares, search, and agent beats over risograph paper",
        label: "Launch Explainer"
      },
      items: [
        {
          type: "video",
          size: "feature",
          src: "assets/02_selected_works/grain/grain_preview_v2.mp4",
          poster: "assets/02_selected_works/grain/grain_header_v2.jpg",
          label: "Workspace Navigation — Live Remote Library"
        },
        {
          type: "diagram",
          src: "assets/02_selected_works/grain/grain_diagram_ingest.svg",
          label: "Ingest Pipeline"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/grain/grain_still_inspector_v2.jpg",
          alt: "A focused Grain asset with its generated artifact and palette inspector",
          label: "Artifact Inspector"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/grain/grain_still_agent_v2.jpg",
          alt: "Grain agent panel discussing a focused visual reference",
          label: "Embedded Agent"
        },
        {
          type: "diagram",
          src: "assets/02_selected_works/grain/grain_diagram_architecture.svg",
          label: "System Architecture"
        },
        {
          type: "image",
          src: "assets/02_selected_works/grain/grain_still_edit_v2.jpg",
          alt: "Grain human edit form for artifact metadata, confidence, palette, and collections",
          label: "Human Artifact Editing"
        },
        {
          type: "image",
          src: "assets/02_selected_works/grain/grain_cli_capture_v2.png",
          texture: true,
          alt: "Grain CLI session — doctor, version, and search commands",
          label: "CLI"
        }
      ]
    },
    role: "Product Designer / Full-Stack Developer — Electron, React, Three.js, FastAPI, SQLite, embedded agent",
    description: "A local-first visual knowledge archive that turns image references into searchable, spatial material. Built end to end: multi-source ingest, deterministic image extraction, a Three.js workspace, collections, human-editable artifacts, CLI automation, and an embedded agent — all backed by one auditable API.",
    processNotes: [
      "Electron desktop app switches between a local library and a hosted remote origin through an SSH tunnel",
      "React + Three.js workspace renders 177 live assets through a WebP texture atlas and level-of-detail system",
      "FastAPI + SQLite/WAL backend with FTS5 search, UUIDv7 identities, and 15 forward-only migrations",
      "File, URL, and Tumblr ingest validates image bytes before hashing, palette extraction, pHash deduplication, and indexing",
      "Queued artifact generation produces reviewable summaries, era, style, mood, palette, and confidence fields",
      "Human edits, collections, CLI operations, and embedded-agent actions all converge on the same audited API"
    ],
    outcome: "Packaged macOS application connected to a live 177-asset origin. Current main passes 624 tests; the production visual smoke renders the workspace in one draw call with zero atlas failures.",
    tags: ["Electron", "React", "Three.js", "FastAPI", "SQLite", "Agents"]
  },
  {
    title: "ComfyUI",
    subtitle: "Local Generative Pipeline — 3D → Image → Video",
    number: "04",
    numberImage: "assets/00_site/DS_Num_004.svg",
    media: {
      type: "video",
      src: "assets/02_selected_works/comfyui/cf_preview_g3.mp4",
      thumb: "assets/02_selected_works/comfyui/cf_thumb_g.jpg",
      alt: "ComfyUI — local generative pipeline"
    },
    assets: {
      header: {
        type: "image",
        src: "assets/02_selected_works/comfyui/cf_header_booth_g.jpg",
        alt: "Star-and-moon game booth at night, one warm lamp glowing over the counter",
        label: "Still — Game Booth"
      },
      items: [
        {
          type: "video",
          controls: true,
          size: "feature",
          src: "assets/02_selected_works/comfyui/cf_film_main.mp4",
          poster: "assets/02_selected_works/comfyui/cf_film_poster.jpg",
          label: "Short Film — Final Cut"
        },
        {
          type: "diagram",
          src: "assets/02_selected_works/comfyui/cf_flow_3d_to_image.svg",
          alt: "Flowchart: object plate to TRELLIS mesh, environment prompt expansion to base frame, merged into a depth composite that guides generation as a weight, ending in the final production still",
          label: "Pipeline — 3D Object → Image"
        },
        {
          type: "placeholder",
          size: "feature",
          label: "Process Video (Coming Soon)"
        },
        {
          type: "diagram",
          src: "assets/02_selected_works/comfyui/cf_flow_image_to_video.svg",
          alt: "Flowchart: an approved still becomes frame one, a motion-only prompt drives Wan 2.2 video generation, then retime and upscale to a 1080p master clip",
          label: "Pipeline — Image → Video"
        },
        {
          type: "video",
          size: "square",
          src: "assets/02_selected_works/comfyui/cf_clip_spark_g.mp4",
          label: "Clip — The Lamp Warms Up"
        },
        {
          type: "video",
          size: "square",
          src: "assets/02_selected_works/comfyui/cf_clip_shop_g.mp4",
          label: "Clip — Something's Still On"
        }
      ]
    },
    role: "Creative Technologist — pipeline design, prompt systems, render infrastructure",
    description: "A fully local production pipeline built around ComfyUI. A 3D object is placed into a generated world through depth — never img2img — and approved stills become moving shots with the image locked as frame one. Prompts are expanded by a local LLM over an API router; everything renders on a single 12GB GPU. Ten finished shots for a short film came out the other end.",
    processNotes: [
      "TRELLIS turns one image into a 3D asset; Blender renders its true depth",
      "Object depth + scene depth merge into one control map — structure enters generation as a weight",
      "A local LLM (qwen3-30b) expands one-line briefs into full cinematic prompts, routed over the home network",
      "Approved stills lock frame one; the motion prompt describes only what moves",
      "14B dual-expert video diffusion fits 12GB by swapping transformer blocks to system RAM",
      "Motion-interpolated half-speed retime sets the tempo; RealESRGAN delivers 1080p masters",
      "Every render embeds its full node graph — any frame can be reproduced exactly"
    ],
    outcome: "Ten approved shots delivered as ungraded 1080p masters for a short film, cut and graded in DaVinci. No cloud, no stock — every pixel generated locally.",
    tags: ["ComfyUI", "Wan 2.2", "Krea 2", "TRELLIS", "Local LLM", "Python"]
  },
  {
    title: "Blender/VFX",
    subtitle: "Production Pipeline Showcase",
    number: "05",
    numberImage: "assets/00_site/DS_Num_005.svg",
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
    role: "3D Artist / VFX - modeling, lighting, animation, compositing",
    description: "Blender and VFX work: product visualization, environment design, and live-action compositing. Modeling, lighting, rendering, and compositing - all in Blender.",
    processNotes: [
      "Modeling and sculpting",
      "Material authoring and lighting",
      "Rendering (Cycles)",
      "Compositing"
    ],
    outcome: "Compilation showing product viz and live-action compositing in Blender.",
    tags: ["Blender", "3D", "VFX", "Cycles"]
  },
  {
    title: "Media Mate",
    subtitle: "Local Post-Production Media Ops",
    number: "06",
    numberImage: "assets/00_site/DS_Num_006.svg",
    media: {
      type: "video",
      src: "assets/02_selected_works/media_tools/mm_preview_v3.mp4",
      thumb: "assets/02_selected_works/media_tools/mm_thumb_v3.jpg",
      alt: "Media Mate TUI queuing two camera cards and running the five-step pipeline live"
    },
    assets: {
      header: {
        type: "image",
        src: "assets/02_selected_works/media_tools/mm_header_v3.jpg",
        alt: "Media Mate dashboard with run statistics and the five-step pipeline strap",
        label: "Media Mate — Post Workstation"
      },
      items: [
        {
          type: "video",
          size: "feature",
          src: "assets/02_selected_works/media_tools/mm_preview_v3.mp4",
          poster: "assets/02_selected_works/media_tools/mm_preview_poster_v3.jpg",
          label: "Two Cards Queued — Probe → Organize → Proxy → Resolve → Verify"
        },
        {
          type: "diagram",
          src: "assets/02_selected_works/media_tools/mm_diagram_pipeline.svg",
          label: "Run Pipeline"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/media_tools/mm_cli_capture_v3.png",
          texture: true,
          alt: "Media Mate probe table and organize dry-run then real copy",
          label: "Probe + Organize — Safe by Default"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/media_tools/mm_cli_proxy_verify_v3.png",
          texture: true,
          alt: "ProRes proxy generation and checksum verification catching a modified file",
          label: "Proxy + Verify — Scriptable Exits"
        },
        {
          type: "diagram",
          src: "assets/02_selected_works/media_tools/mm_diagram_architecture.svg",
          label: "System Architecture"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/media_tools/mm_cli_resolve_v3.png",
          texture: true,
          alt: "Resolve project creation with bins, settings, and timeline manifest",
          label: "Resolve — Project Manifest"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/media_tools/mm_cli_audit_v3.png",
          texture: true,
          alt: "Audit log query showing the last pipeline run recorded in SQLite",
          label: "Audit Trail — SQLite"
        },
        {
          type: "image",
          src: "assets/02_selected_works/media_tools/mm_tui_audit_v3.png",
          texture: true,
          alt: "Textual TUI audit log with two weeks of color-coded pipeline runs",
          label: "Audit Log — Every Operation, Searchable"
        }
      ]
    },
    role: "Product Developer — Python, Click, Textual, FFmpeg/ffprobe, SQLite, Resolve scripting",
    description: "A local-first toolkit for the boring-but-critical layer underneath video post-production. Media Mate probes editorial metadata, safely organizes camera cards, generates edit-ready ProRes proxies, prepares DaVinci Resolve projects, and verifies backups — driven from a full-screen terminal UI or a scriptable CLI, with every operation recorded in SQLite.",
    processNotes: [
      "The Textual TUI auto-detects camera cards and external drives, queues multiple sources, and streams live per-step progress with safe cancel",
      "ffprobe extracts codec, container, timecode, frame rate, VFR state, color metadata, SAR, and audio bit depth",
      "Organize copies by default with dry runs and conflict policies, so camera originals are never touched",
      "FFmpeg generates .mov ProRes proxies with aspect correction, source timecode/color metadata, PCM audio, and CFR normalization",
      "Verification diffs xxhash or SHA-256 checksums against an immutable accepted baseline and returns scriptable exit codes for cron",
      "Resolve integration builds project settings, bins, and timelines — with a portable manifest fallback when Resolve isn't running",
      "CLI and TUI are thin fronts over the same six capability modules and one SQLite audit trail"
    ],
    outcome: "Open-source v0.2.4 release — TUI-first, 317 passing tests, five runtime dependencies, and no cloud services or API keys required.",
    tags: ["Python", "FFmpeg", "Textual", "SQLite", "DaVinci Resolve", "CLI"]
  },
  {
    title: "Virtual Fashion",
    subtitle: "Digital Garments — Marvelous Designer + Blender",
    number: "07",
    numberImage: "assets/00_site/DS_Num_007.svg",
    media: {
      type: "image",
      src: "assets/02_selected_works/virtual_fashion/vf_thumb.jpg",
      thumb: "assets/02_selected_works/virtual_fashion/vf_thumb.jpg",
      alt: "Figure in an orange puffer vest and fur hat against a blue sky, surrounded by floating chrome charms"
    },
    assets: {
      header: {
        type: "image",
        src: "assets/02_selected_works/virtual_fashion/vf_header.jpg",
        alt: "Figure in a white robe laced with gold filigree, wearing a gold crown, lit against a dark forest",
        label: "Editorial — Crown Study"
      },
      items: [
        {
          type: "video",
          size: "feature",
          src: "assets/02_selected_works/virtual_fashion/vf_process.mp4",
          poster: "assets/02_selected_works/virtual_fashion/vf_process_poster.jpg",
          label: "Clay → Final"
        },
        {
          type: "image",
          src: "assets/02_selected_works/virtual_fashion/vf_lookbook.jpg",
          alt: "Four looks photographed on one warehouse set of white crates and concrete",
          label: "Collection Series"
        },
        {
          type: "diagram",
          src: "assets/02_selected_works/virtual_fashion/vf_diagram_pipeline.svg",
          label: "Garment Pipeline"
        },
        {
          type: "video",
          size: "square",
          src: "assets/02_selected_works/virtual_fashion/vf_reel.mp4",
          poster: "assets/02_selected_works/virtual_fashion/vf_reel_poster.jpg",
          label: "Process Reel"
        },
        {
          type: "image",
          size: "square",
          src: "assets/02_selected_works/virtual_fashion/vf_detail_fur.jpg",
          alt: "Close crop of a groomed blue fur hat with black leather vest and ruched trousers",
          label: "Detail"
        }
      ]
    },
    role: "3D Artist — garment construction, cloth simulation, grooming, editorial rendering",
    description: "A personal digital fashion practice. Every garment starts as flat pattern panels in Marvelous Designer, is fit and drape-simulated on custom avatars, then moves into Blender for grooming, set design, and Cycles rendering — finished as editorial stills. The work spans one-off editorials and a four-look collection shot on a single recurring set.",
    processNotes: [
      "Garments patterned from flat panels and simulated in Marvelous Designer — drape, pinch, and gather come from the sim, not sculpting",
      "Cloth caches travel over Alembic into Blender with per-garment UDIM texture sets",
      "Fur hats and trims are groomed hair systems rendered in Cycles",
      "A recurring warehouse set — crates, concrete, one Panton chair — turns four looks into a cohesive collection",
      "Every look gets a clay pass before materials, keeping silhouette and drape honest",
      "Finals retouched in Photoshop from reusable studio edit templates"
    ],
    outcome: "An ongoing personal practice — eight finished editorials to date, with every garment, groom, and set built from scratch.",
    tags: ["Marvelous Designer", "Blender", "Cycles", "Cloth Sim", "Digital Fashion"]
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
  // Stills and motion clips ride above the sitewide CRT/paper overlays;
  // diagrams, headers, and terminal captures (texture: true) stay beneath.
  const onTop = (asset.type === "video" || asset.type === "image")
    && !asset.texture
    && !className.includes("asset-header");
  const node = el("div", { class: `asset-frame ${className}${onTop ? " media-top" : ""}`.trim() });
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
    // asset.controls: user-initiated playback with sound (film cuts) instead
    // of the default muted ambient loop.
    node.appendChild(el("video", asset.controls ? {
      src: asset.src,
      controls: "true",
      preload: "metadata",
      playsinline: "true",
      poster: asset.poster || ""
    } : {
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

  if (!asset.controls) node.appendChild(label);
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
