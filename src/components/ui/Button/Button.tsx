'use client';
import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';

export type ButtonProps = HTMLProps<HTMLButtonElement> &
  React.ComponentProps<'button'> & {
    circle?: boolean;
    border?: boolean;
  };

export function Button({ children, className, onClick, ref, circle, border, ...props }: ButtonProps) {
  const buttonClass = cn(
    'inline-flex items-center p-1 text-sm transition-colors cursor-pointer',
    'bg-white text-black hover:bg-neutral-100 hover:text-black dark:bg-black dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white ',
    className,
    circle ? 'rounded-full' : 'rounded-md',
    border ? 'border border-neutral-200 dark:border-neutral-800' : '',
  );
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <button
      type="button"
      className={buttonClass}
      onClick={handleClick}
      ref={ref}
      {...props}>
      {children}
    </button>
  );
}
