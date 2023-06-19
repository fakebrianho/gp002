import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointsMaterial } from '@react-three/drei'
import * as THREE from 'three'

const TorusPoints = (props) => {
	const torusRef = useRef()

	useFrame(({ clock }) => {
		torusRef.current.rotation.x = clock.getElapsedTime() * 0.5
		torusRef.current.rotation.y = clock.getElapsedTime() * 0.5
	})

	const torusGeometry = useMemo(() => {
		const geometry = new THREE.TorusGeometry(1, 0.4, 100, 100)
		const positions = geometry.attributes.position.array
		const pointsGeometry = new THREE.BufferGeometry()
		pointsGeometry.setAttribute(
			'position',
			new THREE.BufferAttribute(positions, 3)
		)
		return pointsGeometry
	}, [])

	return (
		<Points ref={torusRef} geometry={torusGeometry} {...props}>
			<PointsMaterial
				attach='material'
				color={0xffffff}
				size={0.02}
				sizeAttenuation
			/>
		</Points>
	)
}

export default function BasicPoints() {
	return (
		// <Canvas style={{ height: '100vh', width: '100vw' }}>
		// 	<color attach='background' args={['#000']} />
		// <ambientLight />
		<TorusPoints />
		// </Canvas>
	)
}
