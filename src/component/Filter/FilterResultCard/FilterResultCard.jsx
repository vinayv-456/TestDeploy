/* eslint-disable no-lonely-if */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FilterResultCardContainer,
  FilterResultContent,
  FilterResultHeader,
  FilterResultHeaderText,
  FilterResultCardMainContainer,
  FilterCardBottomSpace,
  FilterResultContentContainer
} from './FilterResultCard.style';
import FilterContentContainer from '../FilterContentContainer/FilterContentContainer';
import { Creators as FilterCreators } from '../../../views/dashboard/FilterView/store';
import FilterChildrenContent from '../FilterChildrenContent/FilterChildrenContent';
import { isParentSelected } from '../isItemSelected';

function FilterResultCard({ item, handleParentClick, handleChildrenClick, handleMultiSelectClick }) {
  // console.log('handleParentClick', handleParentClick);
  const {
    tags,
    cumulativeTags,
    deletingTag,
    selectedItem,
    [item.groupTitle]: selectedObj,
    filterData,
    [`cumulative${item.groupTitle}`]: cummSelectedObj
  } = useSelector((state) => state.filterData);
  const dispatch = useDispatch();

  const addTabToObj = useCallback((payload) => dispatch(FilterCreators.universalFilterSetter(payload)), [dispatch]);

  const addTags = useCallback((payload) => dispatch(FilterCreators.setTags(payload)), [dispatch]);
  const addCummulativeTags = useCallback((payload) => dispatch(FilterCreators.setCummulativeTags(payload)), [dispatch]);

  // const handleParentClick = (innerItem) => {
  //   console.log('item', item, innerItem, cummSelectedObj);

  //   if (item.selectionType === 'singleselect') {
  //     // if (!tags[item.groupTitle] || !tags[item.groupTitle][0] || tags[item.groupTitle][0].id !== innerItem.id) {
  //     if (!isParentSelected(innerItem, item.groupTitle, cumulativeTags)) {
  //       addTabToObj({
  //         key: item.groupTitle,
  //         value: {
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
  //         key: `cumulative${item.groupTitle}`,
  //         value: {
  //           [cummSelectedObj ? Object.keys(cummSelectedObj)?.length : 0]: {
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
  //         [item.groupTitle]: {
  //           0: { name: innerItem.name, id: innerItem.id, attribute: item.groupTitle || null }
  //         }
  //       });
  //       addCummulativeTags({
  //         ...cumulativeTags,
  //         [item.groupTitle]: {
  //           // ...cumulativeTags[item.groupTitle],
  //           [cumulativeTags[item.groupTitle] ? Object.keys(cumulativeTags[item.groupTitle])?.length : 0]: {
  //             0: {
  //               name: innerItem.name,
  //               id: innerItem.id,
  //               // values: innerItem.values,
  //               attribute: innerItem.attribute || null
  //             }
  //           }
  //         }
  //       });
  //     } else {
  //       const cummTagIndex = Object.keys(cumulativeTags[item.groupTitle])?.find(
  //         (no) => cumulativeTags[item.groupTitle][no][0].id === innerItem.id
  //       );

  //       const cummTabIndex = Object.keys(cummSelectedObj).find(
  //         (no) => Object.keys(cummSelectedObj[no])[0] === innerItem.id
  //       );
  //       addTags({
  //         ...tags,
  //         [item.groupTitle]: { ...cumulativeTags[item.groupTitle][cummTagIndex] }
  //       });
  //       addTabToObj({
  //         key: item.groupTitle,
  //         value: cummSelectedObj[cummTabIndex]
  //       });
  //     }
  //   } else {
  //     if (!isParentSelected(innerItem, item.groupTitle, cumulativeTags)) {
  //       addTabToObj({
  //         key: item.groupTitle,
  //         value: {
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
  //         key: `cumulative${item.groupTitle}`,
  //         value: {
  //           ...cummSelectedObj,
  //           [cummSelectedObj ? Object.keys(cummSelectedObj)?.length : 0]: {
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
  //         [item.groupTitle]: {
  //           0: { name: innerItem.name, id: innerItem.id, attribute: innerItem.groupTitle || null }
  //         }
  //       });

  //       addCummulativeTags({
  //         ...cumulativeTags,
  //         [item.groupTitle]: {
  //           ...cumulativeTags[item.groupTitle],
  //           [cumulativeTags[item.groupTitle] ? Object.keys(cumulativeTags[item.groupTitle])?.length : 0]: {
  //             0: {
  //               name: innerItem.name,
  //               id: innerItem.id,
  //               // values: innerItem.values,
  //               attribute: innerItem.attribute || null
  //             }
  //           }
  //         }
  //       });
  //     } else {
  //       const cummTagIndex = Object.keys(cumulativeTags[item.groupTitle])?.find(
  //         (no) => cumulativeTags[item.groupTitle][no][0].id === innerItem.id
  //       );

  //       const cummTabIndex = Object.keys(cummSelectedObj).find(
  //         (no) => Object.keys(cummSelectedObj[no])[0] === innerItem.id
  //       );
  //       addTags({
  //         ...tags,
  //         [item.groupTitle]: { ...cumulativeTags[item.groupTitle][cummTagIndex] }
  //       });
  //       addTabToObj({
  //         key: item.groupTitle,
  //         value: cummSelectedObj[cummTabIndex]
  //       });
  //     }
  //   }
  // };

  const isGroupCompletlySelected = () => {
    let check = false;

    // console.log('check', cumulativeTags[item.groupTitle]);
    if (cumulativeTags[item.groupTitle]) {
      check = Object.keys(cumulativeTags[item.groupTitle]).every((pathNo) => {
        const lastLevel = Object.keys(cumulativeTags[item.groupTitle][pathNo]).length;
        if (Array.isArray(cumulativeTags[item.groupTitle][pathNo][lastLevel - 1])) {
          return cumulativeTags[item.groupTitle][pathNo][lastLevel - 1].length > 0;
        }
        // console.log(
        //   'group selected',
        //   item.groupTitle,
        //   cummSelectedObj[pathNo],
        //   cummSelectedObj,
        //   cummSelectedObj[pathNo] &&
        //     !cummSelectedObj[pathNo][cumulativeTags[item.groupTitle][pathNo][lastLevel - 1]?.id]?.values?.length > 0
        // );
        if (
          (cummSelectedObj[pathNo] &&
            !cummSelectedObj[pathNo][cumulativeTags[item.groupTitle][pathNo][lastLevel - 1]?.id]?.values?.length >
              0) === undefined
        ) {
          return true;
        }
        return (
          cummSelectedObj[pathNo] &&
          !cummSelectedObj[pathNo][cumulativeTags[item.groupTitle][pathNo][lastLevel - 1]?.id]?.values?.length > 0
        );
      });
    }
    return check;
  };

  useEffect(() => {
    const result = isGroupCompletlySelected();
    // console.log('checking...', item.groupTitle, result);
    if (!result && selectedItem.includes(item.groupTitle)) {
      const copiedSelectedArr = [...selectedItem];
      const newSelectedArr = copiedSelectedArr.filter((i) => i !== item.groupTitle);
      dispatch(FilterCreators.setSelectedItem(newSelectedArr));
    }
    if (result && selectedItem.findIndex((i) => i === item.groupTitle) === -1) {
      const copiedSelectedArr = [...selectedItem];
      copiedSelectedArr.push(item.groupTitle);
      dispatch(FilterCreators.setSelectedItem(copiedSelectedArr));
    }
  }, [selectedObj]);
  // console.log('item', selectedObj, selectedObj && Object.keys(selectedObj));
  return (
    <FilterResultCardMainContainer>
      <FilterResultCardContainer>
        <FilterResultContentContainer>
          <div>
            <FilterResultHeader>
              <FilterResultHeaderText>{item.groupTitle}</FilterResultHeaderText>
            </FilterResultHeader>
            <FilterResultContent left={false}>
              {item.values &&
                item.values.map((innerItem, i) => (
                  <FilterContentContainer
                    selectedTabKey={item.groupTitle}
                    innerItem={{ ...innerItem, id: `_${innerItem.id}` }}
                    handleClick={() => handleParentClick(item, { ...innerItem, id: `_${innerItem.id}` })}
                    index={0}
                    selectionType={item.selectionType}
                    key={innerItem.id || i}
                  />
                ))}
            </FilterResultContent>
          </div>
          {selectedObj &&
            Object.keys(selectedObj).length > 0 &&
            Object.keys(selectedObj).map((key, index) => {
              const firstKey = Object.keys(selectedObj)[0];
              const group = filterData.find((group) => group.groupTitle === item.groupTitle);
              if (!group.values.find((it) => `_${it.id}` === firstKey)) {
                return;
              }
              // console.log('qer', key, selectedObj, selectedObj[key]);
              return (
                selectedObj[key].values && (
                  <>
                    <FilterChildrenContent
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      keyVal={key}
                      groupTitle={item.groupTitle}
                      itemId={item.id}
                      index={index}
                      attribute={selectedObj[key].attribute}
                      selectionType={selectedObj[key].selectionType}
                      handleChildrenClick={handleChildrenClick}
                      handleMultiSelectClick={handleMultiSelectClick}
                    />
                    {/* {console.log('item', selectedObj, key, selectedObj[key])} */}
                  </>
                )
              );
            })}
        </FilterResultContentContainer>
        <FilterCardBottomSpace />
      </FilterResultCardContainer>
    </FilterResultCardMainContainer>
  );
}

export default FilterResultCard;
