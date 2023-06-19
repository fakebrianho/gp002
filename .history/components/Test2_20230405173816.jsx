import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Test2() {
	const mesh = useRef()
	useEffect(() => {
		// Get the current attributes of the geometry
		const currentPositions = mesh.current.geometry.attributes.position
	}, [])
	return <></>
}
