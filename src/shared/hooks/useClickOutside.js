/* eslint-disable no-undef */
import { useEffect } from 'react';

const useClickOutside = (ref, handler, secondRef = false) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;

      if (secondRef) {
        if (secondRef.current.contains(event.target)) return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
