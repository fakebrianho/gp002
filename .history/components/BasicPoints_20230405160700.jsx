// import React from 'react'
// // import { MeshBasicMaterial, RingGeometry, TorusGeometry } from 'three'
// import { PointMaterial, Points, Point } from '@react-three/drei'
// // import { Points, Point } from '@react-three/drei/Points'
// export default function BasicPoints() {
// 	return (
// 		<Points receiveShadow={true} castShadow>
// 			<torusBufferGeometry args={[5, 1.5, 8, 1000]} />
// 			<PointMaterial size={0.5} depthWrite={false} color='white' />
// 		</Points>
// 		// <Points limit={2000} range={1005}>
// 		// 	<PointMaterial scale={15} depthWrite={false} />
// 		// </Points>
// 	)
// }
import React from 'react'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, Torus, useTorus } from '@react-three/drei'

export default function BasicPoints(props) {
	const ref = useRef()

	useFrame(() => {
		if (ref.current) {
			ref.current.rotation.x += 0.01
			ref.current.rotation.y += 0.01
		}
	})
	return (
		<Points ref={ref} {...props}>
			<Torus args={args}>
				<pointsMaterial size={0.02} color='white' />
			</Torus>
		</Points>
	)
}
