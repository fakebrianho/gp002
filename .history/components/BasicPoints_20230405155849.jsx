// import React from 'react'
// // import { MeshBasicMaterial, RingGeometry, TorusGeometry } from 'three'
// import { PointMaterial, Points, Point } from '@react-three/drei'
// // import { Points, Point } from '@react-three/drei/Points'
// export default function BasicPoints() {
// 	return (
// 		<Points receiveShadow={true} castShadow>
// 			<torusBufferGeometry args={[5, 1.5, 8, 1000]} />
// 			<PointMaterial sze={0.5} depthWrite={false} color='white' />
// 		</Points>
// 		// <Points limit={2000} range={1005}>
// 		// 	<PointMaterial scale={15} depthWrite={false} />
// 		// </Points>
// 	)
// }
import React from 'react'
// import { Points, TorusBufferGeometry, PointsMaterial } from 'three'
import { Points, PointsMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function BasicPoints(props) {
	const ref = React.useRef()

	useFrame(() => {
		if (ref.current) {
			ref.current.rotation.x += 0.01
			ref.current.rotation.y += 0.01
		}
	})

	return (
		<Points ref={ref} {...props}>
			<TorusBufferGeometry args={[1, 0.5, 16, 100]} />
			<PointsMaterial color='white' size={0.02} />
		</Points>
	)
}

export default BasicPoints
