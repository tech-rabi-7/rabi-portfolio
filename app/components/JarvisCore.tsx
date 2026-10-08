"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function JarvisCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0x00f0ff, 1.2);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0x00f0ff, 3, 20);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    const purpleLight = new THREE.PointLight(0x8b5cf6, 2.5, 20);
    purpleLight.position.set(2, 3, 2);
    scene.add(purpleLight);

    // 3. Central Arc Reactor Core (Icosahedron + Wireframe + Sphere)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner glowing sphere
    const innerSphereGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    coreGroup.add(innerSphere);

    // Inner solid core glow
    const coreSolidGeo = new THREE.SphereGeometry(0.35, 24, 24);
    const coreSolidMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });
    const coreSolid = new THREE.Mesh(coreSolidGeo, coreSolidMat);
    coreGroup.add(coreSolid);

    // Crystal Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(0.9, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      wireframe: true,
      emissive: 0x0077aa,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    coreGroup.add(icoMesh);

    // Dodecahedron Outer Shell
    const dodecGeo = new THREE.DodecahedronGeometry(1.2, 0);
    const dodecMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const dodecMesh = new THREE.Mesh(dodecGeo, dodecMat);
    coreGroup.add(dodecMesh);

    // 4. Concentric HUD Rings (Iron Man / Jarvis Arc Reactor Style)
    const ringsGroup = new THREE.Group();
    scene.add(ringsGroup);

    // Helper for segmented HUD ring
    const createHudRing = (
      radius: number,
      tube: number,
      color: number,
      opacity: number,
      rotationX: number,
      rotationY: number
    ) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rotationX;
      ring.rotation.y = rotationY;
      ringsGroup.add(ring);
      return ring;
    };

    const ring1 = createHudRing(1.5, 0.015, 0x00f0ff, 0.7, Math.PI / 2, 0);
    const ring2 = createHudRing(1.85, 0.012, 0x8b5cf6, 0.6, Math.PI / 3, Math.PI / 6);
    const ring3 = createHudRing(2.2, 0.018, 0x00f0ff, 0.5, Math.PI / 4, -Math.PI / 5);
    const ring4 = createHudRing(2.55, 0.01, 0x38bdf8, 0.4, -Math.PI / 3, Math.PI / 4);

    // HUD Tick Marks around Ring 1
    const ticksGroup = new THREE.Group();
    const tickCount = 24;
    for (let i = 0; i < tickCount; i++) {
      const angle = (i / tickCount) * Math.PI * 2;
      const tickGeo = new THREE.BoxGeometry(0.02, 0.08, 0.02);
      const tickMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f0ff : 0x8b5cf6,
        transparent: true,
        opacity: 0.8,
      });
      const tick = new THREE.Mesh(tickGeo, tickMat);
      tick.position.set(Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, 0);
      tick.rotation.z = angle;
      ticksGroup.add(tick);
    }
    ringsGroup.add(ticksGroup);

    // 5. Star / Energy Particle Constellation
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const violetColor = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < particleCount; i++) {
      const r = 1.3 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mixed = Math.random() > 0.4 ? cyanColor : violetColor;
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Interactive Mouse Parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.8;
      mouse.targetY = y * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // 7. Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Rotate central core
      coreGroup.rotation.y = elapsedTime * 0.6;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.4) * 0.2 + mouse.y * 0.5;
      coreGroup.rotation.z = mouse.x * 0.5;

      icoMesh.rotation.y = -elapsedTime * 0.8;
      icoMesh.rotation.x = elapsedTime * 0.5;
      dodecMesh.rotation.y = elapsedTime * 0.3;
      dodecMesh.rotation.z = -elapsedTime * 0.2;

      // Pulse Core Scale & Light Intensity
      const pulse = 1 + Math.sin(elapsedTime * 3) * 0.06;
      coreGroup.scale.set(pulse, pulse, pulse);
      coreLight.intensity = 2.5 + Math.sin(elapsedTime * 4) * 0.8;

      // Rotate Rings in Opposing Directions
      ring1.rotation.z = elapsedTime * 0.5;
      ring2.rotation.z = -elapsedTime * 0.7;
      ring2.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.5) * 0.2;
      ring3.rotation.z = elapsedTime * 0.35;
      ring3.rotation.y = Math.cos(elapsedTime * 0.6) * 0.3;
      ring4.rotation.z = -elapsedTime * 0.4;
      ticksGroup.rotation.z = -elapsedTime * 0.25;

      // Rotate Particle Cloud
      particles.rotation.y = elapsedTime * 0.12;
      particles.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1;

      // Rig Tilt based on Mouse
      scene.rotation.y = mouse.x * 0.35;
      scene.rotation.x = -mouse.y * 0.35;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full max-w-[500px] aspect-square mx-auto group select-none cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setPulseCount((prev) => prev + 1)}
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700 pointer-events-none" />
      <div className="absolute inset-10 -z-10 rounded-full bg-violet-600/15 blur-2xl pointer-events-none" />

      {/* Cybernetic HUD Outer Rings & Overlay */}
      <div className="absolute inset-4 rounded-full border border-cyan-400/20 border-dashed animate-radar pointer-events-none" />
      <div className="absolute inset-10 rounded-full border border-violet-500/15 pointer-events-none" />

      {/* Top Left HUD Telemetry */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1 text-[10px] font-mono tracking-wider text-cyan-400/80 pointer-events-none bg-black/40 backdrop-blur-sm p-2 rounded-lg border border-cyan-500/20">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-bold text-cyan-300">SYSTEM: J.A.R.V.I.S. v4.2</span>
        </div>
        <span className="text-gray-400">CORE STATUS: <span className="text-emerald-400">ONLINE</span></span>
        <span className="text-gray-400">NEURAL LINK: 99.8%</span>
      </div>

      {/* Top Right HUD Telemetry */}
      <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-1 text-[10px] font-mono tracking-wider text-violet-400/80 pointer-events-none bg-black/40 backdrop-blur-sm p-2 rounded-lg border border-violet-500/20">
        <span className="text-violet-300 font-semibold">LOC: IN // BLR</span>
        <span className="text-gray-400">LAT: 12.9716° N</span>
        <span className="text-gray-400">LON: 77.5946° E</span>
      </div>

      {/* Bottom Audio / Waveform Visualizer */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cyan-400/30 pointer-events-none">
        <span className="text-[10px] font-mono text-cyan-400 font-bold mr-2 tracking-widest">
          FREQ
        </span>
        {[4, 12, 18, 28, 14, 24, 32, 16, 26, 12, 20, 8].map((height, i) => (
          <span
            key={i}
            className="w-1 bg-cyan-400 rounded-full transition-all duration-300"
            style={{
              height: `${Math.max(4, (height * (isHovered ? 1.5 : 0.8) + (pulseCount % 5) * 2))}px`,
              opacity: 0.7 + (i % 3) * 0.1,
            }}
          />
        ))}
        <span className="text-[9px] font-mono text-cyan-300/80 ml-2">
          {isHovered ? "ACTIVE" : "STANDBY"}
        </span>
      </div>

      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full relative z-0"
        title="Interactive JARVIS Arc Reactor — Hover or Move Mouse to Pivot 3D Core"
      />
    </div>
  );
}
