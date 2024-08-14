import React from 'react';
import { Edit2 } from 'react-feather';

import { cn } from '../../utils';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Pill 모양 버튼
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const mode = primary
    ? 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'
    : 'text-gray-900 bg-white hover:bg-gray-100 hover:text-blue-700 border border-gray-200 focus:ring-gray-100';

  const colorVariants = {
    blue500: 'bg-blue-500 hover:bg-blue-600',
    blue400: 'bg-blue-400 hover:bg-blue-500',
    sky700: 'bg-sky-700 hover:bg-sky-800',
    sky500: 'bg-sky-500 hover:bg-sky-600',
    sky400: 'bg-sky-400 hover:bg-sky-500',
    red: 'bg-red-600 hover:bg-red-500',
  };

  const customBackgroundColorWithHover = backgroundColor
    ? colorVariants[backgroundColor.slice(3, -4) + backgroundColor.slice(-3)]
    : '';

  return (
    <button
      type="button"
      // className={['font-sans','storybook-button', `storybook-button--${size}`, mode].join(' ')}
      className={cn(
        'flex cursor-pointer items-center justify-center rounded-full border-0 border-solid px-4 py-2 text-xl focus:ring-4',
        mode,
        customBackgroundColorWithHover
      )}
      {...props}
    >
      <Edit2 className="mr-0.5 h-5 w-5" />
      {label}
    </button>
  );
};

{
  /*
  .storybook-button {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }
  .storybook-button--primary {
    color: white;
    background-color: #1ea7fd;
  }
  .storybook-button--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    .storybook-button--small {
      font-size: 12px;
    }
    padding: 10px 16px;
  }
  .storybook-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  .storybook-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
*/
}
