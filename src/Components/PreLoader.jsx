import { useEffect, useState } from 'react';
import Progress from './Progress';

const PreLoader = () => {
  const [isDone, setIsDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
        setWidth(100);
        setIsDone(true);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div
      id="preloader"
      className={` ${isDone ? 'isdone' : ''}`}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Progress progress={progress} width={width} />
    </div>
  );
};

export default PreLoader;
