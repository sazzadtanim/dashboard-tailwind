import React from 'react'
import PieChart from './sales/PieChart'

export default function PieCharts() {
	return (
		<div className='container grid items-center grid-flow-col grid-rows-4'>
			<PieChart />
			<PieChart />
			<PieChart />
			<PieChart />
		</div>
	)
}
