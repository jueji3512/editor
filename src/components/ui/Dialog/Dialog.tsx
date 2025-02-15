import { Root, Portal, Overlay, Content, Title, Description } from '@radix-ui/react-dialog';
import { Surface } from '../Surface';
import { cn } from '@/lib/utils';

export type DialogProps = {
  open: boolean;
  title?: string;
  description?: string;
  overlay?: boolean;
  overlayClass?: string;
  className?: string;
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
};

export const Dialog = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  overlay,
  overlayClass,
  className,
}: DialogProps) => {
  const dialogClasses = cn(
    'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 max-w-md animation-show-dialog',
    className,
  );
  const overlayClasses = cn('fixed inset-0 bg-black/50', overlayClass);
  return (
    <Root
      open={open}
      onOpenChange={onOpenChange}>
      <Portal>
        {overlay && <Overlay className={overlayClasses} />}
        <Content asChild>
          <Surface className={dialogClasses}>
            <Title>{title}</Title>
            <Description>{description}</Description>
            {children}
          </Surface>
        </Content>
      </Portal>
    </Root>
  );
};
