import React from 'react';
import trend from '../../../assets/trend.svg'
const MembersCard:React.FC<{img:string,name:string,username:string,gain:number}> = ({img,name,username,gain}) => {
    return (
        <div className='col-span-6 sm:col-span-2 md:col-span-1 shadow-sm rounded-2xl border border-gray-100 p-2 text-center flex  items-center flex-col justify-center'>
			      <div className="w-10 h-10 mx-auto mb-3">

            <img
					src={img}
					alt='profile'
					className='rounded-full w-full h-full border border-gray-300 object-cover'
				/>
				</div>
				<h2 className='font-bold text-[11px]'>{name}</h2>
				<p className='text-gray-500 text-[13px]'>{username}</p>
			<span className='font-bold flex gap-2 align-center'> <img src={trend} alt='trend'/> <span>{gain}%</span></span>
        </div>
    );
};

export default MembersCard;