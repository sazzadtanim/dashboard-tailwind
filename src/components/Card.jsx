import React from 'react'
import { BiMoney } from 'react-icons/bi'

export default function Card({
	amount = 12500.0,
	title = 'Total Purchase Due ',
	Icon = BiMoney,
}) {
	return (
		<>
			<div className='flex items-center justify-between p-5 capitalize rounded-md bg-rong-400 font-poppins'>
				{/* ICON */}

				{/* <Icon className='w-10 h-10' /> */}

				<p className='text-xl font-bold text-white/80'>
					{title}
				</p>
				<p className='text-4xl font-bold text-white/80'>
					{amount}
				</p>

				{/*  */}
			</div>
		</>
	)
}
