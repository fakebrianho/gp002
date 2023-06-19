import React from 'react'
import * as THREE from 'three'

function testShape() {
	const geometry = new THREE.BoxGeometry(2, 2, 2)
	const material = new THREE.MeshBasicMaterial({ color: 'white' })
	const mesh = new THREE.Mesh(geometry, material)
	return mesh
}

function Test(props) {
	return (
		<mesh {...props} recieveShadow={true} castShadow>
			<boxBufferGeometry />
			<meshPhysicalMaterial color={'white'} />
		</mesh>
	)
}
export default Test
