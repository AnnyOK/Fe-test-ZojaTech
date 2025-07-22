import React from 'react';
import sendmail from '../../assets/sendmail.svg'
import { useAuth } from '../../context/authContext';
import { resendOtp } from '../../services/resendOtp';
const CheckMailCard: React.FC<{switchView:(id:number)=>void}> = ({switchView}) => {
	const {userLogin} =useAuth()
	const {email,token}= userLogin
	
	return (
		<div className='h-fit md:min-h-screen flex items-center justify-center bg-[#f8f9fb] px-4  m-10 w-full md:min-w-[400px]'>
            <div className='bg-white shadow-xl rounded-xl p-8 w-full max-w-md flex flex-col justify-center items-center'>
			<img src={sendmail} alt='email sent' width={100} height={100} className='align-center'/>

				<h2 className='text-2xl font-semibold text-gray-900 mb-'>
					Check your mailbox !
				</h2>
				<p className='text-[13px] text-slate-500 text-center py-3'>
					{' '}
					We've sent an email to <span className='text-gray-700 font-bold'> {
						email||' your email '
					}</span> 
					with an OTP to confirm your account.
					Check your inbox to activate yout
					account
				</p>
				{/* Sign up with email */}
				<button className='w-full flex items-center justify-center border border-gray-300 px-4 py-3 rounded-md bg-orange-500 mb-4 text-white focus:outline-none focus:ring-1 focus:ring-orange-500 ' onClick={()=>switchView(3)}>
					<span className='text-sm font-medium '>
						Confirm Email
					</span>
				</button>

				{/* Already have account */}
				<p className='text-sm text-gray-700 mt-6 text-center'>
					Didn't get the mail?{' '}
					<span
					onClick={async (e) => {
						e.preventDefault(); // 🚫 prevent form submission or page reload
						if (email) await resendOtp(email,token);
					  }}
						className='text-orange-500 hover:underline font-medium'
					>
						Resend
					</span>
				</p>
			</div>
		</div>
	);
};

export default CheckMailCard;
