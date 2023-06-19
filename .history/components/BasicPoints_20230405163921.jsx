import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointsMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function BasicPoints(props) {
	return (
		<Points>
			<meshBasicMaterial color='white' />
			<torusBufferGeometry args={[10, 5, 16, 100]} />
		</Points>
	)
}
