import React, { useState } from 'react';

import { cn } from '../../utils';

interface SwitchProps {
  size?: 'default' | 'large';
  isChecked?: boolean;
  isDisabled?: boolean;
  label: string;
  onChange?: () => void;
}

/**
 * Flowbite 기반 Switch 버튼(checkbox)
 */
export const Switch = ({
  size = 'default',
  isDisabled = false,
  label,
  isChecked,
  onChange,
  ...props
}: SwitchProps) => {
  const [checked, setChecked] = useState(isChecked);

  const handleSwitch = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const sizeVariants = {
    default: 'h-6 w-11 after:top-[2px] after:start-[2px] after:h-5 after:w-5',
    large: 'h-7 w-14 after:top-0.5 after:start-[4px] after:h-6 after:w-6',
  };

  return (
    <div className="inline-flex justify-end">
      <label className="mb-0 inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          value=""
          className="peer sr-only"
          onClick={handleSwitch}
          onChange={onChange}
          checked={checked}
          disabled={isDisabled}
          {...props}
        />
        <span className="peer mb-0.5 me-1 text-sm font-medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:text-gray-400">
          {label}
        </span>
        <div
          className={cn(
            'peer relative rounded-full bg-gray-300',
            "after:absolute after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-['']",
            'peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
            sizeVariants[size]
          )}
        ></div>
      </label>
    </div>
  );
};
