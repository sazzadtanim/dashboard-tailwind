import Cards from './components/Cards'
import DoughnutChart from './components/chartjs/Doughnut'
import Navigation from './components/navigation/Navigation'
import BarChartY from './components/ui/BarChartY'
import Cards2 from './components/ui/card/Cards2'
import BarGraph from './components/ui/inventory/BarGraph'

import AreaChart from './components/AreaChart'

function App() {
	return (
		<div className='grid w-full h-full grid-flow-col bg-rong-500 justify-center pt-20 gap-20'>
			<Navigation />

			{/* all */}

			<div className='container grid gap-10 justify-center'>
				{/* top */}

				{/* doughnut Charts */}
				<div className='container gap-5 items-center grid justify-center grid-flow-row grid-cols-1 sm:grid-flow-col max-w-screen-md mx-auto sm:row-span-1 md:px-10'>
					<DoughnutChart />
					<DoughnutChart className='mx-auto' />
				</div>

				<div className='container grid gap-5 md:grid-cols-2 '>
					<Cards2 />
					<Cards />
				</div>
				{/*  */}

				{/* barchart  */}
				<div className='container grid grid-cols-1 gap-5 md:grid-cols-2'>
					<BarChartY />
					<BarChartY />
				</div>

				{/*  */}
				<div className='container grid gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
					<BarGraph />
					<BarGraph />
					<BarGraph />
				</div>

				{/*  */}
				{/* area chart */}
				<div className='container gap-5 grid-cols-1 hidden mx-auto lg:grid-cols-2'>
					<div>
						<AreaChart />
					</div>
					<div>
						<AreaChart />
					</div>
				</div>

				{/*  */}
			</div>
		</div>
	)
}
export default App
