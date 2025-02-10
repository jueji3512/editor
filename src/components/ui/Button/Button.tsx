import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';

export type ButtonProps = HTMLProps<HTMLButtonElement> & React.ComponentProps<'button'>;

export function Button({ children, className, onClick, ref, ...props }: ButtonProps) {
  const buttonClass = cn(
    'inline-flex items-center p-1 rounded-md text-sm transition-colors cursor-pointer',
    'bg-white text-black hover:bg-neutral-200 hover:text-black dark:bg-black dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white ',
    className,
  );
  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClick}
      ref={ref}
      {...props}>
      {children}
    </button>
  );
}
