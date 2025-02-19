import { useCallback, useRef, useState } from 'react';

export function useHover(delay: number = 200) {
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  function handleHover() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsHovered(true);
  }
  const handleUnhover = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setIsHovered(false);
    }, delay);
  }, [delay]);
  return { isHovered, setIsHovered, handleHover, handleUnhover };
}
