import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setTags: ['payload'],
  setCummulativeTags: ['payload'],
  setSingleTag: ['payload'],
  setSelectedTabs: ['payload'],
  deletingTags: ['payload'],
  setSelectedItem: ['payload'],
  universalFilterSetter: ['payload'],
  resetFilterState: ['payload'],
  clearSelectedFilter: ['payload'],

  getFilterData: ['payload'],
  getFilterDataStart: ['payload'],
  getFilterDataSuccess: ['payload'],
  getFilterDataFail: ['payload'],

  getIFrameData: ['payload'],
  getIFrameDataStart: ['payload'],
  getIFrameDataSuccess: ['payload'],
  getIFrameDataFail: ['payload'],
  setSingleSelectionGroups: ['payload'],

  populateFilterTags: ['payload'],
  populateFilterSelectedObjs: ['payload'],
  setMenuIdOfFilter: ['payload']
});

export { Types, Creators };
