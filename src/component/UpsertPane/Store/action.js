import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setUpsertPaneData: ['payload'],
  setShowDetails: ['payload'],
  resetUpsertPaneData: ['payload'],
  setCompleteUpsertPaneData: ['payload']
});

export { Types, Creators };
