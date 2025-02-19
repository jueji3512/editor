import { Color } from '@tiptap/extension-color';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';

import { CodeBlock } from './CodeBlock';
import { HighlightExtension } from './Highlight';
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
  TextStyle,
  Color,
  HighlightExtension,
];

export default ExtensionKit;
