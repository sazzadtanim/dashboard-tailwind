import React from 'react'
import { motion } from 'framer-motion'
import randomColor from 'randomcolor'

export default function PieChart() {
	return (
		<div className='w-36 h-36 '>
			<svg viewBox='150 110 150 150' className='border-2'>
				<motion.path
					d='M224.5,63C155.19,63,99,119.19,99,188.5S155.19,314,224.5,314S350,257.81,350,188.5S293.81,63,224.5,63
          L224.5,63'
					fill='transparent'
					strokeWidth='40'
					strokeLinecap='round'
					initial={{ pathLength: 0.0, scale: 0.4 }}
					animate={{ pathLength: 1, scale: 0.4 }}
					transition={{ duration: 1, ease: 'easeOut' }}
				/>
				{saleDetails.map((item, index) => (
					<motion.path
						key={index}
						d='M224.5,63C155.19,63,99,119.19,99,188.5S155.19,314,224.5,314S350,257.81,350,188.5S293.81,63,224.5,63
          L224.5,63'
						fill='transparent'
						strokeWidth='40'
						stroke={randomColor()}
						strokeLinecap='round'
						initial={{ pathLength: 0.0, scale: 0.4 }}
						animate={{
							pathLength: `${item.percentage / 100}`,
							scale: 0.4,
						}}
					/>
				))}
			</svg>
		</div>
	)
}
