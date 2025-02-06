import { Editor, BubbleMenu } from '@tiptap/react';
import { Toggle } from '@/components/ui/Toggle/Toggle';
import { Icon } from '@/components/ui/Icon';
import { useTextmenuCommands } from './hooks/useTextMenuCommands';

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-1 p-1 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black rounded-lg shadow-sm">
      {children}
    </div>
  );
}

export default function TextMenu({ editor }: { editor: Editor }) {
  const { onBold, onItalic, onUnderline, onStrike } = useTextmenuCommands(editor);
  return (
    <>
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ placement: 'top-start' }}>
          <Wrapper>
            <Toggle
              active={editor.isActive('bold')}
              onChange={onBold}>
              <Icon name="Bold" />
            </Toggle>
            <Toggle
              active={editor.isActive('italic')}
              onChange={onItalic}>
              <Icon name="Italic" />
            </Toggle>
            <Toggle
              active={editor.isActive('underline')}
              onChange={onUnderline}>
              <Icon name="Underline" />
            </Toggle>
            <Toggle
              active={editor.isActive('strike')}
              onChange={onStrike}>
              <Icon name="Strikethrough" />
            </Toggle>
          </Wrapper>
        </BubbleMenu>
      )}
    </>
  );
}
