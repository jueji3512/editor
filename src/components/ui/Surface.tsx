import { HTMLProps } from 'react';

import { cn } from '@/lib/utils';

export type SurfaceProps = HTMLProps<HTMLDivElement> & {
  shadow?: boolean;
  border?: boolean;
};

export function Surface({ className, children, shadow = true, border = true, ...props }: SurfaceProps) {
  const surfaceClasses = cn(
    className,
    'bg-white dark:bg-black rounded-lg overflow-hidden outline-none',
    shadow ? 'shadow-sm' : '',
    border ? 'border border-neutral-200 dark:border-neutral-800' : '',
  );
  return (
    <div
      className={surfaceClasses}
      {...props}>
      {children}
    </div>
  );
}
