import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as kpvChartingCreators } from '../../component/KPVCharts/Store/action';

const useGetMachinesShortlisted = () => {
  const { KPVShortlist } = useSelector((state) => state.filterResultData);
  const { machinesShortlisted } = useSelector((state) => state.KPVCharts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (KPVShortlist.length !== machinesShortlisted.length) {
      //   console.log('useGetMachinesShortlisted hook');
      const machines = [];
      KPVShortlist.forEach((e) => {
        if (!machines.includes(e.machineName)) {
          machines.push({
            kpvId: e.id,
            machineId: e.machineId,
            machineName: e.machineName,
            groupName: e.groupName,
            kpvName: e.KPV
          });
        }
      });
      dispatch(kpvChartingCreators.setMachinesShortlisted(machines));
    }
  }, []);
};

export default useGetMachinesShortlisted;
