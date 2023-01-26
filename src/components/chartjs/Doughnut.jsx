import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

export default function DoughnutChart() {
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
	const data = {
		labels: stats.map((item) => item.title),
		datasets: [
			{
				label: 'My First Dataset',
				data: stats.map((item) => item.amount),
				backgroundColor: [
					'rgba(239, 235, 194, 1)',
					'rgba(137, 205, 178, 1)',
					'rgba(239, 88, 63, 1)',
					'rgba(61, 123, 98, 1)',
				],
				hoverOffset: 4,
			},
		],
	}
	ChartJS.register(ArcElement, Tooltip, Legend)
	return (
		<div className='w-60 h-60'>
			<Doughnut data={data} />
		</div>
	)
}
