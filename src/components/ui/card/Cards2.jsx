import React from 'react'
import Card2 from './Card2'
import { CiUser } from 'react-icons/ci'

export default function Cards2() {
	return (
		<>
			<div className='container grid gap-4 xs:grid-cols-1 sm:grid-cols-2'>
				<Card2
					Icon={CiUser}
					title='to be invoiced'
					amount='18'
				/>
				<Card2 title='to be delivered' amount='65' />
				<Card2 title='to be Packed' amount='25' />
				<Card2 title='to be shipped' amount='23' />
			</div>
		</>
	)
}
