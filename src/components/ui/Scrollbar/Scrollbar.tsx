import * as ScrollArea from '@radix-ui/react-scroll-area';

import { cn } from '@/lib/utils';
export const Scrollbar = ({ children }: { children: React.ReactNode }) => {
  const scrollAreaClasses = cn('flex-1');
  const scrollbarClasses = cn('flex -mr-0.5 p-0.5 touch-none select-none');
  const scrollbarVerticalClasses = cn(scrollbarClasses, 'w-[10px]');
  const scrollbarHorizontalClasses = cn(scrollbarClasses, 'flex-col h-[10px]');
  const scrollbarThumbClasses = cn('relative flex-1 bg-neutral-400 dark:bg-neutral-600 rounded-full');
  const scrollbarThumbBeforeClasses = cn(
    scrollbarThumbClasses,
    'before:content-[""] before:absolute before:h-full before:w-full before:min-h-2 before:min-w-2 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2',
  );
  return (
    <ScrollArea.Root
      className={scrollAreaClasses}
      scrollHideDelay={500}
    >
      <ScrollArea.Viewport className="h-full w-full">{children}</ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        orientation="vertical"
        className={scrollbarVerticalClasses}
      >
        <ScrollArea.Thumb className={scrollbarThumbBeforeClasses} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        orientation="horizontal"
        className={scrollbarHorizontalClasses}
      >
        <ScrollArea.Thumb className={scrollbarThumbClasses} />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};
