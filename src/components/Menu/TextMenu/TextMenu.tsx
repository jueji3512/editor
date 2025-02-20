import { Editor, BubbleMenu } from '@tiptap/react';

import { Icon } from '@/components/ui/Icon';
import { Surface } from '@/components/ui/Surface';
import { Toggle } from '@/components/ui/Toggle';

import { ColorPicker } from './components/ColorPicker';
import { ContentTypePicker } from './components/ContentTypePicker';
import { useTextMenuColors } from './hooks/useTextMenuColors';
import { useTextmenuCommands } from './hooks/useTextMenuCommands';
import { useTextMenuContentTypes } from './hooks/useTextMenuContentTypes';
function Wrapper({ children }: { children: React.ReactNode }) {
  return <Surface className="flex items-center gap-0.5 p-1">{children}</Surface>;
}

export default function TextMenu({ editor }: { editor: Editor }) {
  const commands = useTextmenuCommands(editor);
  const options = useTextMenuContentTypes(editor);
  const colorOptions = useTextMenuColors(editor);
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
              onChange={commands.onBold}>
              <Icon name="Bold" />
            </Toggle>
            <Toggle
              active={editor.isActive('italic')}
              onChange={commands.onItalic}>
              <Icon name="Italic" />
            </Toggle>
            <Toggle
              active={editor.isActive('underline')}
              onChange={commands.onUnderline}>
              <Icon name="Underline" />
            </Toggle>
            <Toggle
              active={editor.isActive('strike')}
              onChange={commands.onStrike}>
              <Icon name="Strikethrough" />
            </Toggle>
            <Toggle
              active={editor.isActive('code')}
              onChange={commands.onCode}>
              <Icon name="CodeXml" />
            </Toggle>
            <ColorPicker options={colorOptions} />
          </Wrapper>
        </BubbleMenu>
      )}
    </>
  );
}
