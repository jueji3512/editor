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
});

export { CodeBlock, lowlight };
