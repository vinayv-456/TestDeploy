/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Radiobutton from '../../component/Common/RadioButton/RadioButton';
import { Div, Image } from '../../globalStyles';
import { Table, Tag, Tbody, Td, Th, Thead, Tr } from './MyDashboards.style';
import kababSvg from '../../assets/icons/Filter/kabab.svg';
import { populateFilter } from '../../component/Filter/populateFilterItems';
import { Creators as filterCreators } from '../dashboard/FilterView/store';
import { Creators as myDashboardCreators } from './store/index';
import Loader from '../../component/Common/Loader/Loader';

const Dashboardtable = ({ data }) => {
  const { filterData, loading, menuIdofFilter } = useSelector((state) => state.filterData);
  const { myDashboardItemId, menuId: dashMenuId } = useSelector((state) => state.myDashboards);
  const { filterPaths } = useSelector((state) => state.home);
  const [isFilterDataUpdated, setIsFilterDataUpdated] = useState(false);
  const [ids, setIds] = useState([]);
  const [menuId, setMenuId] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const [showLoader, setShowLoader] = useState(false);

  const populateData = (idsArg, menuIdArg) => {
    const { tempCummTags, tempSelObj } = populateFilter(filterData, idsArg || ids);
    dispatch(filterCreators.populateFilterTags(tempCummTags));
    dispatch(filterCreators.populateFilterSelectedObjs(tempSelObj));
    dispatch(filterCreators.setSelectedItem(filterData.map((group) => group.groupTitle)));
    setIsFilterDataUpdated(false);
    dispatch(filterCreators.universalFilterSetter({ key: 'showFilter', value: true }));
    dispatch(filterCreators.universalFilterSetter({ key: 'showFilterResult', value: true }));
    history.push(filterPaths[menuIdArg || menuId]);
  };

  const setDashboardDetails = (id, name, menuId) => {
    if (menuIdofFilter !== menuId) {
      dispatch(filterCreators.setMenuIdOfFilter(menuId));
    }
    if (myDashboardItemId !== id) {
      dispatch(myDashboardCreators.setDashboardDetails({ id, name, menuId }));
    }
  };

  const handleDashboardSelect = (dashId, dashName, idsArg, menuIdArg) => {
    setIds(idsArg);
    setMenuId(menuIdArg);
    setShowLoader(true);
    setDashboardDetails(dashId, dashName, menuIdArg);
    if (menuIdofFilter !== menuIdArg) {
      dispatch(filterCreators.getFilterData({ type: 'tab', tab: 'Summary', menuId: menuIdArg }));
    } else {
      populateData(idsArg, menuIdArg);
    }
    setIsFilterDataUpdated(true);
  };

  useEffect(() => {
    if (!loading && isFilterDataUpdated) {
      populateData();
    }
  }, [loading]);

  return (
    <>
      <Div px='2' mt='2' style={{ width: '100%', position: 'relative' }}>
        {showLoader && <Loader />}
        <Table>
          <Thead>
            <tr>
              <Th border>Title</Th>
              <Th border>Category</Th>
              <Th border>Search Tags</Th>
              <Th>Shared Dashboard</Th>
              <Th />
            </tr>
          </Thead>
          <Tbody>
            {data.map((dashbord) => {
              const { id, title, category, searchTags, shared, ids, menuId } = dashbord;
              return (
                <Tr key={id} onClick={() => handleDashboardSelect(id, title, ids, menuId)}>
                  <Td border className='title'>
                    {title}
                  </Td>
                  <Td border>{category}</Td>
                  <Td border className='tags'>
                    {searchTags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Td>
                  <Td className='shared'>
                    <Radiobutton margin='0 auto' active={shared} />
                  </Td>
                  <Td>
                    <Image src={kababSvg} width='2' />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Div>
    </>
  );
};

export default Dashboardtable;
