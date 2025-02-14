'use client';
import { ReactElement, useCallback, useRef } from 'react';
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';
import type { NodeViewProps } from '@tiptap/react';
import { Select } from '@/components/ui/Select';
import { cn } from '@/lib/utils';
import { lowlight } from '../CodeBlock';
import { useHover } from '@/hooks/useHover';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import type { Node } from 'prosemirror-model';

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
    <div className={cn('absolute flex justify-between w-full px-2 pt-2 gap-2', className)}>
      <Select
        options={languages.current.map((language) => ({
          label: language,
          value: language,
        }))}
        value={language}
        className="gap-1 w-auto h-5 pl-2 pr-1 text-xs rounded-md"
        onChange={handleLanguageChange}
      />
      <Button
        border
        onClick={handleCopy}>
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
    'px-4 pt-[34px] pb-[22px] border border-neutral-200 rounded-lg bg-stone-100 text-black dark:border-neutral-800 dark:bg-neutral-900 dark:text-white selection:bg-stone-200 dark:selection:bg-stone-700',
    `language-${node.attrs.language}`,
  );
  return (
    <NodeViewWrapper
      className="relative group"
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}>
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
