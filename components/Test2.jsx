import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Test2() {
	const points = useRef()
	return (
		<points ref={points}>
			{/* <sphereGeometry args={[1, 48, 48]} /> */}
			<ringGeometry args={[5, 2.5, 8, 10]} />
			<pointsMaterial color='#5786F5' size={0.05} sizeAttenuation />
		</points>
	)
}
