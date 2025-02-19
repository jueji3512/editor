import { Editor, useEditorState } from '@tiptap/react';

import { ColorValue } from '@/components/ui/ColorPanel/components/ColorGroup';
import { colors } from '@/components/ui/ColorPanel/constant';

export const useTextMenuColors = (editor: Editor) => {
  const getColorId = (value: string) => {
    return colors.find((color) => value === `oklch(${color.value?.l} ${color.value?.c} ${color.value?.h})`)?.id ?? 1;
  };
  return useEditorState({
    editor,
    selector: (ctx) => {
      return {
        textColorId: getColorId(ctx.editor.getAttributes('textStyle').color),
        highlightColorId: getColorId(ctx.editor.getAttributes('highlight').color),
        setColor: (color: ColorValue) => {
          if (color) {
            ctx.editor.chain().focus().setColor(`oklch(${color?.l} ${color?.c} ${color?.h})`).run();
          } else {
            ctx.editor.chain().focus().unsetColor().run();
          }
        },
        setHighlightColor: (color: ColorValue) => {
          if (color) {
            ctx.editor
              .chain()
              .focus()
              .setHighlight({ color: `oklch(${color?.l} ${color?.c} ${color?.h})` })
              .run();
          } else {
            ctx.editor.chain().focus().unsetHighlight().run();
          }
        },
      };
    },
  });
};
