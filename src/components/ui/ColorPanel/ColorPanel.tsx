import { HTMLProps } from 'react';

import { Button } from '@/components/ui/Button';
import { Surface } from '@/components/ui/Surface';

type ColorPanelProps = HTMLProps<HTMLDivElement>;

export const ColorPanel = ({ children, ...props }: ColorPanelProps) => {
  return (
    <div
      className="flex"
      {...props}
    >
      <Surface className="flex flex-col gap-3 p-2">{children}</Surface>
    </div>
  );
};

const ColorPanelButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button className="flex items-center justify-center bg-neutral-100 text-xs hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700">
      {children}
    </Button>
  );
};

export { ColorPanel as Panel, ColorPanelButton as Button };
