/* eslint-disable no-loop-func */

import { CHART_TYPES } from '../../../constants';

/* eslint-disable max-len */
export const getSinglePaneChartData = (plotData, machinesShortlisted, chartType, chartSubtType) => {
  const plotDataOfMachines = {};
  let tempData = [];
  const objLabel = {};
  const machines = [];
  // console.log({ chartSubtType });
  switch (chartType) {
    case CHART_TYPES.DATA_CHART: {
      if (machinesShortlisted?.length > 0) {
        machinesShortlisted.forEach((machine) => {
          const { machineName, groupName, machineId, kpvId, kpvName } = machine;
          plotDataOfMachines[`${machineId}${kpvId}`] = plotData[machineId][kpvId];
          objLabel[`temp_${machineId}${kpvId}`] = `${machineName}: ${kpvName}`;
          machines.push({ machineId, machineName, groupName, kpvId, kpvName });
        });
        // used to know the position till where it travelled for every machine
        const indexes = new Array(Object.keys(plotDataOfMachines).length);
        indexes.fill(0);

        // console.log(machinesShortlisted[0][machineId][kpvId]);

        const { machineName, groupName, machineId, kpvId } = machinesShortlisted[0];
        const referenceArray = plotData[machineId][kpvId];
        // console.log(referenceArray);
        // start time epoch
        // const startTime = 1629944700000;
        // let time = startTime;
        // while (time <= startTime + 42 * 60000) {
        // machinesShortlisted.forEach((machineDetails) => {
        //   const { machineId, kpvId } = machineDetails;
        //   const obj = {};
        //   console.log('11', referenceArray, plotData[machineId][kpvId]);
        //   // plotData[machineId][kpvId].forEach((e) => {
        //   plotDataOfMachines[`${machineId}${kpvId}`].forEach((e) => {
        //     Object.keys(plotDataOfMachines).forEach((machine, index) => {
        //       const key = e.time;

        //       obj.time = key;
        //       const position = indexes[index];
        //       console.log('22', plotDataOfMachines[machine], plotDataOfMachines[machine][position]?.time, key);
        //       console.log({ position }, indexes);
        //       console.log('out', key);
        //       if (plotDataOfMachines[machine] && plotDataOfMachines[machine][position]?.time === key) {
        //         obj[`temp_${machine}`] = plotDataOfMachines[machine][position].value;
        //         indexes[index] += 1;
        //         console.log('match', key, machine, obj);
        //       } else if (!plotDataOfMachines[machine]) {
        //         obj[`temp_${machine}`] = 0;
        //       }
        //     });
        //     indexes.fill(0);
        //   });
        //   console.log({ obj });
        //   tempData.push(obj);
        // });
        // console.log(plotDataOfMachines);
        machinesShortlisted.forEach((ms) => {
          const { machineName, groupName, machineId, kpvId } = ms;
          const referenceArray = plotData[machineId][kpvId];
          referenceArray.forEach((e) => {
            const obj = {};
            Object.keys(plotDataOfMachines).forEach((machine, index) => {
              const plotEle = plotDataOfMachines[machine].find((m) => m.time === e.time);
              // if (plotEle) {
              obj.time = e.time;
              obj[`temp_${machine}`] = plotEle?.value;
              // }

              // const key = e.time;
              // obj.time = key;
              // const position = indexes[index];
              // console.log('check', machine, plotDataOfMachines[machine][position]?.time, key);
              // if (plotDataOfMachines[machine] && plotDataOfMachines[machine][position]?.time === key) {
              //   obj[`temp_${machine}`] = plotDataOfMachines[machine][position].value;
              //   indexes[index] += 1;
              //   console.log('same', key);
              // } else if (!plotDataOfMachines[machine]) {
              //   obj[`temp_${machine}`] = 0;
              // }
            });
            // console.log({ obj });
            tempData.push(obj);
            // console.log({ tempData });
            // indexes.fill(0);
          });
        });
        // console.log({ tempData });

        // referenceArray.forEach((e) => {
        //   const obj = {};
        //   Object.keys(plotDataOfMachines).forEach((machine, index) => {
        //     const key = e.time;
        //     obj.time = key;
        //     const position = indexes[index];
        //     if (plotDataOfMachines[machine] && plotDataOfMachines[machine][position]?.time === key) {
        //       obj[`temp_${machine}`] = plotDataOfMachines[machine][position].value;
        //       indexes[index] += 1;
        //     } else if (!plotDataOfMachines[machine]) {
        //       obj[`temp_${machine}`] = 0;
        //     }
        //   });
        //   tempData.push(obj);
        // });
        // console.log({ tempData });
        // console.log({ plotDataOfMachines });
        // const obj = {};
        // Object.keys(plotDataOfMachines).forEach((machine, index) => {
        //   const key = time;
        //   obj.time = key;
        //   const position = indexes[index];
        //   if (plotDataOfMachines[machine] && plotDataOfMachines[machine][position]?.time === key) {
        //     obj[`temp_${machine}`] = plotDataOfMachines[machine][position].value;
        //     indexes[index] += 1;
        //   } else if (!plotDataOfMachines[machine]) {
        //     obj[`temp_${machine}`] = 0;
        //   }
        // });
        // tempData.push(obj);
        // // increment time by 1 minute
        // time += 60000;
        // }
      }
      break;
    }
    case CHART_TYPES.TRANSITION_CHART: {
      // console.log({ machinesShortlisted });
      machinesShortlisted.forEach((machine) => {
        if (plotData) {
          const { machineName, machineId, kpvId } = machine;
          tempData = [...tempData, ...plotData[chartSubtType || 'lots'][machineId]];
          // if (!Object.keys(objLabel).find((e) => objLabel[e] === machineName)) {
          objLabel[`${machineId}`] = machineName;
          // }
          machines.push({ machineId, machineName, kpvId });
        }
      });
      const revObjLabel = {};
      Object.keys(objLabel)
        .reverse()
        .forEach((e) => {
          revObjLabel[e] = objLabel[e];
        });
      return [tempData, revObjLabel, machines];
    }
    default:
      break;
  }

  return [tempData, objLabel, machines];
};

export const getMultiGridChartData = (plotData, machinesSelected) => {
  const panesDataObj = {
    tempData: [],
    objLabel: []
  };
  machinesSelected?.forEach((machine) => {
    const { machineName, groupName, machineId, kpvId, kpvName } = machine;
    // panesDataObj.labelsData = { temp: `${machineName}- ${groupName}: Temperature (C)` };
    panesDataObj.tempData.push(plotData[machineId][kpvId]);
    panesDataObj.objLabel.push({
      // eslint-disable-next-line prefer-template
      temp: machineName + ': ' + kpvName
      // `${machineName}- ${groupName}: Temperature (C)`
    });
  });
  return panesDataObj;
};
