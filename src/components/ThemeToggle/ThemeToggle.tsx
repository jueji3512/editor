'use client';
import { Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Toggle } from '@/components/ui/Toggle';

type Theme = 'light' | 'dark';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme as Theme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
    setTheme(newTheme);
  };

  return (
    <Toggle
      circle
      onChange={toggleTheme}>
      <Sun />
    </Toggle>
  );
}
