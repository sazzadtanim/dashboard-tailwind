import Cards from './components/Cards'
import DoughnutChart from './components/chartjs/Doughnut'
import Navigation from './components/navigation/Navigation'
// import Box from './components/ui/Box'
import BarChartY from './components/ui/BarChartY'
import Cards2 from './components/ui/card/Cards2'
import BarGraph from './components/ui/inventory/BarGraph'
// import PieCharts from './components/ui/PieCharts'
import AreaChart from './components/AreaChart'

function App() {
	return (
		<div className='grid items-start w-full h-full grid-flow-col  pl-5 pr-32 pt-20 bg-rong-500 gap-5'>
			<Navigation />

			{/* all */}

			<div className='container grid gap-10'>
				{/* top */}

				<div className='container grid gap-5 md:grid-cols-2 '>
					<Cards2 />
					<Cards />
				</div>

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
				<div className='container grid grid-flow-col gap-5'>
					<div>
						<AreaChart />
					</div>
					<div>
						<AreaChart />
					</div>
				</div>

				{/*  */}

				<div className='container grid gap-5 md:grid-cols-1 lg:grid-cols-2 justify-between items-center'>
					<div className='mx-auto'>
						<DoughnutChart />
					</div>

					<div>
						<DoughnutChart className='mx-auto' />
					</div>
				</div>
			</div>
		</div>
	)
}
export default App
