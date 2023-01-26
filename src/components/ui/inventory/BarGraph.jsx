import React from 'react'
import { motion } from 'framer-motion'
import { addPercentageToDataList } from '../../../lib/helperFunctions'

export default function BarGraph() {
	const stats = [
		{
			title: 'Shirt',
			amount: 24000,
		},
		{
			title: 'Pant',
			amount: 13780,
		},
		{
			title: 'Footwear',
			amount: 10520,
		},
		{
			title: 'Saree',
			amount: 15000,
		},
	]
	const newDataWithPercentageInfo =
		addPercentageToDataList(stats)
	return (
		<div className='container flex flex-col justify-center gap-5 p-5 text-black border-2 rounded-lg bg-emerald-400 font-poppins'>
			<p className='text-lg text-center uppercase'>
				Category wise Sale{' '}
			</p>
			{newDataWithPercentageInfo.map((item, index) => (
				<div className='px-5 space-y-1' key={index}>
					<div className='flex items-center justify-between'>
						<p className='text-base capitalize '>
							{item.title}{' '}
							<span className='ml-1 text-xs text-purple-800'>
								({item.percentage.toFixed(2)}%)
							</span>
						</p>
						<p className='font-bold '>৳ {item.amount}</p>
					</div>
					<div className='relative'>
						<div className='w-[100%] h-3 bg-black/30 rounded'></div>
						<motion.div
							initial={{ width: '0' }}
							animate={{
								width: `${item.percentage}%`,
							}}
							className='absolute top-0 left-0 h-3 rounded'
							style={{
								backgroundColor: ' rgb(120 0 194 / 0.8)',
								height: '12px',
							}}
						></motion.div>
					</div>
				</div>
			))}
		</div>
	)
}
