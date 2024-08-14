import React from 'react';

import cn from '../../utils/cn';
import { IconProps } from 'react-feather';

interface BadgeProps {
  label: string;
  icon?: React.FC<IconProps>;
  className?: string;
}

export const Badge = ({ label, icon, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        'me-2 flex items-center gap-x-1 rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800',
        className
      )}
    >
      {label}
      {icon}
    </span>
  );
};
