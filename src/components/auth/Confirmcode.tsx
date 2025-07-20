import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const ConfirmCode: React.FC<{switchView:(id:number)=>void}> = ({switchView}) => {
    const length = 4;
    const email= 'kelix2@gmail.com'
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // Allow only digits or empty

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to next input
    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    // If complete, you can trigger submission
    if (updatedOtp.every((digit) => digit !== '')) {
      handleSubmit(updatedOtp.join(''));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '' && index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text').slice(0, length);
    if (/^\d+$/.test(paste)) {
      const updated = paste.split('');
      const newOtp = [...otp];
      for (let i = 0; i < length; i++) {
        newOtp[i] = updated[i] || '';
        if (inputs.current[i]) {
          inputs.current[i]!.value = updated[i] || '';
        }
      }
      setOtp(newOtp);
      if (newOtp.every((digit) => digit !== '')) {
        handleSubmit(newOtp.join(''));
      }
    }
  };

  const handleSubmit = (finalOtp: string) => {
    console.log('Submitted OTP:', finalOtp);
    switchView(4)
    console.log('execute')
    // Trigger actual verification logic here
  };

	return (
		<div className='text-left min-h-screen flex flex-col items-center justify-center bg-[#f8f9fb] px-4  min-w-[400px]'>
            <div className='bg-white shadow-xl rounded-xl p-8 w-full max-w-md flex flex-col justify-center items-start'>

				<h2 className='text-2xl font-semibold text-gray-900'>
					Verify your email
				</h2>
				<p className='text-[13px] text-slate-500 py-3'>
					A four digit OTP code has been sent to your email <span className='text-orange-500 font-bold'> {
						email||' your email '
					}</span>. 
					
				</p>
                <div className="flex justify-center gap-5 my-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              ref={(el) => (inputs.current[index] = el)}
              className="w-12 h-12 text-center border border-gray-300 rounded-md text-xl font-semibold focus:outline-none focus:ring-1 focus:ring-orange-300"
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
            />
          ))}
        </div>
				{/* Sign up with email */}
				<button 
                className={` py-3 rounded-md text-white font-medium w-fit flex items-center justify-center  px-10  bg-orange-400 mb-4 ${
                    otp.every((val) => val !== '')
                      ? 'bg-orange-300 hover:bg-orange-600'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                  disabled={!otp.every((val) => val !== '')}
                  onClick={() => handleSubmit(otp.join(''))}>
					<span className='text-sm font-medium '>
						Confirm Code
					</span>
				</button>

				{/* Already have account */}
				<p className='text-sm text-gray-700 mt-6 text-left'>
					Didn't get the mail?{' '}
					<Link
						to='/resend'
						className='text-orange-500 hover:underline font-medium'
					>
						Resend
					</Link>
				</p>
			</div>
		</div>
	);
};

export default ConfirmCode;

