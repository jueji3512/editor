import { Editor, BubbleMenu } from '@tiptap/react';

import { Icon } from '@/components/ui/Icon';
import { Surface } from '@/components/ui/Surface';
import { Toggle } from '@/components/ui/Toggle';

import { ContentTypePicker } from './components/ContentTypePicker';
import { useTextmenuCommands } from './hooks/useTextMenuCommands';
import { useTextMenuContentTypes } from './hooks/useTextMenuContentTypes';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <Surface className="flex items-center gap-0.5 p-1">{children}</Surface>;
}

export default function TextMenu({ editor }: { editor: Editor }) {
  const { onBold, onItalic, onUnderline, onStrike } = useTextmenuCommands(editor);
  const options = useTextMenuContentTypes(editor);
  return (
    <>
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ placement: 'top-start' }}>
          <Wrapper>
            <ContentTypePicker options={options} />
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
