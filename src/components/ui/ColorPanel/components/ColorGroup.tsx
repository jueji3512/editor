'use client';
import { useMemo } from 'react';

import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

import { colors } from '../constant';
import { getContrastColorOKLCH } from '../utils';

export type ColorValue = { l: number; c: number; h: number } | null;
type Color = {
  id: number;
  label: string;
  value: ColorValue;
};
type Colors = Color[];

export type ColorGroupProps = {
  title: string;
  activeId: number;
  onClick?: (value: ColorValue) => void;
};

export const ColorGroup = ({ title, activeId, onClick }: ColorGroupProps) => {
  return (
    <div className="flex flex-col gap-2">
      <ColorGroupTitle title={title} />
      <ColorGroupGrid
        colors={colors}
        activeId={activeId}
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
  activeId: number;
  onClick?: (value: ColorValue) => void;
};

const ColorGroupGrid = ({ colors, activeId, onClick }: ColorGroupGridProps) => {
  return (
    <div className="flex">
      <div className="inline-grid grid-cols-8 gap-1">
        {colors.map((color) => (
          <ColorGroupItem
            key={color.id}
            color={color.value}
            isActive={activeId === color.id}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};

export type ColorGroupItemProps = {
  color: ColorValue;
  isActive: boolean;
  onClick?: (value: ColorValue) => void;
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

  return (
    <div
      className={itemClasses}
      onClick={() => onClick?.(color)}>
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
    </div>
  );
};

export { ColorGroup as Group };
