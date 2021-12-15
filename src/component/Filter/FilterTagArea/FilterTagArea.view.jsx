/* eslint-disable prefer-template */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
/* eslint-disable function-paren-newline */
/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FilterTagAreaContainer,
  FilterApplyButton,
  FilterApplyText,
  FilterTagContainer,
  FilterTagButton,
  FilterTagButtonText,
  ApplyButtonToolTip,
  FilterCreateButton,
  TagAreaBtmBorder
} from './FilterTagArea.style';
import { Creators as FilterCreators } from '../../../views/dashboard/FilterView/store';
import { ReactComponent as CancelWhiteSvg } from '../../../assets/icons/Filter/cancel white.svg';
import { localString } from '../../../localization/localString';
import { applyTypeMapping } from '../../../constants/mapping';

function FilterTagArea({ setShowFilter, location }) {
  const state = useSelector((state) => state.filterData);
  const { theme } = useSelector((state) => state.configData);
  const { tags, selectedItem, filterData, cumulativeTags } = state;
  const totalLength = filterData?.length || 0;
  const [filteredSelectedItem, setFilteredSelectedItem] = useState([]);
  const dispatch = useDispatch();

  const string = localString.English;
  const { localeStrings } = useSelector((state) => state.localeStrings);

  const addTabToObj = useCallback((payload) => dispatch(FilterCreators.universalFilterSetter(payload)), [dispatch]);

  const addTags = useCallback((payload) => dispatch(FilterCreators.setTags(payload)), [dispatch]);
  const addCumulativeTags = useCallback((payload) => dispatch(FilterCreators.setCummulativeTags(payload)), [dispatch]);

  const handleDelete = (tag) => {
    const { pathNo, title, lastLevel, itemId } = tag;
    // if the reference has multiselect items and more than one
    if (itemId && cumulativeTags[title][pathNo][lastLevel].length > 1) {
      const newRefrenceObj = {
        ...cumulativeTags[title][pathNo],
        [lastLevel]: cumulativeTags[title][pathNo][lastLevel].filter((i) => i.id !== itemId)
      };

      const newSelectedObj = {
        ...state[`cumulative${title}`][pathNo]
      };

      delete newSelectedObj[itemId];

      if (JSON.stringify(state[`cumulative${title}`][pathNo]) === JSON.stringify(state[title])) {
        addTabToObj({
          key: title,
          value: newSelectedObj
        });
        addTags({
          ...tags,
          [title]: {
            ...newRefrenceObj
          }
        });
      }

      addTabToObj({
        key: `cumulative${title}`,
        value: {
          ...state[`cumulative${title}`],
          [pathNo]: {
            ...newSelectedObj
          }
        }
      });

      addCumulativeTags({
        ...cumulativeTags,
        [title]: {
          ...cumulativeTags[title],
          [pathNo]: {
            ...newRefrenceObj
          }
        }
      });
    } else {
      if (JSON.stringify(state[`cumulative${title}`][pathNo]) === JSON.stringify(state[title])) {
        addTabToObj({
          key: [title],
          value: {}
        });
        addTags({ ...tags, [title]: {} });
      }
      const newcumulativeGroup = { ...state[`cumulative${title}`] };
      const newCumulativeTags = { ...cumulativeTags };
      delete newcumulativeGroup[pathNo];
      delete newCumulativeTags[title][pathNo];
      addTabToObj({
        key: `cumulative${title}`,
        value: newcumulativeGroup
      });

      addCumulativeTags(newCumulativeTags);
    }
  };

  const handleDel = (tag) => {
    let newSelectedObj = {};
    let newRefrenceObj = {};
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < tag.i; i++) {
      newSelectedObj = {
        ...newSelectedObj,
        [tags[tag.title][i].id]: state[tag.title][tags[tag.title][i].id]
      };
      newRefrenceObj = {
        ...newRefrenceObj,
        [i]: tags[tag.title][i]
      };
    }

    if (tags[tag.title] && tags[tag.title][tag.i]) {
      if (Array.isArray(tags[tag.title][tag.i])) {
        newRefrenceObj = {
          ...tags[tag.title],
          [tag.i]: tags[tag.title][tag.i].filter((i, index) => index !== tag.index)
        };

        newSelectedObj = {
          ...state[tag.title]
        };

        delete newSelectedObj[tags[tag.title][tag.i][tag.index].id];
        if (tags[tag.title][tag.i].length !== 1) {
          //
        } else {
          const copiedSelectedArr = [...selectedItem];
          const newSelectedArr = copiedSelectedArr.filter((i) => i !== tag.title);
          dispatch(FilterCreators.setSelectedItem(newSelectedArr));
        }
      } else {
        const copiedSelectedArr = [...selectedItem];
        const newSelectedArr = copiedSelectedArr.filter((i) => i !== tag.title);
        dispatch(FilterCreators.setSelectedItem(newSelectedArr));
      }
    }

    if (Object.keys(newSelectedObj).length < 1) {
      const newTags = { ...tags };
      delete newTags[tag.title];
      addTags(newTags);
    } else {
      addTags({
        ...tags,
        [tag.title]: {
          ...newRefrenceObj
        }
      });
    }
    addTabToObj({
      key: tag.title,
      value: newSelectedObj
    });
  };
  const handleClearClick = () => {
    setShowFilter(false);
    dispatch(FilterCreators.clearSelectedFilter());
  };

  const handleApplyClick = () => {
    addTabToObj({
      key: 'showFilterResult',
      value: true
    });
    // addTabToObj({
    //   key: 'resultType',
    //   value: applyTypeMapping[location.pathname]
    // });
  };

  useEffect(() => {
    const tempSelectedItem = [];
    // filteredSelectedItem is filter of selectedItem and will have only the groups which are present in filterData
    if (filterData) {
      filterData.forEach((ele) => {
        if (selectedItem.includes(ele.groupTitle)) tempSelectedItem.push(ele.groupTitle);
      });
    }
    setFilteredSelectedItem(tempSelectedItem);
  }, [selectedItem]);

  const isGroupPresent = (tag) => filterData.some((ele) => ele.groupTitle === tag);
  // console.log('filteredSelectedItem', filteredSelectedItem);
  const test =
    filteredSelectedItem.filter((item) => {
      const resultGroup = filterData.find((q) => q.groupTitle === item);
      return resultGroup?.values.find((qa) => '_' + qa.id === (tags[item] && tags[item]['0']?.id));
    }) || [];

  // console.log(test);

  const isDisabled = totalLength !== test?.length;
  // console.log(isDisabled, 'totalLength', totalLength, 'test.length', test);
  const TagDetails = ({ pathNo, groupTitle, lastItem }) => (
    <p
      style={{
        color: 'white',
        fontSize: 10,
        fontFamily: 'Circular Std Medium'
      }}
    >
      {Object.keys(cumulativeTags[groupTitle][pathNo]).map((label, i) =>
        // eslint-disable-next-line no-nested-ternary
        i < Object.keys(cumulativeTags[groupTitle][pathNo]).length - 1
          ? Array.isArray(cumulativeTags[groupTitle][pathNo][label])
            ? cumulativeTags[groupTitle][pathNo][label].map((item) => `${item.name} > `)
            : `${cumulativeTags[groupTitle][pathNo][label].name} > `
          : lastItem
      )}
    </p>
  );

  const TagDet = ({ data, lastItem }) => (
    <p
      style={{
        color: 'white',
        fontSize: 10,
        fontFamily: 'Circular Std Medium'
      }}
    >
      {Object.keys(data).map((label, i) =>
        // eslint-disable-next-line no-nested-ternary
        i < Object.keys(data).length - 1
          ? Array.isArray(data[label])
            ? data[label].map((item) => `${item.name} > `)
            : `${data[label].name} > `
          : lastItem
      )}
    </p>
  );

  return (
    <FilterTagAreaContainer height={Object.keys(cumulativeTags).length > 0 ? 120 : 60}>
      <FilterTagContainer>
        {Object.keys(tags).map(
          (groupTitle) =>
            isGroupPresent(groupTitle) &&
            filterData[filterData.findIndex((q) => q.groupTitle === groupTitle)].values.some((it) =>
              Object.keys(cumulativeTags[groupTitle]).some(
                (pathNo) => '_' + it.id === cumulativeTags[groupTitle][pathNo]['0'].id
              )
            ) &&
            Object.keys(cumulativeTags[groupTitle]).map((pathNo, i) => {
              const lastLevel = Object.keys(cumulativeTags[groupTitle][pathNo]).length - 1;
              return Array.isArray(cumulativeTags[groupTitle][pathNo][lastLevel]) &&
                cumulativeTags[groupTitle][pathNo][lastLevel].length > 0 ? (
                cumulativeTags[groupTitle][pathNo][lastLevel].map((item, index) => (
                  <FilterTagButton key={item.id} themeMode={theme}>
                    <FilterTagButtonText themeMode={theme}>{item.name}</FilterTagButtonText>
                    <CancelWhiteSvg
                      onClick={() => handleDelete({ title: groupTitle, pathNo, lastLevel, itemId: item.id })}
                    />
                    <ApplyButtonToolTip className='top'>
                      <TagDetails pathNo={pathNo} groupTitle={groupTitle} lastItem={item.name} />
                    </ApplyButtonToolTip>
                  </FilterTagButton>
                ))
              ) : (
                // eslint-disable-next-line react/no-array-index-key
                <FilterTagButton key={i} themeMode={theme}>
                  <FilterTagButtonText themeMode={theme}>
                    {cumulativeTags[groupTitle][pathNo][lastLevel].name ||
                      cumulativeTags[groupTitle][pathNo][lastLevel - 1].name}
                  </FilterTagButtonText>
                  <CancelWhiteSvg onClick={() => handleDelete({ title: groupTitle, pathNo })} />
                  <ApplyButtonToolTip className='top'>
                    <TagDetails
                      pathNo={pathNo}
                      groupTitle={groupTitle}
                      lastItem={cumulativeTags[groupTitle][pathNo][lastLevel].name}
                    />
                  </ApplyButtonToolTip>
                </FilterTagButton>
              );
            })
          // )
        )}
      </FilterTagContainer>
      <div
        style={{
          display: 'flex'
        }}
      >
        <FilterCreateButton onClick={handleClearClick} disabled={Object.keys(tags).length < 1}>
          <FilterApplyText className='normal' disabled={Object.keys(tags).length < 1}>
            {localeStrings.clear || 'Clear'}
          </FilterApplyText>
        </FilterCreateButton>
        <FilterApplyButton onClick={handleApplyClick} disabled={isDisabled}>
          {isDisabled && (
            <ApplyButtonToolTip>
              <p
                style={{
                  color: 'white',
                  fontSize: 10,
                  fontFamily: 'Circular Std Medium'
                }}
              >
                Select a filter first
              </p>
            </ApplyButtonToolTip>
          )}
          <FilterApplyText disabled={isDisabled}>{localeStrings.apply || 'Apply'}</FilterApplyText>
        </FilterApplyButton>
      </div>
      <TagAreaBtmBorder />
    </FilterTagAreaContainer>
  );
}

export default FilterTagArea;
