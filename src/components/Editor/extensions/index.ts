import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';

import { CodeBlock } from './CodeBlock';
import { KeyboardShortcuts } from './KeyboardShortcuts';

export const ExtensionKit = () => [
  Underline,
  TaskList,
  TaskItem,
  CodeBlock,
  KeyboardShortcuts,
  StarterKit.configure({
    codeBlock: false,
  }),
];

export default ExtensionKit;
