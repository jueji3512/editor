import type { IconType } from '../Icon';

export type MessageType = 'warning' | 'error' | 'success' | 'info';
export type MessageContextType = {
  messages: MessageItemType[];
  addMessage: (msg: Omit<MessageItemType, 'id'>) => void;
  removeMessage: (id: MessageItemType['id']) => void;
};
export type MessageItemType = {
  id: string;
  type: MessageType;
  content: string;
  duration?: number;
  ref?: React.RefObject;
};
type MessageItemIconConfigType = {
  name: IconType;
  className: string;
};
export type MessageItemIconType = {
  [key in MessageType]: MessageItemIconConfigType;
};
export type MessageItemPropsType = MessageItemType & {
  onRemove: MessageContextType['removeMessage'];
  ref?: React.RefObject;
};
