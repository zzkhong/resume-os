import { useState, useEffect } from "react";

const useTypingEffect = (text: string, typingSpeed: number = 20) => {
  const [typedText, setTypedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    setTypedText(text[index]);

    const typingInterval = setInterval(() => {
      index++;

      if (index < text.length) {
        setTypedText((prev) => prev + text[index]);
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); // Clean up on component unmount or when text changes
  }, [text, typingSpeed]);

  return typedText;
};

export default useTypingEffect;
