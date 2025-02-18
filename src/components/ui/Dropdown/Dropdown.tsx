import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { useHover } from '@/hooks/useHover';
import { cn } from '@/lib/utils';

import { Button } from '../Button';
import { Icon, IconType } from '../Icon';
import { Surface } from '../Surface';

type DropdownOption = {
  id: string;
  label: string;
  icon: IconType;
  isActive: () => boolean;
  onClick: () => void;
};

export const Dropdown = ({
  options,
  activeItem,
}: {
  options: DropdownOption[];
  activeItem: DropdownOption | undefined;
}) => {
  const { isHovered, setIsHovered, handleHover, handleUnhover } = useHover(300);
  const arrowClass = cn('transition-transform duration-300', {
    'rotate-180': isHovered,
  });
  const dropdownItemClasses = (active: boolean) =>
    cn(
      'flex items-center gap-2 p-2 py-1 outline-none cursor-pointer rounded-sm',
      active ? 'bg-neutral-100 dark:bg-neutral-800' : '',
      'data-[highlighted]:bg-neutral-100 data-[highlighted]:dark:bg-neutral-800',
    );
  return (
    <DropdownMenu.Root
      modal={false}
      open={isHovered}
      onOpenChange={setIsHovered}>
      <DropdownMenu.Trigger asChild>
        <Button
          className="gap-1 outline-none"
          onMouseOver={handleHover}
          onMouseLeave={handleUnhover}>
          <Icon name={activeItem?.icon as IconType} />
          <Icon
            name="ChevronDown"
            className={arrowClass}
          />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        sideOffset={10}
        align="start"
        alignOffset={-4}
        loop
        asChild>
        <Surface
          className="flex flex-col p-1 gap-0.5"
          onMouseOver={handleHover}
          onMouseLeave={handleUnhover}>
          {options.map((option) => (
            <DropdownMenu.Item
              key={option.id}
              className={dropdownItemClasses(activeItem?.id === option.id)}
              onClick={option.onClick}>
              <Icon
                name={option.icon}
                className="w-4.5 h-4.5"
              />
              <span className="text-xs">{option.label}</span>
            </DropdownMenu.Item>
          ))}
        </Surface>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
