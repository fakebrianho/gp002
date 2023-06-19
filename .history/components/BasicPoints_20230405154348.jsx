import React from 'react'
// import { MeshBasicMaterial, RingGeometry, TorusGeometry } from 'three'
import { PointMaterial } from '@react-three/drei'
export default function BasicPoints() {
	return (
		<mesh receiveShadow={true} castShadow>
			<torusGeometry args={[10, 3, 16, 100]} />
			<PointMaterial color='white' />
		</mesh>
	)
}
