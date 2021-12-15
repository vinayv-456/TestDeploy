export const navs = [
  {
    id: 'dasboards',
    name: 'Dasboards',
    link: null,
    subNavs: [
      { name: 'OEE', link: '/home/dashboard/oee' },
      { name: 'Utilization', link: '/home/dashboard/utilization' },
      { name: 'Yield', link: '/home/dashboard/yield' },
      { name: 'My Dashboards', link: '/home/dashboard/My_Dashboards' }
    ]
  },
  { id: 'analytics', name: 'Analytics', link: null, subNavs: [] },
  {
    id: 'dataVerifier',
    name: 'Data Verifier',
    link: null,
    subNavs: []
  },
  { id: 'review', name: 'Review', link: '/home/review', subNavs: null },
  {
    id: 'productionInfo',
    name: 'Production info',
    link: '/home/Production-info',
    subNavs: null
  },
  { id: 'myPages', name: 'My pages', link: '/home/My-pages', subNavs: null }
];
