import React from 'react'
// import { MeshBasicMaterial, RingGeometry, TorusGeometry } from 'three'

export default function BasicPoints() {
	return (
		<mesh receiveShadow={true} castShadow>
			<torusGeometry args={[10, 3, 16, 100]} />
			<meshPointsMaterial color='white' />
		</mesh>
	)
}
