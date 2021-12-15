/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CollapsableContainerView from '../CollapsableContainer/CollapsableContainer.view';
import { ItemContainer, Radio, RadioIcon } from '../UpsertPane.style';
import { Creators as UpsertPaneCreators } from '../Store';

const TransitionChartType = ({ menu }) => {
  const { transitionChartType } = useSelector((state) => state.upsertPaneData);
  const dispatch = useDispatch();
  const handleChartType = (value) => {
    dispatch(
      UpsertPaneCreators.setUpsertPaneData({
        key: 'transitionChartType',
        value
      })
    );
  };
  // useEffect(() => {
  //   if (!transitionChartType) {
  //     console.log({ transitionChartType });
  //     dispatch(
  //       UpsertPaneCreators.setUpsertPaneData({
  //         key: 'transitionChartType',
  //         value: 'lots'
  //       })
  //     );
  //   }
  // }, []);

  return (
    <CollapsableContainerView header={menu.label}>
      <>
        {menu.subMenu.map((ele) => {
          const { label, value, id } = ele;
          return (
            <ItemContainer key={id}>
              <Radio onClick={() => handleChartType(value)}>{transitionChartType === value && <RadioIcon />}</Radio>
              {label}
            </ItemContainer>
          );
        })}
      </>
    </CollapsableContainerView>
  );
};

export default TransitionChartType;
