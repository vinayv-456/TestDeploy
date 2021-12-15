/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  ChartType,
  Container,
  Icon,
  Item,
  ItemContainer,
  ItemSubMenu,
  LabelWrapper,
  MenuDropdown,
  SideArrow
} from './EditOptions.style';
import { ReactComponent as Hamburger } from '../../../assets/icons/layout/hamburger_white.svg';
import { chartOptions } from '../../../constants/sampleData';
import { DropDownArrow } from '../../../assets/icons';
import { Creators as UpsertPaneCreators } from '../../UpsertPane/Store';
import { Creators as KPVChartsCreators } from '../Store';
import Loader from '../../Loader/Loader';
import EditCustomiseKpv from './EditCustomiseKpv/EditCustomiseKpv.view';
import { Radio, RadioIcon } from '../../UpsertPane/ScaleYAxis/ScaleYAxis.style';
import EditScaleYAxis from './EditScaleYAxis/EditScaleYAxis.view';
import { CheckBox } from '../../UpsertPane/UpsertPane.style';
import { ReactComponent as CheckMark } from '../../../assets/icons/KPV/checkmark.svg';
import useClickOutside from '../../../shared/hooks/useClickOutside';
import DeletePaneModal from './DeletePaneModal/DeletePaneModal.view';
import DynamicSVGIcon from '../../Common/DynamicSVGIcon';

const SubMenu = ({ subMenu, paneData, parent, showMenu, setShowMenu, showScaleYAxis, setShowScaleYAxis }) => {
  const dispatch = useDispatch();
  const [showSubMenuOf, setShowSubMenuOf] = useState('');
  const { scaleYaxis } = useSelector((state) => state.upsertPaneData);
  const { localeStrings } = useSelector((state) => state.localeStrings);

  const handleSelect = (ele) => {
    setShowSubMenuOf('');

    if (ele.subMenu) {
      setShowSubMenuOf(ele.id);
    } else {
      switch (parent) {
        case 'scaleYAxis': {
          switch (ele.value) {
            case 'manual': {
              dispatch(
                UpsertPaneCreators.setCompleteUpsertPaneData({
                  ...paneData,
                  scaleYaxis: ele.value
                })
              );
              setShowScaleYAxis(!showScaleYAxis);
              break;
            }
            case 'auto': {
              dispatch(
                KPVChartsCreators.editPaneData({
                  index: paneData.paneNo,
                  key: 'scaleYaxis',
                  value: ele.value
                })
              );
              dispatch(
                KPVChartsCreators.editPaneData({
                  index: paneData.paneNo,
                  key: 'scaleYAxisRange',
                  value: []
                })
              );
              break;
            }

            default:
              break;
          }

          break;
        }

        case 'showDetails': {
          dispatch(
            KPVChartsCreators.editPaneData({
              index: paneData.paneNo,
              key: 'showDetails',
              value: { ...paneData.showDetails, [ele.value]: !paneData.showDetails[ele.value] }
            })
          );
          break;
        }

        default:
          break;
      }
    }

    if (!ele.subMenu && parent !== 'showDetails') {
      setShowMenu(!showMenu);
    }
  };

  return (
    <ItemSubMenu>
      {subMenu.map((ele) => (
        <ItemContainer key={ele.id}>
          <Item className='subItem' onClick={() => handleSelect(ele)}>
            {/* {parent === 'scaleYAxis' && <Radio>{scaleYaxis === ele.value && <RadioIcon />}</Radio>} */}
            <LabelWrapper>
              {parent === 'scaleYAxis' && <Radio>{paneData.scaleYaxis === ele.value && <RadioIcon />}</Radio>}
              {parent === 'showDetails' && (
                <CheckBox className={paneData.showDetails[ele.value] ? 'active' : ''}>
                  <CheckMark />
                </CheckBox>
              )}
              <span>{localeStrings[ele.label] || ele.label}</span>
            </LabelWrapper>
            {(ele.subMenu || ele.value === 'manual') && <SideArrow src={DropDownArrow} alt='' />}
          </Item>
          {showSubMenuOf === ele.id && <SubMenu subMenu={ele.subMenu} />}
        </ItemContainer>
      ))}
    </ItemSubMenu>
  );
};

const EditOptionsContainer = ({ paneData }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenuOf, setShowSubMenuOf] = useState('');
  const { machinesSelected } = paneData;
  const [showCustomiseKpv, setShowCustomiseKpv] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { scaleYaxis } = useSelector((state) => state.upsertPaneData);
  const [showScaleYAxis, setShowScaleYAxis] = useState(false);
  const editOptsRef = useRef();
  const [showRemovePaneModal, setShowRemovePaneModal] = useState(false);
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const { editPaneMenu } = useSelector((state) => state.KPVCharts);

  useClickOutside(editOptsRef, () => setShowMenu(false));

  const handleSelect = (ele) => {
    setShowSubMenuOf('');
    if (ele.subMenu) {
      if (showSubMenuOf === ele.id) setShowSubMenuOf('');
      else setShowSubMenuOf(ele.id);
    } else {
      switch (ele.value) {
        case 'fullScreen': {
          dispatch(KPVChartsCreators.setSelectedPaneNo(paneData.paneNo));
          dispatch(KPVChartsCreators.setPaneFullScreen());
          break;
        }
        case 'editPane': {
          dispatch(
            UpsertPaneCreators.setCompleteUpsertPaneData({
              ...paneData,
              plotData: paneData.data
            })
          );
          dispatch(KPVChartsCreators.setSelectedPaneNo(paneData.paneNo));
          history.push('kpv-charting/edit-pane');
          break;
        }
        case 'customiseKpvs': {
          setShowCustomiseKpv(!showCustomiseKpv);
          break;
        }

        case 'removePane': {
          // dispatch(KPVChartsCreators.removePane(paneData.paneNo));
          setShowRemovePaneModal(true);
          break;
        }
        default:
          break;
      }
    }

    if (!ele.subMenu) {
      setShowMenu(!showMenu);
    }
  };

  useEffect(() => {
    if (!showMenu) {
      setShowSubMenuOf('');
    }
  }, [showMenu]);

  useEffect(() => {
    const { chartType } = paneData;
    if (!editPaneMenu[chartType]) {
      dispatch(KPVChartsCreators.setPaneOptions({ key: 'editPaneMenu', chartType }));
    }
  }, []);

  return (
    <Container ref={editOptsRef}>
      <ChartType onClick={() => setShowMenu(!showMenu)}>
        <Hamburger />
        {localeStrings[chartOptions.find((ele) => ele.value === paneData.chartType).label] ||
          chartOptions.find((ele) => ele.value === paneData.chartType).label}
      </ChartType>
      {showMenu && (
        <MenuDropdown>
          {!editPaneMenu[paneData.chartType] ? (
            <Loader />
          ) : (
            editPaneMenu[paneData.chartType].map((ele) => (
              <ItemContainer key={ele.id}>
                <Item onClick={() => handleSelect(ele)}>
                  <LabelWrapper>
                    <Icon>
                      <DynamicSVGIcon iconUrl={ele.icon} />
                    </Icon>
                    <span>{localeStrings[ele.label] || ele.label}</span>
                  </LabelWrapper>
                  {ele.subMenu && (
                    <SideArrow>
                      <DynamicSVGIcon iconUrl={DropDownArrow} />
                    </SideArrow>
                  )}
                </Item>
                {showSubMenuOf === ele.id && (
                  <SubMenu
                    parent={ele.value}
                    subMenu={ele.subMenu}
                    paneData={paneData}
                    showMenu={showMenu}
                    setShowMenu={setShowMenu}
                    showScaleYAxis={showScaleYAxis}
                    setShowScaleYAxis={setShowScaleYAxis}
                  />
                )}
              </ItemContainer>
            ))
          )}
        </MenuDropdown>
      )}
      {showCustomiseKpv && (
        <EditCustomiseKpv
          machinesSelected={machinesSelected}
          editPaneNo={paneData.paneNo}
          setShowCustomiseKpv={setShowCustomiseKpv}
          setShowMenu={setShowMenu}
          chartType={paneData.chartType}
          transitionChartType={paneData.transitionChartType}
        />
      )}
      {scaleYaxis === 'manual' && showScaleYAxis && (
        <EditScaleYAxis paneNo={paneData.paneNo} setShowScaleYAxis={setShowScaleYAxis} />
      )}
      {showRemovePaneModal && <DeletePaneModal closeModalHandler={setShowRemovePaneModal} paneNo={paneData.paneNo} />}
    </Container>
  );
};
export default EditOptionsContainer;
