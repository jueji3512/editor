import { HTMLProps } from 'react';

import { cn } from '@/lib/utils';

import { Surface } from '../Surface';

export type MenuProps = HTMLProps<HTMLDivElement> & {
  direction?: 'horizontal' | 'vertical';
};

export function Menu({ children, className, direction = 'vertical', ...props }: MenuProps) {
  const menuClasses = cn('flex p-1 gap-0.5', direction === 'vertical' ? 'flex-col' : 'flex-row', className);

  return (
    <Surface
      className={menuClasses}
      {...props}>
      {children}
    </Surface>
  );
}

export type MenuItemProps = HTMLProps<HTMLDivElement> & {
  active?: boolean;
  onClick?: () => void;
};

export function MenuItem({ children, className, active, onClick, ...props }: MenuItemProps) {
  const menuItemClasses = cn(
    'p-2 py-1 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-sm cursor-pointer',
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

export type MenuTitleProps = HTMLProps<HTMLDivElement> & {
  title: string;
};

export function MenuTitle({ children, className, ...props }: MenuTitleProps) {
  const menuTitleClasses = cn('mb-1 text-xs', className);
  return (
    <div
      className={menuTitleClasses}
      {...props}>
      {children}
    </div>
  );
}

Menu.Wrapper = Menu;
Menu.Item = MenuItem;
Menu.Title = MenuTitle;
