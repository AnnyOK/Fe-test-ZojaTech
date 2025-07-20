import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizeClasses = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-4xl',
};

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${className} m-6`}>
      <span className="text-orange-500 text-2xl">
      <img src={logo} alt="logo" />
      </span>
      <span className={`${sizeClasses[size]} font-bold text-gray-800`}>
        Buddy
      </span>
    </Link>
  );
};

export default Logo;
