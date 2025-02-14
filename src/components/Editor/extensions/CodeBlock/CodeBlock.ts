import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { ReactNodeViewRenderer } from '@tiptap/react';
import type { CodeBlockLowlightOptions } from '@tiptap/extension-code-block-lowlight';
import { CodeBlockView } from './components/CodeBlockView';
import { common, createLowlight } from 'lowlight';

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
});

export { CodeBlock, lowlight };
