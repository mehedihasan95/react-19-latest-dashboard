import { memo, useCallback, useEffect, useRef, useState } from "react";

interface TypewriterProps {
  word: string[];
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  style?: React.CSSProperties;
  cursorChar?: string;
  onComplete?: () => void;
  loop?: boolean;
  cursorStyle?: React.CSSProperties;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  word,
  speed = 100,
  delay = 1000,
  showCursor = true,
  style,
  cursorChar = "|",
  onComplete,
  loop = true,
  cursorStyle,
  className,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const moveToNextWord = useCallback(() => {
    if (textIndex === word.length - 1 && !loop) {
      setIsComplete(true);
      onComplete?.();
      return;
    }
    setDisplayedText("");
    setCharIndex(0);
    setTextIndex((prev) => (prev + 1) % word.length);
    setIsTyping(true);
  }, [textIndex, word.length, loop, onComplete]);

  useEffect(() => {
    if (isComplete) return;

    const currentWord = word[textIndex];

    const scheduleNextStep = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      if (isTyping) {
        if (charIndex < currentWord.length) {
          timeoutRef.current = setTimeout(() => {
            setDisplayedText((prev) => prev + currentWord[charIndex]);
            setCharIndex((prev) => prev + 1);
          }, speed);
        } else {
          timeoutRef.current = setTimeout(() => setIsTyping(false), delay);
        }
      } else {
        if (charIndex > 0) {
          timeoutRef.current = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
          }, speed);
        } else {
          timeoutRef.current = setTimeout(moveToNextWord, delay);
        }
      }
    };

    scheduleNextStep();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    charIndex,
    textIndex,
    isTyping,
    isComplete,
    word,
    speed,
    delay,
    moveToNextWord,
  ]);

  // Cursor Blinking Effect
  useEffect(() => {
    if (!showCursor) return;
    cursorIntervalRef.current = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => {
      if (cursorIntervalRef.current) clearInterval(cursorIntervalRef.current);
    };
  }, [showCursor]);

  return (
    <span style={{ ...style, userSelect: "none" }} className={className}>
      {displayedText}
      {showCursor && (
        <span
          style={{
            visibility: cursorVisible ? "visible" : "hidden",
            ...cursorStyle,
          }}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
};

export default memo(Typewriter);
