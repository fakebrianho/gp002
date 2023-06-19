import React from 'react'
import { MeshBasicMaterial, RingGeometry, TorusGeometry } from 'three'

export default function BasicPoints() {
	return (
		<Mesh>
			<TorusGeometry args={[10, 3, 16, 100]} />
			<MeshBasicMaterial color='white' />
		</Mesh>
	)
}
