import { icons } from 'lucide-react';
import { memo } from 'react';
import { cn } from '@/lib/utils';

export type IconProps = {
  name: keyof typeof icons;
  className?: string;
  strokeWidth?: number;
};

export const Icon = memo(({ name, className, strokeWidth }: IconProps) => {
  const IconComponent = icons[name];
  const classNames = cn('w-4 h-4', className);
  if (!IconComponent) {
    return null;
  }
  return (
    <IconComponent
      className={classNames}
      strokeWidth={strokeWidth || 2.5}
    />
  );
});

Icon.displayName = 'Icon';
export type IconType = keyof typeof icons;
