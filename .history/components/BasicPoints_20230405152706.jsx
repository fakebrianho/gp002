import React from 'react'
// import { MeshBasicMaterial, RingGeometry, TorusGeometry } from 'three'

export default function BasicPoints() {
	return (
		<Mesh>
			<torusGeometry args={[10, 3, 16, 100]} />
			<meshBasicMaterial color='white' />
		</Mesh>
	)
}
