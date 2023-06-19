import React from 'react'
// import { MeshBasicMaterial, RingGeometry, TorusGeometry } from 'three'
import { PointMaterial, Points, Point } from '@react-three/drei'
// import { Points, Point } from '@react-three/drei/Points'
export default function BasicPoints() {
	return (
		<mesh receiveShadow={true} castShadow>
			<torusGeometry args={[10, 3, 16, 10]} />
			<PointMaterial color='white' />
		</mesh>
		// <Points limit={2000} range={1005}>
		// 	<PointMaterial scale={15} depthWrite={false} />
		// </Points>
	)
}
