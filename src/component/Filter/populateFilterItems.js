import { findTheValue } from './FilterSearchComponent/FilterSearchInput';

/* eslint-disable max-len */
export const populateFilter = (filterData, machineIds) => {
  const tempCummTags = {};
  const tempSelObj = {};
  const visitedMachineIds = [];
  machineIds.forEach((ID, indexOuter) => {
    if (!visitedMachineIds.includes(ID)) {
      const { searchedObjectPath, referencePath, leafNodes, pathVal } = findTheValue(filterData, ID, 'id');
      if (pathVal.length > 0) {
        machineIds.forEach((machineId, index) => {
          if (index > indexOuter) {
            const machineDetails = leafNodes.find((machine) => machine.id === machineId);
            if (machineDetails) {
              const lastIndexOfRefObj = Object.keys(referencePath[0]).length - 1;
              referencePath[0] = {
                ...referencePath[0],
                [lastIndexOfRefObj]: [...referencePath[0][lastIndexOfRefObj], machineDetails]
              };
              searchedObjectPath[0][machineId] = machineDetails;
              visitedMachineIds.push(machineId);
            }
          }
        });
        const groupTitle = pathVal[0].parent;
        if (!tempSelObj[groupTitle]) {
          tempSelObj[groupTitle] = {};
          tempCummTags[groupTitle] = {};
          tempCummTags[groupTitle][0] = { ...referencePath[0] };
          tempSelObj[groupTitle][0] = { ...searchedObjectPath[0] };
        } else {
          const pathsCount = Object.keys(tempSelObj[groupTitle]).length;
          tempSelObj[groupTitle] = { ...tempSelObj[groupTitle], [pathsCount]: searchedObjectPath[0] };
          tempCummTags[groupTitle] = { ...tempCummTags[groupTitle], [pathsCount]: referencePath[0] };
        }
      }
    }
  });
  return { tempCummTags, tempSelObj };
};
