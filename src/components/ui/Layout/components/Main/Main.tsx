import { cn } from '@/lib/utils';

const MainRoot = ({ children }: { children: React.ReactNode }) => {
  const mainClasses = cn('flex-1');
  return <div className={mainClasses}>{children}</div>;
};

const MainContent = ({ children }: { children: React.ReactNode }) => {
  const mainClasses = cn('flex-1');
  return <div className={mainClasses}>{children}</div>;
};

const MainHeader = ({ children }: { children: React.ReactNode }) => {
  const mainClasses = cn('px-3 py-2');
  return <div className={mainClasses}>{children}</div>;
};

export { MainRoot as Root, MainContent as Content, MainHeader as Header };
