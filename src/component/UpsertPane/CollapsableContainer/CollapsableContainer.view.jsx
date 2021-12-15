/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ForwardNavArrowBlack, ToggleOff, ToggleOn } from '../../../assets/icons/KPV';
import { Divider, DividerContainer, Icon, InnerTitle, Title, ToogleDiv } from './CollapsableContainer.style';
import { Radio, RadioIcon } from '../UpsertPane.style';
import { Creators as UpsertPaneCreators } from '../Store';
import { CHART_TYPES } from '../../../constants';
import DynamicSVGIcon from '../../Common/DynamicSVGIcon';

const CollapsableContainer = (props) => {
  const { header, value, children } = props;
  const { multiSelectKpv, chartType } = useSelector((state) => state.upsertPaneData);
  const [showMenu, setShowMenu] = useState(true);
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const dispatch = useDispatch();
  const handleMultiSlectToogle = () => {
    if (multiSelectKpv) {
      dispatch(
        UpsertPaneCreators.setUpsertPaneData({
          key: 'machinesSelected',
          value: []
        })
      );
    }
    dispatch(
      UpsertPaneCreators.setUpsertPaneData({
        key: 'multiSelectKpv',
        value: !multiSelectKpv
      })
    );
  };

  useEffect(() => {
    if (chartType === CHART_TYPES.TRANSITION_CHART) {
      dispatch(
        UpsertPaneCreators.setUpsertPaneData({
          key: 'multiSelectKpv',
          value: true
        })
      );
    }
  }, [chartType]);

  return (
    <>
      <DividerContainer>
        <Divider />
      </DividerContainer>

      <Title>
        <InnerTitle onClick={() => setShowMenu(!showMenu)}>
          <Icon rotate={90} width={1.5} src={ForwardNavArrowBlack}>
            <DynamicSVGIcon iconUrl={ForwardNavArrowBlack} width='1.5rem' />
          </Icon>
          {header}
        </InnerTitle>
        {value === 'customiseKpvs' && (
          // && chartType !== CHART_TYPES.TRANSITION_CHART
          <ToogleDiv>
            <span style={{ textTransform: 'capitalize' }}>{localeStrings['Multi Select'] || 'multi select'}</span>
            <div style={{ marginLeft: '1rem' }} onClick={handleMultiSlectToogle}>
              {multiSelectKpv ? (
                <DynamicSVGIcon width='2.5rem' iconUrl={ToggleOn} />
              ) : (
                <DynamicSVGIcon width='2.5rem' iconUrl={ToggleOff} />
              )}
            </div>
            {/* <Radio onClick={handleMultiSlectToogle}>{multiSelectKpv && <RadioIcon />}</Radio> */}
          </ToogleDiv>
        )}
      </Title>
      {showMenu && <div>{children}</div>}
    </>
  );
};

export default memo(CollapsableContainer);
