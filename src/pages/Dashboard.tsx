import React from 'react';
import SideBar from '../components/dashboard/SideBar';
import { Outlet } from 'react-router-dom';
import MobileMenu from '../components/dashboard/harmburger';

const Dashboard = () => {
    return (
        <div className='flex h-[100vh] w-[100vw] m-0 relative b'>
            <SideBar />
            <MobileMenu/>
            <Outlet/>
        </div>
    );
};

export default Dashboard;