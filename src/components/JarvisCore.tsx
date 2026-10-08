import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const JarvisCore: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 450;
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

    // Lights
    const ambientLight = new THREE.AmbientLight(0x00f0ff, 1.2);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0x00f0ff, 3, 20);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    const blueLight = new THREE.PointLight(0x0077ff, 2.5, 20);
    blueLight.position.set(2, 3, 2);
    scene.add(blueLight);

    // Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner wireframe sphere
    const innerSphereGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    coreGroup.add(innerSphere);

    // Inner solid core
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
      color: 0x0088ff,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const dodecMesh = new THREE.Mesh(dodecGeo, dodecMat);
    coreGroup.add(dodecMesh);

    // Concentric HUD Rings
    const ringsGroup = new THREE.Group();
    scene.add(ringsGroup);

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
    const ring2 = createHudRing(1.85, 0.012, 0x0077ff, 0.6, Math.PI / 3, Math.PI / 6);
    const ring3 = createHudRing(2.2, 0.018, 0x00f0ff, 0.5, Math.PI / 4, -Math.PI / 5);
    const ring4 = createHudRing(2.55, 0.01, 0x38bdf8, 0.4, -Math.PI / 3, Math.PI / 4);

    // HUD Ticks
    const ticksGroup = new THREE.Group();
    const tickCount = 24;
    for (let i = 0; i < tickCount; i++) {
      const angle = (i / tickCount) * Math.PI * 2;
      const tickGeo = new THREE.BoxGeometry(0.02, 0.08, 0.02);
      const tickMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f0ff : 0x0077ff,
        transparent: true,
        opacity: 0.8,
      });
      const tick = new THREE.Mesh(tickGeo, tickMat);
      tick.position.set(Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, 0);
      tick.rotation.z = angle;
      ticksGroup.add(tick);
    }
    ringsGroup.add(ticksGroup);

    // Particles
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const blueColor = new THREE.Color(0x0077ff);

    for (let i = 0; i < particleCount; i++) {
      const r = 1.3 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mixed = Math.random() > 0.4 ? cyanColor : blueColor;
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

    // Mouse Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.8;
      mouse.targetY = y * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      coreGroup.rotation.y = elapsedTime * 0.6;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.4) * 0.2 + mouse.y * 0.5;
      coreGroup.rotation.z = mouse.x * 0.5;

      icoMesh.rotation.y = -elapsedTime * 0.8;
      icoMesh.rotation.x = elapsedTime * 0.5;
      dodecMesh.rotation.y = elapsedTime * 0.3;
      dodecMesh.rotation.z = -elapsedTime * 0.2;

      const pulse = 1 + Math.sin(elapsedTime * 3) * 0.06;
      coreGroup.scale.set(pulse, pulse, pulse);
      coreLight.intensity = 2.5 + Math.sin(elapsedTime * 4) * 0.8;

      ring1.rotation.z = elapsedTime * 0.5;
      ring2.rotation.z = -elapsedTime * 0.7;
      ring2.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.5) * 0.2;
      ring3.rotation.z = elapsedTime * 0.35;
      ring3.rotation.y = Math.cos(elapsedTime * 0.6) * 0.3;
      ring4.rotation.z = -elapsedTime * 0.4;
      ticksGroup.rotation.z = -elapsedTime * 0.25;

      particles.rotation.y = elapsedTime * 0.12;
      particles.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1;

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
      style={{
        position: "fixed",
        left: "5%",
        top: "18%",
        width: "480px",
        height: "480px",
        zIndex: 5,
        pointerEvents: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setPulseCount((prev) => prev + 1)}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: "10%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.25) 0%, rgba(0, 110, 255, 0.15) 60%, transparent 100%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Cybernetic HUD Overlays */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          zIndex: 10,
          background: "rgba(5, 5, 12, 0.7)",
          border: "1px solid rgba(0, 240, 255, 0.3)",
          borderRadius: "8px",
          padding: "6px 10px",
          fontSize: "10px",
          fontFamily: "monospace",
          color: "#00f0ff",
          pointerEvents: "none",
        }}
      >
        <div style={{ fontWeight: "bold" }}>SYSTEM: J.A.R.V.I.S. v4.2</div>
        <div style={{ color: "#4ade80" }}>STATUS: ONLINE</div>
        <div style={{ color: "#9ca3af" }}>NEURAL LINK: 99.8%</div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          background: "rgba(5, 5, 12, 0.75)",
          border: "1px solid rgba(0, 240, 255, 0.3)",
          borderRadius: "9999px",
          padding: "6px 16px",
          fontSize: "10px",
          fontFamily: "monospace",
          color: "#00f0ff",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          pointerEvents: "none",
        }}
      >
        <span style={{ fontWeight: "bold", marginRight: "6px" }}>FREQ</span>
        {[4, 12, 18, 28, 14, 24, 32, 16, 26, 12, 20, 8].map((h, i) => (
          <span
            key={i}
            style={{
              width: "3px",
              height: `${Math.max(4, h * (isHovered ? 1.4 : 0.8) + (pulseCount % 4) * 2)}px`,
              background: "#00f0ff",
              borderRadius: "2px",
              transition: "height 0.3s ease",
            }}
          />
        ))}
        <span style={{ marginLeft: "6px", color: isHovered ? "#38bdf8" : "#9ca3af" }}>
          {isHovered ? "ACTIVE" : "STANDBY"}
        </span>
      </div>

      {/* Canvas Mount */}
      <div
        ref={containerRef}
        style={{ width: "100%", height: "100%", position: "relative" }}
      />
    </div>
  );
};

export default JarvisCore;
