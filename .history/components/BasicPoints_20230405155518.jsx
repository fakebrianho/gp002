import React from 'react'
// import { MeshBasicMaterial, RingGeometry, TorusGeometry } from 'three'
import { PointMaterial, Points, Point } from '@react-three/drei'
// import { Points, Point } from '@react-three/drei/Points'
export default function BasicPoints() {
	return (
		<Points receiveShadow={true} castShadow>
			<torusGeometry args={[5, 1.5, 8, 100]} />
			<PointMaterial scale={15} depthWrite={false} color='white' />
		</Points>
		// <Points limit={2000} range={1005}>
		// 	<PointMaterial scale={15} depthWrite={false} />
		// </Points>
	)
}
