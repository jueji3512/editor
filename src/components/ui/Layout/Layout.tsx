import { cn } from '@/lib/utils';

import { SidebarProvider } from './components/Sidebar/Sidebar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const layoutClasses = cn('flex h-screen');
  return (
    <SidebarProvider>
      <div className={layoutClasses}>{children}</div>
    </SidebarProvider>
  );
};

export * as Sidebar from './components/Sidebar';
export * as Main from './components/Main';
