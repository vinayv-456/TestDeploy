import { useLocation, useParams } from 'react-router-dom';

export const useBasePath = () => {
  const location = useLocation();
  const params = useParams();
  const totalLen = location.pathname.split('/').length;
  const noOfParams = Object.values(params).length;
  const finalArray = location.pathname.split('/').slice(0, totalLen - noOfParams);
  let finalPath = '';
  finalArray.forEach((ele) => {
    if (ele) finalPath += `/${ele}`;
  });
  return finalPath;
};
