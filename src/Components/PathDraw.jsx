import React, { useRef, useEffect, useState } from 'react';

const PathDraw = ({
  svgPath,
  height = 150,
  strokeColor = "#3b82f6",
  strokeWidth = 2
}) => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // initialize dash array/offset
    const length = path.getTotalLength();
    setPathLength(length);
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // update on scroll
    const handleScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // progress from 0 (entering) to 1 (exiting)
      const progress = Math.min(
        Math.max((windowH - rect.top) / (windowH + rect.height), 0),
        1
      );
      path.style.strokeDashoffset = length * (1 - progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: `${height}px`, overflow: 'visible' }}
    >
      <svg width="100%" height={height}>
        <path
          ref={pathRef}
          d={svgPath}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          className="path-draw"
        />
      </svg>
    </div>
  );
};

export default PathDraw;
