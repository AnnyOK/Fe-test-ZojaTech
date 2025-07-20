import React from 'react';
import { Link } from 'react-router-dom';
import up from '../../../assets/up.svg'
import down from '../../../assets/down.svg'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from 'recharts';
  
const WatchList = () => {
    return (
        <div className='p-8 bg-white rounded-2xl flex flex-col gap-4'>
           <div className='flex justify-between'><h2 className='font-bold'>Watch list</h2>
           <Link to="/">View All</Link></div>
           <TrendDetector title={'AAPL'} amount={142.90} gain={0.47} direction={+1}/>
           <TrendDetector title={'BPL'} amount={142.90} gain={0.78} direction={-1}/>
        </div>
    );
};

export default WatchList;
export const TrendDetector:React.FC<{title:string,amount:number,gain:number,direction:number}> = ({title,amount,gain,direction})=>{
    return <div className='flex bg-gray-100 p-2 rounded-2xl'>
        <div>
            <h2 className='font-bold m-2'>{title}</h2>
        <p className='text-gray-400 text-[15px]'>${amount}</p>
        <p className={`${direction>0?'text-green-700':"text-red-700"} text-[11px]`}>{gain*direction}%</p>
        </div>
        <div> {direction>0?<img src={up} alt='uo'/>:<img src={down} alt='down'/>}</div>
        <div className='flex-1'> <FinanceLineChart/></div>
    </div>
}
// components/FinanceLineChart.tsx

const data = [
  { date: 'Jul 1', value: 2200 },
  { date: 'Jul 2', value: 2400 },
  { date: 'Jul 3', value: 2000 },
  { date: 'Jul 4', value: 2780 },
  { date: 'Jul 5', value: 1890 },
  { date: 'Jul 6', value: 2390 },
  { date: 'Jul 7', value: 3490 },
];

export const FinanceLineChart: React.FC = () => {
  return (
    <div className="w-full h-[100px] p-4  ">
      {/* <h2 className="text-xl font-semibold mb-4">Portfolio Value Over Time</h2> */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="1 0" stroke="#eee" />
          {/* <XAxis dataKey="date" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FFB800" // Tailwind blue-500
            strokeWidth={3}
            dot={{ r: 1 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};


