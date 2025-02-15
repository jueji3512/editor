import * as SelectPrimitive from '@radix-ui/react-select';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/Icon';
import { Surface } from '../Surface';
import { Scrollbar } from '@/components/ui/Scrollbar';
import { useMemo, useState, useEffect } from 'react';

export type SelectProps = {
  options: SelectOption[];
  disabled?: boolean;
  className?: string;
  value?: string;
  modal?: boolean;
  onChange?: (value: string) => void;
};

export type SelectOption = {
  value: string;
  label?: string;
  disabled?: boolean;
};

export const Select = ({ options, disabled, className, value, modal = false, onChange }: SelectProps) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (modal) return;
    const observer = new MutationObserver(() => {
      if (getComputedStyle(document.body).pointerEvents === 'none') {
        document.body.style.removeProperty('pointer-events');
      }
    });
    if (open) {
      observer.observe(document.body, { attributes: true });
    } else {
      observer.disconnect();
    }
    return () => observer.disconnect();
  }, [open, modal]);
  const width = useMemo(() => className?.split(' ')?.find((c) => c.includes('w-')) || 'w-[150px]', [className]);
  const selectClasses = cn(
    'inline-flex justify-between items-center px-2 h-[32px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black outline-none shadow-sm rounded-lg',
    width,
    disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-900',
    className,
  );
  return (
    <SelectPrimitive.Root
      open={open}
      onOpenChange={setOpen}
      onValueChange={onChange}>
      <SelectPrimitive.Trigger className={selectClasses}>
        {options.find((option) => option.value === value)?.label ||
          options.find((option) => option.value === value)?.value ||
          ''}
        <Icon
          name="ChevronsUpDown"
          className="w-4 h-4"
        />
      </SelectPrimitive.Trigger>
      <SelectPortal
        width={width}
        options={options}
      />
    </SelectPrimitive.Root>
  );
};

type SelectPortalProps = {
  width: string;
  options: SelectOption[];
};

const SelectPortal = ({ width, options }: SelectPortalProps) => {
  if (!options || !options.length) return null;
  const surfaceClasses = cn(width, 'flex p-1 max-h-[240px]');
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position="popper"
        sideOffset={4}>
        <Surface className={surfaceClasses}>
          <Scrollbar>
            <SelectPrimitive.Viewport>
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </SelectPrimitive.Viewport>
          </Scrollbar>
        </Surface>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

export type SelectItemProps = SelectOption;

const SelectItem = ({ value, label, disabled }: SelectItemProps) => {
  const itemClasses = cn(
    'px-2 py-1 text-sm outline-none',
    disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-sm',
  );
  return (
    <SelectPrimitive.Item
      className={itemClasses}
      value={value}
      disabled={disabled}>
      {label || value}
    </SelectPrimitive.Item>
  );
};
