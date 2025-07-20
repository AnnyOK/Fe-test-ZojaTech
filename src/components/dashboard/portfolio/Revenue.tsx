import React, { type ReactNode } from 'react';
import facebook from '../../../assets/facebook.svg'
import insta from '../../../assets/insta.svg'
import linkedin from '../../../assets/linkedin.svg'
const Revenue = () => {
    return (
        <div className='p-8 bg-white rounded-2xl flex flex-col gap-4'>
           <div className='flex justify-items-start'><h2 className='font-bold'>Revenue</h2>
           </div>
           <RevenueListItem amount={4000} description={'Recently  Added Pages'} children={<img src={facebook} alt=''/>}/>
           <RevenueListItem amount={2120} description={'Video Monetization'} children={<img src={insta} alt=''/>}/>
           <RevenueListItem amount={1752} description={'Community Buildup'} children={<img src={linkedin} alt=''/>}/>
        </div>
    );
};

export default Revenue;
const RevenueListItem:React.FC<{amount:number,description:string,children:ReactNode}>=({amount,description,children})=>{
    return <div className='flex w-full border border-gray-100 rounded-2xl gap-2 p-4'>
        <div className='flex-1'> 
            <h2 className='font-bold'>${amount.toLocaleString()}</h2>
        <p className='text-[11px] text-gray-400'>{description}</p></div>
        {children}
       
    </div>
}