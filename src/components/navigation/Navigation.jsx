import React from 'react'

export default function Navigation() {
	return (
		<div className='grid gap-32 text-white/60 bg-rong-500 z-50 h-screen'>
			{/* user details */}
			<div className='flex flex-col justify-start'>
				<div className='relative grid max-w-fit'>
					<img
						src='/assets/png/profilepic.png'
						alt='profile'
						className='ml-10 rounded-lg '
					/>
					<p className='absolute -top-3 -right-3 w-7 h-7 text-center bg-[#DC3434] rounded-full text-white text-sm flex justify-center items-center'>
						4
					</p>
				</div>
				<p className='text-3xl font-semibold capitalize '>
					Tabassum
				</p>
				<p className='text-base lowercase text-white/60'>
					tabassum@email.com
				</p>
			</div>
			{/* menus/ options */}
			<div className='flex flex-col gap-8 text-2xl font-semibold capitalize text-white/50'>
				<div className='cursor-pointer'>
					dashboard
				</div>
				<div className='text-white cursor-pointer'>
					expenses
				</div>
				<div className='cursor-pointer'>
					wallets
				</div>
				<div className='cursor-pointer'>
					summary
				</div>
				<div className='cursor-pointer'>
					accounts
				</div>
				<div className='cursor-pointer'>
					settings
				</div>
			</div>
		</div>
	)
}
