/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

const WordFlicker = () => {
  const words = [
    'Crave Cart'
  ];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const [speed] = useState(70);
  const [skipDelay] = useState(15);
  const [part, setPart] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[currentWordIndex].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setCurrentWordIndex((prevIndex) =>
            prevIndex + 1 >= words.length ? 0 : prevIndex + 1
          );
          setOffset(0);
        }
      }
      const newPart = words[currentWordIndex].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          setOffset((prevOffset) => prevOffset + 1);
        } else {
          setOffset((prevOffset) => prevOffset - 1);
        }
      }
      setPart(newPart);
    }, speed);

    return () => clearInterval(interval);
  }, [
    currentWordIndex,
    offset,
    forwards,
    skipCount,
    skipDelay,
    speed,
    words
  ]);

  return <span className="word text-2xl lg:text-7xl sm:text-4xl font-bold z-10 py-5">{part}</span>;
};

export default WordFlicker;
