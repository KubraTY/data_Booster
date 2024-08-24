import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

interface NavigationButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center w-10 h-10 rounded-md 
      ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:customPurple_light'} 
      text-white`}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
      {direction === 'left' ? <FaArrowLeft size={20} /> : <FaArrowRight size={20} />}
    </button>
  );
};

export default NavigationButton;
