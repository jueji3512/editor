'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export const Input = ({ className, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputWrapperClasses = cn(
    'flex border border-gray-300 rounded-lg transition-all duration-300',
    isFocused && 'outline-1 outline-gray-500 border-gray-500',
  );
  const inputClasses = cn('w-full rounded-md px-2 py-1 text-sm outline-none', className);
  return (
    <div className={inputWrapperClasses}>
      <input
        type="text"
        className={inputClasses}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};
