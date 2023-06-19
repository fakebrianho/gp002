import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Test2() {
	;<points ref={points}>
		<sphereGeometry args={[1, 48, 48]} />
		<pointsMaterial color='#5786F5' size={0.015} sizeAttenuation />
	</points>
}
