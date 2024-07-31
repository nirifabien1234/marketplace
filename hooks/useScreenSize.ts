import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [width, setWidth] = useState<number>(window?.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window?.innerWidth);

    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return { width };
};

export {useScreenSize};
