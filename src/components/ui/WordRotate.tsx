// WordRotate.tsx - Versión corregida SIN posición absoluta
import { useState, useEffect } from 'react';

interface WordRotateProps {
  words: string[];
  delay?: number;
  className?: string;
}

const WordRotate = ({ words, delay = 2000, className = '' }: WordRotateProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayText, setDisplayText] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % words.length;
          setDisplayText(words[nextIndex]);
          return nextIndex;
        });
        setIsAnimating(false);
      }, 300);
      
    }, delay);

    return () => clearInterval(interval);
  }, [words, delay]);

  return (
    <span 
      style={{
        display: 'inline-block',
        color: 'var(--color-primary)',
        fontWeight: 'bold',
        verticalAlign: 'top',
        minWidth: '90px',
        height: '1.2em',
        textAlign: 'center',
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? 'translateY(10px)' : 'translateY(0)',
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
      }}
      className={className}
    >
      {displayText}
    </span>
  );
};

export default WordRotate;