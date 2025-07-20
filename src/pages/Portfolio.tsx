import Header from '../components/dashboard/Header';
import totalchannel from '../assets/totalchannel.svg';
import newmember from '../assets/newmember.svg';
import allimpression from '../assets/allimpression.svg';
import { ReportCard } from '../components/dashboard/portfolio/ReportCard';
import TrendingPostCard from '../components/dashboard/portfolio/TrendingPostCard';
import MembersCard from '../components/dashboard/portfolio/MembersCard';
import model from '../assets/model.png';
import lady from '../assets/piczojatech.png';
import WatchList from '../components/dashboard/portfolio/WatchList';
import Revenue from '../components/dashboard/portfolio/Revenue';
import Trending from '../components/dashboard/portfolio/Trending';
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
} from 'recharts';
const Portfolio = () => {
	return (
		<div className='flex-1 w-full min-h-full h-fit bg-slate-100 text-black'>
			<Header title={'My Portfolio'} />
			<section className='grid grid-cols-1 md:grid-cols-3 gap-8 p-8'>
				<main className=' overflow-y-auto col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-6 gap-4 max-h-[80vh]'>
					<ReportCard
						amount={51}
						title={'Total Channels'}
						children={
							<img
								src={
									totalchannel
								}
								alt=''
								height={50}
								width={50}
							/>
						}
					/>
					<ReportCard
						amount={125}
						title={'New Members'}
						children={
							<img
								src={newmember}
								alt=''
								height={50}
								width={50}
							/>
						}
					/>
					<ReportCard
						amount={789}
						title={'All Impressions'}
						children={
							<img
								src={
									allimpression
								}
								alt=''
								height={50}
								width={50}
							/>
						}
					/>
					<div className='col-span-6 md:col-span-6 bg-white p-3 rounded-2xl'>
						<div className='grid grid-cols-6 '>
							<h3 className='col-span-2 font-bold'>
								Overview
							</h3>{' '}
							<div>Robbin Hood</div>
							<div>Ameritrade</div>
							<div>Fidelity</div>
							<div>Charles</div>
						</div>
						<div className='col-span-6 h-[300px] bg-red-50'> <CompositeBarChart/></div>
					</div>
					<div className='bg-white rounded-2xl col-span-6 p-3 grid grid-cols-6 gap-4'>
						<h2 className='col-span-6 font-bold text-xl'>
							Trending Posts
						</h2>

						<TrendingPostCard
							title={`8 Upcoming Influencer marketing Trends and Benefits`}
							body={`Marketing is evolving. It's changing from a oneway street to a two-way conversation `}
							likes={260}
							comment={530}
							share={97}
						/>
						<TrendingPostCard
							title={`How Influencer Marketing Affects Consumer Buying Behavior`}
							body={`As influencer marketing continues to grow, consumers have been turning to their…`}
							likes={260}
							comment={530}
							share={97}
						/>
					</div>
					<div className='bg-white rounded-2xl col-span-6 p-3 grid grid-cols-5 gap-4'>
						<h2 className='col-span-6 font-bold text-xl'>
							Potential Members
						</h2>
						<MembersCard
							img={model}
							name={'JOHN doe'}
							username={'@perkywire'}
							gain={10.8}
						/>
						<MembersCard
							img={lady}
							name={'Buchi Katana'}
							username={
								'@buchiboss1234'
							}
							gain={6.8}
						/>
						<MembersCard
							img={model}
							name={'JOHN doe'}
							username={'@perkywire'}
							gain={10.8}
						/>
						<MembersCard
							img={lady}
							name={'Buchi Katana'}
							username={
								'@buchiboss1234'
							}
							gain={6.8}
						/>
						<MembersCard
							img={model}
							name={'JOHN doe'}
							username={'@perkywire'}
							gain={10.8}
						/>
						<MembersCard
							img={lady}
							name={'Buchi Katana'}
							username={
								'@buchiboss1234'
							}
							gain={6.8}
						/>{' '}
						<MembersCard
							img={model}
							name={'JOHN doe'}
							username={'@perkywire'}
							gain={10.8}
						/>
						<MembersCard
							img={lady}
							name={'Buchi Katana'}
							username={
								'@buchiboss1234'
							}
							gain={6.8}
						/>{' '}
					</div>
				</main>
				<aside className='max-h-[80vh] overflow-y-auto col-span-1 flex flex-col gap-4'>
					<WatchList/>
					<Revenue/>
					<Trending/>
				</aside>
			</section>
		</div>
	);
};

export default Portfolio;
// components/CompositeBarChart.tsx


const data = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 5000, expenses: 2000 },
  { month: 'Apr', revenue: 4780, expenses: 2780 },
  { month: 'May', revenue: 5890, expenses: 3908 },
  { month: 'Jun', revenue: 6390, expenses: 4800 },
  { month: 'Jul', revenue: 7490, expenses: 3800 },
];

export const CompositeBarChart: React.FC = () => {
  return (
    <div className="w-full h-[100%] bg-white rounded-xl shadow p-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap={20}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#FFB800" name="Revenue" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expenses" fill="#FF8600" name="Expenses" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

