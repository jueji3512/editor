import { cn } from '@/lib/utils';
import { Surface } from '../Surface';
import { HTMLProps } from 'react';

export type MenuProps = HTMLProps<HTMLDivElement> & {
  direction?: 'horizontal' | 'vertical';
};

export function MenuWrapper({ children, className, direction = 'vertical', ...props }: MenuProps) {
  const menuClasses = cn('flex p-1 gap-0.5', direction === 'vertical' ? 'flex-col' : 'flex-row', className);
  return (
    <Surface
      className={menuClasses}
      {...props}>
      {children}
    </Surface>
  );
}
MenuWrapper.displayName = 'Menu';

export type MenuItemProps = HTMLProps<HTMLDivElement> & {
  active?: boolean;
  onClick?: () => void;
};

export function MenuItem({ children, className, active, onClick, ...props }: MenuItemProps) {
  const menuItemClasses = cn(
    'px-2 py-1 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-sm cursor-pointer',
    active ? 'bg-neutral-100 dark:bg-neutral-800' : '',
    className,
  );
  return (
    <div
      className={menuItemClasses}
      onClick={onClick}
      {...props}>
      {children}
    </div>
  );
}
MenuItem.displayName = 'MenuItem';

export const Menu = {
  Wrapper: MenuWrapper,
  Item: MenuItem,
};
