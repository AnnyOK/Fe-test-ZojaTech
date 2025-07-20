import { useState } from 'react';
import Notice from '../components/Notice';
import SignUpCard from '../components/auth/Signup';
import RegisterForm from '../components/auth/Register';
import { Gethelp } from '../components/auth/Gethelp';
import CheckMailCard from '../components/auth/CheckMail';
import ConfirmCode from '../components/auth/Confirmcode';
import EmailVerified from '../components/auth/EmailVerified';
import Login from '../components/auth/Login';
import Logo from '../components/Logo';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const switchView = (id: number) => {
        setActiveIndex(id)
    }
    return (
        <div className='flex  md:flex-row h-[100vh] w-[100vw] m-0  relative flex-col-reverse'>
            <div className='absolute top-2 right-2 md:hidden'>
            <Logo/>
                </div>
            <Notice className={'flex-1'} />
            <div className='flex-1 flex w-full md:w-[50%] md:h-[100%] bg-gray-50 text-gray-700 justify-center items-center md:p-[100px] pt-[100px] pb-[50px] md:pt-0'>
                {activeIndex === 0 && <SignUpCard switchView={switchView} />}
                {activeIndex === 1 && <RegisterForm switchView={switchView} />}
                {activeIndex === 2 && <CheckMailCard switchView={switchView} />}
                {activeIndex === 3 && <ConfirmCode switchView={switchView} />}
                {activeIndex === 4 && <EmailVerified switchView={switchView} />}
                {activeIndex === 6 && <Login switchView={switchView} />}
            </div>
            <Gethelp />

        </div>
    );
};

export default Home;
