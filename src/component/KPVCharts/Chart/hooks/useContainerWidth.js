/* eslint-disable max-len */
import React, { useEffect } from 'react';

const useContainerWidth = (index, setContainerWidth, showSideNav, width, showlegends) => {
  useEffect(() => {
    // due to the animation of sideNav having 300ms
    const timeout = setTimeout(() => {
      const box = document.getElementById(`chart${index}`);
      // for padding
      const width = box?.offsetWidth - 10;
      setContainerWidth(width);
      // console.log('width', width, box);
    }, 300);
    return () => clearTimeout(timeout);
  }, [showSideNav, width, showlegends]);
};

export default useContainerWidth;
