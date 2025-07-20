// components/MobileMenu.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // or use HeroIcons
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/profile.svg';
import logout from '../../assets/logout.svg';

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const menuItems = [
		{ name: 'My Portfolio', path: '/dashboard' },
		{ name: 'My Group', path: '/group' },
		{ name: 'Messages', path: '/messages' },
		{ name: 'Analytics', path: '/analytics' },
		{ name: 'Pack', path: '/pack' },
		{ name: 'Settings', path: '/settings' },
	];

	return (
		<div className='md:hidden absolute'>
			{/* Toggle Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='p-3 text-gray-700'
			>
				{isOpen ? <X size={24} /> : <Menu size={24} />}
			</button>

			{/* Mobile Menu */}
			{isOpen && (
				<div className='absolute top-14 left-0 w-[250px] bg-white shadow-md h-screen z-100 p-4 flex flex-col justify-between text-black'>
					<div>
						{menuItems.map((item, idx) => (
							<div
								key={idx}
								className='py-2 px-4 hover:bg-orange-100 rounded cursor-pointer'
								onClick={() => {
									navigate(item.path);
									setIsOpen(false);
								}}
							>
								{item.name}
							</div>
						))}
					</div>

					{/* Profile */}
					<div className='flex flex-col items-center gap-2 mt-10'>
						<img src={profile} alt='profile' className='w-10 h-10' />
						<p className='font-bold'>Theresa Milly</p>
						<p className='text-gray-500 text-sm'>Influencer</p>
						<button className='flex items-center gap-2 text-orange-400 bg-orange-100 px-3 py-1 rounded'>
							<img src={logout} alt='logout' className='w-4 h-4' />
							Logout
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default MobileMenu;
