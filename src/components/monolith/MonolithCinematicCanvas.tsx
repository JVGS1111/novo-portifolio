import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import citadelCleanImg from '../../assets/monolith-citadel-clean.jpg';
import citadelDepthImg from '../../assets/monolith-citadel-depth.jpg';

interface MonolithCinematicCanvasProps {
  className?: string;
}

export const MonolithCinematicCanvas: React.FC<MonolithCinematicCanvasProps> = ({
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const stateRef = useRef({
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animId: number;
    const clock = new THREE.Clock();

    // Scene & Orthographic Camera for 2.5D Depth Rendering
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

    // Load High-Resolution 2K Clean Artwork & Depth Map
    const textureLoader = new THREE.TextureLoader();
    let loadedCount = 0;
    const checkLoaded = () => {
      loadedCount++;
      if (loadedCount >= 2) {
        setIsLoading(false);
      }
    };

    const cleanTexture = textureLoader.load(citadelCleanImg, checkLoaded);
    cleanTexture.generateMipmaps = true;
    cleanTexture.minFilter = THREE.LinearMipmapLinearFilter;
    cleanTexture.magFilter = THREE.LinearFilter;
    cleanTexture.anisotropy = maxAnisotropy;

    const depthTexture = textureLoader.load(citadelDepthImg, checkLoaded);
    depthTexture.generateMipmaps = true;
    depthTexture.minFilter = THREE.LinearMipmapLinearFilter;
    depthTexture.magFilter = THREE.LinearFilter;

    // 2.5D Depth Displacement Shader - Crystal Clear, No Blown-out Colors
    const depthShaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        u_image: { value: cleanTexture },
        u_depth: { value: depthTexture },
        u_mouse: { value: new THREE.Vector2(0, 0) },
        u_resolution: {
          value: new THREE.Vector2(container.clientWidth, container.clientHeight)
        },
        u_time: { value: 0 },
        u_parallaxStrength: { value: 0.024 },
        u_imageAspect: { value: 2048.0 / 1374.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;

        uniform sampler2D u_image;
        uniform sampler2D u_depth;
        uniform vec2 u_mouse;
        uniform vec2 u_resolution;
        uniform float u_time;
        uniform float u_parallaxStrength;
        uniform float u_imageAspect;

        varying vec2 vUv;

        // Aspect-ratio correct cover UV formula (identical to CSS background-size: cover)
        vec2 getCoverUv(vec2 uv, float screenAspect, float imageAspect) {
          vec2 newUv = uv;
          if (screenAspect > imageAspect) {
            float scale = imageAspect / screenAspect;
            newUv.y = (uv.y - 0.5) * scale + 0.5;
          } else {
            float scale = screenAspect / imageAspect;
            newUv.x = (uv.x - 0.5) * scale + 0.5;
          }
          return newUv;
        }

        // 5-tap smooth depth sampling to avoid stair-stepping or edge tearing
        float getSmoothDepth(vec2 uv) {
          vec2 d = vec2(2.0 / 2048.0, 2.0 / 1374.0);
          float d0 = texture2D(u_depth, uv).r;
          float d1 = texture2D(u_depth, uv + vec2(d.x, 0.0)).r;
          float d2 = texture2D(u_depth, uv - vec2(d.x, 0.0)).r;
          float d3 = texture2D(u_depth, uv + vec2(0.0, d.y)).r;
          float d4 = texture2D(u_depth, uv - vec2(0.0, d.y)).r;
          return (d0 * 2.0 + d1 + d2 + d3 + d4) / 6.0;
        }

        void main() {
          float screenAspect = u_resolution.x / max(1.0, u_resolution.y);
          vec2 coverUv = getCoverUv(vUv, screenAspect, u_imageAspect);

          // Minimal safe scale margin (0.97) for maximum sharpness without border clamping
          vec2 safeUv = (coverUv - 0.5) * 0.97 + 0.5;

          // Sample smoothed depth (1.0 = foreground rocks/traveler, 0.0 = distant storm sky)
          vec2 clampedSampleUv = clamp(safeUv, vec2(0.002), vec2(0.998));
          float depth = getSmoothDepth(clampedSampleUv);

          // Parallax displacement: focal plane at 0.35 (base of citadel)
          float depthDiff = depth - 0.35;
          vec2 mouseVec = u_mouse * vec2(1.0, 1.0 / max(0.5, screenAspect));
          vec2 displacedUv = safeUv + mouseVec * depthDiff * u_parallaxStrength;
          displacedUv = clamp(displacedUv, vec2(0.001), vec2(0.999));

          // Sample authentic high-resolution artwork colors (no artificial wash/burn)
          vec4 color = texture2D(u_image, displacedUv);

          // Delicate atmospheric breathing on the amber vertical light slits
          if (color.r > 0.62 && color.g > 0.40 && color.b < 0.35) {
            float pulse = sin(u_time * 2.0) * 0.06;
            color.rgb += vec3(0.12, 0.07, 0.0) * pulse;
          }

          // Subtle cinematic edge vignette to frame the monumental composition
          float dist = distance(vUv, vec2(0.5));
          float vignette = smoothstep(0.95, 0.45, dist);
          color.rgb *= mix(0.88, 1.0, vignette);

          gl_FragColor = color;
        }
      `,
      depthWrite: false,
      depthTest: false
    });

    const quadGeo = new THREE.PlaneGeometry(2, 2);
    const quadMesh = new THREE.Mesh(quadGeo, depthShaderMaterial);
    scene.add(quadMesh);

    // --- VOLUMETRIC MIST & ROLLING FOG SPRITES ---
    const mistScene = new THREE.Scene();
    const mistCamera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    mistCamera.position.set(0, 0, 12);

    const generatePuffTexture = () => {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 128;
      pCanvas.height = 128;
      const pCtx = pCanvas.getContext('2d');
      if (!pCtx) return null;

      const grad = pCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(235, 242, 252, 0.55)');
      grad.addColorStop(0.35, 'rgba(195, 212, 230, 0.28)');
      grad.addColorStop(0.7, 'rgba(150, 170, 190, 0.08)');
      grad.addColorStop(1, 'rgba(120, 138, 155, 0.0)');

      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 128, 128);

      return new THREE.CanvasTexture(pCanvas);
    };

    const puffTexture = generatePuffTexture();
    const mistGroup = new THREE.Group();
    mistScene.add(mistGroup);

    interface MistPuff {
      sprite: THREE.Sprite;
      speedX: number;
      baseY: number;
      rotSpeed: number;
      depthFactor: number;
    }

    const mistPuffs: MistPuff[] = [];
    const puffCount = 32;

    for (let i = 0; i < puffCount; i++) {
      const pMat = new THREE.SpriteMaterial({
        map: puffTexture || undefined,
        color: 0x8a98aa,
        transparent: true,
        opacity: 0.08 + Math.random() * 0.12,
        depthWrite: false,
        blending: THREE.NormalBlending
      });

      const sprite = new THREE.Sprite(pMat);
      const scale = 5.5 + Math.random() * 6.5;
      sprite.scale.set(scale, scale * 0.55, 1);

      // Stagger mist across citadel base and foreground rocks
      const x = (Math.random() - 0.5) * 22;
      const y = -3.2 + Math.random() * 3.4;
      const z = -2.0 + Math.random() * 5.5;
      sprite.position.set(x, y, z);

      mistGroup.add(sprite);

      mistPuffs.push({
        sprite,
        speedX: 0.005 + Math.random() * 0.009,
        baseY: y,
        rotSpeed: (Math.random() - 0.5) * 0.0012,
        depthFactor: (z + 2.0) / 7.5
      });
    }

    // --- INTERACTION HANDLERS ---
    const state = stateRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      state.targetMouseX = Math.max(-1, Math.min(1, normX));
      state.targetMouseY = Math.max(-1, Math.min(1, normY));
    };

    // Mobile Device Orientation Gyro Parallax
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        state.targetMouseX = Math.max(-1, Math.min(1, e.gamma / 28));
        state.targetMouseY = Math.max(-1, Math.min(1, (e.beta - 45) / 28));
      }
    };

    const domElement = canvas;
    domElement.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('deviceorientation', handleDeviceOrientation);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      depthShaderMaterial.uniforms.u_resolution.value.set(w, h);

      mistCamera.aspect = w / h;
      mistCamera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // --- RENDER LOOP ---
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse damping
      state.mouseX += (state.targetMouseX - state.mouseX) * 0.05;
      state.mouseY += (state.targetMouseY - state.mouseY) * 0.05;

      // Update shader uniforms
      depthShaderMaterial.uniforms.u_mouse.value.set(state.mouseX, state.mouseY);
      depthShaderMaterial.uniforms.u_time.value = elapsed;

      // Animate drifting volumetric mist puffs
      mistPuffs.forEach((puff) => {
        puff.sprite.position.x += puff.speedX;
        puff.sprite.position.y = puff.baseY + Math.sin(elapsed * 0.5 + puff.sprite.position.x) * 0.35;
        puff.sprite.material.rotation += puff.rotSpeed;

        // Wrap around horizontally
        if (puff.sprite.position.x > 12) {
          puff.sprite.position.x = -12;
        }

        // Parallax displacement on mist sprites
        const mistParallaxX = state.mouseX * 0.4 * (1.2 - puff.depthFactor);
        const mistParallaxY = state.mouseY * 0.25 * (1.2 - puff.depthFactor);
        puff.sprite.position.x += mistParallaxX * 0.015;
        puff.sprite.position.y += mistParallaxY * 0.015;
      });

      // Clear & render depth quad
      renderer.autoClear = true;
      renderer.render(scene, camera);

      // Overlay render volumetric mist
      renderer.autoClear = false;
      renderer.render(mistScene, mistCamera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      domElement.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      window.removeEventListener('resize', handleResize);

      quadGeo.dispose();
      depthShaderMaterial.dispose();
      cleanTexture.dispose();
      depthTexture.dispose();
      puffTexture?.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none overflow-hidden cursor-default ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Atmospheric Loading Backdrop */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#0a0d12] flex flex-col items-center justify-center font-mono text-xs text-white/70 z-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#ffaa00] rounded-sm animate-ping" />
            <span className="tracking-widest uppercase text-white font-bold">
              // INITIALIZING MONOLITH CITADEL ATMOSPHERE...
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonolithCinematicCanvas;
