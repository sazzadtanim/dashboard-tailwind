import React from 'react'

export default function Navigation() {
	return (
		<div className='hidden gap-32 text-white/60 bg-rong-500 z-50 h-screen mx-auto lg:grid'>
			{/* user details */}
			<div className='flex flex-col justify-start mt-20'>
				<div className='relative grid max-w-fit'>
					<img
						src='/assets/jpg/profilepic.jpg'
						alt='profile'
						className='ml-10 rounded-lg w-30 h-20'
					/>
					<p className='absolute -top-3 -right-3 w-7 h-7 text-center bg-[#DC3434] rounded-full text-white text-sm flex justify-center items-center'>
						4
					</p>
				</div>
				<p className='text-3xl font-semibold capitalize '>Sazzad Hossain</p>
				<p className='text-base lowercase text-white/60'>
					tanimsazzad@gmail.com
				</p>
			</div>
			{/* menus/ options */}
			<div className='flex flex-col gap-8 text-2xl font-semibold capitalize text-white/50'>
				<div className='text-white cursor-pointer'>dashboard</div>
				<div className='cursor-pointer'>products</div>
				<div className='cursor-pointer'>orders</div>
				<div className='cursor-pointer'>invoices</div>
				<div className='cursor-pointer'>accounts</div>
				<div className='cursor-pointer'>shipping</div>
			</div>
		</div>
	)
}
