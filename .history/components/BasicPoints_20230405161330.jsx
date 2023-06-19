import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, TorusGeometry } from '@react-three/drei'

export default function TorusPoints(props) {
	const torusRef = useRef()

	useFrame(({ clock }) => {
		torusRef.current.rotation.x = clock.getElapsedTime() * 0.5
		torusRef.current.rotation.y = clock.getElapsedTime() * 0.5
	})

	const torusGeometry = new TorusGeometry(1, 0.4, 100, 100)
	const pointsMaterial = {
		color: 0xffffff,
		size: 0.02,
		sizeAttenuation: true,
	}

	return (
		<Points
			ref={torusRef}
			geometry={torusGeometry}
			material={pointsMaterial}
			{...props}
		/>
	)
}
