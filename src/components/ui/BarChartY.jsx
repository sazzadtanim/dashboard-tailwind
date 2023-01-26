import React from 'react'
import { addPercentageToDataList } from '../../lib/helperFunctions'
import { motion } from 'framer-motion'
// import BarChartWeekly from '../BarChartWeekly'

export default function BarChartY() {
	const chartDataweeklt = [
		{ id: 1, day: 'satuarday', amount: 125000 },
		{ id: 2, day: 'sunday', amount: 10000 },
		{ id: 3, day: 'monday', amount: 30000 },
		{ id: 4, day: 'tuesday', amount: 25600 },
		{ id: 5, day: 'wednesday', amount: 11000 },
		{ id: 6, day: 'thursday', amount: 25000 },
		{ id: 7, day: 'friday', amount: 3000 },
	]

	const newDatawithPercentage =
		addPercentageToDataList(chartDataweeklt)

	return (
		<div className='container text-white rounded-lg bg-rong-400'>
			<div className='grid grid-flow-col gap-5 p-5 justify-evenly'>
				{newDatawithPercentage.map((item) => (
					<motion.div className='relative ' key={item.id}>
						<div
							className='z-10 rounded-md bg-rong-200'
							style={{ width: '0.5em', height: '10em' }}
						/>
						<motion.div
							onHoverStart={{
								backgroundColor: 'red',
								y: 5,
							}}
							transition={{ duration: 1 }}
							className='absolute bottom-0 z-50 rounded-md bg-rong-300'
							style={{
								width: '0.5em',
								height: `${item.percentage * 0.1}em`,
							}}
						/>
					</motion.div>
				))}
			</div>
		</div>
	)
}
