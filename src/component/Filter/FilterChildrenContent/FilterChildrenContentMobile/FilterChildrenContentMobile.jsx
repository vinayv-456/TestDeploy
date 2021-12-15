/* eslint-disable react/jsx-curly-newline */
/* eslint-disable max-len */
import React, { useCallback, memo, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterResultContent } from '../../FilterResultCard/FilterResultCard.mobile.style';
import FilterContentContainerMobile from '../../FilterContentContainer/FilterContentContainerMobile/FilterContentContainerMobile';
import { Creators as FilterCreators } from '../../../../views/dashboard/FilterView/store';
import { FilterResultContentText } from '../../FilterContentContainer/FilterContentContainerMobile/FilterContentContainerMobile.style';
import Loader from '../../../Loader/Loader';

const CalendarComponent = lazy(() => import('../../../Calendar/index'));

function FilterChildrenContentMobile({
  keyVal,
  groupTitle,
  index,
  parentName,
  attribute,
  selectionType,
  handleChildrenClick,
  handleMultiSelectClick
}) {
  const { tags, selectedItem, [groupTitle]: selectedObj } = useSelector((state) => state.filterData);
  const dispatch = useDispatch();

  const addTabToObj = useCallback((payload) => dispatch(FilterCreators.universalFilterSetter(payload)), [dispatch]);

  const addTags = useCallback((payload) => dispatch(FilterCreators.setTags(payload)), [dispatch]);

  // const handleChildrenClick = (innerItem, index) => {
  //   if (tags[groupTitle][index + 1]) {
  //     if (tags[groupTitle][index + 1].id === innerItem.id) {
  //       // dont do anything
  //     } else {
  //       // console.log('called if reference is there but not equal');
  //       let newSelectedObj = {};
  //       let newRefrenceObj = {};
  //       // eslint-disable-next-line no-plusplus
  //       for (let i = 0; i < index + 1; i++) {
  //         newSelectedObj = {
  //           ...newSelectedObj,
  //           [tags[groupTitle][i].id]: selectedObj[tags[groupTitle][i].id]
  //         };
  //         newRefrenceObj = {
  //           ...newRefrenceObj,
  //           [i]: tags[groupTitle][i]
  //         };
  //       }

  //       addTabToObj({
  //         key: groupTitle,
  //         value: {
  //           ...newSelectedObj,
  //           [innerItem.id]: {
  //             values: innerItem.values,
  //             type: innerItem.type,
  //             name: innerItem.name,
  //             attribute: attribute || null
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

  //       if (!innerItem.values) {
  //         if (selectedItem.findIndex((i) => i === groupTitle) === -1) {
  //           const copiedSelectedArr = [...selectedItem];
  //           copiedSelectedArr.push(groupTitle);
  //           dispatch(FilterCreators.setSelectedItem(copiedSelectedArr));
  //         }
  //       } else {
  //         // eslint-disable-next-line no-lonely-if
  //         if (selectedItem.findIndex((i) => i === groupTitle) !== -1) {
  //           const copiedSelectedArr = [...selectedItem];
  //           const newSelectedArr = copiedSelectedArr.filter((i) => i !== groupTitle);
  //           dispatch(FilterCreators.setSelectedItem(newSelectedArr));
  //         }
  //       }
  //     }
  //   } else {
  //     // console.log('called if no reference');
  //     addTabToObj({
  //       key: groupTitle,
  //       value: {
  //         ...selectedObj,
  //         [innerItem.id]: {
  //           values: innerItem.values,
  //           type: innerItem.type,
  //           name: innerItem.name,
  //           attribute: attribute || null
  //         }
  //       }
  //     });
  //     addTags({
  //       ...tags,
  //       [groupTitle]: {
  //         ...tags[groupTitle],
  //         [index + 1]: { name: innerItem.name, id: innerItem.id, attribute: attribute || null }
  //       }
  //     });

  //     if (!innerItem.values) {
  //       if (selectedItem.findIndex((i) => i === groupTitle) === -1) {
  //         const copiedSelectedArr = [...selectedItem];
  //         copiedSelectedArr.push(groupTitle);
  //         dispatch(FilterCreators.setSelectedItem(copiedSelectedArr));
  //       }
  //     } else {
  //       // eslint-disable-next-line no-lonely-if
  //       if (selectedItem.findIndex((i) => i === groupTitle) !== -1) {
  //         const copiedSelectedArr = [...selectedItem];
  //         const newSelectedArr = copiedSelectedArr.filter((i) => i !== groupTitle);
  //         dispatch(FilterCreators.setSelectedItem(newSelectedArr));
  //       }
  //     }
  //   }
  // };

  // const handleMultiSelectClick = (innerItem, index) => {
  //   if (tags[groupTitle][index + 1]) {
  //     if (tags[groupTitle][index + 1].findIndex((i) => i.id === innerItem.id) !== -1) {
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
  //       addTags({
  //         ...tags,
  //         [groupTitle]: {
  //           ...newRefrenceObj
  //         }
  //       });
  //       const copiedSelectedArr = [...selectedItem];
  //       const newSelectedArr = copiedSelectedArr.filter((i) => i !== groupTitle);
  //       dispatch(FilterCreators.setSelectedItem(newSelectedArr));
  //     } else {
  //       addTabToObj({
  //         key: groupTitle,
  //         value: {
  //           ...selectedObj,
  //           [innerItem.id]: {
  //             values: innerItem.values,
  //             type: innerItem.type,
  //             name: innerItem.name,
  //             attribute: attribute || null
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

  //       if (!innerItem.values) {
  //         if (selectedItem.findIndex((i) => i === groupTitle) === -1) {
  //           const copiedSelectedArr = [...selectedItem];
  //           copiedSelectedArr.push(groupTitle);
  //           dispatch(FilterCreators.setSelectedItem(copiedSelectedArr));
  //         }
  //       } else {
  //         // eslint-disable-next-line no-lonely-if
  //         if (selectedItem.findIndex((i) => i === groupTitle) !== -1) {
  //           const copiedSelectedArr = [...selectedItem];
  //           const newSelectedArr = copiedSelectedArr.filter((i) => i !== groupTitle);
  //           dispatch(FilterCreators.setSelectedItem(newSelectedArr));
  //         }
  //       }
  //     }
  //   } else {
  //     addTabToObj({
  //       key: groupTitle,
  //       value: {
  //         ...selectedObj,
  //         [innerItem.id]: {
  //           values: innerItem.values,
  //           type: innerItem.type,
  //           name: innerItem.name,
  //           attribute: attribute || null
  //         }
  //       }
  //     });
  //     addTags({
  //       ...tags,
  //       [groupTitle]: {
  //         ...tags[groupTitle],
  //         [index + 1]: [{ name: innerItem.name, id: innerItem.id, attribute: attribute || null }]
  //       }
  //     });

  //     if (!innerItem.values) {
  //       if (selectedItem.findIndex((i) => i === groupTitle) === -1) {
  //         const copiedSelectedArr = [...selectedItem];
  //         copiedSelectedArr.push(groupTitle);
  //         dispatch(FilterCreators.setSelectedItem(copiedSelectedArr));
  //       }
  //     } else {
  //       // eslint-disable-next-line no-lonely-if
  //       if (selectedItem.findIndex((i) => i === groupTitle) !== -1) {
  //         const copiedSelectedArr = [...selectedItem];
  //         const newSelectedArr = copiedSelectedArr.filter((i) => i !== groupTitle);
  //         dispatch(FilterCreators.setSelectedItem(newSelectedArr));
  //       }
  //     }
  //   }
  // };

  return (
    <div key={index}>
      <div style={{ margin: 10, marginLeft: 7 }}>
        <FilterResultContentText className='content_bold' active={true}>
          {parentName}
        </FilterResultContentText>
      </div>
      {selectedObj[keyVal].type === 'multiselect' && (
        <FilterResultContent left={true}>
          {selectedObj[keyVal].values.map((innerItem, i) => (
            <FilterContentContainerMobile
              selectedTabKey={groupTitle}
              // innerItem={innerItem}
              // handleClick={handleMultiSelectClick}
              innerItem={{ ...innerItem, id: `_${innerItem.id}` }}
              selectionType={selectedObj[keyVal].selectionType}
              handleClick={() =>
                handleMultiSelectClick({ ...innerItem, id: `_${innerItem.id}` }, index, groupTitle, attribute)
              }
              key={innerItem.id || i}
              index={index}
              multiSelect={true}
            />
          ))}
        </FilterResultContent>
      )}

      {selectedObj[keyVal].type === 'date' && (
        <FilterResultContent left={true} className='flexing'>
          <div>
            {selectedObj[keyVal].values.map((innerItem, i) => (
              <FilterContentContainerMobile
                selectedTabKey={groupTitle}
                // innerItem={innerItem}
                // handleClick={handleChildrenClick}
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
              // handleChildrenClick={handleChildrenClick}
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
            <FilterContentContainerMobile
              selectedTabKey={groupTitle}
              // innerItem={innerItem}
              // handleClick={handleChildrenClick}
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
  );
}

export default memo(FilterChildrenContentMobile);
