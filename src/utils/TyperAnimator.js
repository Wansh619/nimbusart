import React, { useState, useEffect } from 'react';

function TypingAnimator({ text, speed =  0.5}) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    function typeNextChar() {
      if (index < text.length-1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        setTimeout(typeNextChar, speed);
      }
    }

    typeNextChar();

    // Clean up in case the component is unmounted mid-typing
    return () => {
      index = text.length;
    };
  }, [text, speed]);

  return <p>{displayedText}</p>;
}


export default TypingAnimator;