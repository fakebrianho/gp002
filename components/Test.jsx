import React from 'react'
import * as THREE from 'three'

function Test(props) {
	const geometry = new THREE.TorusGeometry(10, 5, 16, 100)
	const material = new THREE.MeshBasicMaterial({ color: 'white' })
	const mesh = new THREE.Points(geometry, material)

	return <primitive object={mesh} position={[0, 0, 0]} />
}
export default Test
