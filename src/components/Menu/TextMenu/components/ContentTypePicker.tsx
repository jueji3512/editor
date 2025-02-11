import { useMemo } from 'react';
import { Dropdown } from '@/components/ui/Dropdown';
import { Button } from '@/components/ui/Button';
import { Menu } from '@/components/ui/Menu';
import { Icon, IconType } from '@/components/ui/Icon';
import { useHover } from '@/hooks/useHover';
import { cn } from '@/lib/utils';

export type ContentTypePickerOption = {
  label: string;
  id: string;
  type: 'option';
  disabled: () => boolean;
  isActive: () => boolean;
  onClick: () => void;
  icon: IconType;
};

export function ContentTypePicker({ options }: { options: ContentTypePickerOption[] }) {
  const activeItem = useMemo(() => {
    return options.find((option) => option.isActive());
  }, [options]);
  const { isHovered, setIsHovered, handleHover, handleUnhover } = useHover();

  const arrowClass = cn('transition-transform duration-300', {
    'rotate-180': isHovered,
  });

  return (
    <Dropdown.Root
      modal={false}
      open={isHovered}
      onOpenChange={setIsHovered}>
      <Dropdown.Trigger asChild>
        <Button
          onMouseOver={handleHover}
          onMouseLeave={handleUnhover}>
          <Icon name={activeItem?.icon || 'Type'} />
          <Icon
            name="ChevronDown"
            className={arrowClass}
          />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content
        sideOffset={10}
        align="start"
        alignOffset={-4}>
        <Menu
          onMouseOver={handleHover}
          onMouseLeave={handleUnhover}>
          {options.map((option) => (
            <Menu.Item
              key={option.id}
              className="flex justify-between items-center gap-4"
              active={option.isActive()}
              onClick={option.onClick}>
              <Icon
                name={option.icon}
                className="w-4.5 h-4.5"
              />
              <span className="text-xs">{option.label}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
