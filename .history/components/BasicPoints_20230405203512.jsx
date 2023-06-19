import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointsMaterial } from '@react-three/drei'
import * as THREE from 'three'

// function createRandomRingPoints(innerRadius, outerRadius, numPoints) {
// 	const positions = new Float32Array(numPoints * 3)
// 	const angleStep = (2 * Math.PI) / numPoints

// 	for (let i = 0; i < numPoints; i++) {
// 		const angle = i * angleStep
// 		const radius = innerRadius + Math.random() * (outerRadius - innerRadius)
// 		const x = radius * Math.cos(angle)
// 		const y = radius * Math.sin(angle)
// 		const z = 0

// 		positions[i * 3] = x
// 		positions[i * 3 + 1] = y
// 		positions[i * 3 + 2] = z
// 	}

// 	return positions
// }

export default function BasicPoints(props) {
	const points = useRef()
	const particlesPosition = useMemo(() => {
		const positions = new Float32Array(props.numPoints * 3)
		const angleStep = (2 * Math.PI) / props.numPoints
		for (let i = 0; i < props.numPoints; i++) {
			const angle = i * angleStep
			const radius =
				props.innerRadius +
				Math.random() * (props.outerRadius - props.innerRadius)
			const x = radius * Math.cos(angle)
			const y = radius * Math.sin(angle)
			const z = 0

			positions[i * 3] = x
			positions[i * 3 + 1] = y
			positions[i * 3 + 2] = z
		}

		return positions
	}, [props.numPoints, props.innerRadius, props.outerRadius])
	return (
		<points ref={points}>
			<bufferGeometry>
				<bufferAttribute
					attach='attributes-position'
					count={positions.length / 3}
					array={particlesPosition}
					itemSize={3}
				/>
			</bufferGeometry>
			<meshBasicMaterial color='white' />
			<torusBufferGeometry args={[10, 5, 16, 100]} />
		</points>
	)
}
