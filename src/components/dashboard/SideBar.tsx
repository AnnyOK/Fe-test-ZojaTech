import React, { useEffect, useState } from 'react';
import Logo from '../Logo';
import user from '../../assets/user.svg';
import messages from '../../assets/messages.svg';
import pack from '../../assets/pack.svg';
import settings from '../../assets/settings.svg';
import settings2 from '../../assets/settings_i.svg';

import group from '../../assets/group.svg';
import group2 from '../../assets/group_i.svg';
import pack2 from '../../assets/pack_i.svg';
import messages2 from '../../assets/messages_i.svg';
import analytics from '../../assets/analytics.svg';
import analytics2 from '../../assets/analytics_i.svg';
import logoutIcon from '../../assets/logout.svg';
import user2 from '../../assets/user_i.svg';
import profile from '../../assets/profile.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
const SideBar = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const {logout} = useAuth()
    const navigate = useNavigate()
	const handleActive = (id: number) => {
		setActiveIndex(id);
	};
   const handleRouting=()=>{
    switch(activeIndex){
        case 0:
            navigate("/dashboard");
            break;
            case 1:
            navigate("group");
            break;
            case 2:
            navigate("messages");
            break;

            case 3:
            navigate("analytics");
            break;
            case 4:
            navigate("pack");
            break;
            case 5:
            navigate("settings");
            break;
        
        
    }
   }
    useEffect(()=>{
handleRouting()
    },[activeIndex])
	return (
		<div className='hidden md:block bg-white h-[100vh] w-[250px] py-3 flex flex-col items-center '>
			<Logo />
			<SideBarItem
				img={[user, user2]}
				name='My Portfolio'
				id={0}
				handleActive={handleActive}
				activeIndex={activeIndex}
			/>
			<SideBarItem
				img={[group, group2]}
				name='My Group'
				id={1}
				handleActive={handleActive}
				activeIndex={activeIndex}
			/>
			<SideBarItem
				img={[messages, messages2]}
				name='Messages'
				id={2}
				handleActive={handleActive}
				activeIndex={activeIndex}
			/>
			<SideBarItem
				img={[analytics, analytics2]}
				name='Analytics'
				id={3}
				handleActive={handleActive}
				activeIndex={activeIndex}
			/>
			<SideBarItem
				img={[pack, pack2]}
				name='Pack'
				id={4}
				handleActive={handleActive}
				activeIndex={activeIndex}
			/>
			<SideBarItem
				img={[settings, settings2]}
				name='Settings'
				id={5}
				handleActive={handleActive}
				activeIndex={activeIndex}
			/>
			<div className='text-black rounded-2xl bg-white flex flex-col justify-center items-center p-10 mt-[50px] absolute bottom-[50px] shadow-xl'>
				<img
					src={profile}
					alt='profile'
					className='absolute top-[-30px]'
				/>
				<h2 className='font-bold'>Theresa Milly</h2>
				<p className='text-gray-500'>Influencer</p>
				<button className='flex  gap-2 m-2 text-orange-400 bg-orange-100 ' onClick={()=>logout()}>
					<img src={logoutIcon} alt='logout' /> Logout
				</button>
			</div>
		</div>
	);
};

export default SideBar;
export const SideBarItem: React.FC<{
	img: string[];
	name: string;
	id: number;
	handleActive: (id: number) => void;
	activeIndex: number;
}> = ({ img, name, id, handleActive, activeIndex }) => {
	return (
		<div
			className={`${
				activeIndex === id
					? ' text-orange-400 rounded-'
					: 'text-gray-500'
			}   w-full flex items-center`}
			onClick={() => handleActive(id)}
		>
			<div
				className={`${
					activeIndex === id
						? 'h-[40px] w-[5px] bg-orange-400 rounded-e-md '
						: ''
				}`}
			></div>
			<div
				className={`${
					activeIndex === id
						? 'bg-white shadow-sm '
						: ''
				} flex justify-start gap-4 py-3 px-2 rounded-2xl mx-10 h-[50px] font-semibold text-[14px] items-center`}
			>
				{activeIndex === id ? (
					<img src={img[0]} alt='' />
				) : (
					<img src={img[1]} alt='' />
				)}
				<p className='min-w-[100px]'>{name}</p>
			</div>
		</div>
	);
};
