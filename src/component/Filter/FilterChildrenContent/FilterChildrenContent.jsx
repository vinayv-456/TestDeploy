/* eslint-disable react/jsx-curly-newline */
/* eslint-disable prefer-template */
/* eslint-disable no-lonely-if */
/* eslint-disable no-constant-condition */
/* eslint-disable function-paren-newline */
/* eslint-disable max-len */
import React, { useCallback, memo, lazy, Suspense, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FilterResultContent,
  FilterResultHeaderText,
  FilterResultHeader
} from '../FilterResultCard/FilterResultCard.style';
import FilterContentContainer from '../FilterContentContainer/FilterContentContainer';
import { Creators as FilterCreators } from '../../../views/dashboard/FilterView/store';
import Loader from '../../Loader/Loader';
import { getAllPathNos, getPathNo, getPathNoForMultiSelect, isChildReferencePresent } from '../isItemSelected';

const _ = require('lodash');

const CalendarComponent = lazy(() => import('../../Calendar/index'));

function FilterChildrenContent({
  keyVal,
  groupTitle,
  index,
  attribute,
  selectionType,
  handleChildrenClick,
  handleMultiSelectClick
}) {
  const {
    tags,
    [groupTitle]: selectedObj,
    cumulativeTags,
    [`cumulative${groupTitle}`]: cummSelectedObj
  } = useSelector((state) => state.filterData);
  const dispatch = useDispatch();

  const addTabToObj = useCallback((payload) => dispatch(FilterCreators.universalFilterSetter(payload)), [dispatch]);

  const addTags = useCallback((payload) => dispatch(FilterCreators.setTags(payload)), [dispatch]);
  const addCummulativeTags = useCallback((payload) => dispatch(FilterCreators.setCummulativeTags(payload)), [dispatch]);

  // const handleChildrenClick = (innerItem, index) => {
  //   // console.log('innerItem', innerItem);
  //   const commonPathNo = isChildReferencePresent(cumulativeTags, cummSelectedObj, groupTitle, innerItem, index);
  //   // console.log('commonPathNo', commonPathNo);
  //   if (commonPathNo > -1) {
  //     let pathNo = getPathNo(cumulativeTags, groupTitle, innerItem, index);
  //     // console.log('ps', pathNo);
  //     if (pathNo > -1) {
  //       const pathNos = Object.keys(cumulativeTags[groupTitle]).filter(
  //         (pathNo) => cumulativeTags[groupTitle][pathNo][index + 1]?.id === innerItem.id
  //       );
  //       if (
  //         !Object.keys(selectedObj).every((e) => Object.keys(cummSelectedObj[pathNo]).includes(e)) &&
  //         (!Object.keys(selectedObj).includes(innerItem.id) || pathNos.length === 1)
  //       ) {
  //         // console.log('populating as it is not active filter');
  //         addTags({
  //           ...tags,
  //           [groupTitle]: { ...cumulativeTags[groupTitle][pathNo] }
  //         });
  //         addTabToObj({
  //           key: groupTitle,
  //           value: cummSelectedObj[pathNo]
  //         });
  //       } else {
  //         if (selectionType !== 'singleselect') {
  //           pathNo = Object.keys(cummSelectedObj).find((pathNum) =>
  //             Object.keys(selectedObj).every((e) => Object.keys(cummSelectedObj[pathNum]).includes(e))
  //           );

  //           // console.log('deleting', pathNo);
  //           let newSelectedObj;
  //           let newRefrenceObj;

  //           // eslint-disable-next-line no-plusplus
  //           for (let i = 0; i < index + 1; i++) {
  //             newSelectedObj = {
  //               ...newSelectedObj,
  //               [tags[groupTitle][i].id]: selectedObj[tags[groupTitle][i].id]
  //             };
  //             newRefrenceObj = {
  //               ...newRefrenceObj,
  //               [i]: tags[groupTitle][i]
  //             };
  //           }

  //           addTabToObj({
  //             key: [groupTitle],
  //             value: newSelectedObj
  //           });
  //           addTags({ ...tags, [groupTitle]: { ...newRefrenceObj } });
  //           if (
  //             !Object.keys(cummSelectedObj).some((pathNum) =>
  //               Object.keys(newSelectedObj).every(
  //                 (e) => Object.keys(cummSelectedObj[pathNum]).includes(e) && pathNum !== pathNo
  //               )
  //             )
  //           ) {
  //             // console.log('if delete');
  //             addTabToObj({
  //               key: `cumulative${groupTitle}`,
  //               value: {
  //                 ...cummSelectedObj,
  //                 [pathNo]: newSelectedObj
  //               }
  //             });
  //             addCummulativeTags({
  //               ...cumulativeTags,
  //               [groupTitle]: {
  //                 ...cumulativeTags[groupTitle],
  //                 [pathNo]: newRefrenceObj
  //               }
  //             });
  //           } else {
  //             // console.log('else delete');
  //             delete cummSelectedObj[pathNo];
  //             delete cumulativeTags[groupTitle][pathNo];
  //             addTabToObj({
  //               key: `cumulative${groupTitle}`,
  //               value: {
  //                 ...cummSelectedObj
  //               }
  //             });
  //             addCummulativeTags({
  //               ...cumulativeTags
  //             });
  //             const path = Object.keys(cummSelectedObj).find((pathNum) =>
  //               Object.keys(newSelectedObj).every((e) => Object.keys(cummSelectedObj[pathNum]).includes(e))
  //             );
  //             if (path > -1) {
  //               addTabToObj({
  //                 key: [groupTitle],
  //                 value: cummSelectedObj[path]
  //               });
  //               addTags({ ...tags, [groupTitle]: { ...cumulativeTags[groupTitle][path] } });
  //             }
  //           }
  //         }
  //       }
  //     } else {
  //       let cumSelectionPathNo =
  //         parseInt(Object.keys(cummSelectedObj)[Object.keys(cummSelectedObj)?.length - 1], 10) + 1;
  //       let cumTagsPathNo = parseInt(Object.keys(cummSelectedObj)[Object.keys(cummSelectedObj)?.length - 1], 10) + 1;
  //       let newSelectedObj = {};
  //       let newRefrenceObj = {};
  //       // eslint-disable-next-line no-plusplus
  //       for (let i = 0; i < index + 1; i++) {
  //         newSelectedObj = {
  //           ...newSelectedObj,
  //           [cumulativeTags[groupTitle][commonPathNo][i].id]:
  //             cummSelectedObj[commonPathNo][cumulativeTags[groupTitle][commonPathNo][i].id]
  //         };
  //         newRefrenceObj = {
  //           ...newRefrenceObj,
  //           [i]: cumulativeTags[groupTitle][commonPathNo][i]
  //         };
  //       }

  //       if (selectionType === 'singleselect') {
  //         const pathNos = getAllPathNos(cumulativeTags, cummSelectedObj, groupTitle, innerItem, index);
  //         cumSelectionPathNo = commonPathNo;
  //         cumTagsPathNo = commonPathNo;
  //         pathNos.forEach((pathNo) => {
  //           delete cummSelectedObj[pathNo];
  //           delete cumulativeTags[groupTitle][pathNo];
  //         });
  //       }

  //       addTabToObj({
  //         key: groupTitle,
  //         value: {
  //           ...newSelectedObj,
  //           [innerItem.id]: {
  //             values: innerItem.values,
  //             type: innerItem.type,
  //             name: innerItem.name,
  //             attribute: innerItem.attribute || null,
  //             selectionType: innerItem.selectionType
  //           }
  //         }
  //       });
  //       addTabToObj({
  //         key: `cumulative${groupTitle}`,
  //         value: {
  //           ...cummSelectedObj,
  //           [cumTagsPathNo]: {
  //             ...newSelectedObj,
  //             [innerItem.id]: {
  //               values: innerItem.values,
  //               type: innerItem.type,
  //               name: innerItem.name,
  //               attribute: innerItem.attribute || null,
  //               selectionType: innerItem.selectionType
  //             }
  //           }
  //         }
  //       });

  //       addTags({
  //         ...tags,
  //         [groupTitle]: {
  //           ...newRefrenceObj,
  //           [index + 1]: { name: innerItem.name, id: innerItem.id, attribute: attribute || null }
  //         }
  //       });

  //       addCummulativeTags({
  //         ...cumulativeTags,
  //         [groupTitle]: {
  //           ...cumulativeTags[groupTitle],
  //           [cumSelectionPathNo]: {
  //             ...newRefrenceObj,
  //             [index + 1]: {
  //               name: innerItem.name,
  //               id: innerItem.id,
  //               // values: innerItem.values,
  //               attribute: innerItem.attribute || null
  //             }
  //           }
  //         }
  //       });
  //     }
  //   } else {
  //     let pathNo;
  //     try {
  //       pathNo = Object.keys(cumulativeTags[groupTitle])?.find(
  //         (no) =>
  //           cummSelectedObj[no][cumulativeTags[groupTitle][no][index]?.id]?.values.some(
  //             (val) => '_' + val.id === innerItem.id
  //           )
  //         // eslint-disable-next-line function-paren-newline
  //       );
  //     } catch {
  //       pathNo = 0;
  //     }
  //     // console.log('pathNo', pathNo, innerItem.id);

  //     addTabToObj({
  //       key: groupTitle,
  //       value: {
  //         ...cummSelectedObj[pathNo || 0], // ch
  //         [innerItem.id]: {
  //           values: innerItem.values,
  //           type: innerItem.type,
  //           name: innerItem.name,
  //           attribute: innerItem.attribute || null,
  //           selectionType: innerItem.selectionType
  //         }
  //       }
  //     });
  //     addTabToObj({
  //       key: `cumulative${groupTitle}`,
  //       value: {
  //         ...cummSelectedObj,
  //         [pathNo || 0]: {
  //           ...cummSelectedObj[pathNo || 0], // changed
  //           [innerItem.id]: {
  //             values: innerItem.values,
  //             type: innerItem.type,
  //             name: innerItem.name,
  //             attribute: innerItem.attribute || null,
  //             selectionType: innerItem.selectionType
  //           }
  //         }
  //       }
  //     });

  //     addTags({
  //       ...tags,
  //       [groupTitle]: {
  //         ...cumulativeTags[groupTitle][pathNo || 0], // chnaged
  //         [index + 1]: {
  //           name: innerItem.name,
  //           id: innerItem.id,
  //           // values: innerItem.values,
  //           attribute: innerItem.attribute || null
  //         }
  //       }
  //     });
  //     addCummulativeTags({
  //       ...cumulativeTags,
  //       [groupTitle]: {
  //         ...cumulativeTags[groupTitle],
  //         [pathNo || 0]: {
  //           ...cumulativeTags[groupTitle][pathNo || 0], // chnaged
  //           [index + 1]: {
  //             name: innerItem.name,
  //             id: innerItem.id,
  //             // values: innerItem.values,
  //             attribute: innerItem.attribute || null
  //           }
  //         }
  //       }
  //     });
  //   }
  //   // }
  // };

  // const handleMultiSelectClick = (innerItem, index) => {
  //   const commonPathNo = isChildReferencePresent(cumulativeTags, cummSelectedObj, groupTitle, innerItem, index);
  //   // console.log('commonPathNo-multi', commonPathNo);
  //   if (commonPathNo > -1) {
  //     const pathNo = getPathNoForMultiSelect(cumulativeTags, groupTitle, innerItem, index);
  //     if (pathNo > -1) {
  //       // console.log('deselection');
  //       const newRefrenceObj = {
  //         ...tags[groupTitle],
  //         [index + 1]: tags[groupTitle][index + 1].filter((i) => i.id !== innerItem.id)
  //       };

  //       const newSelectedObj = {
  //         ...selectedObj
  //       };

  //       delete newSelectedObj[innerItem.id];

  //       addTabToObj({
  //         key: groupTitle,
  //         value: newSelectedObj
  //       });
  //       addTabToObj({
  //         key: `cumulative${groupTitle}`,
  //         value: {
  //           ...cummSelectedObj,
  //           [commonPathNo]: {
  //             ...newSelectedObj
  //           }
  //         }
  //       });
  //       addTags({
  //         ...tags,
  //         [groupTitle]: {
  //           ...newRefrenceObj
  //         }
  //       });
  //       addCummulativeTags({
  //         ...cumulativeTags,
  //         [groupTitle]: {
  //           ...cumulativeTags[groupTitle],
  //           [commonPathNo]: {
  //             ...newRefrenceObj
  //           }
  //         }
  //       });
  //     } else {
  //       // console.log('selection');
  //       addTabToObj({
  //         key: groupTitle,
  //         value: {
  //           ...selectedObj,
  //           [innerItem.id]: {
  //             values: innerItem.values,
  //             type: innerItem.type,
  //             name: innerItem.name,
  //             attribute: innerItem.attribute || null
  //           }
  //         }
  //       });
  //       addTabToObj({
  //         key: `cumulative${groupTitle}`,
  //         value: {
  //           ...cummSelectedObj,
  //           [commonPathNo]: {
  //             ...cummSelectedObj[commonPathNo],
  //             [innerItem.id]: {
  //               values: innerItem.values,
  //               type: innerItem.type,
  //               name: innerItem.name,
  //               attribute: innerItem.attribute || null
  //             }
  //           }
  //         }
  //       });

  //       addTags({
  //         ...tags,
  //         [groupTitle]: {
  //           ...tags[groupTitle],
  //           [index + 1]: [
  //             ...tags[groupTitle][index + 1],
  //             { name: innerItem.name, id: innerItem.id, attribute: attribute || null }
  //           ]
  //         }
  //       });
  //       addCummulativeTags({
  //         ...cumulativeTags,
  //         [groupTitle]: {
  //           ...cumulativeTags[groupTitle],
  //           [commonPathNo]: {
  //             ...cumulativeTags[groupTitle][commonPathNo],
  //             [index + 1]: [
  //               ...cumulativeTags[groupTitle][commonPathNo][index + 1],
  //               {
  //                 name: innerItem.name,
  //                 id: innerItem.id,
  //                 // values: innerItem.values,
  //                 attribute: innerItem.attribute || null
  //               }
  //             ]
  //           }
  //         }
  //       });
  //     }
  //   } else {
  //     // console.log('this item is not yet selected');
  //     const cummTagIndex = Object.keys(cumulativeTags[groupTitle])?.find(
  //       (no) =>
  //         cummSelectedObj[no][cumulativeTags[groupTitle][no][index]?.id]?.values.some(
  //           (val) => '_' + val.id === innerItem.id
  //         )
  //       // eslint-disable-next-line function-paren-newline
  //     );
  //     // console.log('kidd', cummTagIndex);

  //     addTabToObj({
  //       key: groupTitle,
  //       value: {
  //         ...cummSelectedObj[cummTagIndex || 0],
  //         [innerItem.id]: {
  //           values: innerItem.values,
  //           type: innerItem.type,
  //           name: innerItem.name,
  //           attribute: innerItem.attribute || null
  //         }
  //       }
  //     });
  //     addTabToObj({
  //       key: `cumulative${groupTitle}`,
  //       value: {
  //         ...cummSelectedObj,
  //         [cummTagIndex || 0]: {
  //           ...cummSelectedObj[cummTagIndex || 0],
  //           [innerItem.id]: {
  //             values: innerItem.values,
  //             type: innerItem.type,
  //             name: innerItem.name,
  //             attribute: innerItem.attribute || null
  //           }
  //         }
  //       }
  //     });

  //     addTags({
  //       ...tags,
  //       [groupTitle]: {
  //         ...cumulativeTags[groupTitle][cummTagIndex || 0],
  //         [index + 1]: [
  //           {
  //             name: innerItem.name,
  //             id: innerItem.id,
  //             // values: innerItem.values,
  //             attribute: innerItem.attribute || null
  //           }
  //         ]
  //       }
  //     });
  //     addCummulativeTags({
  //       ...cumulativeTags,
  //       [groupTitle]: {
  //         ...cumulativeTags[groupTitle],
  //         [cummTagIndex || 0]: {
  //           ...cumulativeTags[groupTitle][cummTagIndex || 0],
  //           [index + 1]: [
  //             {
  //               name: innerItem.name,
  //               id: innerItem.id,
  //               // values: innerItem.values,
  //               attribute: innerItem.attribute || null
  //             }
  //           ]
  //         }
  //       }
  //     });
  //   }
  //   // }
  // };

  return (
    <React.Fragment key={index}>
      <div
        style={{
          width: 1,
          borderLeft: '0.5px dashed darkgray',
          marginLeft: '1rem'
        }}
      />
      <div>
        <FilterResultHeader>
          <FilterResultHeaderText>{selectedObj[keyVal]?.attribute}</FilterResultHeaderText>
        </FilterResultHeader>
        {selectedObj[keyVal].type === 'multiselect' && (
          <FilterResultContent left={true}>
            {selectedObj[keyVal].values.map((innerItem, i) => (
              <FilterContentContainer
                selectedTabKey={groupTitle}
                innerItem={{ ...innerItem, id: `_${innerItem.id}` }}
                selectionType={selectedObj[keyVal].selectionType}
                handleClick={() =>
                  handleMultiSelectClick({ ...innerItem, id: `_${innerItem.id}` }, index, groupTitle, attribute)
                }
                key={innerItem.id || i}
                index={index}
                multiSelect={true}
                className='multiSelect'
              />
            ))}
          </FilterResultContent>
        )}

        {selectedObj[keyVal].type === 'date' && (
          <FilterResultContent left={true} className='flexing'>
            <div>
              {selectedObj[keyVal].values.map((innerItem, i) => (
                <FilterContentContainer
                  selectedTabKey={groupTitle}
                  // innerItem={innerItem}
                  innerItem={{ ...innerItem, id: `_${innerItem.id}` }}
                  selectionType={selectedObj[keyVal].selectionType}
                  handleClick={() =>
                    handleChildrenClick(
                      { ...innerItem, id: `_${innerItem.id}` },
                      groupTitle,
                      index,
                      attribute,
                      selectionType
                    )
                  }
                  key={innerItem.id || i}
                  index={index}
                  className='typeDate'
                />
              ))}
            </div>
            <Suspense fallback={<Loader />}>
              <CalendarComponent
                groupTitle={groupTitle}
                values={selectedObj[keyVal].values}
                handleChildrenClick={() =>
                  handleChildrenClick(selectedObj[keyVal].values, groupTitle, index, attribute, selectionType)
                }
                index={index}
              />
            </Suspense>
          </FilterResultContent>
        )}

        {(selectedObj[keyVal].type === 'select' || selectedObj[keyVal].type === 'object') && (
          <FilterResultContent left={true}>
            {selectedObj[keyVal].values.map((innerItem, i) => (
              <FilterContentContainer
                selectedTabKey={groupTitle}
                // innerItem={innerItem}
                innerItem={{ ...innerItem, id: `_${innerItem.id}` }}
                handleClick={() =>
                  handleChildrenClick(
                    { ...innerItem, id: `_${innerItem.id}` },
                    groupTitle,
                    index,
                    attribute,
                    selectionType
                  )
                }
                selectionType={selectedObj[keyVal].selectionType}
                key={innerItem.id || i}
                index={index}
              />
            ))}
          </FilterResultContent>
        )}
      </div>
    </React.Fragment>
  );
}

export default memo(FilterChildrenContent);
