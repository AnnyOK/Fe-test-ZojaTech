import React from 'react';
import mailverified from '../../assets/emailverified.svg'
const EmailVerified: React.FC<{switchView:(id:number)=>void}> = ({switchView}) => {
	return (
		<div className='text-center  flex-col h-fit md:min-h-screen flex items-center justify-center bg-[#f8f9fb] px-4  m-10 w-full md:min-w-[400px]'>
            <div className='bg-white shadow-xl rounded-xl p-8 w-full max-w-md flex flex-col justify-center items-center'>
			<img src={mailverified} alt='email verified' width={80} height={100} className='align-center'/>

				<h2 className='text-2xl font-semibold text-gray-900 mb-'>
				Email verified !
				</h2>
				<p className='text-[13px] text-slate-500 text-center py-3'>
				The verified email address will be associated with your account. Click on the button below to continue
				</p>
				{/* Sign up with email */}
				<button className='focus:outline-none focus:ring-1 focus:ring-orange-500 w-fit flex items-center justify-center text-white py-3 rounded-md bg-orange-400 mb-4 px-10' onClick={()=>switchView(6)}>
					<span className='text-sm font-medium '>
						Continue
					</span>
				</button>

				
			</div>
		</div>
	);
};

export default EmailVerified;
