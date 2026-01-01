import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

/* ------------------ BUILDING ------------------ */
const Building = ({ position, size, color }: any) => (
  <mesh position={position} castShadow receiveShadow>
    <boxGeometry args={size} />
    <meshStandardMaterial color={color} />
  </mesh>
)

/* ------------------ ROAD ------------------ */
const Road = ({ position, size }: any) => (
  <mesh position={position} receiveShadow>
    <boxGeometry args={size} />
    <meshStandardMaterial color="#020617" />
  </mesh>
)

/* ------------------ SIDEWALK (UPDATED) ------------------ */
const Sidewalk = ({ position, size }: any) => (
  <mesh position={position} receiveShadow>
    <boxGeometry args={size} />
    {/* Changed to Dark Grey #565756 */}
    <meshStandardMaterial color="#565756" />
  </mesh>
)

/* ------------------ GRASS ------------------ */
const Grass = ({ position, size }: any) => (
  <mesh position={position} receiveShadow>
    <boxGeometry args={size} />
    {/* Kept Dark Green #082915 */}
    <meshStandardMaterial color="#082915" />
  </mesh>
)

/* ------------------ CAR ------------------ */
const Car = ({ startX, z, color }: any) => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.position.x = ((state.clock.elapsedTime * 2 + startX) % 20) - 10
  })

  return (
    <mesh ref={ref} position={[startX, 0.25, z]} castShadow>
      <boxGeometry args={[1.2, 0.5, 0.6]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

/* ------------------ PERSON ------------------ */
const Person = ({ position, color = '#eab308', speed = 1 }: any) => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 4 * speed) * 0.05
  })

  return (
    <mesh ref={ref} position={position}>
      <capsuleGeometry args={[0.15, 0.45, 4, 8]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

/* ------------------ KID ------------------ */
const Kid = ({ position }: any) => (
  <mesh position={position}>
    <capsuleGeometry args={[0.1, 0.25, 4, 8]} />
    <meshStandardMaterial color="#60a5fa" />
  </mesh>
)

/* ------------------ JOGGER ------------------ */
const Jogger = ({ position }: any) => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.position.y =
      position[1] + Math.abs(Math.sin(state.clock.elapsedTime * 6)) * 0.08
  })

  return (
    <mesh ref={ref} position={position}>
      <capsuleGeometry args={[0.15, 0.45, 4, 8]} />
      <meshStandardMaterial color="#f43f5e" />
    </mesh>
  )
}

/* ------------------ DOG ------------------ */
const Dog = ({ position }: any) => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 5) * 0.03
  })

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.35, 0.2, 0.2]} />
      <meshStandardMaterial color="#92400e" />
    </mesh>
  )
}

/* ------------------ TOWN ------------------ */
const Town = () => (
  <>
    {/* Roads */}
    <Road position={[0, 0, 0]} size={[30, 0.1, 4]} />
    <Road position={[0, 0, -6]} size={[30, 0.1, 4]} />

    {/* Sidewalks (These act as the lines between/beside roads) */}
    <Sidewalk position={[0, 0.05, 3]} size={[30, 0.1, 1]} />
    <Sidewalk position={[0, 0.05, -3]} size={[30, 0.1, 1]} />

    {/* Grass */}
    <Grass position={[0, -0.05, 8]} size={[40, 0.1, 10]} />
    <Grass position={[0, -0.05, -14]} size={[40, 0.1, 10]} />

    {/* Buildings */}
    <Building position={[-8, 2, 5]} size={[3, 4, 3]} color="#0f172a" />
    <Building position={[-4, 3, 5]} size={[3, 6, 3]} color="#111827" />
    <Building position={[0, 2.5, 5]} size={[3, 5, 3]} color="#1e293b" />
    <Building position={[4, 4, 5]} size={[3, 8, 3]} color="#334155" />
    <Building position={[8, 3, 5]} size={[3, 6, 3]} color="#475569" />

    <Building position={[-6, 2, -10]} size={[3, 4, 3]} color="#020617" />
    <Building position={[0, 3, -10]} size={[4, 6, 4]} color="#0b1220" />
    <Building position={[6, 2.5, -10]} size={[3, 5, 3]} color="#020617" />

    {/* Cars */}
    <Car startX={-10} z={0} color="#ef4444" />
    <Car startX={-5} z={-6} color="#3b82f6" />
    <Car startX={-15} z={0} color="#f97316" />

    {/* Walking People */}
    <Person position={[-3, 0.25, 2]} color="#22c55e" />
    <Person position={[2, 0.25, 2]} color="#a855f7" />

    {/* Parent with Kid */}
    <Person position={[5, 0.25, 2]} />
    <Kid position={[5.6, 0.2, 2]} />

    {/* Joggers */}
    <Jogger position={[-6, 0.25, -4]} />
    <Jogger position={[6, 0.25, -4]} />

    {/* Pet Walk */}
    <Person position={[-2, 0.25, -4]} />
    <Dog position={[-1.4, 0.15, -4]} />
  </>
)

/* ------------------ ROTATING WRAPPER ------------------ */
const RotatingTown = () => {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <group ref={ref}>
      <Town />
    </group>
  )
}

/* ------------------ MAIN CANVAS ------------------ */
const TownScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{ position: [0, 8, 15], fov: 50 }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 15, 5]} intensity={1.5} castShadow />

        <RotatingTown />

        <Environment preset="city" />
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  )
}

export default TownScene