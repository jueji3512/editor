'use client';
import { useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { cn } from '@/lib/utils';

import { Icon } from '../Icon';

import type { MessageItemPropsType, MessageItemIconType } from './index.d';
import { MessageContext } from './MessageContext';

const messageIcons: MessageItemIconType = {
  error: {
    name: 'CircleX',
    className: 'fill-red-500',
  },
  success: {
    name: 'CircleCheck',
    className: 'fill-green-500',
  },
  info: {
    name: 'Info',
    className: 'fill-blue-500',
  },
  warning: {
    name: 'CircleAlert',
    className: 'fill-yellow-500',
  },
};

export const MessageContainer = () => {
  const { messages, removeMessage } = useContext(MessageContext);
  return createPortal(
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[1000] overflow-hidden">
      <TransitionGroup>
        {messages.map((msg) => (
          <CSSTransition
            nodeRef={msg.ref}
            timeout={300}
            key={msg.id}
            classNames={{
              enter: '-translate-y-full opacity-0',
              enterActive: 'translate-y-0 opacity-100 transition-all duration-300',
              exit: 'opacity-60',
              exitActive: 'opacity-0 transition-all duration-300',
            }}
            onExiting={() => {
              const height = msg.ref.current.getBoundingClientRect().height;
              msg.ref.current.style.marginTop = -height + 'px';
            }}>
            <MessageItem
              ref={msg.ref}
              id={msg.id}
              type={msg.type}
              content={msg.content}
              onRemove={removeMessage}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>,
    document.body,
  );
};

export const MessageItem = ({ id, type, content, duration = 3000, onRemove, ref }: MessageItemPropsType) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      onRemove(id);
    }, duration);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [id, duration, onRemove]);
  const messageClasses = cn(
    'w-fit mx-auto px-2.5 py-2 text-xs rounded-lg shadow-md inset-shadow-sm flex justify-between items-center gap-2 bg-white dark:bg-neutral-800',
  );
  const messageIconClasses = cn(
    'size-5 rounded-full stroke-2 text-white dark:text-neutral-800',
    messageIcons[type].className,
  );
  return (
    <div
      ref={ref}
      className="pb-2">
      <div className={messageClasses}>
        <Icon
          name={messageIcons[type].name}
          className={messageIconClasses}
        />
        <span className="break-all">{content}</span>
      </div>
    </div>
  );
};
