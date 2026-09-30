import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { playIndustrialClick, playLaserHum } from './monolithAudio';

interface TelemetryState {
  rotX: number;
  rotY: number;
  rotZ: number;
  camFov: number;
  dist: number;
  vertices: string;
  shader: string;
  bloomVal: string;
  gpuAccel: string;
  drawCalls: number;
}

export const MonolithCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // UI Interactive States
  const [wireframeOn, setWireframeOn] = useState(true);
  const [bloomOn, setBloomOn] = useState(true);
  const [telemetry, setTelemetry] = useState<TelemetryState>({
    rotX: 14.8,
    rotY: 220.4,
    rotZ: -42.0,
    camFov: 45,
    dist: 12.8,
    vertices: '1.42M',
    shader: 'PBR_ROUGH',
    bloomVal: '0.82 / SSAO',
    gpuAccel: 'TRUE',
    drawCalls: 14
  });

  // Action references to control 3D scene from buttons
  const sceneActionsRef = useRef<{
    rotateX: () => void;
    rotateY: () => void;
    toggleWire: (val: boolean) => void;
    toggleBloom: (val: boolean) => void;
    resetView: () => void;
  } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x101216, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 2.2, 13.5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0x2a2f3b, 1.8);
    scene.add(ambientLight);

    // Warm Key Light (Brutalist sun angle)
    const keyLight = new THREE.DirectionalLight(0xffeedd, 3.2);
    keyLight.position.set(6, 12, 8);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Cyan Industrial Rim Light
    const cyanRim = new THREE.DirectionalLight(0x00f0ff, 2.5);
    cyanRim.position.set(-8, -4, -6);
    scene.add(cyanRim);

    // Amber Laser Up-light
    const amberGlowLight = new THREE.PointLight(0xff9900, 3.0, 15);
    amberGlowLight.position.set(0, 0, 0);
    scene.add(amberGlowLight);

    // --- PROCEDURAL CONCRETE TEXTURE GENERATOR ---
    const createConcreteTexture = () => {
      const texCanvas = document.createElement('canvas');
      texCanvas.width = 512;
      texCanvas.height = 512;
      const ctx = texCanvas.getContext('2d');
      if (!ctx) return null;

      // Base stone fill
      ctx.fillStyle = '#26292f';
      ctx.fillRect(0, 0, 512, 512);

      // Noise and grit speckles
      for (let i = 0; i < 45000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const radius = Math.random() * 1.5;
        const shade = Math.floor(25 + Math.random() * 35);
        ctx.fillStyle = `rgb(${shade}, ${shade}, ${shade})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Industrial formwork seams
      ctx.strokeStyle = '#181a1e';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 170);
      ctx.lineTo(512, 170);
      ctx.moveTo(0, 340);
      ctx.lineTo(512, 340);
      ctx.stroke();

      const texture = new THREE.CanvasTexture(texCanvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1.5, 3);
      return texture;
    };

    const concreteTexture = createConcreteTexture();

    // --- MASTER MONOLITH GROUP ---
    const monolithMaster = new THREE.Group();
    scene.add(monolithMaster);

    // 1. Core Monumental Monolith Geometry (Brutalist Chamfered Slab)
    const slabWidth = 3.6;
    const slabHeight = 7.4;
    const slabDepth = 1.6;
    const slabGeo = new THREE.BoxGeometry(slabWidth, slabHeight, slabDepth, 8, 16, 6);

    const slabMat = new THREE.MeshStandardMaterial({
      color: 0x30343c,
      roughness: 0.85,
      metalness: 0.15,
      map: concreteTexture || undefined,
      bumpMap: concreteTexture || undefined,
      bumpScale: 0.04
    });

    const monolithMesh = new THREE.Mesh(slabGeo, slabMat);
    monolithMesh.castShadow = true;
    monolithMesh.receiveShadow = true;
    monolithMaster.add(monolithMesh);

    // 2. Wireframe Overlay & Geometric Edges
    const edgesGeo = new THREE.EdgesGeometry(slabGeo, 24);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.75
    });
    const wireSegments = new THREE.LineSegments(edgesGeo, wireMat);
    monolithMaster.add(wireSegments);

    // Secondary Cyan Tech Grid Wireframe
    const wireframeGeo = new THREE.WireframeGeometry(slabGeo);
    const gridWireMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.22
    });
    const gridWireMesh = new THREE.LineSegments(wireframeGeo, gridWireMat);
    monolithMaster.add(gridWireMesh);

    // 3. Laser Cut Plane ("CUT_PLANE: Z+42.0") & Ring
    const cutRingGroup = new THREE.Group();
    monolithMaster.add(cutRingGroup);

    // Glowing laser slicing boundary plane
    const planeGeo = new THREE.PlaneGeometry(5.2, 3.2);
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0xff9900,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide
    });
    const cutPlaneMesh = new THREE.Mesh(planeGeo, planeMat);
    cutPlaneMesh.rotation.x = Math.PI / 2;
    cutRingGroup.add(cutPlaneMesh);

    // Sharp outer laser perimeter line
    const laserLineGeo = new THREE.BufferGeometry();
    const halfW = 2.6;
    const halfD = 1.6;
    const lineVertices = new Float32Array([
      -halfW, 0, -halfD,
       halfW, 0, -halfD,
       halfW, 0,  halfD,
      -halfW, 0,  halfD,
      -halfW, 0, -halfD
    ]);
    laserLineGeo.setAttribute('position', new THREE.BufferAttribute(lineVertices, 3));
    const laserLineMat = new THREE.LineBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.95
    });
    const laserOutline = new THREE.Line(laserLineGeo, laserLineMat);
    cutRingGroup.add(laserOutline);

    // Holographic Orbital Rings around Monolith
    const orbitRingGeo = new THREE.TorusGeometry(4.4, 0.02, 16, 80);
    const orbitRingMat = new THREE.MeshBasicMaterial({
      color: 0xff9900,
      transparent: true,
      opacity: 0.6
    });
    const orbitRing = new THREE.Mesh(orbitRingGeo, orbitRingMat);
    orbitRing.rotation.x = Math.PI / 2.3;
    cutRingGroup.add(orbitRing);

    // 4. Floating Telemetry Point Nodes
    const particleCount = 48;
    const pointGeo = new THREE.BufferGeometry();
    const pointPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pointPositions[i] = (Math.random() - 0.5) * 8;
      pointPositions[i + 1] = (Math.random() - 0.5) * 10;
      pointPositions[i + 2] = (Math.random() - 0.5) * 6;
    }
    pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
    const pointMat = new THREE.PointsMaterial({
      color: 0xffaa00,
      size: 0.12,
      transparent: true,
      opacity: 0.8
    });
    const pointNodes = new THREE.Points(pointGeo, pointMat);
    monolithMaster.add(pointNodes);

    // Set initial dramatic brutalist pose
    monolithMaster.rotation.x = THREE.MathUtils.degToRad(14.8);
    monolithMaster.rotation.y = THREE.MathUtils.degToRad(220.4);
    monolithMaster.rotation.z = THREE.MathUtils.degToRad(-42.0);

    // --- INTERACTION & DRAG CONTROLS ---
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotX = monolithMaster.rotation.x;
    let targetRotY = monolithMaster.rotation.y;
    let autoRotate = true;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      autoRotate = false;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;

      targetRotY += deltaX * 0.008;
      targetRotX += deltaY * 0.008;

      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const domElement = canvas;
    domElement.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    domElement.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // --- EXTERNAL BUTTON ACTIONS ---
    sceneActionsRef.current = {
      rotateX: () => {
        targetRotX += Math.PI / 4;
        autoRotate = false;
      },
      rotateY: () => {
        targetRotY += Math.PI / 4;
        autoRotate = false;
      },
      toggleWire: (val: boolean) => {
        wireSegments.visible = val;
        gridWireMesh.visible = val;
      },
      toggleBloom: (val: boolean) => {
        planeMat.opacity = val ? 0.18 : 0.04;
        laserLineMat.opacity = val ? 0.95 : 0.2;
        orbitRingMat.opacity = val ? 0.6 : 0.1;
        amberGlowLight.intensity = val ? 3.0 : 0.5;
      },
      resetView: () => {
        targetRotX = THREE.MathUtils.degToRad(14.8);
        targetRotY = THREE.MathUtils.degToRad(220.4);
        monolithMaster.rotation.z = THREE.MathUtils.degToRad(-42.0);
        camera.position.set(0, 2.2, 13.5);
        autoRotate = true;
      }
    };

    // --- RESIZE HANDLER ---
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

    // --- ANIMATION LOOP ---
    let animId: number;
    const clock = new THREE.Clock();
    let lastTelemetryUpdate = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Slow idle rotation when not dragging
      if (autoRotate) {
        targetRotY += 0.003;
      }

      // Heavy brutalist damping interpolation (0.05 damping)
      monolithMaster.rotation.y += (targetRotY - monolithMaster.rotation.y) * 0.05;
      monolithMaster.rotation.x += (targetRotX - monolithMaster.rotation.x) * 0.05;

      // Slicing cut plane scanning motion
      const cutOffset = Math.sin(elapsed * 1.2) * 1.8;
      cutRingGroup.position.y = cutOffset;
      orbitRing.rotation.z = elapsed * 0.4;

      // Floating points slow orbital motion
      pointNodes.rotation.y = elapsed * 0.05;

      // Update telemetry display at ~10Hz to prevent excessive React state overhead
      if (elapsed - lastTelemetryUpdate > 0.09) {
        lastTelemetryUpdate = elapsed;
        const normDeg = (rad: number) => {
          let deg = (THREE.MathUtils.radToDeg(rad) % 360);
          if (deg > 180) deg -= 360;
          return parseFloat(deg.toFixed(2));
        };

        setTelemetry({
          rotX: normDeg(monolithMaster.rotation.x),
          rotY: normDeg(monolithMaster.rotation.y),
          rotZ: normDeg(monolithMaster.rotation.z),
          camFov: 45,
          dist: 12.8,
          vertices: '1.42M',
          shader: 'PBR_ROUGH',
          bloomVal: bloomOn ? '0.82 / SSAO' : '0.00 / OFF',
          gpuAccel: 'TRUE',
          drawCalls: renderer.info.render.calls || 14
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
      window.removeEventListener('resize', handleResize);

      slabGeo.dispose();
      slabMat.dispose();
      if (concreteTexture) concreteTexture.dispose();
      edgesGeo.dispose();
      wireMat.dispose();
      wireframeGeo.dispose();
      gridWireMat.dispose();
      planeGeo.dispose();
      planeMat.dispose();
      laserLineGeo.dispose();
      laserLineMat.dispose();
      orbitRingGeo.dispose();
      orbitRingMat.dispose();
      pointGeo.dispose();
      pointMat.dispose();
      renderer.dispose();
    };
  }, [bloomOn]);

  const handleRotateX = useCallback(() => {
    playIndustrialClick();
    sceneActionsRef.current?.rotateX();
  }, []);

  const handleRotateY = useCallback(() => {
    playIndustrialClick();
    sceneActionsRef.current?.rotateY();
  }, []);

  const handleToggleWire = useCallback(() => {
    playIndustrialClick();
    setWireframeOn((prev) => {
      const next = !prev;
      sceneActionsRef.current?.toggleWire(next);
      return next;
    });
  }, []);

  const handleToggleBloom = useCallback(() => {
    playLaserHum();
    setBloomOn((prev) => {
      const next = !prev;
      sceneActionsRef.current?.toggleBloom(next);
      return next;
    });
  }, []);

  const handleResetView = useCallback(() => {
    playIndustrialClick();
    sceneActionsRef.current?.resetView();
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col font-mono select-none">
      {/* Viewport Header */}
      <div className="flex items-center justify-between border-b border-[#484b54] px-3 py-2 bg-[#121417]/80 text-[11px] tracking-wider text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
          <span className="font-bold text-[#00f0ff]">WEBGL 3D VIEWPORT // MONOLITH_RENDERER_v4</span>
        </div>
        <span className="text-[#8e95a5] font-semibold">[THREE.JS r164]</span>
      </div>

      {/* Main 3D Canvas Area */}
      <div ref={containerRef} className="relative flex-1 min-h-[280px] w-full overflow-hidden bg-[#0d0f12] cursor-grab active:cursor-grabbing">
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Laser Cut Plane HUD Marker */}
        <div className="absolute top-1/2 left-3 -translate-y-1/2 flex items-center gap-2 pointer-events-none z-10 text-[10px] text-[#ffaa00] font-bold tracking-widest bg-black/60 px-2 py-0.5 border border-[#ffaa00]/40">
          <span className="w-1.5 h-1.5 bg-[#ffaa00] rounded-full animate-ping" />
          CUT_PLANE: Z+42.0
        </div>

        {/* Live Telemetry Panel (Right Side as in Figma) */}
        <div className="absolute top-3 right-3 bg-[#121418]/90 border border-[#484b54] p-2.5 text-[10px] leading-tight text-[#94a3b8] font-mono pointer-events-none z-10 backdrop-blur-sm min-w-[155px]">
          <div className="text-[#ff9900] font-bold border-b border-[#484b54] pb-1 mb-1.5 flex items-center justify-between">
            <span>// TELEMETRY PARAMS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]" />
          </div>
          <div className="space-y-0.5">
            <div className="flex justify-between">
              <span>ROT_X:</span>
              <span className="text-white font-semibold">{telemetry.rotX >= 0 ? `+${telemetry.rotX}` : telemetry.rotX}°</span>
            </div>
            <div className="flex justify-between">
              <span>ROT_Y:</span>
              <span className="text-white font-semibold">{telemetry.rotY >= 0 ? `+${telemetry.rotY}` : telemetry.rotY}°</span>
            </div>
            <div className="flex justify-between">
              <span>ROT_Z:</span>
              <span className="text-white font-semibold">{telemetry.rotZ >= 0 ? `+${telemetry.rotZ}` : telemetry.rotZ}°</span>
            </div>
            <div className="flex justify-between">
              <span>CAM_FOV:</span>
              <span className="text-white font-semibold">{telemetry.camFov}°</span>
            </div>
            <div className="flex justify-between">
              <span>DIST:</span>
              <span className="text-white font-semibold">{telemetry.dist}m</span>
            </div>
            <div className="flex justify-between">
              <span>VERTICES:</span>
              <span className="text-[#00f0ff] font-semibold">{telemetry.vertices}</span>
            </div>
            <div className="flex justify-between">
              <span>SHADER:</span>
              <span className="text-[#e2e8f0] font-semibold">{telemetry.shader}</span>
            </div>
            <div className="flex justify-between">
              <span>BLOOM:</span>
              <span className={`font-semibold ${bloomOn ? 'text-[#ff9900]' : 'text-slate-500'}`}>{telemetry.bloomVal}</span>
            </div>
            <div className="flex justify-between">
              <span>GPU_ACCEL:</span>
              <span className="text-[#22c55e] font-semibold">{telemetry.gpuAccel}</span>
            </div>
            <div className="flex justify-between">
              <span>DRAW_CALLS:</span>
              <span className="text-white font-semibold">{telemetry.drawCalls}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Interactive Control Buttons (Bottom Row as in Figma) */}
      <div className="flex flex-wrap items-center justify-between border-t border-[#484b54] p-2 bg-[#14161a] text-[10px] gap-1.5">
        <button
          type="button"
          onClick={handleRotateX}
          className="px-2.5 py-1.5 bg-[#1e2126] hover:bg-[#282c34] active:bg-[#ff9900]/20 border border-[#484b54] hover:border-[#00f0ff] text-slate-200 transition-colors uppercase font-bold tracking-wider"
        >
          [ X-AXIS ]
        </button>
        <button
          type="button"
          onClick={handleRotateY}
          className="px-2.5 py-1.5 bg-[#1e2126] hover:bg-[#282c34] active:bg-[#ff9900]/20 border border-[#484b54] hover:border-[#00f0ff] text-slate-200 transition-colors uppercase font-bold tracking-wider"
        >
          [ Y-AXIS ]
        </button>
        <button
          type="button"
          onClick={handleToggleWire}
          className={`px-2.5 py-1.5 border transition-colors uppercase font-bold tracking-wider ${
            wireframeOn
              ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-[#00f0ff]'
              : 'bg-[#1e2126] border-[#484b54] text-slate-400 hover:text-slate-200'
          }`}
        >
          [ WIRE: {wireframeOn ? 'ON' : 'OFF'} ]
        </button>
        <button
          type="button"
          onClick={handleToggleBloom}
          className={`px-2.5 py-1.5 border transition-colors uppercase font-bold tracking-wider ${
            bloomOn
              ? 'bg-[#ff9900]/15 border-[#ff9900] text-[#ff9900]'
              : 'bg-[#1e2126] border-[#484b54] text-slate-400 hover:text-slate-200'
          }`}
        >
          [ BLOOM: {bloomOn ? 'ON' : 'OFF'} ]
        </button>
        <button
          type="button"
          onClick={handleResetView}
          className="px-2.5 py-1.5 bg-[#1e2126] hover:bg-[#282c34] active:bg-[#ff9900]/20 border border-[#484b54] hover:border-[#ff9900] text-slate-200 transition-colors uppercase font-bold tracking-wider ml-auto"
        >
          [ RESET_VIEW ]
        </button>
      </div>
    </div>
  );
};
