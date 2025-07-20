import React, { type ReactNode } from 'react';
import model from '../../../assets/model.png'
import lady from '../../../assets/piczojatech.png'
const Trending = () => {
    return (
        <div className='p-6 bg-white rounded-2xl flex gap-2 flex-col'>
           <div className='flex justify-items-start'><h2 className='font-bold'>Trending News</h2>
           </div>
           <TrendingListItem title={'Russia & Ukraine War'} body={`Marketing is evolving. It's chang...`} children={<div className='w-15 h-15 rounded-2xl'><img src={model} alt='' className='rounded-md object-cover'/></div>}/>
           <TrendingListItem title={'Elon Musk bought Twitter'} body={`Twitter is the most useful social pl...`}children={<div className='w-15 h-15 rounded-2xl'><img src={lady} alt=''className='rounded-md object-cover'/></div>}/>
           <TrendingListItem title={'Fuel Crisis Everywhere'} body={'Due to covid situation in 2020 the...'} children={<div className='w-15 h-15 rounded-2xl'><img src={lady} alt=''className='rounded-md object-cover'/></div>}/>
        </div>
    );
};

export default Trending;
const TrendingListItem:React.FC<{title:string,body:string,children:ReactNode}>=({title,body,children})=>{
    return <div className='flex w-full border border-gray-100 rounded-2xl gap-2 p-4'>
        {children}
        <div className='flex-1'> 
            <h2 className='font-bold'>{title}</h2>
        <p className='text-[11px] text-gray-400'>{body}</p></div>
       
    </div>
}