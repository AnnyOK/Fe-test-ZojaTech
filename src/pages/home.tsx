import React, { useState } from 'react';
import Notice from '../components/Notice';
import SignUpCard from '../components/auth/Signup';
import RegisterForm from '../components/auth/Register';
import { Gethelp } from '../components/auth/Gethelp';
import CheckMailCard from '../components/auth/CheckMail';
import ConfirmCode from '../components/auth/Confirmcode';
import EmailVerified from '../components/auth/EmailVerified';
import Login from '../components/auth/Login';

const Home = () => {
    const[ activeIndex,setActiveIndex]= useState(0)
    const switchView=(id:number)=>{
setActiveIndex(id)
    }
    return (
        <div className='flex h-[100vh] w-[100vw] m-0 relative'>
            <Notice className={'flex-1'}/>
            <div className='flex-1 flex w-[50%] h-[100%] bg-gray-50 text-gray-700 justify-center items-center p-[100px]'>
                {activeIndex===0&&<SignUpCard switchView={switchView} />}
                {activeIndex===1&&<RegisterForm switchView={switchView} />}
                {activeIndex===2&&<CheckMailCard switchView={switchView} />}
                {activeIndex===3&&<ConfirmCode switchView={switchView} />}
                {activeIndex===4&&<EmailVerified switchView={switchView} />}
                {activeIndex===6&&<Login switchView={switchView} />}
                <Gethelp/>
                </div>
        </div>
    );
};

export default Home;
