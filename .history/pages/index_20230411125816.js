import styles from '@/styles/Home.module.css'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import Floor from '@/components/Floor'
import Box from '@/components/Box'
import LightBulb from '@/components/Lightbulb'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import BasicPoints from '@/components/BasicPoints'
import Test from '@/components/Test'
import Test2 from '@/components/Test2'
import {
	EffectComposer,
	Bloom,
	DepthOfField,
	ChromaticAberration,
	Vignette,
	ToneMapping,
	ColorGrading,
	Noise,
} from '@react-three/postprocessing'
extend({ OrbitControls })

function Controls() {
	const controls = useRef()
	const { camera, gl } = useThree()
	useFrame(() => controls.current.update())
	return (
		<orbitControls
			ref={controls}
			args={[camera, gl.domElement]}
			enableDamping
			dampingFactor={0.1}
			rotateSpeed={0.5}
		/>
	)
}

export default function Home() {
	return (
		<div className={styles.scene}>
			<Canvas
				shadows
				className={styles.canvas}
				camera={{
					position: [0, 0, 10],
				}}
			>
				<Floor position={[0, -1, 0]} />
				<LightBulb position={[0, 3, 0]} />
				<BasicPoints
					innerRadius={8}
					outerRadius={12}
					numPoints={4000}
				/>
				<Controls />
				<ambientLight color={'white'} intensity={0.3} />
				<EffectComposer>
					<Bloom
						luminanceThreshold={0.15}
						luminanceSmoothing={0.15}
						intensity={1.5}
					/>
					{/* <DepthOfField
						focusDistance={0.02}
						focalLength={0.8}
						bokehScale={2}
					/> */}
					<ChromaticAberration offset={1.1} />
					{/* <Vignette eskil={false} offset={0.35} darkness={1.2} /> */}
					{/* <ToneMapping type={ToneMapping.ACESFilmic} /> */}
					{/* Add your custom color grading texture */}
					{/* <ColorGrading texture={null} /> */}
					{/* <Noise opacity={0.1} /> */}
				</EffectComposer>
			</Canvas>
		</div>
	)
}
