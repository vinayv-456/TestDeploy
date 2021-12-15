/* eslint-disable max-len */
/* eslint-disable consistent-return */
import React, { useEffect, useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FilterResultCardContainer,
  FilterResultContent,
  FilterResultContentContainer
} from './FilterResultCard.mobile.style';
import { Creators as FilterCreators } from '../../../views/dashboard/FilterView/store';
import FilterChildrenContentMobile from '../FilterChildrenContent/FilterChildrenContentMobile/FilterChildrenContentMobile';
import FilterContentContainerMobile from '../FilterContentContainer/FilterContentContainerMobile/FilterContentContainerMobile';

function FilterResultCardMobile({ item, handleParentClick, handleChildrenClick, handleMultiSelectClick }) {
  const {
    tags,
    selectedItem,
    [item.groupTitle]: selectedObj,
    filterData,
    cumulativeTags,
    [`cumulative${item.groupTitle}`]: cummSelectedObj
  } = useSelector((state) => state.filterData);
  const dispatch = useDispatch();

  const addTabToObj = useCallback((payload) => dispatch(FilterCreators.universalFilterSetter(payload)), [dispatch]);

  const addTags = useCallback((payload) => dispatch(FilterCreators.setTags(payload)), [dispatch]);

  // const handleParentClick = (innerItem) => {
  //   if (!tags[item.groupTitle] || !tags[item.groupTitle][0] || tags[item.groupTitle][0].id !== innerItem.id) {
  //     addTabToObj({
  //       key: item.groupTitle,
  //       value: {
  //         [innerItem.id]: {
  //           values: innerItem.values,
  //           type: innerItem.type,
  //           name: innerItem.name,
  //           attribute: innerItem.attribute || null
  //         }
  //       }
  //     });
  //     addTags({
  //       ...tags,
  //       [item.groupTitle]: {
  //         0: { name: innerItem.name, id: innerItem.id, attribute: item.groupTitle || null }
  //       }
  //     });

  //     if (selectedItem.includes(`${item.groupTitle}`) && innerItem.values) {
  //       const copiedSelectedArr = [...selectedItem];
  //       const newSelectedArr = copiedSelectedArr.filter((i) => i !== item.groupTitle);
  //       dispatch(FilterCreators.setSelectedItem(newSelectedArr));
  //     }

  //     if (!innerItem.values) {
  //       if (selectedItem.findIndex((i) => i === item.groupTitle) === -1) {
  //         const copiedSelectedArr = [...selectedItem];
  //         copiedSelectedArr.push(item.groupTitle);
  //         dispatch(FilterCreators.setSelectedItem(copiedSelectedArr));
  //       }
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

  return (
    <FilterResultCardContainer>
      <FilterResultContentContainer>
        <FilterResultContent left={false}>
          {item.values &&
            item.values.map((innerItem, i) => (
              <div key={innerItem.id || i}>
                <FilterContentContainerMobile
                  selectedTabKey={item.groupTitle}
                  // innerItem={innerItem}
                  innerItem={{ ...innerItem, id: `_${innerItem.id}` }}
                  handleClick={() => handleParentClick(item, { ...innerItem, id: `_${innerItem.id}` })}
                  parent={true}
                  selectionType={item.selectionType}
                />
              </div>
            ))}
        </FilterResultContent>
        {selectedObj &&
          Object.keys(selectedObj).length > 0 &&
          Object.keys(selectedObj).map((key, index) => {
            const firstKey = Object.keys(selectedObj)[0];
            const group = filterData.find((group) => group.groupTitle === item.groupTitle);
            // if (!group.values.find((it) => it.id === firstKey)) {
            if (!group.values.find((it) => `_${it.id}` === firstKey)) {
              return;
            }

            return (
              selectedObj[key].values && (
                <FilterChildrenContentMobile
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
              )
            );
          })}
        {/* {selectedObj &&
          Object.keys(selectedObj).length > 0 &&
          Object.keys(selectedObj).map(
            (key, index) =>
              selectedObj[key].values && (
                <FilterChildrenContentMobile
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  keyVal={key}
                  groupTitle={item.groupTitle}
                  itemId={item.id}
                  index={index}
                  parentName={selectedObj[key].name}
                />
              )
          )} */}
      </FilterResultContentContainer>
    </FilterResultCardContainer>
  );
}

export default memo(FilterResultCardMobile);
