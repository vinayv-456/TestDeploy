/* eslint-disable max-len */

const loopInsideChildren = (innerItem, link, resultVal, previousObjVal = []) => {
  let result = resultVal;
  let previousObj = previousObjVal;
  if (innerItem.subMenu) {
    innerItem.subMenu.forEach((item) => {
      if (item.permaLink === link) {
        const formatedLink = item.permaLink.split('/').slice(2).join(' > ');
        result = [
          ...previousObj,
          { subMenu: innerItem.subMenu, parent: { name: innerItem.name, permaLink: formatedLink } }
        ];
      } else if (item.subMenu) {
        const formatedLink = item.permaLink.split('/').slice(2).join(' > ');
        previousObj = [
          ...previousObj,
          { subMenu: innerItem.subMenu, parent: { name: innerItem.name, permaLink: formatedLink } }
        ];
        const returnResult = loopInsideChildren(item, link, result, previousObj);
        result = [...result, ...returnResult];
      }
    });
  }
  return result;
};

export const populateNestedLink = (data, link) => {
  let result = [];
  data.forEach((item) => {
    if (item.subMenu) {
      item.subMenu.forEach((innerItem) => {
        const returnVal = loopInsideChildren(innerItem, link, []);
        result = [...result, ...returnVal];
      });
    }
  });
  return result;
};
