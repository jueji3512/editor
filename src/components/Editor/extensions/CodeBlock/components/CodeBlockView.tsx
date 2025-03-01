'use client';

import { ReactElement, useCallback, useRef } from 'react';

import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';
import type { NodeViewProps } from '@tiptap/react';
import type { Node } from 'prosemirror-model';

import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Select } from '@/components/ui/Select';
import { useHover } from '@/hooks/useHover';
import { cn } from '@/lib/utils';

import { lowlight } from '../CodeBlock';

export type CodeBlockViewToolbarProps = {
  node: Node;
  className?: string;
  updateAttributes: (attributes: Record<string, any>) => void;
};

export const CodeBlockViewToolbar = ({ node, className, updateAttributes }: CodeBlockViewToolbarProps) => {
  const languages = useRef(lowlight.listLanguages());
  const language = node.attrs.language || 'plaintext';
  const handleLanguageChange = useCallback(
    (value: string) => {
      updateAttributes({ language: value });
    },
    [updateAttributes],
  );
  const handleCopy = useCallback(() => {
    const code = node.textContent || '';
    if (code) {
      navigator.clipboard.writeText(code);
    }
  }, [node]);
  return (
    <div
      contentEditable={false}
      className={cn('absolute flex w-full justify-between gap-2 px-2 pt-2 select-none', className)}
    >
      <Select
        options={languages.current.map((language) => ({
          label: language,
          value: language,
        }))}
        value={language}
        className="h-5 w-auto gap-1 rounded-md pr-1 pl-2 text-xs"
        onChange={handleLanguageChange}
      />
      <Button
        border
        onClick={handleCopy}
      >
        <Icon name="Copy" />
      </Button>
    </div>
  );
};

export const CodeBlockView = ({ node, updateAttributes }: NodeViewProps): ReactElement => {
  const { isHovered, handleHover, handleUnhover } = useHover();
  const toolbarClasses = cn(
    'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
    isHovered ? 'opacity-100' : 'opacity-0',
  );
  const preClasses = cn(
    'px-4 pt-8 pb-[22px] border border-neutral-200 rounded-lg bg-stone-100 text-black dark:border-neutral-700 dark:bg-neutral-800 dark:text-white selection:bg-blue-200 dark:selection:bg-cyan-900',
    `language-${node.attrs.language}`,
  );
  return (
    <NodeViewWrapper
      className="group relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
    >
      <CodeBlockViewToolbar
        node={node}
        className={toolbarClasses}
        updateAttributes={updateAttributes}
      />
      <pre className={preClasses}>
        <NodeViewContent as="code" />
      </pre>
    </NodeViewWrapper>
  );
};
