'use client';
import { useMemo } from 'react';

import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

import { colors } from '../constant';
import { getContrastColorOKLCH } from '../utils';

type ColorValue = { l: number; c: number; h: number } | null;
type Color = {
  key: number;
  label: string;
  value: ColorValue;
};
type Colors = Color[];

export type ColorGroupProps = {
  title: string;
  activeItem: number;
  onClick?: (color: Color) => void;
};

export const ColorGroup = ({ title, activeItem, onClick }: ColorGroupProps) => {
  return (
    <div className="flex flex-col gap-2">
      <ColorGroupTitle title={title} />
      <ColorGroupGrid
        colors={colors}
        activeItem={activeItem}
        onClick={onClick}
      />
    </div>
  );
};

export type ColorGroupTitleProps = {
  title: string;
  className?: string;
};

const ColorGroupTitle = ({ title, className }: ColorGroupTitleProps) => {
  return <div className={cn('text-xs text-theme', className)}>{title}</div>;
};

export type ColorGroupGridProps = {
  colors: Colors;
  activeItem: number;
  onClick?: (color: Color) => void;
};

const ColorGroupGrid = ({ colors, activeItem, onClick }: ColorGroupGridProps) => {
  return (
    <div className="flex">
      <div className="inline-grid grid-cols-8 gap-1">
        {colors.map((color) => (
          <ColorGroupItem
            key={color.key}
            color={color.value}
            isActive={activeItem === color.key}
            onClick={() => onClick?.(color)}
          />
        ))}
      </div>
    </div>
  );
};

export type ColorGroupItemProps = {
  color: ColorValue;
  isActive: boolean;
  onClick?: () => void;
};

const ColorGroupItem = ({ color, isActive, onClick }: ColorGroupItemProps) => {
  const itemClasses = cn(
    'flex hover:outline-2 hover:outline-neutral-300 dark:hover:outline-neutral-500 rounded-xs cursor-pointer',
  );
  const colorClasses = cn('w-4 h-4 rounded-xs overflow-hidden');
  const contrastColor = useMemo(() => {
    if (!color) return '';
    return getContrastColorOKLCH(color.l, color.c, color.h);
  }, [color]);
  const iconClasses = cn('w-4 h-4', contrastColor === 'black' ? 'text-black' : 'text-white');

  const handleClick = () => {
    onClick?.();
  };
  return (
    <span
      className={itemClasses}
      onClick={handleClick}>
      <span
        className={colorClasses}
        style={{ backgroundColor: color ? `oklch(${color.l} ${color.c} ${color.h})` : '' }}>
        {color && isActive && (
          <Icon
            name="Check"
            className={iconClasses}
          />
        )}
        {!color && (
          <Icon
            name="Slash"
            className="w-4 h-4 text-theme"
          />
        )}
      </span>
    </span>
  );
};

export { ColorGroup as Group };
