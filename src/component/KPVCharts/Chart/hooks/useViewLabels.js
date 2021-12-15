/* eslint-disable no-undef */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useViewLabels = (setViewXLabels, compressedView) => {
  const location = useLocation();
  useEffect(() => {
    const locArr = location.pathname.split('/');
    const locName = locArr[locArr.length - 1];
    if (!(locName === 'add-pane' || locName === 'edit-pane')) {
      setViewXLabels(!compressedView);
    }
  }, [location, compressedView]);
};

export default useViewLabels;
