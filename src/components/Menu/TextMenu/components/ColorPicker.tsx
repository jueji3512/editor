import { Button } from '@/components/ui/Button';
import { ColorGroup, ColorPanel, ColorValue } from '@/components/ui/ColorPanel';
import { Icon } from '@/components/ui/Icon';
import { Popover } from '@/components/ui/Popover';
import { useHover } from '@/hooks/useHover';
import { cn } from '@/lib/utils';

type ColorPickerOptions = {
  textColorId: number;
  highlightColorId: number;
  setColor: (color: ColorValue) => void;
  setHighlightColor: (color: ColorValue) => void;
};
type ColorContentProps = {
  options: ColorPickerOptions;
  handleHover: () => void;
  handleUnhover: () => void;
};

const ColorPanelContent = ({ options, handleHover, handleUnhover }: ColorContentProps) => {
  const { textColorId, highlightColorId, setColor, setHighlightColor } = options;
  return (
    <ColorPanel
      onPointerDown={(e) => e.preventDefault()}
      onMouseOver={handleHover}
      onMouseLeave={handleUnhover}>
      <ColorGroup
        title="文字颜色"
        activeId={textColorId}
        onClick={setColor}
      />
      <ColorGroup
        title="背景颜色"
        activeId={highlightColorId}
        onClick={setHighlightColor}
      />
    </ColorPanel>
  );
};

type ColorPickerProps = {
  options: ColorPickerOptions;
};

export const ColorPicker = ({ options }: ColorPickerProps) => {
  const { isHovered, setIsHovered, handleHover, handleUnhover } = useHover(300);
  const arrowClass = cn('w-4 h-4 transition-transform duration-300', isHovered ? 'rotate-180' : '');
  return (
    <Popover
      open={isHovered}
      onOpenChange={setIsHovered}
      content={
        <ColorPanelContent
          handleHover={handleHover}
          handleUnhover={handleUnhover}
          options={options}
        />
      }>
      <Button
        onMouseOver={handleHover}
        onMouseLeave={handleUnhover}>
        <Icon name="Highlighter" />
        <Icon
          name="ChevronDown"
          className={arrowClass}
        />
      </Button>
    </Popover>
  );
};
