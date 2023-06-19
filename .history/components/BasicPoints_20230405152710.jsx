import React from 'react'
// import { MeshBasicMaterial, RingGeometry, TorusGeometry } from 'three'

export default function BasicPoints() {
	return (
		<mesh>
			<torusGeometry args={[10, 3, 16, 100]} />
			<meshBasicMaterial color='white' />
		</mesh>
	)
}
