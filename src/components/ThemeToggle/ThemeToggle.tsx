'use client';
import { useEffect, useState } from 'react';

import { Toggle } from '@/components/ui/Toggle';
import { cn } from '@/lib/utils';

import { Icon } from '../ui/Icon';

type Theme = 'light' | 'dark';

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('light');
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme as Theme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleClasses = cn('rounded-full', className);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
    setTheme(newTheme);
  };

  return (
    <Toggle
      className={toggleClasses}
      onChange={toggleTheme}>
      <Icon name={theme === 'dark' ? 'Moon' : 'Sun'} />
    </Toggle>
  );
}
