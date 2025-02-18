import { useMemo } from 'react';

import { Dropdown } from '@/components/ui/Dropdown';
import { IconType } from '@/components/ui/Icon';

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
  return (
    <Dropdown
      options={options}
      activeItem={activeItem}
    />
  );
}
