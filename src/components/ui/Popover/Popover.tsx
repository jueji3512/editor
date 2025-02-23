import { Root, Trigger, Portal, Content } from '@radix-ui/react-popover';

export const Popover = ({
  children,
  content,
  open,
  onOpenChange,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Root
      open={open}
      onOpenChange={onOpenChange}
    >
      <Trigger asChild>{children}</Trigger>
      <Portal>
        <Content
          asChild
          sideOffset={10}
          onCloseAutoFocus={(e) => e.preventDefault()}
          onInteractOutside={(e) => e.preventDefault()}
          onPointerDownOutside={(e) => e.preventDefault()}
          onFocusOutside={(e) => e.preventDefault()}
        >
          {content}
        </Content>
      </Portal>
    </Root>
  );
};
