import SideBar from '../components/dashboard/SideBar';
import { Outlet } from 'react-router-dom';
import MobileMenu from '../components/dashboard/harmburger';
import AuthWrapper from '../components/HOC/withAuth'
const Dashboard = () => {
    return (
        <div className='flex h-[100vh] w-[100vw] m-0 relative b'>
            <SideBar />
            <MobileMenu/>
            <Outlet/>
        </div>
    );
};
const AuthenticatedDashboard = AuthWrapper(Dashboard)
export default AuthenticatedDashboard;