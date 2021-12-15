export const camelCase = (s) => (s || '').toLowerCase().replace(/(\b|-)\w/g, (m) => m.toUpperCase().replace(/-/, ''));
