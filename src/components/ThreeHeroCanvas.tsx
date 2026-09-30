import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Master Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Mobile Device Frame Representation
    const phoneGroup = new THREE.Group();
    masterGroup.add(phoneGroup);

    // Phone outline
    const phoneGeo = new THREE.BoxGeometry(4.2, 8.4, 0.4);
    const phoneEdges = new THREE.EdgesGeometry(phoneGeo);
    const phoneLineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85
    });
    const phoneWireframe = new THREE.LineSegments(phoneEdges, phoneLineMat);
    phoneGroup.add(phoneWireframe);

    // Screen glass inner plane
    const screenGeo = new THREE.PlaneGeometry(3.9, 7.9);
    const screenMat = new THREE.MeshBasicMaterial({
      color: 0x0369a1,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = 0.2;
    phoneGroup.add(screenMesh);

    // 2. Central Core: High-Tech Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const coreEdges = new THREE.EdgesGeometry(coreGeo);
    const coreMat = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.7
    });
    const coreWire = new THREE.LineSegments(coreEdges, coreMat);
    masterGroup.add(coreWire);

    const innerCoreGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    masterGroup.add(innerCore);

    // 3. Holographic Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(3.6, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    masterGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(4.8, 0.02, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.5
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    masterGroup.add(ring2);

    // Holographic Pulse Wave Rings (Radar Echo Effect)
    const waveGeo = new THREE.RingGeometry(1.5, 1.55, 64);
    const waveMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const pulseWave = new THREE.Mesh(waveGeo, waveMat);
    pulseWave.rotation.x = Math.PI / 2;
    masterGroup.add(pulseWave);

    // 4. Floating Data Nodes
    const nodeCount = 12;
    const nodesGroup = new THREE.Group();
    const nodeGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.9
    });

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 5.2 + Math.sin(i * 1.5) * 0.8;
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 1.7) * 2.2,
        Math.sin(angle) * radius
      );
      nodesGroup.add(nodeMesh);
    }
    masterGroup.add(nodesGroup);

    // 5. Starfield Particles
    const particleCount = 750;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const basePositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x38bdf8);
    const color2 = new THREE.Color(0x818cf8);
    const color3 = new THREE.Color(0xa855f7);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const px = (Math.random() - 0.5) * 44;
      const py = (Math.random() - 0.5) * 32;
      const pz = (Math.random() - 0.5) * 32;

      positions[i] = px;
      positions[i + 1] = py;
      positions[i + 2] = pz;

      basePositions[i] = px;
      basePositions[i + 1] = py;
      basePositions[i + 2] = pz;

      const mixedColor = Math.random() > 0.6 ? color1 : Math.random() > 0.3 ? color2 : color3;
      colors[i] = mixedColor.r;
      colors[i + 1] = mixedColor.g;
      colors[i + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.09,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollYOffset = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const { innerWidth, innerHeight } = window;
        mouseX = (touch.clientX / innerWidth - 0.5) * 2;
        mouseY = (touch.clientY / innerHeight - 0.5) * 2;
      }
    };

    const handleScroll = () => {
      scrollYOffset = window.scrollY * 0.002;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

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

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Fluid spring interpolation for mouse interaction
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      masterGroup.rotation.y = elapsedTime * 0.12 + targetX * 0.75;
      masterGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.08 - targetY * 0.5 + scrollYOffset;

      phoneGroup.rotation.y = Math.sin(elapsedTime * 0.4) * 0.18;
      phoneGroup.rotation.z = Math.cos(elapsedTime * 0.3) * 0.07;
      phoneGroup.position.y = Math.sin(elapsedTime * 0.7) * 0.22;

      coreWire.rotation.y = -elapsedTime * 0.22;
      coreWire.rotation.x = elapsedTime * 0.18;
      innerCore.rotation.y = elapsedTime * 0.32;

      ring1.rotation.z = elapsedTime * 0.18;
      ring2.rotation.y = -elapsedTime * 0.15;
      nodesGroup.rotation.y = elapsedTime * 0.09;

      // Pulse wave expanding radar motion
      const waveCycle = (elapsedTime * 0.6) % 1;
      const waveScale = 1 + waveCycle * 3.5;
      pulseWave.scale.set(waveScale, waveScale, waveScale);
      waveMat.opacity = Math.max(0, (1 - waveCycle) * 0.45);

      // Organic subtle undulating particle ripple
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const posArr = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        posArr[i3 + 1] = basePositions[i3 + 1] + Math.sin(elapsedTime * 1.5 + basePositions[i3] * 0.3) * 0.2;
      }
      posAttr.needsUpdate = true;

      particles.rotation.y = elapsedTime * 0.015;
      particles.rotation.x = targetY * 0.08;

      renderer.render(scene, camera);
    };

    let isVisible = true;
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const nowVisible = entry.isIntersecting;
            if (nowVisible && !isVisible) {
              isVisible = true;
              clock.start();
              animate();
            } else if (!nowVisible && isVisible) {
              isVisible = false;
              cancelAnimationFrame(animationFrameId);
            }
          });
        },
        { threshold: 0 }
      );
      observer.observe(container);
    }

    animate();

    return () => {
      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);


      phoneGeo.dispose();
      phoneEdges.dispose();
      phoneLineMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      coreGeo.dispose();
      coreEdges.dispose();
      coreMat.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      waveGeo.dispose();
      waveMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07090e]/40 to-[#07090e] pointer-events-none" />
    </div>
  );
};
