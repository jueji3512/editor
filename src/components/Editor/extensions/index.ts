import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import { CodeBlock } from './CodeBlock';

export const ExtensionKit = () => [
  Underline,
  TaskList,
  TaskItem,
  CodeBlock,
  StarterKit.configure({
    codeBlock: false,
  }),
];

export default ExtensionKit;
