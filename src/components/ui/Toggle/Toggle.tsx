import { useCallback } from 'react';

export type ToggleProps = {
  active?: boolean;
  onChange?: (active: boolean) => void;
  size?: 'small' | 'medium' | 'large';
  circle?: boolean;
  children: React.ReactNode | string;
};

export const Toggle = ({ onChange, active = false, size = 'medium', circle = false, children = '' }: ToggleProps) => {
  const buttonClass = [
    'inline-flex cursor-pointer items-center border-transparent text-sm transition-colors',
    !active ? 'bg-white text-black hover:bg-neutral-200 hover:text-black' : 'bg-neutral-200 text-neutral-800',
    !active
      ? 'dark:bg-black dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white'
      : 'dark:bg-neutral-800 dark:text-white',
    size === 'small' && 'p-1',
    size === 'medium' && 'p-1.5',
    size === 'large' && 'p-2',
    circle ? 'rounded-full' : 'rounded-lg',
  ]
    .filter(Boolean)
    .join(' ');

  const handleChange = useCallback(() => {
    onChange?.(!active);
  }, [active, onChange]);

  return (
    <button
      className={buttonClass}
      type="button"
      onClick={handleChange}>
      {children}
    </button>
  );
};
