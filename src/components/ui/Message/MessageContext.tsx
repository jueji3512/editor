'use client';
import { createContext, createRef, useCallback, useMemo, useState } from 'react';

import { MessageContextType, MessageItemType } from './index.d';
import { MessageContainer } from './Message';

const MAX_MESSAGES = 5;

export const MessageContext = createContext<MessageContextType>({
  messages: [],
  addMessage: () => {},
  removeMessage: () => {},
});
export const MessageProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<MessageItemType[]>([]);
  const addMessage = useCallback((msg: Omit<MessageItemType, 'id'>) => {
    const id = Date.now().toString();
    const ref = createRef();
    setMessages((prev) => [...prev.slice(-MAX_MESSAGES + 1), { id, ref, ...msg }]);
  }, []);
  const removeMessage = useCallback((id: MessageItemType['id']) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  }, []);
  const contextValue = useMemo(
    () => ({
      messages,
      addMessage,
      removeMessage,
    }),
    [messages, addMessage, removeMessage],
  );
  return (
    <MessageContext.Provider value={contextValue}>
      {children}
      <MessageContainer />
    </MessageContext.Provider>
  );
};
