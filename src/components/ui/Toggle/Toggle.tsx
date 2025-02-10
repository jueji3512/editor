import { cn } from '@/lib/utils';
import { useCallback } from 'react';
import { HTMLProps } from 'react';
export type ToggleProps = HTMLProps<HTMLButtonElement> & {
  active?: boolean;
  children: React.ReactNode | string;
  onChange?: (active: boolean) => void;
};

export const Toggle = ({ active, children, onChange, className }: ToggleProps) => {
  const buttonClass = cn(
    'inline-flex items-center p-1 rounded-md text-sm transition-colors cursor-pointer',
    !active ? 'bg-white text-black hover:bg-neutral-200 hover:text-black' : 'bg-neutral-200 text-neutral-800',
    !active
      ? 'dark:bg-black dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white'
      : 'dark:bg-neutral-800 dark:text-white',
    className,
  );

  const handleChange = useCallback(() => {
    onChange?.(!active);
  }, [active, onChange]);

  return (
    <button
      className={buttonClass}
      type="button"
      onClick={handleChange}
      aria-pressed={active}>
      {children}
    </button>
  );
};
