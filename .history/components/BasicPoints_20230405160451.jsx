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
import { useFrame } from '@react-three/fiber'
import { Points, Torus, useTorus } from '@react-three/drei'

export default function BasicPoints() {
	return (
		<Points>
			<Torus args={args}>
				<pointsMaterial size={0.02} color='white' />
			</Torus>
		</Points>
	)
}