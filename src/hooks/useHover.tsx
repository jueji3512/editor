import { useState } from 'react';

export function useHover(delay: number = 200) {
  const [isHovered, setIsHovered] = useState(false);
  let timer: NodeJS.Timeout | null = null;
  function handleHover() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    setIsHovered(true);
  }
  function handleUnhover() {
    timer = setTimeout(() => setIsHovered(false), delay);
  }
  return { isHovered, setIsHovered, handleHover, handleUnhover };
}
