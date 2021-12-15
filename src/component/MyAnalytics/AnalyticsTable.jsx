/* eslint-disable react/jsx-curly-newline */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Div, Image } from '../../globalStyles';
import Radiobutton from '../Common/RadioButton/RadioButton';
import { Table, Td, Tr, Th, Anchor } from './AnaltyticsTable.styles';
import kababSvg from '../../assets/icons/Filter/kabab.svg';
import { Creators as filterCreators } from '../../views/dashboard/FilterView/store';
import { Creators as FilterResultCreators } from '../ResultView/Store/index';
import { Creators as kpvCreators } from '../KPVCharts/Store/index';
import { Creators as myAnalyticsCreators } from '../../views/MyAnalytics/store';
// import { myAnalytics } from '../../constants/sampleData';
import { populateFilter } from '../Filter/populateFilterItems';
import Loader from '../Common/Loader/Loader';

const AnalyticsTable = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { filterData, loading, menuIdofFilter } = useSelector((state) => state.filterData);
  const [isFilterDataUpdated, setIsFilterDataUpdated] = useState(false);
  const [machineIds, setMachineIds] = useState([]);
  const [kpvs, setKpvs] = useState([]);
  const { myAnalyticsItemId, myAnalytics, menuId } = useSelector((state) => state.myAnalytics);
  const [panesInfo, setPanesInfo] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const columnsDetails = [
    {
      label: 'Title',
      name: 'title',
      width: '40%',
      align: 'left'
    },
    {
      label: 'Category',
      name: 'category'
    },
    {
      label: 'KPV Shortlist',
      name: 'kpvShortlist'
    },
    {
      label: 'Chart',
      name: 'chart'
    },
    {
      label: 'Shared',
      name: 'shared'
    }
  ];

  const populateData = (machineIdsArg, kpvsArg, panesInfoArg) => {
    const { tempCummTags, tempSelObj } = populateFilter(filterData, machineIdsArg || machineIds);
    dispatch(filterCreators.populateFilterTags(tempCummTags));
    dispatch(filterCreators.populateFilterSelectedObjs(tempSelObj));
    dispatch(filterCreators.setSelectedItem(filterData.map((group) => group.groupTitle)));
    // dispatch(filterCreators.setResultType('kpvs'));
    dispatch(FilterResultCreators.setKpvShortlist(kpvsArg || kpvs));
    dispatch(kpvCreators.setPanesShortHandInfo(panesInfoArg || panesInfo));
    setIsFilterDataUpdated(false);
    history.push('/home/kpv-shortlist');
  };

  const setAnalyticsDetails = (id, name, menuId) => {
    if (menuIdofFilter !== menuId) {
      dispatch(filterCreators.setMenuIdOfFilter(menuId));
    }
    if (myAnalyticsItemId !== id) {
      dispatch(myAnalyticsCreators.setAnalyticsDetails({ id, name, menuId }));
    }
  };

  useEffect(() => {
    if (!myAnalytics?.length) dispatch(myAnalyticsCreators.getAnalytics());

    if (myAnalyticsItemId) {
      dispatch(myAnalyticsCreators.resetAnalyticsData());
      // dispatch(filterCreators.resetFilterState());
      dispatch(FilterResultCreators.resetKpvDetails());
    }
  }, []);

  useEffect(() => {
    if (!loading && isFilterDataUpdated) {
      populateData();
    }
  }, [loading]);

  const viewShortlist = (id, name, kpvsArg, machineIdsArg, menuIdArg, panesInfoArg) => {
    setShowLoader(true);
    setAnalyticsDetails(id, name, menuIdArg);
    setMachineIds(machineIdsArg);
    setPanesInfo(panesInfoArg);
    setKpvs(kpvsArg);
    if (menuIdofFilter === menuIdArg) {
      populateData(machineIdsArg, kpvsArg, panesInfoArg);
    } else {
      dispatch(filterCreators.getFilterData({ type: 'page', menuId: menuIdArg })); // change this
    }
    setIsFilterDataUpdated(true);
  };

  const viewChart = (id, name, panesInfo, menuId) => {
    setShowLoader(true);
    setAnalyticsDetails(id, name, menuId);
    dispatch(kpvCreators.setPanesShortHandInfo(panesInfo));
    history.push('/home/kpv-charting');
  };

  return (
    <Div
      px='2'
      mt='2'
      style={{
        width: '100%',
        position: 'relative'
      }}
    >
      {showLoader && <Loader />}
      <Table>
        <thead>
          <tr>
            {columnsDetails.map((col) => (
              <Th>{col.label}</Th>
            ))}
            <Th />
          </tr>
        </thead>
        <tbody>
          {myAnalytics.map((dashbord, index) => (
            <Tr key={index}>
              {columnsDetails.map((col) => (
                <Td width={col.width} align={col.align}>
                  {(() => {
                    switch (col.name) {
                      case 'shared':
                        return <Radiobutton margin='0 auto' active={dashbord[col.name]} />;
                      case 'kpvShortlist':
                        return (
                          <Anchor
                            onClick={() =>
                              viewShortlist(
                                dashbord.id,
                                dashbord.title,
                                dashbord.kpvs,
                                dashbord.machineIds,
                                dashbord.menuId,
                                dashbord.panesShortHandInfo
                              )
                            }
                          >
                            View
                          </Anchor>
                        );
                      case 'chart':
                        return (
                          <Anchor
                            onClick={() =>
                              viewChart(dashbord.id, dashbord.title, dashbord.panesShortHandInfo, dashbord.menuId)
                            }
                          >
                            View
                          </Anchor>
                        );
                      default:
                        return dashbord[col.name];
                    }
                  })()}
                </Td>
              ))}

              <Td>
                <Image src={kababSvg} width='2' />
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Div>
  );
};

export default AnalyticsTable;
