
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TerminalTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TerminalText = ({ text, delay = 50, className, onComplete }: TerminalTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <div className={cn("terminal-text mb-1", className)}>
      {displayedText}
      {!isComplete && <span className="opacity-100 animate-blink">_</span>}
    </div>
  );
};

export default TerminalText;
