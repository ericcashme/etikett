import { useState, useEffect, useRef } from 'react';

const useWindowSize = () => {
  const timeout = useRef(null);

  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [timeout]);

  return windowSize;
};

export default useWindowSize;
