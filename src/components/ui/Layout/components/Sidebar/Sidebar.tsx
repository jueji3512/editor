'use client';

import { createContext, useState, useContext, useCallback } from 'react';

import { Button, ButtonProps } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

export type SidebarProps = {
  children: React.ReactNode;
};

export const SidebarContext = createContext<{
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}>({
  isCollapsed: false,
  setIsCollapsed: () => {},
});

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleSetIsCollapsed = useCallback((value: boolean) => {
    setIsCollapsed(value);
  }, []);
  return (
    <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed: handleSetIsCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
};

const SidebarRoot = ({ children }: { children: React.ReactNode }) => {
  const { isCollapsed } = useContext(SidebarContext);
  const sidebarClasses = cn(
    'w-64 transition-width duration-300 bg-neutral-100 dark:bg-neutral-800 overflow-hidden',
    isCollapsed && 'w-0',
  );
  return <aside className={sidebarClasses}>{children}</aside>;
};

const SidebarHeader = ({ children }: { children: React.ReactNode }) => {
  const headerClasses = cn('p-2');
  return <div className={headerClasses}>{children}</div>;
};

const SidebarContent = ({ children }: { children: React.ReactNode }) => {
  const contentClasses = cn('p-2');
  return <div className={contentClasses}>{children}</div>;
};

const SidebarFooter = ({ children }: { children: React.ReactNode }) => {
  const footerClasses = cn('p-2');
  return <div className={footerClasses}>{children}</div>;
};

type SidebarTriggerProps = ButtonProps & {
  iconClassName?: string;
};

const SidebarTrigger = ({ iconClassName, ...props }: SidebarTriggerProps) => {
  const { isCollapsed, setIsCollapsed } = useContext(SidebarContext);
  return (
    <Button
      {...props}
      onClick={() => setIsCollapsed(!isCollapsed)}>
      <Icon
        name={isCollapsed ? 'PanelLeftOpen' : 'PanelLeftClose'}
        className={iconClassName}
      />
    </Button>
  );
};

export {
  SidebarRoot as Root,
  SidebarHeader as Header,
  SidebarContent as Content,
  SidebarFooter as Footer,
  SidebarTrigger as Trigger,
};
