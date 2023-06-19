import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointsMaterial } from '@react-three/drei'
import * as THREE from 'three'

function createRandomRingPoints(innerRadius, outerRadius, numPoints) {
	const positions = new Float32Array(numPoints * 3)
	const angleStep = (2 * Math.PI) / numPoints

	for (let i = 0; i < numPoints; i++) {
		const angle = i * angleStep
		const radius = innerRadius + Math.random() * (outerRadius - innerRadius)
		const x = radius * Math.cos(angle)
		const y = radius * Math.sin(angle)
		const z = 0

		positions[i * 3] = x
		positions[i * 3 + 1] = y
		positions[i * 3 + 2] = z
	}

	return positions
}

export default function BasicPoints(props) {
	const particlesPosition = useMemo(() => {
		const positions = new Float32Array(count * 3)
		const angleStep = (2 * Math.PI) / numPoints
		if (shape === 'box') {
			for (let i = 0; i < count; i++) {
				let x = (Math.random() - 0.5) * 2
				let y = (Math.random() - 0.5) * 2
				let z = (Math.random() - 0.5) * 2

				positions.set([x, y, z], i * 3)
			}
		}

		if (shape === 'sphere') {
			const distance = 1

			for (let i = 0; i < count; i++) {
				const theta = THREE.MathUtils.randFloatSpread(360)
				const phi = THREE.MathUtils.randFloatSpread(360)

				let x = distance * Math.sin(theta) * Math.cos(phi)
				let y = distance * Math.sin(theta) * Math.sin(phi)
				let z = distance * Math.cos(theta)

				positions.set([x, y, z], i * 3)
			}
		}

		return positions
	}, [count, shape])
	return (
		<Points>
			<meshBasicMaterial color='white' />
			<torusBufferGeometry args={[10, 5, 16, 100]} />
		</Points>
	)
}
