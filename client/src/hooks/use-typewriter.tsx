import { useState, useEffect } from 'react';

export function useTypewriter(text: string, delay: number = 4000) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeText, 100);
      } else {
        setIsTyping(false);
        timeoutId = setTimeout(() => {
          setIsTyping(true);
          currentIndex = 0;
          setDisplayText('');
          typeText();
        }, delay);
      }
    };

    typeText();

    return () => clearTimeout(timeoutId);
  }, [text, delay]);

  return displayText;
}
