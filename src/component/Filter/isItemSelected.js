/* eslint-disable prefer-template */
/* eslint-disable max-len */
export const isParentSelected = (innerItem, groupTitle, cumulativeTags) => {
  let cumulativeCheck = -1;
  if (cumulativeTags[groupTitle]) {
    cumulativeCheck = Object.keys(cumulativeTags[groupTitle]).findIndex(
      (pathNo) => cumulativeTags[groupTitle][pathNo][0] && cumulativeTags[groupTitle][pathNo][0].id === innerItem.id
    );
  }
  return cumulativeCheck > -1;
};

export const isChildReferencePresent = (cumulativeTags, cummSelectedObj, groupTitle, innerItem, index) => {
  let res = -1;
  // console.log('innerItem-innerItem', innerItem);
  try {
    if (cumulativeTags[groupTitle]) {
      Object.keys(cumulativeTags[groupTitle]).some((pathNo) => {
        if (
          cummSelectedObj[pathNo][cumulativeTags[groupTitle][pathNo][index]?.id]?.values.find(
            (e) => '_' + e.id === innerItem.id
          ) &&
          // cumulativeTags[groupTitle][pathNo][index]?.values.find((e) => e.id === innerItem.id) &&
          cumulativeTags[groupTitle][pathNo][index + 1]
        ) {
          res = pathNo;
          return true;
        }
        return false;
      });
    }
  } catch {
    return -1;
  }
  return res;
};

export const getPathNo = (cumulativeTags, groupTitle, innerItem, index) => {
  let res = -1;
  Object.keys(cumulativeTags[groupTitle]).some((pathNo) => {
    if (cumulativeTags[groupTitle][pathNo][index + 1]?.id === innerItem.id) {
      res = pathNo;
      return true;
    }
    return false;
  });
  return res;
};

export const getAllPathNos = (cumulativeTags, cummSelectedObj, groupTitle, innerItem, index) =>
  Object.keys(cumulativeTags[groupTitle]).filter(
    (pathNo) =>
      cummSelectedObj[pathNo][cumulativeTags[groupTitle][pathNo][index]?.id]?.values.find(
        (e) => '_' + e.id === innerItem.id
      ) &&
      // cumulativeTags[groupTitle][pathNo][index]?.values.find((e) => e.id === innerItem.id) &&
      cumulativeTags[groupTitle][pathNo][index + 1]
  );

export const getPathNoForMultiSelect = (cumulativeTags, groupTitle, innerItem, index) => {
  let res = -1;
  Object.keys(cumulativeTags[groupTitle]).some((pathNo) => {
    if (
      cumulativeTags[groupTitle][pathNo][index + 1] &&
      cumulativeTags[groupTitle][pathNo][index + 1].findIndex((i) => i.id === innerItem.id) > -1
    ) {
      res = pathNo;
      return true;
    }
    return false;
  });
  return res;
};
