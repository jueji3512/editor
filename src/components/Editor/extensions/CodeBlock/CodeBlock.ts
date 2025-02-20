import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import type { CodeBlockLowlightOptions } from '@tiptap/extension-code-block-lowlight';
import { ReactNodeViewRenderer } from '@tiptap/react';
import { common, createLowlight } from 'lowlight';

import { CodeBlockView } from './components/CodeBlockView';

const lowlight = createLowlight(common);

export type CodeBlockOptions = CodeBlockLowlightOptions;

const CodeBlock = CodeBlockLowlight.extend<CodeBlockOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      lowlight,
    };
  },
  addAttributes() {
    return {
      language: {
        default: 'plaintext',
      },
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(CodeBlockView);
  },
  addKeyboardShortcuts() {
    return {
      Tab: ({ editor }) => {
        if (!editor.isActive('codeBlock')) return false;
        if (editor.state.selection.empty) {
          // 单光标位置插入两个空格
          editor.commands.insertContent('  ');
        } else {
          // TODO: 多行处理
          return false;
        }
        return true;
      },
      'Shift-Tab': ({ editor }) => {
        if (!editor.isActive('codeBlock')) return false;

        // 删除缩进逻辑
        const removeIndent = (line: { from: number; to: number }) => {
          const text = editor.state.doc.textBetween(line.from, line.to, '\n');
          const spaces = text.match(/^ {1,2}/)?.[0] || '';

          if (spaces.length > 0) {
            editor.commands.deleteRange({
              from: line.from,
              to: line.from + spaces.length,
            });
          }
        };

        // 处理选区
        if (editor.state.selection.empty) {
          // 单行处理
          const pos = editor.state.selection.$from;
          const line = {
            from: pos.start(),
            to: pos.end(),
          };
          removeIndent(line);
        } else {
          // TODO: 多行处理
          return false;
        }
        return true;
      },
    };
  },
});

export { CodeBlock, lowlight };
