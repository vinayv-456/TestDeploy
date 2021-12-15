export const data = [
  [
    {
      Id: 1000,
      PId: 0,
      Name: 'Home',
      '[Description]': 'Landing Page',
      Icon: 'https://res.cloudinary.com/dbklykign/image/upload/v1626081301/Vistrian/Icons/home_q7t9ij.svg',
      IconActive: 'https://res.cloudinary.com/dbklykign/image/upload/v1626081288/Vistrian/Icons/home_active_xusbyz.svg',
      Permalink: '/home',
      PageType: 'Card',
      FilterType: 'None',
      FilterLevel: '-1',
      IsLeaf: '1',
      SubMenu: [
        {
          SubMenu: [{}]
        }
      ]
    },
    {
      Id: 1001,
      PId: 0,
      Name: 'Dashboards',
      '[Description]': 'Dashboard Items',
      Icon: 'https://res.cloudinary.com/dbklykign/image/upload/v1626081539/Vistrian/Icons/Dashboard_q3a4qi.svg',
      IconActive: 'https://res.cloudinary.com/dbklykign/image/upload/v1626081539/Vistrian/Icons/Dashboard_q3a4qi.svg',
      Permalink: '/home/dashboards',
      PageType: 'Dashboard',
      IsLeaf: '0',
      SubMenu: [
        {
          Id: 2000,
          PId: 1001,
          Name: 'OEE',
          '[Description]': 'OEE',
          Permalink: '/home/dashboards/oee',
          PageType: 'Filter',
          FilterType: 'Multiple',
          FilterLevel: '2',
          SubMenuLabelOptions: 'Summary,Trend,Comparison,Details',
          IsLeaf: '1',
          SubMenu: [{}]
        },
        {
          Id: 2001,
          PId: 1001,
          Name: 'Utilization',
          '[Description]': 'Utilization',
          Permalink: '/home/dashboards/utilization',
          PageType: 'Card',
          FilterLevel: '-1',
          IsLeaf: '0',
          SubMenu: [
            {
              Id: 3000,
              PId: 2001,
              Name: 'Process Utilization',
              '[Description]': 'Process Utilization',
              Permalink: '/home/dashboards/utilization/processutilization',
              PageType: 'Card',
              FilterType: 'Single',
              FilterLevel: '2',
              SubMenuLabelOptions: 'Daily,Weekly,Monthly,Quarterly,Yearly',
              IsLeaf: '1'
            },
            {
              Id: 3001,
              PId: 2001,
              Name: 'Equipment Utilization',
              '[Description]': 'Equipment Utilization',
              Permalink: '/home/dashboards/utilization/equipmentutilization',
              PageType: 'Card',
              FilterType: 'Single',
              FilterLevel: '4',
              IsLeaf: '1'
            }
          ]
        },
        {
          Id: 2002,
          PId: 1001,
          Name: 'Lot Traceability',
          '[Description]': 'Lot Traceability',
          Permalink: '/home/dashboards/lottraceability',
          PageType: 'Card',
          FilterType: 'Single',
          FilterLevel: '4',
          IsLeaf: '1',
          SubMenu: [{}]
        },
        {
          Id: 2003,
          PId: 1001,
          Name: 'My Dashboards',
          '[Description]': 'My Dashboards',
          Permalink: '/home/dashboards/mydashboards',
          PageType: 'myDashboards',
          FilterType: 'Single',
          FilterLevel: '4',
          IsLeaf: '1',
          SubMenu: [{}]
        }
      ]
    },
    {
      Id: 1002,
      PId: 0,
      Name: 'Analytics',
      '[Description]': 'Analytics Items',
      Icon: 'https://res.cloudinary.com/dbklykign/image/upload/v1626081295/Vistrian/Icons/analytics_xd9ssk.svg',
      IconActive:
        'https://res.cloudinary.com/dbklykign/image/upload/v1626081520/Vistrian/Icons/analytics_active_svptxa.svg',
      Permalink: '/home/analytics',
      IsLeaf: '0',
      SubMenu: [
        {
          Id: 2004,
          PId: 1002,
          Name: 'Data View',
          '[Description]': 'Data View',
          Permalink: '/home/analytics/dataview',
          PageType: 'Filter',
          FilterType: 'Single',
          FilterLevel: '4',
          IsLeaf: '1',
          SubMenu: [{}]
        },
        {
          Id: 2005,
          PId: 1002,
          Name: 'My Analytics',
          '[Description]': 'My Analytics',
          Permalink: '/home/analytics/myanalytics',
          PageType: 'myAnalytics',
          FilterType: 'Single',
          FilterLevel: '4',
          IsLeaf: '1',
          SubMenu: [{}]
        }
      ]
    },
    {
      Id: 1003,
      PId: 0,
      Name: 'Data Verifier',
      '[Description]': 'Data Verifier',
      Icon: 'https://res.cloudinary.com/dbklykign/image/upload/v1626081286/Vistrian/Icons/data_verifier_avqmhe.svg',
      IconActive:
        'https://res.cloudinary.com/dbklykign/image/upload/v1626081299/Vistrian/Icons/data_verifier_active_tdhxlg.svg',
      Permalink: '/home/dataverifier',
      PageType: 'Card',
      FilterType: 'None',
      FilterLevel: '-1',
      IsLeaf: '1',
      SubMenu: [
        {
          SubMenu: [{}]
        }
      ]
    },
    {
      Id: 1004,
      PId: 0,
      Name: 'Review',
      '[Description]': 'Review',
      Icon: 'https://res.cloudinary.com/dbklykign/image/upload/v1626081502/Vistrian/Icons/review_pwpzrp.svg',
      IconActive:
        'https://res.cloudinary.com/dbklykign/image/upload/v1626081297/Vistrian/Icons/review_active_da4gcv.svg',
      Permalink: '/home/review',
      PageType: 'Card',
      FilterType: 'None',
      FilterLevel: '-1',
      IsLeaf: '1',
      SubMenu: [
        {
          SubMenu: [{}]
        }
      ]
    },
    {
      Id: 1005,
      PId: 0,
      Name: 'Production Info',
      '[Description]': 'Production Info',
      Icon: 'https://res.cloudinary.com/dbklykign/image/upload/v1626081292/Vistrian/Icons/Production_Info_c27jb2.svg',
      IconActive:
        'https://res.cloudinary.com/dbklykign/image/upload/v1626081290/Vistrian/Icons/Production_Info_active_nr5kjm.svg',
      Permalink: '/home/productioninfo',
      PageType: 'Card',
      FilterType: 'None',
      FilterLevel: '-1',
      IsLeaf: '1',
      SubMenu: [
        {
          SubMenu: [{}]
        }
      ]
    },
    {
      Id: 1006,
      PId: 0,
      Name: 'My Pages',
      '[Description]': 'My Pages',
      Icon: 'https://res.cloudinary.com/dbklykign/image/upload/v1626081920/Vistrian/Icons/My_Pages_t5zn5z.svg',
      IconActive:
        'https://res.cloudinary.com/dbklykign/image/upload/v1626081928/Vistrian/Icons/My_Pages_active_xfnyte.svg',
      Permalink: '/home/mypages',
      PageType: 'My Page',
      FilterType: 'None',
      FilterLevel: '-1',
      IsLeaf: '1',
      SubMenu: [
        {
          SubMenu: [{}]
        }
      ]
    }
  ]
];
