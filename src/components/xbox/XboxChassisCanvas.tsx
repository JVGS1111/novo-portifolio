import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RotateCw, Eye, Zap } from 'lucide-react';
import jewelMedallionUrl from '../../assets/xbox_jewel_medallion.png';

interface XboxChassisCanvasProps {
  isPt?: boolean;
}

export const XboxChassisCanvas: React.FC<XboxChassisCanvasProps> = ({ isPt = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isXray, setIsXray] = useState(false);
  const [isTurbo, setIsTurbo] = useState(false);
  const [jewelPulsing, setJewelPulsing] = useState(false);
  const fanRpm = isTurbo ? 4800 : 2400;

  // References for live 3D state
  const stateRef = useRef({
    autoRotate: true,
    isXray: false,
    fanSpeed: 0.08,
    targetFanSpeed: 0.08,
    pulseEnergy: 0,
    mouseX: 0,
    mouseY: 0,
    isDragging: false,
    prevMouseX: 0,
    prevMouseY: 0,
    rotX: 0.35,
    rotY: -0.45,
    targetRotX: 0.35,
    targetRotY: -0.45
  });

  // Keep stateRef in sync with state
  useEffect(() => {
    stateRef.current.autoRotate = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    stateRef.current.isXray = isXray;
  }, [isXray]);

  useEffect(() => {
    stateRef.current.targetFanSpeed = isTurbo ? 0.28 : 0.08;
  }, [isTurbo]);

  const triggerJewelPulse = () => {
    stateRef.current.pulseEnergy = 1.0;
    setJewelPulsing(true);
    setTimeout(() => setJewelPulsing(false), 900);
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 640;
    let height = container.clientHeight || 420;

    // --- THREE.JS SETUP ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020a04, 0.05);

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 5.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // --- PROCEDURAL MOLDED PLASTIC BUMP TEXTURE ---
    // Generates the authentic micro-stippled matte orange-peel texture of polycarbonate plastic
    const canvasTex = document.createElement('canvas');
    canvasTex.width = 256;
    canvasTex.height = 256;
    const ctx = canvasTex.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, 256, 256);
      const imgData = ctx.getImageData(0, 0, 256, 256);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        // High frequency noise for plastic stipple
        const n = (Math.random() - 0.5) * 36;
        data[i] = Math.min(255, Math.max(0, 128 + n));
        data[i + 1] = Math.min(255, Math.max(0, 128 + n));
        data[i + 2] = Math.min(255, Math.max(0, 128 + n));
        data[i + 3] = 255;
      }
      ctx.putImageData(imgData, 0, 0);
    }
    const plasticBumpMap = new THREE.CanvasTexture(canvasTex);
    plasticBumpMap.wrapS = THREE.RepeatWrapping;
    plasticBumpMap.wrapT = THREE.RepeatWrapping;
    plasticBumpMap.repeat.set(16, 16);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0x0a2412, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x88ffaa, 2.4);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x00ff66, 3.2);
    rimLight.position.set(-4, 3, -3);
    scene.add(rimLight);

    const bottomReflectLight = new THREE.DirectionalLight(0x00441a, 1.2);
    bottomReflectLight.position.set(0, -3, 2);
    scene.add(bottomReflectLight);

    // Internal chassis glow lights (emitted from inside the console)
    const internalCoreLight = new THREE.PointLight(0x00ff44, 2.5, 4);
    internalCoreLight.position.set(0, 0.2, 0);
    scene.add(internalCoreLight);

    const internalFanLight = new THREE.PointLight(0x33ff77, 1.8, 3);
    internalFanLight.position.set(0.9, 0.1, -0.4);
    scene.add(internalFanLight);

    // --- MAIN CONSOLE ROOT GROUP ---
    const consoleGroup = new THREE.Group();
    scene.add(consoleGroup);

    // --- MATERIALS ---
    // 1. Translucent Green Crystal Polycarbonate Material
    const crystalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00c43d,
      emissive: 0x00260e,
      roughness: 0.24,
      metalness: 0.06,
      transmission: 0.82,
      thickness: 2.2,
      ior: 1.54,
      attenuationColor: new THREE.Color(0x004818),
      attenuationDistance: 1.1,
      clearcoat: 0.45,
      clearcoatRoughness: 0.18,
      bumpMap: plasticBumpMap,
      bumpScale: 0.02,
      transparent: true,
      depthWrite: true
    });

    // 2. Dark Translucent Base Plastic Material
    const baseCrystalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x008828,
      emissive: 0x001407,
      roughness: 0.32,
      metalness: 0.05,
      transmission: 0.74,
      thickness: 2.5,
      ior: 1.54,
      attenuationColor: new THREE.Color(0x003311),
      attenuationDistance: 0.9,
      bumpMap: plasticBumpMap,
      bumpScale: 0.025,
      transparent: true,
      depthWrite: true
    });

    // 3. Steel RF Shielding Internal Plate Material
    const rfShieldMaterial = new THREE.MeshStandardMaterial({
      color: 0x8a9990,
      metalness: 0.85,
      roughness: 0.35
    });

    // 4. Motherboard Dark Green Circuit PCB Material
    const pcbMaterial = new THREE.MeshStandardMaterial({
      color: 0x063012,
      metalness: 0.2,
      roughness: 0.6
    });

    // 5. Aluminum Heatsink Material
    const heatsinkMaterial = new THREE.MeshStandardMaterial({
      color: 0xc8d4cc,
      metalness: 0.9,
      roughness: 0.28
    });

    // 6. Copper Heatpipe Material
    const copperMaterial = new THREE.MeshStandardMaterial({
      color: 0xcc6633,
      metalness: 0.88,
      roughness: 0.22
    });

    // 7. Matte Black Port Plastic Material
    const blackPlasticMaterial = new THREE.MeshStandardMaterial({
      color: 0x0d120f,
      metalness: 0.1,
      roughness: 0.6
    });

    // --- 3D GEOMETRY CONSTRUCTION ---

    // A. CHASSIS LOWER BASE
    const baseGeo = new THREE.BoxGeometry(3.34, 0.45, 2.34);
    const baseMesh = new THREE.Mesh(baseGeo, baseCrystalMaterial);
    baseMesh.position.y = -0.25;
    baseMesh.renderOrder = 1;
    consoleGroup.add(baseMesh);

    // B. CHASSIS TOP LID
    const lidGeo = new THREE.BoxGeometry(3.34, 0.45, 2.34);
    const lidMesh = new THREE.Mesh(lidGeo, crystalMaterial);
    lidMesh.position.y = 0.2;
    lidMesh.renderOrder = 1;
    consoleGroup.add(lidMesh);

    // C. EMBOSSED RECESSED "X" ON TOP LID
    // The iconic diagonal ribs forming the X on the Xbox top (renderOrder = 2 ensures it never disappears at any camera angle)
    const ribGroup = new THREE.Group();
    ribGroup.position.y = 0.43;
    ribGroup.renderOrder = 2;

    const ribMat = crystalMaterial.clone();
    ribMat.transmission = 0.68;
    ribMat.roughness = 0.16;
    ribMat.depthWrite = true;

    // 4 Diagonal Rib Sections
    const ribLength = 1.35;
    const ribWidth = 0.32;
    const ribHeight = 0.06;

    const r1 = new THREE.Mesh(new THREE.BoxGeometry(ribLength, ribHeight, ribWidth), ribMat);
    r1.position.set(0.65, 0, 0.52);
    r1.rotation.y = -Math.PI / 4.8;
    r1.renderOrder = 2;
    ribGroup.add(r1);

    const r2 = new THREE.Mesh(new THREE.BoxGeometry(ribLength, ribHeight, ribWidth), ribMat);
    r2.position.set(-0.65, 0, -0.52);
    r2.rotation.y = -Math.PI / 4.8;
    r2.renderOrder = 2;
    ribGroup.add(r2);

    const r3 = new THREE.Mesh(new THREE.BoxGeometry(ribLength, ribHeight, ribWidth), ribMat);
    r3.position.set(-0.65, 0, 0.52);
    r3.rotation.y = Math.PI / 4.8;
    r3.renderOrder = 2;
    ribGroup.add(r3);

    const r4 = new THREE.Mesh(new THREE.BoxGeometry(ribLength, ribHeight, ribWidth), ribMat);
    r4.position.set(0.65, 0, -0.52);
    r4.rotation.y = Math.PI / 4.8;
    r4.renderOrder = 2;
    ribGroup.add(r4);

    consoleGroup.add(ribGroup);

    // D. SIDE COOLING INTAKE VENTS & LOUVERS
    // Authentic molded Xbox side intake grilles: dark cavity backing and flush intake louvers (no protruding corner posts)
    const louverGroup = new THREE.Group();
    louverGroup.renderOrder = 1;

    // 1. Dark Internal Air Cavity Backing (recessed inside the chassis wall)
    const ventBackGeo = new THREE.BoxGeometry(0.015, 0.32, 1.25);
    const leftVentBack = new THREE.Mesh(ventBackGeo, blackPlasticMaterial);
    leftVentBack.position.set(-1.66, -0.025, 0);
    louverGroup.add(leftVentBack);

    const rightVentBack = new THREE.Mesh(ventBackGeo, blackPlasticMaterial);
    rightVentBack.position.set(1.66, -0.025, 0);
    louverGroup.add(rightVentBack);

    // 2. Horizontal Intake Fins (Louvers)
    // 5 sleek, flush horizontal louvers embedded flush into the side of the console
    const louverGeo = new THREE.BoxGeometry(0.015, 0.026, 1.25);
    const louverOffsets = [-0.12, -0.06, 0.0, 0.06, 0.12];
    louverOffsets.forEach((yOffset) => {
      const leftLouver = new THREE.Mesh(louverGeo, crystalMaterial);
      leftLouver.position.set(-1.67, yOffset, 0);
      leftLouver.renderOrder = 1;
      louverGroup.add(leftLouver);

      const rightLouver = new THREE.Mesh(louverGeo, crystalMaterial);
      rightLouver.position.set(1.67, yOffset, 0);
      rightLouver.renderOrder = 1;
      louverGroup.add(rightLouver);
    });

    consoleGroup.add(louverGroup);

    // E. FRONT DETAILS: CONTROLLER PORTS & BUTTONS
    const frontPortGroup = new THREE.Group();
    frontPortGroup.position.set(0, -0.15, 1.18);

    // 4 Controller Ports
    const portGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.06, 24);
    portGeo.rotateX(Math.PI / 2);
    const pinGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.08, 12);
    pinGeo.rotateX(Math.PI / 2);

    const portPositions = [-1.0, -0.6, 0.6, 1.0];
    portPositions.forEach((xPos) => {
      const portRing = new THREE.Mesh(portGeo, blackPlasticMaterial);
      portRing.position.x = xPos;
      frontPortGroup.add(portRing);

      // Metallic pins inside port
      const pin = new THREE.Mesh(pinGeo, heatsinkMaterial);
      pin.position.set(xPos, 0, 0.01);
      frontPortGroup.add(pin);
    });

    // Optical Disc Tray Seam
    const traySeamGeo = new THREE.BoxGeometry(1.6, 0.04, 0.02);
    const traySeam = new THREE.Mesh(traySeamGeo, blackPlasticMaterial);
    traySeam.position.set(0, 0.15, 1.18);
    consoleGroup.add(traySeam);

    // Eject & Power Oval Buttons
    const btnGeo = new THREE.CapsuleGeometry(0.05, 0.08, 8, 16);
    btnGeo.rotateZ(Math.PI / 2);
    const powerBtn = new THREE.Mesh(btnGeo, heatsinkMaterial);
    powerBtn.position.set(0.95, 0.15, 1.18);
    consoleGroup.add(powerBtn);

    const ejectBtn = new THREE.Mesh(btnGeo, heatsinkMaterial);
    ejectBtn.position.set(1.15, 0.15, 1.18);
    consoleGroup.add(ejectBtn);

    consoleGroup.add(frontPortGroup);

    // F. INTERNAL MECHANICS (Visible through the translucent crystal polycarbonate!)
    const internalGroup = new THREE.Group();
    internalGroup.renderOrder = 0;

    // 1. Motherboard PCB
    const pcbGeo = new THREE.BoxGeometry(3.0, 0.03, 2.0);
    const pcbMesh = new THREE.Mesh(pcbGeo, pcbMaterial);
    pcbMesh.position.y = -0.32;
    internalGroup.add(pcbMesh);

    // 2. Steel RF Shield with circular vent holes pattern
    const rfGeo = new THREE.BoxGeometry(2.9, 0.02, 1.9);
    const rfMesh = new THREE.Mesh(rfGeo, rfShieldMaterial);
    rfMesh.position.y = 0.08;
    internalGroup.add(rfMesh);

    // 3. Extruded Aluminum Heatsink Block with Cooling Fins
    const heatsinkBaseGeo = new THREE.BoxGeometry(0.8, 0.12, 0.8);
    const heatsinkBase = new THREE.Mesh(heatsinkBaseGeo, heatsinkMaterial);
    heatsinkBase.position.set(-0.55, -0.22, 0.1);
    internalGroup.add(heatsinkBase);

    // 10 Fins on Heatsink
    const finGeo = new THREE.BoxGeometry(0.03, 0.28, 0.78);
    for (let f = 0; f < 10; f++) {
      const fin = new THREE.Mesh(finGeo, heatsinkMaterial);
      fin.position.set(-0.9 + f * 0.08, -0.05, 0.1);
      internalGroup.add(fin);
    }

    // 4. Polished Copper Heatpipe
    const pipeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.55, -0.2, 0.1),
      new THREE.Vector3(-0.2, -0.15, 0.2),
      new THREE.Vector3(0.2, -0.1, 0.0),
      new THREE.Vector3(0.8, -0.05, -0.3)
    ]);
    const pipeGeo = new THREE.TubeGeometry(pipeCurve, 20, 0.045, 12, false);
    const pipeMesh = new THREE.Mesh(pipeGeo, copperMaterial);
    internalGroup.add(pipeMesh);

    // 5. Internal Cooling Fan Assembly
    const fanGroup = new THREE.Group();
    fanGroup.position.set(0.9, -0.15, -0.35);

    const fanShroudGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.18, 32);
    const fanShroud = new THREE.Mesh(fanShroudGeo, blackPlasticMaterial);
    fanGroup.add(fanShroud);

    const fanHubGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.19, 16);
    const fanHub = new THREE.Mesh(fanHubGeo, heatsinkMaterial);
    fanGroup.add(fanHub);

    // Fan Rotor with 9 blades
    const fanRotor = new THREE.Group();
    const bladeGeo = new THREE.BoxGeometry(0.02, 0.14, 0.32);
    for (let b = 0; b < 9; b++) {
      const blade = new THREE.Mesh(bladeGeo, blackPlasticMaterial);
      blade.rotation.y = (b * Math.PI * 2) / 9;
      blade.position.x = Math.cos((b * Math.PI * 2) / 9) * 0.22;
      blade.position.z = Math.sin((b * Math.PI * 2) / 9) * 0.22;
      fanRotor.add(blade);
    }
    fanGroup.add(fanRotor);
    internalGroup.add(fanGroup);

    // 6. DVD Optical Drive Enclosure
    const dvdGeo = new THREE.BoxGeometry(1.3, 0.22, 1.4);
    const dvdMesh = new THREE.Mesh(dvdGeo, rfShieldMaterial);
    dvdMesh.position.set(-0.65, -0.05, 0.2);
    internalGroup.add(dvdMesh);

    // 7. Glowing Circuit SMT Micro-LEDs on Motherboard
    const ledGeo = new THREE.BoxGeometry(0.04, 0.03, 0.04);
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x55ff66 });
    const leds: THREE.Mesh[] = [];
    const ledCoords = [
      [-1.1, -0.3, -0.5],
      [-0.8, -0.3, -0.7],
      [0.2, -0.3, -0.8],
      [0.5, -0.3, 0.4],
      [1.1, -0.3, 0.5]
    ];
    ledCoords.forEach(([lx, ly, lz]) => {
      const led = new THREE.Mesh(ledGeo, ledMat);
      led.position.set(lx, ly, lz);
      internalGroup.add(led);
      leds.push(led);
    });

    consoleGroup.add(internalGroup);

    // G. CENTRAL JEWEL MEDALLION
    // The iconic circular domed Xbox emerald jewel in the center of the X
    const jewelGroup = new THREE.Group();
    jewelGroup.position.set(0, 0.45, 0);
    jewelGroup.renderOrder = 3;

    // Chrome Beveled Ring
    const jewelRingGeo = new THREE.TorusGeometry(0.48, 0.045, 16, 48);
    jewelRingGeo.rotateX(Math.PI / 2);
    const jewelRing = new THREE.Mesh(jewelRingGeo, heatsinkMaterial);
    jewelRing.renderOrder = 3;
    jewelGroup.add(jewelRing);

    // Shared Acrylic Glass Dome Geometry & Material (equator sweep to ensure zero gap)
    const domeGeo = new THREE.SphereGeometry(0.46, 36, 18, 0, Math.PI * 2, 0, Math.PI / 2);
    const domeMat = new THREE.MeshPhysicalMaterial({
      color: 0x00ff55,
      emissive: 0x00220a,
      roughness: 0.06,
      metalness: 0.08,
      transmission: 0.88,
      thickness: 0.8,
      ior: 1.52,
      transparent: true,
      depthWrite: true
    });

    // High-Res Jewel Texture Loader
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      jewelMedallionUrl,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.generateMipmaps = true;

        // Domed Circle Medallion Base
        const jewelCapGeo = new THREE.CylinderGeometry(0.46, 0.46, 0.03, 48);
        const jewelCapMat = new THREE.MeshStandardMaterial({
          map: tex,
          metalness: 0.4,
          roughness: 0.15,
          emissive: 0x003311,
          emissiveMap: tex
        });
        const jewelCap = new THREE.Mesh(jewelCapGeo, jewelCapMat);
        jewelCap.position.y = 0.015;
        jewelCap.renderOrder = 3;
        jewelGroup.add(jewelCap);

        // Acrylic Glass Cabochon Dome over Jewel - sits flush with zero gap on top of jewelCap
        const dome = new THREE.Mesh(domeGeo, domeMat);
        dome.scale.set(1, 0.22, 1);
        dome.position.y = 0.03;
        dome.renderOrder = 4;
        jewelGroup.add(dome);
      },
      undefined,
      () => {
        // Fallback procedural jewel if image fails
        const fallbackJewelGeo = new THREE.CylinderGeometry(0.46, 0.46, 0.03, 48);
        const fallbackMat = new THREE.MeshStandardMaterial({
          color: 0x00cc44,
          emissive: 0x005515,
          roughness: 0.2
        });
        const fallbackMesh = new THREE.Mesh(fallbackJewelGeo, fallbackMat);
        fallbackMesh.position.y = 0.015;
        fallbackMesh.renderOrder = 3;
        jewelGroup.add(fallbackMesh);

        const fallbackDome = new THREE.Mesh(domeGeo, domeMat);
        fallbackDome.scale.set(1, 0.22, 1);
        fallbackDome.position.y = 0.03;
        fallbackDome.renderOrder = 4;
        jewelGroup.add(fallbackDome);
      }
    );

    consoleGroup.add(jewelGroup);

    // Initial slight angle
    consoleGroup.rotation.x = stateRef.current.rotX;
    consoleGroup.rotation.y = stateRef.current.rotY;

    // --- MOUSE & TOUCH EVENT HANDLERS ---
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      stateRef.current.isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      stateRef.current.prevMouseX = clientX;
      stateRef.current.prevMouseY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      if (stateRef.current.isDragging) {
        const deltaX = clientX - stateRef.current.prevMouseX;
        const deltaY = clientY - stateRef.current.prevMouseY;

        stateRef.current.targetRotY += deltaX * 0.008;
        stateRef.current.targetRotX += deltaY * 0.008;

        // Clamp vertical tilt to avoid upside down
        stateRef.current.targetRotX = Math.max(-0.2, Math.min(1.1, stateRef.current.targetRotX));

        stateRef.current.prevMouseX = clientX;
        stateRef.current.prevMouseY = clientY;
      } else {
        // Subtle tilt parallax when not dragging
        const rect = container.getBoundingClientRect();
        const nx = ((clientX - rect.left) / width - 0.5) * 2;
        const ny = ((clientY - rect.top) / height - 0.5) * 2;
        stateRef.current.mouseX = nx;
        stateRef.current.mouseY = ny;
      }
    };

    const handlePointerUp = () => {
      stateRef.current.isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    domEl.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // --- RESIZE OBSERVER ---
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // --- INTERSECTION OBSERVER FOR PERFORMANCE ---
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // --- ANIMATION LOOP ---
    let animId = 0;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Fan speed interpolation (nominal vs turbo)
      stateRef.current.fanSpeed += (stateRef.current.targetFanSpeed - stateRef.current.fanSpeed) * 0.08;
      fanRotor.rotation.y += stateRef.current.fanSpeed;

      // X-Ray Mode handling
      if (stateRef.current.isXray) {
        crystalMaterial.transmission = THREE.MathUtils.lerp(crystalMaterial.transmission, 0.94, 0.1);
        crystalMaterial.roughness = THREE.MathUtils.lerp(crystalMaterial.roughness, 0.12, 0.1);
        rfMesh.position.y = THREE.MathUtils.lerp(rfMesh.position.y, 0.28, 0.08); // Slight exploded reveal
      } else {
        crystalMaterial.transmission = THREE.MathUtils.lerp(crystalMaterial.transmission, 0.82, 0.1);
        crystalMaterial.roughness = THREE.MathUtils.lerp(crystalMaterial.roughness, 0.24, 0.1);
        rfMesh.position.y = THREE.MathUtils.lerp(rfMesh.position.y, 0.08, 0.08);
      }

      // Jewel Pulse energy decay
      if (stateRef.current.pulseEnergy > 0) {
        stateRef.current.pulseEnergy = Math.max(0, stateRef.current.pulseEnergy - delta * 1.5);
        internalCoreLight.intensity = 2.5 + stateRef.current.pulseEnergy * 6.0;
        crystalMaterial.emissive.setHex(0x004415);
      } else {
        // Subtle ambient breathing glow
        internalCoreLight.intensity = 2.2 + Math.sin(time * 3) * 0.6;
        crystalMaterial.emissive.setHex(0x00260e);
      }

      // Blink diagnostic LEDs
      leds.forEach((led, idx) => {
        const blink = Math.sin(time * (4 + idx * 2)) > 0.2;
        led.visible = blink;
      });

      // Auto-rotation or Drag rotation
      if (stateRef.current.autoRotate && !stateRef.current.isDragging) {
        stateRef.current.targetRotY += 0.004;
      }

      // Smooth damping interpolation (lerp)
      stateRef.current.rotX += (stateRef.current.targetRotX + stateRef.current.mouseY * 0.08 - stateRef.current.rotX) * 0.08;
      stateRef.current.rotY += (stateRef.current.targetRotY + stateRef.current.mouseX * 0.12 - stateRef.current.rotY) * 0.08;

      consoleGroup.rotation.x = stateRef.current.rotX;
      consoleGroup.rotation.y = stateRef.current.rotY;

      // Slight floating motion
      consoleGroup.position.y = Math.sin(time * 1.6) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    // --- CLEANUP ---
    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      domEl.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);

      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }

      // Dispose Three.js objects
      renderer.dispose();
      baseGeo.dispose();
      lidGeo.dispose();
      ventBackGeo.dispose();
      louverGeo.dispose();
      domeGeo.dispose();
      domeMat.dispose();
      plasticBumpMap.dispose();
      crystalMaterial.dispose();
      baseCrystalMaterial.dispose();
      rfShieldMaterial.dispose();
      pcbMaterial.dispose();
      heatsinkMaterial.dispose();
      copperMaterial.dispose();
      blackPlasticMaterial.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[540px] rounded-2xl overflow-hidden border border-[#00ff55]/30 bg-radial from-[#041a0d]/90 via-[#010904]/95 to-[#000502] shadow-[0_0_50px_rgba(0,255,85,0.15)] group select-none">
      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Retro CRT Scanlines & Optical Mesh Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 85, 0.08) 2px, rgba(0, 255, 85, 0.08) 4px)'
        }}
      />

      {/* Top Left Diagnostic Telemetry Overlay */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 pointer-events-none">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#00ff55] animate-ping" />
          <span className="text-[10px] font-mono tracking-widest text-[#00ff55] font-bold">
            {isPt ? 'HARDWARE SUB-SUPERFÍCIE // ATIVO' : 'SUB-SURFACE HARDWARE // ACTIVE'}
          </span>
        </div>
        <div className="bg-[#020b05]/85 border border-[#00ff55]/30 backdrop-blur-md px-3 py-1.5 rounded-lg text-[9.5px] font-mono text-[#88ffa8] space-y-0.5 shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between gap-4">
            <span className="text-zinc-400">{isPt ? 'CHASSI:' : 'CASING:'}</span>
            <span className="text-[#00ff66] font-semibold">{isPt ? 'POLICARBONATO TRANSLÚCIDO' : 'TRANSLUCENT POLYCARBONATE'}</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-zinc-400">{isPt ? 'VENTOINHA:' : 'COOLING FAN:'}</span>
            <span className={`${isTurbo ? 'text-[#ffcc00] animate-pulse' : 'text-[#00ff66]'} font-semibold`}>
              {fanRpm.toLocaleString()} RPM [{isTurbo ? 'TURBO BOOST' : isPt ? 'SILENCIOSA' : 'SILENT'}]
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-zinc-400">{isPt ? 'BARRAMENTO:' : 'BUS SPEED:'}</span>
            <span className="text-[#00ff66]">6.4 GB/s // 1.18ms</span>
          </div>
        </div>
      </div>

      {/* Top Right Tactile 3D Controls */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex flex-wrap gap-1.5 sm:gap-2 justify-end">
        {/* Toggle Auto-Rotate */}
        <button
          type="button"
          onClick={() => setAutoRotate(!autoRotate)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono border transition-all cursor-pointer shadow-md ${
            autoRotate
              ? 'bg-[#00ff55]/20 border-[#00ff55] text-[#00ff55] shadow-[0_0_12px_rgba(0,255,85,0.3)]'
              : 'bg-black/60 border-zinc-700 text-zinc-400 hover:border-[#00ff55]/50 hover:text-white'
          }`}
          title={isPt ? 'Alternar rotação automática' : 'Toggle 360 rotation'}
        >
          <RotateCw className={`w-3 h-3 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
          <span className="hidden sm:inline">360° ORBIT</span>
        </button>

        {/* Toggle X-Ray Shell */}
        <button
          type="button"
          onClick={() => setIsXray(!isXray)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono border transition-all cursor-pointer shadow-md ${
            isXray
              ? 'bg-[#00ffee]/20 border-[#00ffee] text-[#00ffee] shadow-[0_0_12px_rgba(0,255,238,0.3)]'
              : 'bg-black/60 border-zinc-700 text-zinc-400 hover:border-[#00ffee]/50 hover:text-white'
          }`}
          title={isPt ? 'Ver componentes internos em Raio-X' : 'View internal components in X-Ray'}
        >
          <Eye className="w-3 h-3" />
          <span>{isPt ? 'RAIO-X' : 'X-RAY'}</span>
        </button>

        {/* Toggle Turbo Fan */}
        <button
          type="button"
          onClick={() => setIsTurbo(!isTurbo)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono border transition-all cursor-pointer shadow-md ${
            isTurbo
              ? 'bg-[#ffaa00]/25 border-[#ffaa00] text-[#ffaa00] shadow-[0_0_12px_rgba(255,170,0,0.4)]'
              : 'bg-black/60 border-zinc-700 text-zinc-400 hover:border-[#ffaa00]/50 hover:text-white'
          }`}
          title={isPt ? 'Acelerar ventoinha interna' : 'Accelerate internal fan'}
        >
          <Zap className="w-3 h-3" />
          <span>{isPt ? 'TURBO 4.8k' : 'TURBO FAN'}</span>
        </button>

        {/* Pulse Jewel */}
        <button
          type="button"
          onClick={triggerJewelPulse}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono border transition-all cursor-pointer shadow-md ${
            jewelPulsing
              ? 'bg-[#00ff55] text-black border-[#00ff55] scale-105 shadow-[0_0_20px_#00ff55]'
              : 'bg-[#003311]/80 border-[#00ff55]/60 text-[#00ff55] hover:bg-[#00ff55]/20 hover:border-[#00ff55]'
          }`}
          title={isPt ? 'Emitir pulso de energia pelo Jewel' : 'Trigger jewel energy wave'}
        >
          <Sparkles className="w-3 h-3" />
          <span>{isPt ? 'PULSO JEWEL' : 'PULSE JEWEL'}</span>
        </button>
      </div>

      {/* Bottom Interactive Prompt / Guidance */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex flex-col sm:flex-row items-center justify-between gap-2 pointer-events-none">
        <div className="text-[9px] sm:text-[10px] font-mono text-[#00ff66]/70 flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full border border-[#00ff55]/20 backdrop-blur-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff55]" />
          <span>{isPt ? 'ARRASTE PARA GIRAR EM 3D // SCROLL PARA EXPLORAR' : 'DRAG TO ROTATE IN 3D // SCROLL TO EXPLORE'}</span>
        </div>

        <div className="text-[9px] font-mono text-zinc-400 flex items-center gap-3">
          <span className="text-[#00ff55] font-semibold">POLYCARBONATE 1.54 IOR</span>
          <span className="text-zinc-600">|</span>
          <span>4 HEATPIPES</span>
          <span className="text-zinc-600">|</span>
          <span className="text-[#88ffaa]">60-120 FPS</span>
        </div>
      </div>
    </div>
  );
};
