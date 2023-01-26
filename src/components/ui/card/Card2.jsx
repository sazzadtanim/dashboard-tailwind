import React from 'react'
import { BiMoney } from 'react-icons/bi'
import { motion } from 'framer-motion'

export default function Card2({
	amount = 200,
	title = 'Total Product sold: ',
	Icon = BiMoney,
}) {
	return (
		<>
			<motion.div
				whileHover={{
					backgroundColor: '#3D7B62',
				}}
				className='grid items-center justify-center p-5 text-center bg-gray-600 border-2 rounded-lg font-poppins text-rong-500 '
			>
				{/* TEXT */}
				<div className='grid items-center justify-center '>
					<p className='text-5xl font-bold text-white/80'>
						{amount}
					</p>
					<p className='text-base lowercase  text-white/60'>
						{title}
					</p>
				</div>
			</motion.div>
		</>
	)
}
