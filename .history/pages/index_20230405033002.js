import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import Floor from '../components/Floor'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<div className={styles.scene}>
			<Canvas
				shadows
				className={styles.canvas}
				camera={{
					position: [-6, 7, 7],
				}}
			>
				<Floor position={[0, -1, 0]} />
				<ambientLight color={'white'} intensity={0.3} />
			</Canvas>
		</div>
	)
}
