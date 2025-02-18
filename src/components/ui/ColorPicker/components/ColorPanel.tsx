import { Button } from '@/components/ui/Button';
import { Surface } from '@/components/ui/Surface';

export const ColorPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Surface className="flex flex-col gap-3 p-2">{children}</Surface>
    </div>
  );
};

const ColorPanelButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button className="flex items-center justify-center text-xs bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700">
      {children}
    </Button>
  );
};

export { ColorPanel as Panel, ColorPanelButton as Button };
