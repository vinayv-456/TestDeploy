/* eslint-disable no-lonely-if */
/* eslint-disable max-len */
// innerItem.values, text, obj, refObj, [], [], path, []
let leafNodes = [];
const loopIntoChildren = (
  values,
  text,
  searchBy,
  object = {},
  refObject = {},
  refrenceObject = [],
  selectedObject = [],
  pathVal,
  selectedPath,
  multiselectVal = false
) => {
  let obj = object;
  let selectedObj = selectedObject;
  let refObj = refObject;
  let refrenceObj = refrenceObject;
  let path = pathVal;
  let selectPath = selectedPath;
  // eslint-disable-next-line consistent-return
  values.forEach((innerItem, i) => {
    let multiselect = multiselectVal;
    let condition = innerItem[searchBy].toLowerCase().includes(text.toLowerCase());
    if (searchBy === 'id') {
      condition = innerItem[searchBy].toLowerCase() === text.toLowerCase();
    }
    if (text !== '' && condition) {
      if (i === 0) {
        selectedObj = [
          ...selectedObj,
          {
            ...obj,
            [`_${innerItem.id}`]: {
              values: innerItem.values,
              type: innerItem.type,
              name: innerItem.name,
              attribute: innerItem.attribute
            }
          }
        ];
        if (multiselect) {
          refrenceObj = [
            ...refrenceObj,
            {
              ...refObj,
              [Object.keys(refObj).length]: [{ name: innerItem.name, id: `_${innerItem.id}` }]
            }
          ];
        } else {
          refrenceObj = [
            ...refrenceObj,
            {
              ...refObj,
              [Object.keys(refObj).length]: { name: innerItem.name, id: `_${innerItem.id}`, values: innerItem.values }
            }
          ];
        }

        selectPath = [
          ...selectPath,
          {
            ...path,
            path: `${path.path} / ${innerItem.name}`
          }
        ];
      } else {
        const copyObj = { ...obj };
        delete copyObj[Object.keys(obj)[Object.keys(obj).length - 1]];
        selectedObj = [
          ...selectedObj,
          {
            ...copyObj,
            [`_${innerItem.id}`]: {
              values: innerItem.values,
              type: innerItem.type,
              name: innerItem.name,
              attribute: innerItem.attribute
            }
          }
        ];

        const copyRefObj = { ...refObj };
        delete copyRefObj[Object.keys(refObj)[Object.keys(refObj).length - 1]];
        if (multiselect) {
          refrenceObj = [
            ...refrenceObj,
            {
              ...copyRefObj,
              [Object.keys(copyRefObj).length]: [{ name: innerItem.name, id: `_${innerItem.id}` }]
            }
          ];
        } else {
          refrenceObj = [
            ...refrenceObj,
            {
              ...copyRefObj,
              [Object.keys(copyRefObj).length]: {
                name: innerItem.name,
                id: `_${innerItem.id}`,
                values: innerItem.values
              }
            }
          ];
        }

        const newPath = path.path.split('/');
        newPath.pop();
        const curatedPath = newPath.join('/');

        selectPath = [
          ...selectPath,
          {
            ...path,
            path: `${curatedPath} / ${innerItem.name}`
          }
        ];
      }
      leafNodes = values;
    }
    obj = {
      ...object,
      [`_${innerItem.id}`]: {
        values: innerItem.values,
        type: innerItem.type,
        name: innerItem.name,
        attribute: innerItem.attribute
      }
    };

    refObj = {
      ...refObject,
      [Object.keys(refObject).length]: { name: innerItem.name, id: `_${innerItem.id}`, values: innerItem.values }
    };
    path = {
      ...pathVal,
      path: `${pathVal.path} / ${innerItem.name}`
    };

    if (innerItem.values) {
      if (innerItem.type === 'multiselect') {
        multiselect = true;
      } else {
        multiselect = false;
      }
      const result = loopIntoChildren(
        innerItem.values,
        text,
        searchBy,
        obj,
        refObj,
        refrenceObj,
        selectedObj,
        path,
        selectPath,
        multiselect
      );
      if (result.selectedObj.length > 0) {
        selectedObj = result.selectedObj;
        refrenceObj = result.refrenceObj;
        selectPath = result.selectPath;
        // leafNodes = result.leafNodes;
      }
    }
  });
  return {
    selectedObj,
    selectPath,
    refrenceObj
    // , leafNodes
  };
};

export const loopIntoParent = (
  item,
  text,
  searchBy,
  object = {},
  refObject = {},
  selectedRef = [],
  selectedObject = []
) => {
  let obj = object;
  let selectedObj = selectedObject;
  let refObj = refObject;
  let refrenceObj = selectedRef;
  let path = {};
  let selectedPath = [];
  // eslint-disable-next-line consistent-return
  item.values.forEach((innerItem) => {
    obj = {};
    refObj = {};
    let condition = innerItem[searchBy].toLowerCase().includes(text.toLowerCase());
    if (searchBy === 'id') {
      condition = innerItem[searchBy].toLowerCase() === text.toLowerCase();
    }
    if (text !== '' && condition) {
      selectedObj = [
        {
          [`_${innerItem.id}`]: {
            values: innerItem.values,
            type: innerItem.type,
            name: innerItem.name,
            attribute: innerItem.attribute
          }
        }
      ];
      refrenceObj = [{ 0: { name: innerItem.name, id: `_${innerItem.id}`, values: innerItem.values } }];
      selectedPath = [{ path: innerItem.name, parent: item.groupTitle }];

      // eslint-disable-next-line no-else-return
    }
    if (innerItem.values) {
      refObj = {
        0: { name: innerItem.name, id: `_${innerItem.id}`, values: innerItem.values }
      };

      obj = {
        [`_${innerItem.id}`]: {
          values: innerItem.values,
          type: innerItem.type,
          name: innerItem.name,
          attribute: innerItem.attribute
        }
      };

      path = {
        parent: item.groupTitle,
        path: innerItem.name
      };

      const result = loopIntoChildren(innerItem.values, text, searchBy, obj, refObj, [], [], path, []);
      if (result.selectedObj.length > 0) {
        selectedObj = [...selectedObj, ...result.selectedObj];
        refrenceObj = [...refrenceObj, ...result.refrenceObj];
        selectedPath = [...selectedPath, ...result.selectPath];
      }
    }
  });

  return { selectedPath, selectedObj, refrenceObj, leafNodes };
};
