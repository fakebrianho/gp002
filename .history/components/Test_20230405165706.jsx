import React from 'react'
import * as THREE from 'three'

function Box(props) {
	return (
		<mesh {...props} recieveShadow={true} castShadow>
			<boxBufferGeometry />
			<meshPhysicalMaterial color={'white'} />
		</mesh>
	)
}
export default Box
