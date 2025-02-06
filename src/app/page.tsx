import Editor from '@/components/Editor/Editor';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <Editor />
    </div>
  );
}
