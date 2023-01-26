import React from 'react'
import Card from './Card'
import { BiMoney, BiBook, BiWon, BiUpArrow } from 'react-icons/bi'

export default function Cards() {
	return (
		<>
			<div className='container grid gap-4'>
				<Card Icon={BiMoney} amount='25' title='out of stock' />
				<Card Icon={BiBook} title='low stock' amount='50' />
				<Card Icon={BiWon} />
				<Card Icon={BiUpArrow} title='Reorder point' amount='13' />
			</div>
		</>
	)
}
