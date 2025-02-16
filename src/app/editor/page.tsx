import Editor from '@/components/Editor/Editor';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { Main, Sidebar } from '@/components/ui/Layout';
export default function EditorPage() {
  return (
    <div className="relative flex flex-col h-screen">
      <Main.Header>
        <Sidebar.Trigger
          iconClassName="w-5 h-5"
          className="p-1.5"
        />
      </Main.Header>
      <Main.Content>
        <div className="grid grid-cols-[minmax(96px,1fr)_minmax(auto,768px)_minmax(96px,1fr)] h-full">
          <Editor />
        </div>
      </Main.Content>
      <ThemeToggle className="absolute p-2 bottom-4 right-4 bg-neutral-100 dark:bg-neutral-800" />
    </div>
  );
}
