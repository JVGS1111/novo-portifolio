import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { playAeroClick, playBubblePop } from './soundEffectsAero';

interface ThreeAquaSpheresProps {
  className?: string;
}

export const ThreeAquaSpheres: React.FC<ThreeAquaSpheresProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeSphere, setActiveSphere] = useState<number | null>(null);
  const [fps, setFps] = useState<number>(60);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = container.clientWidth || 640;
    const height = container.clientHeight || 280;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0e3a60, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 5.8);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 3. Lighting (Frutiger Aero radiant aquatic sunlight)
    const ambientLight = new THREE.AmbientLight(0xd0f0ff, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.8);
    sunLight.position.set(4, 8, 5);
    scene.add(sunLight);

    const aquaFillLight = new THREE.PointLight(0x00d2ff, 3.5, 15);
    aquaFillLight.position.set(-4, -1, 3);
    scene.add(aquaFillLight);

    const emeraldLight = new THREE.PointLight(0x30d980, 2.5, 12);
    emeraldLight.position.set(0, 2, 2);
    scene.add(emeraldLight);

    // 4. Group for the 3 Bio-Spheres
    const spheresGroup = new THREE.Group();
    scene.add(spheresGroup);

    // Sphere data
    const sphereData = [
      {
        id: 0,
        name: 'React Native Bridge & Hermes',
        x: -2.0,
        color: 0x00b4d8,
        specularColor: 0x80e5ff,
        coreColor: 0x0077b6
      },
      {
        id: 1,
        name: 'Clean Architecture & TDD',
        x: 0,
        color: 0x22c55e,
        specularColor: 0x86efac,
        coreColor: 0x15803d
      },
      {
        id: 2,
        name: 'AI Dev Agents & CI/CD',
        x: 2.0,
        color: 0xa855f7,
        specularColor: 0xd8b4fe,
        coreColor: 0x7e22ce
      }
    ];

    const sphereMeshes: THREE.Mesh[] = [];
    const coreMeshes: THREE.Mesh[] = [];

    sphereData.forEach((data) => {
      // Outer Glass Capsule Sphere
      const geom = new THREE.SphereGeometry(0.82, 48, 48);
      const mat = new THREE.MeshPhysicalMaterial({
        color: data.color,
        transmission: 0.88,
        opacity: 1,
        transparent: true,
        roughness: 0.08,
        metalness: 0.1,
        ior: 1.333,
        thickness: 0.8,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        attenuationColor: new THREE.Color(data.specularColor),
        attenuationDistance: 1.2
      });

      const sphere = new THREE.Mesh(geom, mat);
      sphere.position.set(data.x, 0, 0);
      sphere.userData = { id: data.id, baseScale: 1, baseX: data.x };
      spheresGroup.add(sphere);
      sphereMeshes.push(sphere);

      // Inner Glowing Bio-Core (organism / crystal nucleus)
      const coreGeom = new THREE.IcosahedronGeometry(0.42, 2);
      const coreMat = new THREE.MeshStandardMaterial({
        color: data.coreColor,
        emissive: data.color,
        emissiveIntensity: 0.7,
        roughness: 0.2,
        metalness: 0.5,
        wireframe: false
      });
      const core = new THREE.Mesh(coreGeom, coreMat);
      sphere.add(core);
      coreMeshes.push(core);

      // Orbital Rings around each sphere
      const ringGeom = new THREE.TorusGeometry(0.96, 0.02, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: data.specularColor,
        transparent: true,
        opacity: 0.45
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.rotation.x = Math.PI / 2.3;
      sphere.add(ring);
    });

    // 5. Floating Aquatic Caustics Floor Disk
    const floorGeom = new THREE.CircleGeometry(5.5, 48);
    const floorMat = new THREE.MeshBasicMaterial({
      color: 0x0c4a6e,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide
    });
    const floor = new THREE.Mesh(floorGeom, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.2;
    scene.add(floor);

    // 6. Floating Micro Water Bubbles (Particles)
    const bubbleCount = 75;
    const bubbleGeom = new THREE.BufferGeometry();
    const bubblePositions = new Float32Array(bubbleCount * 3);
    const bubbleSpeeds = new Float32Array(bubbleCount);

    for (let i = 0; i < bubbleCount; i++) {
      bubblePositions[i * 3] = (Math.random() - 0.5) * 8;
      bubblePositions[i * 3 + 1] = Math.random() * 4 - 1.5;
      bubblePositions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      bubbleSpeeds[i] = 0.005 + Math.random() * 0.015;
    }

    bubbleGeom.setAttribute('position', new THREE.BufferAttribute(bubblePositions, 3));

    const bubbleMat = new THREE.PointsMaterial({
      color: 0xddf4ff,
      size: 0.07,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const bubbleParticles = new THREE.Points(bubbleGeom, bubbleMat);
    scene.add(bubbleParticles);

    // 7. Raycasting for hover & click interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    let targetRotationY = 0;
    let targetRotationX = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - previousPointerX;
        const deltaY = e.clientY - previousPointerY;
        targetRotationY += deltaX * 0.006;
        targetRotationX += deltaY * 0.006;
        previousPointerX = e.clientX;
        previousPointerY = e.clientY;
      } else {
        // Gentle parallax tilt
        targetRotationY = mouse.x * 0.25;
        targetRotationX = -mouse.y * 0.15;
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(sphereMeshes, false);
      if (intersects.length > 0) {
        const hit = intersects[0].object as THREE.Mesh;
        const id = hit.userData.id as number;
        setActiveSphere(id);
        playBubblePop();
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 280;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 9. Animation Loop
    let clock = new THREE.Clock();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // FPS tracking
      frameCount++;
      const now = performance.now();
      if (now - lastFpsUpdate >= 500) {
        setFps(Math.round((frameCount * 1000) / (now - lastFpsUpdate)));
        frameCount = 0;
        lastFpsUpdate = now;
      }

      // Smooth camera damping
      spheresGroup.rotation.y += (targetRotationY - spheresGroup.rotation.y) * 0.06;
      spheresGroup.rotation.x += (targetRotationX - spheresGroup.rotation.x) * 0.06;

      // Animate individual spheres: gentle floating & core rotation
      sphereMeshes.forEach((mesh, idx) => {
        const floatOffset = Math.sin(elapsedTime * 2.0 + idx * 1.8) * 0.08;
        mesh.position.y = floatOffset;
        mesh.rotation.y = elapsedTime * 0.35 + idx;

        const core = coreMeshes[idx];
        if (core) {
          core.rotation.x = elapsedTime * 0.8;
          core.rotation.y = elapsedTime * 1.1;
        }
      });

      // Animate particles rising like champagne water bubbles
      const positions = bubbleParticles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < bubbleCount; i++) {
        positions[i * 3 + 1] += bubbleSpeeds[i];
        if (positions[i * 3 + 1] > 2.5) {
          positions[i * 3 + 1] = -1.5;
        }
      }
      bubbleParticles.geometry.attributes.position.needsUpdate = true;

      // Raycast hover check
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(sphereMeshes, false);
      if (intersects.length > 0) {
        const hit = intersects[0].object as THREE.Mesh;
        sphereMeshes.forEach((m) => {
          if (m === hit) {
            m.scale.lerp(new THREE.Vector3(1.12, 1.12, 1.12), 0.12);
          } else {
            m.scale.lerp(new THREE.Vector3(0.96, 0.96, 0.96), 0.1);
          }
        });
        container.style.cursor = 'pointer';
      } else {
        sphereMeshes.forEach((m) => {
          m.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        });
        container.style.cursor = isDragging ? 'grabbing' : 'grab';
      }

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerup', onPointerUp);
      if (container) {
        container.removeEventListener('pointermove', onPointerMove);
        container.removeEventListener('pointerdown', onPointerDown);
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
      scene.clear();
    };
  }, []);

  const sphereLabels = [
    { name: 'React Native Bridge & Hermes', color: 'from-cyan-400 to-blue-600', badge: 'Módulos Nativos' },
    { name: 'Clean Architecture & TDD', color: 'from-emerald-400 to-green-600', badge: 'Alta Resiliência' },
    { name: 'AI Dev Agents & CI/CD', color: 'from-purple-400 to-indigo-600', badge: 'Automação Contínua' }
  ];

  return (
    <div className={`relative rounded-xl overflow-hidden bg-gradient-to-b from-[#0a2745]/90 via-[#071d33]/95 to-[#041220] border border-cyan-400/40 shadow-inner ${className}`}>
      {/* Top Telemetry Aero Glass Bar */}
      <div className="flex items-center justify-between px-3.5 py-1.5 bg-gradient-to-r from-sky-900/60 via-cyan-900/40 to-sky-900/60 border-b border-cyan-400/30 text-[10.5px] font-mono text-cyan-200">
        <span className="flex items-center gap-1.5 font-bold tracking-tight">
          <span className="text-cyan-400">💧</span>
          THREE.JS WebGL 2.0 AQUATIC ECOTOPIA LAB
        </span>
        <div className="flex items-center gap-2.5">
          <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-[9.5px]">
            FPS: {fps}.0
          </span>
          <span className="hidden sm:inline text-emerald-300">Glass PBR: ACTIVE</span>
          <span className="hidden md:inline text-sky-300">Fluid Caustics: ON</span>
        </div>
      </div>

      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-56 md:h-64 relative touch-none" />

      {/* Sphere Quick Selector Labels */}
      <div className="grid grid-cols-3 gap-2 px-3 pb-2 pt-1 border-t border-cyan-500/20 bg-slate-950/40">
        {sphereLabels.map((item, idx) => (
          <button
            key={item.name}
            type="button"
            onClick={() => {
              setActiveSphere(idx);
              playAeroClick();
            }}
            className={`text-center p-1.5 rounded-lg transition-all cursor-pointer ${
              activeSphere === idx
                ? 'bg-cyan-500/25 border border-cyan-400/80 shadow-md shadow-cyan-500/20'
                : 'hover:bg-cyan-500/10 border border-transparent'
            }`}
          >
            <div className={`text-[10px] font-bold text-white truncate`}>{item.name}</div>
            <div className="text-[9px] text-cyan-300/80 font-mono">{item.badge}</div>
          </button>
        ))}
      </div>

      {/* Footer Instructions Badge */}
      <div className="px-3 py-1 bg-sky-950/70 text-[9.5px] font-mono text-cyan-300/90 flex items-center justify-between border-t border-cyan-500/20">
        <span className="truncate">
          🕹️ Interação 3D: Arraste para orbitar • Clique nas esferas • Caustics PBR
        </span>
        <span className="hidden sm:inline px-1 rounded bg-sky-500/20 border border-sky-400/30 text-[9px] shrink-0">
          WebGL 2.0 Shader
        </span>
      </div>
    </div>
  );
};
