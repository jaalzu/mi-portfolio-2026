"use client";

import { useState, useEffect } from "react";

interface DecryptTextProps {
  originalText: string;
  hoverText: string;
  className?: string;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export default function DecryptText({ originalText, hoverText, className = "" }: DecryptTextProps) {
  const [displayText, setDisplayText] = useState(originalText);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(originalText);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        hoverText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return hoverText[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= hoverText.length) {
        clearInterval(interval);
      }

      iteration += 1;
    }, 18);

    return () => clearInterval(interval);
  }, [isHovered, hoverText, originalText]);

  return (
    <>
      <style>{`
        .decrypt-text {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
            cursor: url('/cursor/normal.cur'), pointer; 

        }

        .flag {
          width: 18px;
          height: auto;
          display: inline-block;
          transition: opacity 0.3s ease;
        }

        .decrypt-text.hovered .flag {
          opacity: 0;
        }
      `}</style>

      <span 
        className={`decrypt-text ${isHovered ? 'hovered' : ''} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {displayText}
        {!isHovered && <img src="/ar.svg" alt="Argentina flag" className="flag" />}
      </span>
    </>
  );
}