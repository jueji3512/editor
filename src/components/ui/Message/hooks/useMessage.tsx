import { useMemo, useContext } from 'react';

import { MessageContext } from '../MessageContext';

export const useMessage = () => {
  const { addMessage } = useContext(MessageContext);
  return useMemo(
    () => ({
      success: (content: string, duration?: number) => {
        addMessage({ type: 'success', content, duration });
      },
      error: (content: string, duration?: number) => {
        addMessage({ type: 'error', content, duration });
      },
      info: (content: string, duration?: number) => {
        addMessage({ type: 'info', content, duration });
      },
      warning: (content: string, duration?: number) => {
        addMessage({ type: 'warning', content, duration });
      },
    }),
    [addMessage],
  );
};
