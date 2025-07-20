import React from 'react';
import search from '../../assets/search.svg'
import plus from '../../assets/plus.svg'
import notification from '../../assets/notification.svg'
import Logo from '../Logo';
import MobileMenu from './harmburger';
const Header:React.FC<{title:string}> = ({title}) => {
    return (
        <div className='pt-20 p-4 text-black flex gap-4 md:p-10 md:flex-nowrap flex-wrap'>
            <h2 className='flex-1 font-bold text-4xl'>{title}</h2>
           <label htmlFor='search' className='relative '>
            <img src={search} alt='' className='absolute top-2 left-2'/>
           <input type='search' placeholder='Search' className='border min-w-[300px] focus:border-none border-gray-400 focus:outline-none focus:ring-1 bg-white focus:ring-orange-500 text-black rounded-2xl pl-[50px] py-2'/>
            </label> 
            <img src={plus} alt='plus' className='bg-white rounded-full p-2 border border-gray-200'/>
            <img src={notification} alt='notification' className='bg-white rounded-full p-2 border border-gray-200'/>
            <div className='md:hidden block absolute right-0 top-0'>
            <Logo/>
            </div>
                </div>
    );
};

export default Header;