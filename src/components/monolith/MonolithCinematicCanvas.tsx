import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { playIndustrialClick, playLaserHum } from './monolithAudio';

interface MonolithCinematicCanvasProps {
  isExploreMode: boolean;
  onToggleExplore: () => void;
  className?: string;
}

interface TelemetryData {
  camX: string;
  camY: string;
  camZ: string;
  altitude: string;
  structureHeight: string;
  fogDensity: string;
  lightCorePower: string;
  fps: number;
}

export const MonolithCinematicCanvas: React.FC<MonolithCinematicCanvasProps> = ({
  isExploreMode,
  onToggleExplore,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [telemetry, setTelemetry] = useState<TelemetryData>({
    camX: '-8.00',
    camY: '14.00',
    camZ: '52.00',
    altitude: '14.2m',
    structureHeight: '480m',
    fogDensity: '94.2%',
    lightCorePower: '3.8 GW',
    fps: 60
  });

  // Scene references for interaction
  const sceneStateRef = useRef<{
    isDragging: boolean;
    prevX: number;
    prevY: number;
    orbitTheta: number; // horizontal angle
    orbitPhi: number;   // vertical angle
    orbitRadius: number;
    targetLookAt: THREE.Vector3;
    currentLookAt: THREE.Vector3;
    mouseParallax: { x: number; y: number };
    resetToHero: () => void;
  }>({
    isDragging: false,
    prevX: 0,
    prevY: 0,
    orbitTheta: -0.15,
    orbitPhi: 0.28,
    orbitRadius: 54,
    targetLookAt: new THREE.Vector3(5, 32, 0),
    currentLookAt: new THREE.Vector3(5, 32, 0),
    mouseParallax: { x: 0, y: 0 },
    resetToHero: () => {}
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // --- THREE.JS SCENE SETUP ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e1116);
    scene.fog = new THREE.FogExp2(0x0e1116, 0.0075);

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.5,
      600
    );

    // Initial cinematic camera position
    const heroCamPos = new THREE.Vector3(-8, 14, 52);
    camera.position.copy(heroCamPos);
    camera.lookAt(5, 32, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // --- PROCEDURAL CONCRETE TEXTURE GENERATOR ---
    const generateConcreteTexture = () => {
      const texCanvas = document.createElement('canvas');
      texCanvas.width = 1024;
      texCanvas.height = 1024;
      const ctx = texCanvas.getContext('2d');
      if (!ctx) return null;

      // Base brutalist concrete tone
      ctx.fillStyle = '#23262d';
      ctx.fillRect(0, 0, 1024, 1024);

      // Micro aggregate speckles (sand, cement aggregate, gravel)
      for (let i = 0; i < 90000; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 1024;
        const size = Math.random() * 2.2;
        const shade = Math.floor(18 + Math.random() * 45);
        ctx.fillStyle = `rgb(${shade}, ${shade}, ${shade + 2})`;
        ctx.fillRect(x, y, size, size);
      }

      // Horizontal modular brutalist formwork panel seams (every 128px)
      for (let y = 128; y < 1024; y += 128) {
        ctx.strokeStyle = '#14161b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(1024, y);
        ctx.stroke();

        // Highlight bevel
        ctx.strokeStyle = '#32363f';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y + 2);
        ctx.lineTo(1024, y + 2);
        ctx.stroke();

        // Tie-rod holes (architectural concrete anchor plugs)
        for (let x = 64; x < 1024; x += 128) {
          ctx.fillStyle = '#0f1115';
          ctx.beginPath();
          ctx.arc(x, y - 12, 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#3a3e47';
          ctx.beginPath();
          ctx.arc(x, y - 13, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Vertical rain/weathering water-wash runoff streaks
      for (let i = 0; i < 70; i++) {
        const x = Math.random() * 1024;
        const yStart = Math.random() * 400;
        const length = 120 + Math.random() * 450;
        const width = 1 + Math.random() * 3.5;
        const alpha = 0.08 + Math.random() * 0.16;

        ctx.strokeStyle = `rgba(10, 12, 16, ${alpha})`;
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(x, yStart);
        ctx.lineTo(x + (Math.random() - 0.5) * 4, yStart + length);
        ctx.stroke();
      }

      const texture = new THREE.CanvasTexture(texCanvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(2, 4);
      return texture;
    };

    const concreteTexture = generateConcreteTexture();

    // Procedural Normal/Bump texture
    const generateBumpTexture = () => {
      const texCanvas = document.createElement('canvas');
      texCanvas.width = 512;
      texCanvas.height = 512;
      const ctx = texCanvas.getContext('2d');
      if (!ctx) return null;

      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, 512, 512);

      for (let i = 0; i < 40000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const size = Math.random() * 2;
        const val = Math.floor(100 + Math.random() * 55);
        ctx.fillStyle = `rgb(${val}, ${val}, ${val})`;
        ctx.fillRect(x, y, size, size);
      }

      const texture = new THREE.CanvasTexture(texCanvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(4, 8);
      return texture;
    };

    const bumpTexture = generateBumpTexture();

    // --- SHARED PBR MATERIALS ---
    const concreteMaterial = new THREE.MeshStandardMaterial({
      color: 0x2b2e36,
      roughness: 0.88,
      metalness: 0.12,
      map: concreteTexture || undefined,
      bumpMap: bumpTexture || undefined,
      bumpScale: 0.08
    });

    const darkTrimMaterial = new THREE.MeshStandardMaterial({
      color: 0x181a1f,
      roughness: 0.92,
      metalness: 0.08
    });

    // Glowing Amber Golden Slit Material (The signature sci-fi monolith light)
    const amberGlowMaterial = new THREE.MeshStandardMaterial({
      color: 0xffaa33,
      emissive: 0xff8811,
      emissiveIntensity: 3.6,
      roughness: 0.2,
      metalness: 0.1
    });

    // --- MONUMENTAL MONOLITH ARCHITECTURE (Hierarchical Group) ---
    const monolithGroup = new THREE.Group();
    scene.add(monolithGroup);

    // 1. Central Massive Megalith
    const centralPillars = [
      // Base Plinth / Foundation block
      { w: 26, h: 22, d: 20, x: 5, y: 11, z: 0 },
      // Tier 1 - Stepped Lower Core
      { w: 22, h: 42, d: 18, x: 5, y: 28, z: -1 },
      // Tier 2 - Stepped Middle Citadel
      { w: 18, h: 58, d: 16, x: 5, y: 46, z: -2 },
      // Tier 3 - Upper Monolith Keep
      { w: 14, h: 80, d: 13, x: 5, y: 65, z: -3 },
      // Tier 4 - Summit Crown & Pylons
      { w: 10, h: 105, d: 10, x: 5, y: 80, z: -4 },
      // Front Cantilevered Bastion
      { w: 16, h: 32, d: 12, x: 5, y: 20, z: 8 },
      // Forward Pier Entrance Block
      { w: 12, h: 18, d: 16, x: 5, y: 9, z: 16 }
    ];

    centralPillars.forEach((p) => {
      const geo = new THREE.BoxGeometry(p.w, p.h, p.d);
      const mesh = new THREE.Mesh(geo, concreteMaterial);
      mesh.position.set(p.x, p.y, p.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      monolithGroup.add(mesh);
    });

    // 2. Left Flanking Monolithic Towers (Staggered Heights)
    const leftWingBlocks = [
      { w: 12, h: 72, d: 14, x: -12, y: 36, z: -1 },
      { w: 10, h: 56, d: 12, x: -20, y: 28, z: 3 },
      { w: 8, h: 40, d: 10, x: -27, y: 20, z: 6 },
      { w: 6, h: 24, d: 8, x: -33, y: 12, z: 10 }
    ];

    leftWingBlocks.forEach((p) => {
      const geo = new THREE.BoxGeometry(p.w, p.h, p.d);
      const mesh = new THREE.Mesh(geo, concreteMaterial);
      mesh.position.set(p.x, p.y, p.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      monolithGroup.add(mesh);
    });

    // 3. Right Flanking Monolithic Towers (Staggered Heights)
    const rightWingBlocks = [
      { w: 14, h: 85, d: 16, x: 21, y: 42, z: 2 },
      { w: 12, h: 68, d: 14, x: 32, y: 34, z: 5 },
      { w: 10, h: 48, d: 12, x: 42, y: 24, z: 8 },
      { w: 8, h: 30, d: 10, x: 50, y: 15, z: 12 }
    ];

    rightWingBlocks.forEach((p) => {
      const geo = new THREE.BoxGeometry(p.w, p.h, p.d);
      const mesh = new THREE.Mesh(geo, concreteMaterial);
      mesh.position.set(p.x, p.y, p.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      monolithGroup.add(mesh);
    });

    // 4. Connecting High-Altitude Skybridges / Architectural Buttresses
    const skybridgeGeos = [
      { w: 10, h: 4, d: 6, x: -5, y: 44, z: 1 },
      { w: 8, h: 3.5, d: 5, x: 14, y: 52, z: 3 },
      { w: 6, h: 3, d: 4, x: -16, y: 32, z: 4 },
      { w: 12, h: 5, d: 8, x: 26, y: 38, z: 6 }
    ];

    skybridgeGeos.forEach((b) => {
      const geo = new THREE.BoxGeometry(b.w, b.h, b.d);
      const mesh = new THREE.Mesh(geo, darkTrimMaterial);
      mesh.position.set(b.x, b.y, b.z);
      mesh.castShadow = true;
      monolithGroup.add(mesh);
    });

    // 5. SIGNATURE AMBER VERTICAL LIGHT SLITS (High-intensity illuminated crevices)
    const lightSlits: THREE.Mesh[] = [];

    const slitSpecs = [
      // Main Center Core Vertical Slit (Tallest)
      { w: 0.45, h: 95, d: 0.6, x: 5, y: 56, z: 5.2 },
      // Upper Crest Slit
      { w: 0.35, h: 45, d: 0.5, x: 5, y: 88, z: 1.2 },
      // Left Bastion Vertical Slit
      { w: 0.35, h: 58, d: 0.5, x: -6.8, y: 40, z: 6.5 },
      // Right Bastion Vertical Slit
      { w: 0.35, h: 68, d: 0.5, x: 13.8, y: 48, z: 7.5 },
      // Lower Gateway Portal Slit (Vertical)
      { w: 0.4, h: 18, d: 0.6, x: 5, y: 12, z: 14.2 },
      // Secondary Left Trench Slit
      { w: 0.28, h: 35, d: 0.4, x: -16, y: 30, z: 8.2 },
      // Secondary Right Trench Slit
      { w: 0.3, h: 42, d: 0.4, x: 26.5, y: 36, z: 9.2 }
    ];

    slitSpecs.forEach((s) => {
      const geo = new THREE.BoxGeometry(s.w, s.h, s.d);
      const mesh = new THREE.Mesh(geo, amberGlowMaterial);
      mesh.position.set(s.x, s.y, s.z);
      monolithGroup.add(mesh);
      lightSlits.push(mesh);
    });

    // Point lights placed directly in front of the primary light slits
    const amberPointLight1 = new THREE.PointLight(0xffaa33, 4.5, 55, 1.2);
    amberPointLight1.position.set(5, 42, 9);
    monolithGroup.add(amberPointLight1);

    const amberPointLight2 = new THREE.PointLight(0xff9422, 3.8, 45, 1.2);
    amberPointLight2.position.set(14, 38, 11);
    monolithGroup.add(amberPointLight2);

    const amberPointLight3 = new THREE.PointLight(0xffaa22, 3.2, 35, 1.2);
    amberPointLight3.position.set(-6, 30, 9);
    monolithGroup.add(amberPointLight3);

    const amberPointLight4 = new THREE.PointLight(0xffb844, 4.0, 30, 1.2);
    amberPointLight4.position.set(5, 10, 17);
    monolithGroup.add(amberPointLight4);

    // --- WET REFLECTIVE WATER PLANE & TIDAL SURFACE ---
    const waterGeo = new THREE.PlaneGeometry(360, 360, 64, 64);
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x090c10,
      roughness: 0.12,
      metalness: 0.68,
      flatShading: false
    });
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.rotation.x = -Math.PI / 2;
    waterMesh.position.y = 0;
    waterMesh.receiveShadow = true;
    scene.add(waterMesh);

    // Store original vertices for subtle animated liquid ripples
    const waterPosAttr = waterGeo.attributes.position;
    const waterInitY = new Float32Array(waterPosAttr.count);
    for (let i = 0; i < waterPosAttr.count; i++) {
      waterInitY[i] = waterPosAttr.getY(i);
    }

    // --- ROCKY CRAGS & SHORELINE OUTCROPS ---
    const rockGeo = new THREE.DodecahedronGeometry(1, 1);
    const rockMat = new THREE.MeshStandardMaterial({
      color: 0x1b1d22,
      roughness: 0.94,
      metalness: 0.1
    });

    const rocksGroup = new THREE.Group();
    scene.add(rocksGroup);

    // Foreground Left Rocky Cliff (Where the silhouette traveler stands)
    const cliffRocks = [
      { x: -14, y: 1.5, z: 20, s: 6, ry: 0.4 },
      { x: -12, y: 2.8, z: 22, s: 5.5, ry: 1.1 },
      { x: -16, y: 2.2, z: 24, s: 6.5, ry: 2.3 },
      { x: -10, y: 3.6, z: 23, s: 4.8, ry: 0.7 },
      { x: -11.5, y: 4.2, z: 21, s: 4.2, ry: 1.9 }, // Top plateau for traveler
      { x: -8, y: 1.2, z: 24, s: 3.8, ry: 0.3 }
    ];

    cliffRocks.forEach((r) => {
      const rock = new THREE.Mesh(rockGeo, rockMat);
      rock.position.set(r.x, r.y, r.z);
      rock.scale.set(r.s * 1.3, r.s * 0.8, r.s);
      rock.rotation.set(0.2, r.ry, 0.1);
      rock.castShadow = true;
      rock.receiveShadow = true;
      rocksGroup.add(rock);
    });

    // Scattered wet shoreline boulders in the water
    const shorelineRocks = [
      { x: -2, y: 0.4, z: 32, s: 2.2 },
      { x: 3, y: 0.6, z: 35, s: 2.8 },
      { x: 12, y: 0.5, z: 30, s: 2.5 },
      { x: 18, y: 0.8, z: 26, s: 3.2 },
      { x: 26, y: 0.9, z: 28, s: 3.6 },
      { x: 8, y: 0.3, z: 38, s: 1.8 },
      { x: -6, y: 0.5, z: 28, s: 2.1 },
      { x: 34, y: 1.1, z: 22, s: 4.2 }
    ];

    shorelineRocks.forEach((r) => {
      const rock = new THREE.Mesh(rockGeo, rockMat);
      rock.position.set(r.x, r.y, r.z);
      rock.scale.set(r.s * 1.4, r.s * 0.6, r.s * 1.1);
      rock.rotation.set(0.1, Math.random() * Math.PI, 0.1);
      rock.castShadow = true;
      rock.receiveShadow = true;
      rocksGroup.add(rock);
    });

    // --- SILHOUETTE OF THE LONE TRAVELER / DEVELOPER ---
    // Positioned on the left rocky plateau looking at the colossal monolith
    const travelerGroup = new THREE.Group();
    travelerGroup.position.set(-11.5, 6.0, 21.2);
    scene.add(travelerGroup);

    const silhouetteMat = new THREE.MeshBasicMaterial({ color: 0x050608 });

    // Legs
    const leftLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 1.2, 8), silhouetteMat);
    leftLeg.position.set(-0.18, 0.6, 0);
    travelerGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 1.2, 8), silhouetteMat);
    rightLeg.position.set(0.18, 0.6, 0);
    travelerGroup.add(rightLeg);

    // Torso & Long Coat
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 1.3, 8), silhouetteMat);
    torso.position.set(0, 1.7, 0);
    travelerGroup.add(torso);

    const coatTail = new THREE.Mesh(new THREE.ConeGeometry(0.48, 1.2, 8), silhouetteMat);
    coatTail.position.set(0, 1.2, -0.15);
    coatTail.rotation.x = -0.25; // coat fluttering slightly in wind
    travelerGroup.add(coatTail);

    // Backpack
    const backpack = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.65, 0.3), silhouetteMat);
    backpack.position.set(0, 1.8, 0.25);
    travelerGroup.add(backpack);

    // Head with Hood
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.24, 8, 8), silhouetteMat);
    head.position.set(0, 2.5, 0);
    travelerGroup.add(head);

    // --- PROCEDURAL VOLUMETRIC DRIFTING FOG PARTICLES ---
    const generatePuffTexture = () => {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 128;
      pCanvas.height = 128;
      const pCtx = pCanvas.getContext('2d');
      if (!pCtx) return null;

      const grad = pCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(215, 225, 235, 0.85)');
      grad.addColorStop(0.3, 'rgba(180, 195, 210, 0.45)');
      grad.addColorStop(0.7, 'rgba(140, 155, 170, 0.15)');
      grad.addColorStop(1, 'rgba(100, 115, 130, 0)');

      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 128, 128);

      return new THREE.CanvasTexture(pCanvas);
    };

    const puffTexture = generatePuffTexture();

    const fogPuffsGroup = new THREE.Group();
    scene.add(fogPuffsGroup);

    interface FogPuffData {
      mesh: THREE.Sprite;
      speedX: number;
      speedZ: number;
      baseY: number;
      rotSpeed: number;
    }

    const fogPuffs: FogPuffData[] = [];
    const puffCount = 55;

    for (let i = 0; i < puffCount; i++) {
      const pMat = new THREE.SpriteMaterial({
        map: puffTexture || undefined,
        color: 0x3d434f,
        transparent: true,
        opacity: 0.12 + Math.random() * 0.18,
        depthWrite: false,
        blending: THREE.NormalBlending
      });

      const sprite = new THREE.Sprite(pMat);
      const scale = 16 + Math.random() * 24;
      sprite.scale.set(scale, scale * 0.55, 1);

      const x = (Math.random() - 0.5) * 120 + 5;
      const y = 3 + Math.random() * 22;
      const z = (Math.random() - 0.5) * 70 + 10;
      sprite.position.set(x, y, z);

      fogPuffsGroup.add(sprite);

      fogPuffs.push({
        mesh: sprite,
        speedX: (0.015 + Math.random() * 0.035) * (Math.random() > 0.5 ? 1 : -1),
        speedZ: (0.008 + Math.random() * 0.02) * (Math.random() > 0.5 ? 1 : -1),
        baseY: y,
        rotSpeed: (Math.random() - 0.5) * 0.002
      });
    }

    // --- SKY BACKDROP & STORM LIGHTING ---
    // Atmospheric backdrop plane (storm horizon)
    const skyGeo = new THREE.PlaneGeometry(500, 260);
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 512;
    skyCanvas.height = 512;
    const skyCtx = skyCanvas.getContext('2d');
    if (skyCtx) {
      const grad = skyCtx.createLinearGradient(0, 0, 0, 512);
      grad.addColorStop(0, '#1c2028');
      grad.addColorStop(0.35, '#282d37');
      grad.addColorStop(0.65, '#1e2229');
      grad.addColorStop(1, '#0e1116');
      skyCtx.fillStyle = grad;
      skyCtx.fillRect(0, 0, 512, 512);
    }
    const skyTex = new THREE.CanvasTexture(skyCanvas);
    const skyMat = new THREE.MeshBasicMaterial({
      map: skyTex,
      side: THREE.BackSide,
      fog: false
    });
    const skyMesh = new THREE.Mesh(skyGeo, skyMat);
    skyMesh.position.set(5, 80, -90);
    scene.add(skyMesh);

    // Global Directional & Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0x232934, 1.4);
    scene.add(ambientLight);

    // Main Storm Sunlight filtering through clouds from upper right
    const dirLight = new THREE.DirectionalLight(0xdde4f0, 2.6);
    dirLight.position.set(45, 85, 45);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 250;
    dirLight.shadow.camera.left = -60;
    dirLight.shadow.camera.right = 60;
    dirLight.shadow.camera.top = 80;
    dirLight.shadow.camera.bottom = -20;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    // Secondary fill light from lower left
    const fillLight = new THREE.DirectionalLight(0x28303f, 1.1);
    fillLight.position.set(-50, 20, 20);
    scene.add(fillLight);

    // --- INTERACTION & ORBIT CONTROLS ---
    const sceneState = sceneStateRef.current;

    sceneState.resetToHero = () => {
      sceneState.orbitTheta = -0.15;
      sceneState.orbitPhi = 0.28;
      sceneState.orbitRadius = 54;
      sceneState.targetLookAt.set(5, 32, 0);
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      sceneState.isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      sceneState.prevX = clientX;
      sceneState.prevY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      if (sceneState.isDragging && isExploreMode) {
        const deltaX = clientX - sceneState.prevX;
        const deltaY = clientY - sceneState.prevY;

        sceneState.orbitTheta -= deltaX * 0.006;
        sceneState.orbitPhi = Math.max(0.08, Math.min(Math.PI / 2.2, sceneState.orbitPhi + deltaY * 0.005));

        sceneState.prevX = clientX;
        sceneState.prevY = clientY;
      } else {
        // Mouse parallax during normal hero mode
        const rect = container.getBoundingClientRect();
        const normX = ((clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((clientY - rect.top) / rect.height) * 2 - 1);
        sceneState.mouseParallax.x = normX;
        sceneState.mouseParallax.y = normY;
      }
    };

    const handlePointerUp = () => {
      sceneState.isDragging = false;
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isExploreMode) return;
      e.preventDefault();
      sceneState.orbitRadius = Math.max(25, Math.min(110, sceneState.orbitRadius + e.deltaY * 0.05));
    };

    const domElement = canvas;
    domElement.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    domElement.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);
    domElement.addEventListener('wheel', handleWheel, { passive: false });

    // --- WINDOW RESIZE HANDLER ---
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // --- MAIN RENDER & ANIMATION LOOP ---
    let animId: number;
    const clock = new THREE.Clock();
    let lastTelemetryUpdate = 0;
    let frameCount = 0;
    let fpsStart = performance.now();
    let currentFps = 60;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // FPS Counter calculation
      frameCount++;
      const now = performance.now();
      if (now - fpsStart >= 1000) {
        currentFps = Math.round((frameCount * 1000) / (now - fpsStart));
        frameCount = 0;
        fpsStart = now;
      }

      // 1. Water subtle ripple physics
      for (let i = 0; i < waterPosAttr.count; i++) {
        const u = waterPosAttr.getX(i);
        const v = waterPosAttr.getY(i);
        const wave = Math.sin(u * 0.08 + elapsed * 1.4) * 0.22 +
                     Math.cos(v * 0.06 + elapsed * 1.1) * 0.18;
        waterPosAttr.setZ(i, waterInitY[i] + wave);
      }
      waterPosAttr.needsUpdate = true;

      // 2. Amber Vertical Slits Breathing / Pulsing Glow
      const pulse = 3.2 + Math.sin(elapsed * 1.8) * 0.7;
      amberGlowMaterial.emissiveIntensity = pulse;
      amberPointLight1.intensity = 4.2 + Math.sin(elapsed * 2.1) * 0.8;
      amberPointLight2.intensity = 3.6 + Math.cos(elapsed * 1.7) * 0.6;
      amberPointLight4.intensity = 3.8 + Math.sin(elapsed * 2.5) * 0.7;

      // 3. Volumetric Fog Drifting
      fogPuffs.forEach((puff) => {
        puff.mesh.position.x += puff.speedX;
        puff.mesh.position.z += puff.speedZ;
        puff.mesh.material.rotation += puff.rotSpeed;

        // Wrap around boundaries
        if (puff.mesh.position.x > 65) puff.mesh.position.x = -65;
        if (puff.mesh.position.x < -65) puff.mesh.position.x = 65;
        if (puff.mesh.position.z > 50) puff.mesh.position.z = -20;
        if (puff.mesh.position.z < -20) puff.mesh.position.z = 50;

        puff.mesh.position.y = puff.baseY + Math.sin(elapsed * 0.4 + puff.mesh.position.x) * 1.2;
      });

      // 4. Camera Dynamics (Explore Mode Orbit vs Cinematic Hero Parallax)
      if (isExploreMode) {
        // Orbit Around Monolith Citadel
        const targetX = 5 + Math.sin(sceneState.orbitTheta) * Math.cos(sceneState.orbitPhi) * sceneState.orbitRadius;
        const targetY = Math.max(4, Math.sin(sceneState.orbitPhi) * sceneState.orbitRadius);
        const targetZ = Math.cos(sceneState.orbitTheta) * Math.cos(sceneState.orbitPhi) * sceneState.orbitRadius;

        camera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.08);
        sceneState.currentLookAt.lerp(sceneState.targetLookAt, 0.08);
        camera.lookAt(sceneState.currentLookAt);
      } else {
        // Cinematic Hero Framing with Mouse Parallax
        const parallaxTargetX = heroCamPos.x + sceneState.mouseParallax.x * 3.5;
        const parallaxTargetY = heroCamPos.y + sceneState.mouseParallax.y * 2.2;
        const parallaxTargetZ = heroCamPos.z;

        camera.position.lerp(new THREE.Vector3(parallaxTargetX, parallaxTargetY, parallaxTargetZ), 0.05);

        const lookTarget = new THREE.Vector3(
          5 + sceneState.mouseParallax.x * 1.8,
          32 + sceneState.mouseParallax.y * 1.5,
          0
        );
        sceneState.currentLookAt.lerp(lookTarget, 0.05);
        camera.lookAt(sceneState.currentLookAt);
      }

      // 5. Periodic Telemetry State Update (~10Hz)
      if (elapsed - lastTelemetryUpdate > 0.1) {
        lastTelemetryUpdate = elapsed;
        setTelemetry({
          camX: camera.position.x.toFixed(2),
          camY: camera.position.y.toFixed(2),
          camZ: camera.position.z.toFixed(2),
          altitude: `${camera.position.y.toFixed(1)}m`,
          structureHeight: '480m',
          fogDensity: `${(92 + Math.sin(elapsed * 0.5) * 4).toFixed(1)}%`,
          lightCorePower: `${(3.6 + Math.sin(elapsed * 1.8) * 0.4).toFixed(2)} GW`,
          fps: currentFps
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // --- CLEANUP ---
    return () => {
      cancelAnimationFrame(animId);
      domElement.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      domElement.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
      domElement.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);

      // Dispose Geometries & Textures
      waterGeo.dispose();
      waterMat.dispose();
      rockGeo.dispose();
      rockMat.dispose();
      skyGeo.dispose();
      skyMat.dispose();
      concreteMaterial.dispose();
      darkTrimMaterial.dispose();
      amberGlowMaterial.dispose();
      silhouetteMat.dispose();
      if (concreteTexture) concreteTexture.dispose();
      if (bumpTexture) bumpTexture.dispose();
      if (puffTexture) puffTexture.dispose();
      if (skyTex) skyTex.dispose();
      renderer.dispose();
    };
  }, [isExploreMode]);

  const handleResetExplore = useCallback(() => {
    playIndustrialClick();
    sceneStateRef.current.resetToHero();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none overflow-hidden ${
        isExploreMode ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'
      } ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Free 3D Explore Mode HUD Banner & Telemetry */}
      {isExploreMode && (
        <div className="absolute top-20 right-4 sm:right-8 z-30 font-mono text-[10px] text-slate-300 pointer-events-none select-none max-w-xs">
          <div className="bg-[#0f1217]/90 border border-[#ff9900]/40 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-[#383b44] pb-1.5 mb-2">
              <span className="text-[#ffaa00] font-bold tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffaa00] animate-ping" />
                ORBIT_INSPECTION_MODE
              </span>
              <span className="text-[#00f0ff] font-bold">{telemetry.fps} FPS</span>
            </div>

            <div className="space-y-1 text-slate-400">
              <div className="flex justify-between">
                <span>CAM_POS:</span>
                <span className="text-white font-mono">
                  [{telemetry.camX}, {telemetry.camY}, {telemetry.camZ}]
                </span>
              </div>
              <div className="flex justify-between">
                <span>ALTITUDE:</span>
                <span className="text-white font-semibold">{telemetry.altitude}</span>
              </div>
              <div className="flex justify-between">
                <span>CITADEL HEIGHT:</span>
                <span className="text-[#00f0ff] font-semibold">{telemetry.structureHeight}</span>
              </div>
              <div className="flex justify-between">
                <span>FOG DENSITY:</span>
                <span className="text-slate-300">{telemetry.fogDensity}</span>
              </div>
              <div className="flex justify-between">
                <span>CORE OUTPUT:</span>
                <span className="text-[#ffaa00] font-semibold">{telemetry.lightCorePower}</span>
              </div>
            </div>

            <div className="mt-2.5 pt-2 border-t border-[#383b44] text-[9px] text-[#8e95a5] flex items-center justify-between pointer-events-auto">
              <span>DRAG TO ORBIT · SCROLL TO ZOOM</span>
              <button
                type="button"
                onClick={handleResetExplore}
                className="px-2 py-0.5 bg-[#1b1e24] hover:bg-[#282d36] border border-[#ffaa00]/50 text-[#ffaa00] text-[9px] uppercase font-bold tracking-wider cursor-pointer"
              >
                [ RESET CAM ]
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Exit Explore Button */}
      {isExploreMode && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
          <button
            type="button"
            onClick={() => {
              playLaserHum();
              onToggleExplore();
            }}
            className="px-5 py-2.5 bg-black/85 hover:bg-[#1a1d24] text-white border border-[#ffaa00] hover:border-white font-mono text-xs uppercase tracking-widest font-bold shadow-[0_0_24px_rgba(255,170,0,0.3)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>[ EXIT EXPLORATION ]</span>
          </button>
        </div>
      )}
    </div>
  );
};
