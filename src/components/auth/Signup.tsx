import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TermsandCondition } from './TermsandCondition';

const SignUpCard: React.FC<{switchView:(id:number)=>void}> = ({switchView}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fb] px-4 text-left min-w-[400px]">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Register your account
        </h2>

        {/* Sign up with email */}
        <button className="w-full flex items-center justify-center border border-gray-300 px-4 py-3 rounded-md hover:bg-gray-50 mb-4" onClick={()=>switchView(1)}>
          <Mail className="w-5 h-5 mr-2 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            Sign up with email
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center text-sm text-gray-400 my-2">
          <div className="flex-grow border-t border-gray-200" />
          <span className="mx-2">or</span>
          <div className="flex-grow border-t border-gray-200" />
        </div>

        {/* Sign up with Google */}
        <button className="w-full flex items-center justify-center border border-gray-300 px-4 py-3 rounded-md hover:bg-gray-50">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          <span className="text-sm font-medium text-gray-700">
            Sign up with Google
          </span>
        </button>

      
<TermsandCondition/>
        {/* Already have account */}
        <p className="text-sm text-gray-700 mt-6 text-center text-left">
          Already have an account?{' '}
          <span onClick={()=>switchView(6)}><Link to="#" className="text-orange-500 hover:underline font-medium">
            Login
          </Link></span>
        </p>
      </div>
    </div>
  );
};

export default SignUpCard;
