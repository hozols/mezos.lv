"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import type { MotionValue } from "motion/react";

const MODEL = "/models/forest.glb";

type Props = {
  scroll?: MotionValue<number>;
  variant?: "hero" | "contact";
  reducedMotion?: boolean;
  isMobile?: boolean;
};

function Island({ scroll, variant, reducedMotion, isMobile }: Props) {
  const gltf = useGLTF(MODEL, false, true);
  // Each Canvas needs its own Object3D instance; geometry and materials stay shared.
  const scene = useMemo(() => gltf.scene.clone(true), [gltf]);
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const viewport = useThree((s) => s.viewport);

  // Normalise the model: centre it and scale to a fixed height.
  const { scale, offset } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const target = variant === "hero" ? (isMobile ? 1.55 : 2.9) : 2.5;
    const s = target / Math.max(size.x, size.y, size.z);
    return { scale: s, offset: center.multiplyScalar(-s) };
  }, [scene, variant, isMobile]);

  useMemo(() => {
    scene.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) {
        const m = o as THREE.Mesh;
        m.castShadow = true;
        m.receiveShadow = true;
        const mat = m.material as THREE.MeshStandardMaterial;
        if (mat && "flatShading" in mat) {
          mat.flatShading = true;
          mat.vertexColors = true;
          mat.roughness = 0.95;
          mat.metalness = 0;
          mat.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  const baseX = variant === "hero" && !isMobile ? Math.min(0.5, viewport.width * 0.08) : 0;
  const baseY = variant === "hero" ? (isMobile ? 0.95 : -0.2) : -0.25;

  useFrame((state, dt) => {
    if (!group.current || !inner.current) return;
    const t = state.clock.elapsedTime;
    const p = scroll?.get() ?? 0;

    // Scroll: sink and shrink slightly as the hero leaves the viewport.
    const targetY = baseY - p * 2.2;
    const targetScale = 1 - p * 0.25;
    group.current.position.x = baseX;
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, targetY, 6, dt);
    const s = THREE.MathUtils.damp(group.current.scale.x, targetScale, 6, dt);
    group.current.scale.setScalar(s);

    // Mouse: gentle tilt toward the pointer.
    const px = reducedMotion || isMobile ? 0 : state.pointer.x;
    const py = reducedMotion || isMobile ? 0 : state.pointer.y;
    const autoRot = reducedMotion ? 0 : t * 0.12;
    inner.current.rotation.y = THREE.MathUtils.damp(inner.current.rotation.y, autoRot + px * 0.35, 4, dt);
    inner.current.rotation.x = THREE.MathUtils.damp(inner.current.rotation.x, -py * 0.12, 4, dt);
  });

  return (
    <group ref={group} position={[baseX, baseY, 0]}>
      <Float speed={reducedMotion ? 0 : 1.2} rotationIntensity={0} floatIntensity={reducedMotion ? 0 : 0.6} floatingRange={[-0.08, 0.08]}>
        <group ref={inner} rotation={[0.08, 0.6, 0]}>
          <primitive object={scene} scale={scale} position={offset.toArray()} />
        </group>
      </Float>
      <ContactShadows position={[0, -1.75, 0]} opacity={0.55} scale={7} blur={2.6} far={3} color="#000" />
    </group>
  );
}

function Spores({ count, reducedMotion }: { count: number; reducedMotion?: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
    }
    return arr;
  }, [count]);

  useFrame((state, dt) => {
    if (!ref.current || reducedMotion) return;
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      let y = pos.getY(i) + dt * (0.08 + (i % 5) * 0.02);
      const x = pos.getX(i) + Math.sin(t * 0.3 + i) * 0.0015;
      if (y > 4) y = -4;
      pos.setXY(i, x, y);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#d7e8c9" transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Lights() {
  return (
    <>
      <hemisphereLight args={["#b8d6a4", "#0c1711", 0.55]} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={2.2}
        color="#f0c27c"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-5, 2, -3]} intensity={0.6} color="#b8d6a4" />
      <ambientLight intensity={0.25} />
    </>
  );
}

export default function ForestScene(props: Props) {
  const { reducedMotion, isMobile, variant = "hero" } = props;
  return (
    <Canvas
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      camera={{ position: [0, 0.9, variant === "hero" ? 6.2 : 6.6], fov: 38 }}
      shadows
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <fog attach="fog" args={["#0c1711", 7, 13]} />
      <Lights />
      <Suspense fallback={null}>
        <Island {...props} variant={variant} />
      </Suspense>
      {!isMobile && !reducedMotion && <Spores count={variant === "hero" ? 260 : 120} reducedMotion={reducedMotion} />}
    </Canvas>
  );
}

useGLTF.preload(MODEL, false, true);
