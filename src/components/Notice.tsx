import React from 'react';
import Logo from './Logo';
import check from '../assets/check_cirle.svg'
const Notice:React.FC<any> = (props) => {
    return (
        <div className ={`${props.className} bg-white  md:h-[100%] w-full md:w-[50%] p-4 sm:p-[100px]  md:px-[50px] sm:py-4 2xl:p-[100px] flex flex-col justify-between`}>
            <div className='hidden md:block'>
            <Logo/>

                </div>
            <div className='font-[400px] '>
            <span className='flex gap-4 align-center text-slate-500 text-left leading-5 my-6'> <img src={check} alt='check'/><p>Track real-time overview of company's financial performance.</p></span>
            <span className='flex gap-4 align-center text-slate-500 text-left leading-5 my-6'><img src={check} alt='check'/><p>Track created projects budget against actual revenue and expenses.</p></span>
            <span className='flex gap-4 align-center text-slate-500 text-left leading-5 my-6'> <img src={check} alt='check'/><p>Highlighted reports on budget deficit and surplus, accounting dimensions, balance sheets and real-time sales margin estimation.</p></span>
            </div>
            <footer className='text-gray-500 text-[13px] text-left'> &copy; 2022 Revvex. All rights reserved.</footer>
        </div>
    );
};

export default Notice;