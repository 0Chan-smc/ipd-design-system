import React from 'react';
import { Edit2 } from 'react-feather';

import { cn } from '../utils';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button2 = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-yellow-200' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={cn(
        'font-sans flex items-center justify-center px-4 py-2 text-xl text-white border border-blue-400 rounded-lg cursor-pointer',
        'bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500',
        'hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-blue-200',
		backgroundColor ? 'bg-none bg-rose-400 border-0' : ''
      )}
      {...props}
    >
      <Edit2 className="w-5 h-5 mr-0.5"/>
      {label}
    </button>
  );
};

{/* <button
type="button"
class="ml-auto flex items-center h-10 text-white bg-gradient-to-r from-blue-30
0 via-blue-400 to-blue-500 border border-blue-400 hover:bg-gradient-to-br focus:ring-1
 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-700 font-medium rounded-lg px-3 py-2.5 text-center"
onclick="location.href='/notice/notice_write.php'"
>
<i data-feather="edit-2" class="w-3.5 h-3.5"></i>
<span class="ml-1">작성</span>
</button> */}