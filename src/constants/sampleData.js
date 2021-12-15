import {
  menuCustomize,
  menuEditPane,
  menuFullScreen,
  menuRemove,
  menuScaleYAxis,
  menuShowDetails,
  menuShowOverlays
} from '../assets/icons';

/* eslint-disable max-len */

export const filterMenuData = [
  { label: 'Clear Filter', id: 1, role: 'clear' },
  { label: 'Save Dashboard', id: 2, role: 'save' },
  { label: 'Print Dashboard', id: 3, role: 'print' },
  { label: 'Share Dashboard', id: 4, role: 'share' }
];

export const profileMenuData = [
  { label: 'Filter', id: 1, role: 'filter' },
  { label: 'Logout', id: 2, role: 'logout' }
];

export const dataView = [
  {
    groupTitle: 'Process Group',
    id: 'id-1',
    required: 'true',
    type: 'object',
    values: [
      {
        name: 'Cleaning',
        id: 'id-1-2',
        required: 'false',
        type: 'object',
        attribute: 'Category',
        values: [
          {
            name: 'SA Prime Debond',
            id: 'id-1-2-1',
            required: 'false',
            type: 'multiselect',
            attribute: 'Machines',
            values: [
              {
                name: 'CPA001',
                id: 'id-1-2-1-1'
              },
              { name: 'CPA002', id: 'id-1-2-1-2' },
              { name: 'CPA003', id: 'id-1-2-1-3' },
              { name: 'CPA004', id: 'id-1-2-1-4' },
              { name: 'CPA005', id: 'id-1-2-1-5' },
              { name: 'CPA006', id: 'id-1-2-1-6' },
              { name: 'CPA007', id: 'id-1-2-1-7' }
            ]
          },
          {
            name: 'SA Prime Cleaning',
            id: 'id-1-2-2',
            required: 'false',
            type: 'object',
            attribute: 'Machines',
            values: [
              {
                name: 'CPA001',
                id: 'id-1-2-2-1',
                required: 'false',
                type: 'object'
              },
              { name: 'CPA010', id: 'id-1-2-2-2' },
              { name: 'CPA011', id: 'id-1-2-2-3' },
              { name: 'CPA012', id: 'id-1-2-2-4' },
              { name: 'CPA013', id: 'id-1-2-2-5' },
              { name: 'CPA014', id: 'id-1-2-2-6' },
              { name: 'CPA015', id: 'id-1-2-2-7' },
              { name: 'CPA016', id: 'id-1-2-2-8' },
              { name: 'CPA017', id: 'id-1-2-2-9' },
              { name: 'CPA018', id: 'id-1-2-2-10' },
              { name: 'CPA019', id: 'id-1-2-2-11' },
              { name: 'CPA020', id: 'id-1-2-2-12' },
              { name: 'CPA021', id: 'id-1-2-2-13' },
              { name: 'CPA022', id: 'id-1-2-2-14' },
              { name: 'CPA023', id: 'id-1-2-2-15' },
              { name: 'CPA024', id: 'id-1-2-2-16' },
              { name: 'CPA025', id: 'id-1-2-2-17' }
            ]
          }
        ]
      }
    ]
  }
];

export const kpvData = [
  {
    groupTitle: 'Defect Rate',
    id: 'id-1',
    values: [
      {
        KPV: 'Dot Size Adhesive D-1 Defects Per Cycle',
        id: 'id-1-1',
        L1: '-0.156 to 0.45',
        L2: '-0.156 to 0.45',
        Timestamp: '24-06-2021, 11:03:00.045 AM',
        Plant: 'Vietnam',
        Value: '702.00 ms'
      },
      {
        KPV: 'Dot Size Adhesive D-1 Defects Per Cycle',
        id: 'id-1-2',
        L1: '-0.12 to 0.56',
        L2: '-0.12 to 0.56',
        Timestamp: '24-06-2021, 10:59:00.213 AM',
        Plant: 'Vietnam',
        Value: '0 ms'
      },
      {
        KPV: 'Defect Rate 2',
        id: 'id-1-3',
        L1: '-0.21 to 0.25',
        L2: '-0.21 to 0.25',
        Timestamp: '24-06-2021, 11:03:00.253 AM',
        Plant: 'Malaysia',
        Value: '0.4272 %'
      },
      {
        KPV: 'Dot Size Adhesive D-2 Defects Per Cycle',
        id: 'id-1-4',
        L1: '-0.132 to 0.5',
        L2: '-0.132 to 0.5',
        Timestamp: '24-06-2021, 12:39:00.012 PM',
        Plant: 'Vietnam',
        Value: '123.00 ms'
      },
      {
        KPV: 'Dot Size Adhesive D-2 Defects Per Cycle',
        id: 'id-1-5',
        L1: '-0.156 to 0.45',
        L2: '-0.156 to 0.45',
        Timestamp: '24-06-2021, 11:03:00.045 AM',
        Plant: 'Malaysia',
        Value: '12 ms'
      },
      {
        KPV: 'Defect Rate 3',
        id: 'id-1-6',
        L1: '-0.12 to 0.56',
        L2: '-0.12 to 0.56',
        Timestamp: '24-06-2021, 10:59:00.213 AM',
        Plant: 'Vietnam',
        Value: '0.312 %'
      },
      {
        KPV: 'Dot Size Adhesive D-3 Readings Per Cycle',
        id: 'id-1-7',
        L1: '-0.21 to 0.25',
        L2: '-0.21 to 0.25',
        Timestamp: '24-06-2021, 11:03:00.253 AM',
        Plant: 'Malaysia',
        Value: '132.00 ms'
      }
    ]
  },
  {
    groupTitle: 'Tank 1',
    id: 'id-2',
    values: [
      {
        KPV: 'Recirc Flowrate',
        id: 'id-2-1',
        L1: '-0.156 to 0.45',
        L2: '-0.156 to 0.45',
        Timestamp: '24-06-2021, 11:03:00.045 AM',
        Plant: 'Vietnam',
        Value: '165 ipm'
      },
      {
        KPV: 'Station 1 Sonication Time',
        id: 'id-2-2',
        L1: '-0.12 to 0.56',
        L2: '-0.12 to 0.56',
        Timestamp: '24-06-2021, 10:59:00.213 AM',
        Plant: 'Malaysia',
        Value: '48'
      },
      {
        KPV: 'Station 1 Total Process Time',
        id: 'id-2-3',
        L1: '-0.21 to 0.25',
        L2: '-0.21 to 0.25',
        Timestamp: '24-06-2021, 11:03:00.253 AM',
        Plant: 'Malaysia',
        Value: '48'
      },
      {
        KPV: 'Station 1 Sonication Power',
        id: 'id-2-4',
        L1: '-0.132 to 0.5',
        L2: '-0.132 to 0.5',
        Timestamp: '24-06-2021, 12:39:00.012 PM',
        Plant: 'Malaysia',
        Value: '0 watt'
      },
      {
        KPV: 'Station 2 Sonication Time',
        id: 'id-2-5',
        L1: '-0.156 to 0.45',
        L2: '-0.156 to 0.45',
        Timestamp: '24-06-2021, 11:03:00.045 AM',
        Plant: 'Malaysia',
        Value: '58'
      },
      {
        KPV: 'Station 2 Total Process Time',
        id: 'id-2-6',
        L1: '-0.12 to 0.56',
        L2: '-0.12 to 0.56',
        Timestamp: '24-06-2021, 10:59:00.213 AM',
        Plant: 'Malaysia',
        Value: '58'
      },
      {
        KPV: 'Station 2 Sonication Power',
        id: 'id-2-7',
        L1: '-0.21 to 0.25',
        L2: '-0.21 to 0.25',
        Timestamp: '24-06-2021, 11:03:00.253 AM',
        Plant: 'Vietnam',
        Value: '559 watt'
      }
    ]
  },
  {
    groupTitle: 'External I/O',
    id: 'id-3',
    values: [
      {
        KPV: 'SMC Pressure (MOXA) - VS',
        id: 'id-3-1',
        L1: '-0.132 to 0.5',
        L2: '-0.132 to 0.5',
        Timestamp: '24-06-2021, 12:39:00.012 PM',
        Plant: 'Malaysia',
        Value: '100.62 kPa'
      },
      {
        KPV: 'SMC Voltage (MOXA)',
        id: 'id-3-2',
        L1: '-0.156 to 0.45',
        L2: '-0.156 to 0.45',
        Timestamp: '24-06-2021, 11:03:00.045 AM',
        Plant: 'Malaysia',
        Value: '1.48 Volt'
      }
    ]
  },
  {
    groupTitle: 'Log File',
    id: 'id-4',
    values: [
      {
        KPV: 'Dot Size Adhesive Diameter 1',
        id: 'id-4-1',
        L1: '-0.12 to 0.56',
        L2: '-0.12 to 0.56',
        Timestamp: '24-06-2021, 10:59:00.213 AM',
        Plant: 'Vietnam',
        Value: '237.70 um'
      },
      {
        KPV: 'Dot Size Adhesive Diameter 2',
        id: 'id-4-2',
        L1: '-0.21 to 0.25',
        L2: '-0.21 to 0.25',
        Timestamp: '24-06-2021, 11:03:00.253 AM',
        Plant: 'Malaysia',
        Value: '245.90 um'
      },
      {
        KPV: 'Dot Size Adhesive Dot 1',
        id: 'id-4-3',
        L1: '-0.132 to 0.5',
        L2: '-0.132 to 0.5',
        Timestamp: '24-06-2021, 12:39:00.012 PM',
        Plant: 'Malaysia',
        Value: '0.0444 mm2'
      },
      {
        KPV: 'Dot Size Adhesive Dot 2',
        id: 'id-4-4',
        L1: '-0.156 to 0.45',
        L2: '-0.156 to 0.45',
        Timestamp: '24-06-2021, 11:03:00.045 AM',
        Plant: 'Vietnam',
        Value: '0.0475 mm2'
      },
      {
        KPV: 'Score : 11_Transfer Head',
        id: 'id-4-5',
        L1: '-0.12 to 0.56',
        L2: '-0.12 to 0.56',
        Timestamp: '24-06-2021, 10:59:00.213 AM',
        Plant: 'Malaysia',
        Value: '78.00'
      },
      {
        KPV: 'Score: 19 Dispense Table Suspension Angle',
        id: 'id-4-6',
        L1: '-0.21 to 0.25',
        L2: '-0.21 to 0.25',
        Timestamp: '24-06-2021, 11:03:00.253 AM',
        Plant: 'Vietnam',
        Value: '98.00'
      }
    ]
  }
];

export const tempColPropsInGeneral = [
  {
    label: 'KPV',
    name: 'KPV',
    width: 34,
    textAlign: 'none',
    order: 1,
    isPresent: true,
    searchIcon: true
  },
  { label: 'L1', name: 'L1', width: 12, order: 2, isPresent: true },
  { label: 'L2', name: 'L2', width: 12, order: 3, isPresent: true },
  { label: 'Timestamp', name: 'Timestamp', width: 22, order: 4, isPresent: true },
  { label: 'Value', name: 'Value', width: 12, order: 5, isPresent: true },
  { label: 'Action', name: 'Action', width: 8, order: 6, isPresent: true }
];

export const tempColPropsInShortlist = [
  {
    label: 'KPV Name',
    name: 'KPV',
    width: 27.5,
    textAlign: 'none',
    order: 1,
    isPresent: true
  },
  { label: 'KPV Group', name: 'groupName', width: 8.5, order: 2, isPresent: true },
  { label: 'Machine', name: 'machineName', width: 7, order: 3, isPresent: true },
  { label: 'L1', name: 'L1', width: 8.5, order: 4, isPresent: true },
  { label: 'L2', name: 'L2', width: 8.5, order: 5, isPresent: true },
  { label: 'Timestamp', name: 'Timestamp', width: 17, order: 6, isPresent: true },
  { label: 'Plant', name: 'Plant', width: 7, order: 7, isPresent: true },
  { label: 'Value', name: 'Value', width: 9, order: 8, isPresent: true },
  { label: 'Action', name: 'Action', width: 7, order: 9, isPresent: true }
];

export const kpvDetails = {
  'KPV Configuration': [
    {
      'KPV Name': 'CPA041/Defectrate/ Defect Rate 1',
      'Unit of Measure': 'MS',
      Notes: 'Lorem Ipsum Dolor Sit Amet,'
    }
  ],
  'Plot Chart': [
    {
      'Data Chart': 'Plot',
      'Run Chart': 'Plot',
      SPC: 'NA'
    }
  ],
  'DAQ Settings': {
    'Gain / Offset': {
      Gain: '1.23',
      Offset: '32.1',
      'KPV Read value': '135.5'
    },
    'KPV Address': [
      {
        'Tag Name': 'CPAO41',
        'Column No.': '121',
        'Column Name': 'Defect Rate'
      }
    ]
  },
  'Process Settings': {
    'Limit Setting': [
      {
        Limits: 'L1',
        From: 5,
        To: 95,
        'Band Colour': 'yellow',
        Alarm: true
      },
      {
        Limits: 'L2',
        From: 34,
        To: 76,
        'Band Colour': 'orange',
        Alarm: false
      }
    ]
  },
  'SPC Settings': {},
  'Display Settings': {}
};

export const editPaneMenu = {
  dataChart: [
    {
      id: '1-1',
      label: 'View Full Screen',
      value: 'fullScreen',
      icon: 'https://res.cloudinary.com/vistrian/image/upload/v1634017251/Chart_menu_full_screen_pkv6iv.svg'
    },
    {
      id: '1-2',
      label: 'Edit Pane',
      value: 'editPane',
      icon: 'https://res.cloudinary.com/vistrian/image/upload/v1634017251/Chart_menu_edit_pane_izml94.svg'
    },
    {
      id: '1-3',
      label: 'Customise KPVs',
      value: 'customiseKpvs',
      icon: 'https://res.cloudinary.com/vistrian/image/upload/v1634017251/Chart_menu_customize_cjewlx.svg'
    },
    {
      id: '1-4',
      label: 'Show Details',
      value: 'showDetails',
      icon: 'https://res.cloudinary.com/vistrian/image/upload/v1634017251/Chart_menu_show_details_vpnhyu.svg',
      subMenu: [
        {
          id: '1-4-1',
          label: 'KPV Legends',
          value: 'legends'
        },
        {
          id: '1-4-2',
          label: 'X-axis',
          value: 'x-axis'
        },
        {
          id: '1-4-3',
          label: 'Y-axis',
          value: 'y-axis'
        },
        {
          id: '1-4-4',
          label: 'Annotations',
          value: 'annotations'
        }
      ]
    },
    {
      id: '1-5',
      label: 'Show Overlays',
      value: 'showOverlays',
      icon: 'https://res.cloudinary.com/vistrian/image/upload/v1634017251/Chart_menu_show_overlays_squ39f.svg',
      subMenu: [
        {
          id: '1-5-1',
          label: 'L1 Limits',
          value: 'l1Limits'
        },
        {
          id: '1-5-2',
          label: 'L2 Limits',
          value: 'l2Limits'
        }
      ]
    },
    {
      id: '1-6',
      label: 'Scale Y-Axis',
      value: 'scaleYAxis',
      icon: 'https://res.cloudinary.com/vistrian/image/upload/v1634017253/Chart_menu_scale_Y_axis_se2izd.svg',
      subMenu: [
        {
          id: '1-6-1',
          label: 'Auto',
          value: 'auto'
        },
        {
          id: '1-6-2',
          label: 'Process Window',
          value: 'processWindow'
        },
        {
          id: '1-6-3',
          label: 'Manual',
          value: 'manual'
        }
      ]
    },
    {
      id: '1-7',
      label: 'Remove Pane',
      value: 'removePane',
      icon: 'https://res.cloudinary.com/vistrian/image/upload/v1634017251/Chart_menu_remove_pane_t88nsg.svg'
    }
  ],
  transitionChart: [
    {
      id: '1-1',
      label: 'View Full Screen',
      value: 'fullScreen',
      icon: 'https://res.cloudinary.com/vistrian/image/upload/v1634017251/Chart_menu_full_screen_pkv6iv.svg'
    },
    {
      id: '1-2',
      label: 'Edit Pane',
      value: 'editPane',
      icon: 'https://res.cloudinary.com/vistrian/image/upload/v1634017251/Chart_menu_edit_pane_izml94.svg'
    },
    {
      id: '1-3',
      label: 'Customise Machines',
      value: 'customiseKpvs',
      icon: 'https://res.cloudinary.com/vistrian/image/upload/v1634017251/Chart_menu_customize_cjewlx.svg'
    },
    {
      id: '1-4',
      label: 'Show Details',
      value: 'showDetails',
      icon: 'https://res.cloudinary.com/vistrian/image/upload/v1634017251/Chart_menu_show_details_vpnhyu.svg',
      subMenu: [
        {
          id: '1-4-1',
          label: 'Legends',
          value: 'legends'
        },
        {
          id: '1-4-2',
          label: 'X-axis',
          value: 'x-axis'
        },
        {
          id: '1-4-3',
          label: 'Y-axis',
          value: 'y-axis'
        }
      ]
    },
    {
      id: '1-7',
      label: 'Remove Pane',
      value: 'removePane',
      icon: 'https://res.cloudinary.com/vistrian/image/upload/v1634017251/Chart_menu_remove_pane_t88nsg.svg'
    }
  ]
};

export const upsertOptions = {
  dataChart: [
    {
      id: '1-1',
      label: 'Pane Title',
      value: 'paneTitle',
      type: 'paneTitle'
    },
    {
      id: '1-2',
      label: 'Customise KPVs',
      value: 'customiseKpvs',
      type: 'customiseKpvs'
    },
    {
      id: '1-3',
      label: 'Show Details',
      value: 'showDetails',
      type: 'showDetails',
      subMenu: [
        {
          id: '1-3-1',
          label: 'Y-axis',
          value: 'y-axis'
        },
        {
          id: '1-3-2',
          label: 'X-axis',
          value: 'x-axis'
        },
        {
          id: '1-3-3',
          label: 'Legends',
          value: 'legends'
        },
        {
          id: '1-3-4',
          label: 'Annotated points',
          value: 'annotatedPts'
        }
      ]
    },
    {
      id: '1-4',
      label: 'Show Overlays',
      value: 'showOverlays',
      type: 'showOverlays',
      subMenu: [
        {
          id: '1-4-1',
          label: 'L1 limits',
          value: 'l1-limits'
        },
        {
          id: '1-4-2',
          label: 'L2 limits',
          value: 'l2-limits'
        }
      ]
    },
    {
      id: '1-5',
      label: 'Y-Axis Settings',
      value: 'yAxis-settings',
      type: 'yAxis-settings',
      subMenu: [
        {
          id: '1-5-1',
          label: 'Single Y-axis',
          value: false
        },
        {
          id: '1-5-2',
          label: 'Multiple Y-axis',
          value: true
        }
      ]
    },
    {
      id: '1-6',
      label: 'Scale Y-Axis',
      value: 'scale-yAxis',
      type: 'scale-yAxis',
      subMenu: [
        { id: '1-6-1', label: 'Auto', value: 'auto' },
        { id: '1-6-2', label: 'Process Window', value: 'processWindow' },
        { id: '1-6-3', label: 'Manual', value: 'manual' }
      ]
    }
  ],
  transitionChart: [
    {
      id: '1-1',
      label: 'Pane Title',
      value: 'paneTitle',
      type: 'paneTitle'
    },
    {
      id: '1-2',
      label: 'Transition Charts',
      value: 'transitionCharts',
      type: 'transitionCharts',
      subMenu: [
        {
          id: '1-2-1',
          label: 'Lots',
          value: 'lots'
        },
        {
          id: '1-2-2',
          label: 'Recipe',
          value: 'recipe'
        },
        {
          id: '1-2-3',
          label: 'Status',
          value: 'status'
        }
      ]
    },
    {
      id: '1-3',
      label: 'Customise Machines',
      value: 'customiseKpvs',
      type: 'customiseKpvs'
    },
    {
      id: '1-4',
      label: 'Pane Details',
      value: 'showDetails',
      type: 'showDetails',
      subMenu: [
        {
          id: '1-4-1',
          label: 'Legends',
          value: 'legends'
        },
        {
          id: '1-4-2',
          label: 'X-axis',
          value: 'x-axis'
        },
        {
          id: '1-4-3',
          label: 'Y-axis',
          value: 'y-axis'
        }
      ]
    }
  ]
};

export const chartOptions = [
  { label: 'Data Chart', value: 'dataChart' },
  { label: 'Transition Chart', value: 'transitionChart' }
];

export const myAnalytics = [
  {
    id: 1,
    title: 'Flowrate KPV SPC Data',
    category: 'Alarms',
    shared: true,
    machineIds: ['P2_1575', 'P2_1574', 'P2_2821'],
    menuId: 2004,
    kpvs: [
      {
        KPV: 'GEM SVID CurrentBondPadCol',
        id: 'id-1-1',
        L1: '-0.156 to 0.45',
        L2: '-0.156 to 0.45',
        Timestamp: '24-06-2021, 11:03:00.045 AM',
        Plant: 'Vietnam',
        Value: '702.00 ms',
        machineId: 'P2_1575',
        machineName: '1FAM0101',
        groupName: 'KPV'
      },
      {
        KPV: 'GEM SVID CurrentBondPadCol',
        id: 'id-1-1',
        L1: '-0.156 to 0.45',
        L2: '-0.156 to 0.45',
        Timestamp: '24-06-2021, 11:03:00.045 AM',
        Plant: 'Vietnam',
        Value: '702.00 ms',
        machineId: 'P2_1574',
        machineName: '1FAM0102',
        groupName: 'KPV'
      },
      {
        KPV: 'GEM SVID CurrentBondPadRow',
        id: 'id-1-2',
        L1: '-0.12 to 0.56',
        L2: '-0.12 to 0.56',
        Timestamp: '24-06-2021, 10:59:00.213 AM',
        Plant: 'Vietnam',
        Value: '0 ms',
        machineId: 'P2_1574',
        machineName: '1FAM0101',
        groupName: 'KPV'
      },
      {
        KPV: 'GEM SVID CurrentBondPadTargetDieNum',
        id: 'id-1-3',
        L1: '-0.21 to 0.25',
        L2: '-0.21 to 0.25',
        Timestamp: '24-06-2021, 11:03:00.253 AM',
        Plant: 'Malaysia',
        Value: '0.4272 %',
        machineId: 'P2_2821',
        machineName: '1FAM0102',
        groupName: 'KPV'
      }
    ],
    panesShortHandInfo: [
      {
        paneTitle: '',
        chartType: 'dataChart',
        machinesSelected: [
          {
            machineId: 'P2_2821',
            machineName: '1FAM0101',
            groupName: 'KPV',
            kpvId: 'id-1-1',
            kpvName: 'GEM SVID CurrentBondPadCol'
          },
          {
            machineId: 'P2_1574',
            machineName: '1FAM0102',
            groupName: 'KPV',
            kpvId: 'id-1-1',
            kpvName: 'GEM SVID CurrentBondPadCol'
          },
          {
            machineId: 'P2_1575',
            machineName: '1FAM0101',
            groupName: 'KPV',
            kpvId: 'id-1-2',
            kpvName: 'GEM SVID CurrentBondPadRow'
          }
        ],
        multiSelectKpv: false,
        showDetails: {
          'y-axis': true,
          'x-axis': true,
          legends: true,
          annotatedPts: false
        },
        multiAxis: false,
        singleGrid: true,
        scaleYaxis: 'auto',
        scaleYAxisRange: [],
        multiGrid: false,
        transitionChartType: false,
        pointInfoObj: []
      },
      {
        paneTitle: '',
        showDetails: {
          'y-axis': true,
          'x-axis': true,
          legends: true,
          annotatedPts: false
        },
        multiAxis: false,
        scaleYaxis: 'auto',
        scaleYAxisRange: [
          {
            from: '',
            to: ''
          }
        ],
        machinesSelected: [
          {
            kpvId: 'id-1-1',
            machineId: 'P2_1574',
            machineName: '1FAM0101',
            groupName: 'KPV',
            kpvName: 'GEM SVID CurrentBondPadCol'
          }
        ],
        chartType: 'dataChart',
        transitionChartType: 'lots',
        multiGrid: false,
        pointInfoObj: []
      }
    ]
  },
  {
    id: 2,
    title: 'Tank temperature Run Data',
    category: 'Daily Check',
    shared: false,
    menuId: 2004,
    machineIds: ['P1_7622', 'P1_7623', 'P1_3102'],
    kpvs: [
      {
        KPV: 'GEM SVID CurrentBondPadCol',
        id: 'id-1-1',
        L1: '-0.156 to 0.45',
        L2: '-0.156 to 0.45',
        Timestamp: '24-06-2021, 11:03:00.045 AM',
        Plant: 'Vietnam',
        Value: '702.00 ms',
        machineId: 'P1_7622',
        machineName: '1PLM0203',
        groupName: 'KPV'
      },
      {
        KPV: 'GEM SVID PostBondX',
        id: 'id-1-1',
        L1: '-0.156 to 0.45',
        L2: '-0.156 to 0.45',
        Timestamp: '24-06-2021, 11:03:00.045 AM',
        Plant: 'Malaysia',
        Value: '12 ms',
        machineId: 'P1_7623',
        machineName: '1PLM0203',
        groupName: 'KPV'
      },
      {
        KPV: 'GEM SVID CurrentBondPadCol',
        id: 'id-1-2',
        L1: '-0.156 to 0.45',
        L2: '-0.156 to 0.45',
        Timestamp: '24-06-2021, 11:03:00.045 AM',
        Plant: 'Vietnam',
        Value: '702.00 ms',
        machineId: 'P1_7623',
        machineName: '1PLM0405',
        groupName: 'KPV'
      },
      {
        KPV: 'GEM SVID CurrentBondPadRow',
        id: 'id-1-3',
        L1: '-0.12 to 0.56',
        L2: '-0.12 to 0.56',
        Timestamp: '24-06-2021, 10:59:00.213 AM',
        Plant: 'Vietnam',
        Value: '0 ms',
        machineId: 'P1_3102',
        machineName: '1PLM0405',
        groupName: 'KPV'
      }
    ],
    panesShortHandInfo: [
      {
        paneTitle: '',
        chartType: 'dataChart',
        machinesSelected: [
          {
            machineId: 'P1_7622',
            machineName: '1FAM0101',
            groupName: 'KPV',
            kpvId: 'id-1-1',
            kpvName: 'GEM SVID CurrentBondPadCol'
          },
          {
            machineId: 'P1_7623',
            machineName: '1FAM0102',
            groupName: 'KPV',
            kpvId: 'id-1-1',
            kpvName: 'GEM SVID CurrentBondPadCol'
          },
          {
            machineId: 'P1_7623',
            machineName: '1FAM0101',
            groupName: 'KPV',
            kpvId: 'id-1-2',
            kpvName: 'GEM SVID CurrentBondPadRow'
          },
          {
            machineId: 'P1_3102',
            machineName: '1FAM0102',
            groupName: 'KPV',
            kpvId: 'id-1-3',
            kpvName: 'GEM SVID CurrentBondPadTargetDieNum'
          }
        ],
        multiSelectKpv: false,
        showDetails: {
          'y-axis': true,
          'x-axis': true,
          legends: true,
          annotatedPts: false
        },
        multiAxis: false,
        singleGrid: true,
        scaleYaxis: 'auto',
        scaleYAxisRange: [],
        multiGrid: false,
        transitionChartType: false,
        pointInfoObj: []
      },
      {
        paneTitle: '',
        showDetails: {
          'y-axis': true,
          'x-axis': true,
          legends: true,
          annotatedPts: false
        },
        multiAxis: false,
        scaleYaxis: 'auto',
        scaleYAxisRange: [
          {
            from: '',
            to: ''
          }
        ],
        machinesSelected: [
          {
            kpvId: 'id-1-1',
            machineId: 'P1_7622',
            machineName: '1FAM0101',
            groupName: 'KPV',
            kpvName: 'GEM SVID CurrentBondPadCol'
          }
        ],
        chartType: 'dataChart',
        transitionChartType: 'lots',
        multiGrid: false,
        pointInfoObj: []
      }
    ]
  },
  {
    id: 3,
    title: 'Defect Rate - Data Chart',
    category: 'Log File',
    shared: false,
    machineIds: ['P1_2035', 'P1_2033', 'P1_6147'],
    menuId: 2004,
    kpvs: [
      {
        KPV: 'GEM SVID CurrentBondPadCol',
        id: 'id-1-1',
        L1: '-0.156 to 0.45',
        L2: '-0.156 to 0.45',
        Timestamp: '24-06-2021, 11:03:00.045 AM',
        Plant: 'Vietnam',
        Value: '702.00 ms',
        machineId: 'P1_2035',
        machineName: '2PLM0601',
        groupName: 'KPV'
      },
      {
        KPV: 'GEM SVID PreBondEPIX',
        id: 'id-1-8',
        L1: '-0.21 to 0.25',
        L2: '-0.21 to 0.25',
        Timestamp: '24-06-2021, 11:03:00.253 AM',
        Plant: 'Malaysia',
        Value: '132.00 ms',
        machineId: 'P1_2033',
        machineName: '2PLM0601',
        groupName: 'KPV'
      },
      {
        KPV: 'GEM SVID CurrentBondPadTargetDieNum',
        id: 'id-1-3',
        L1: '-0.21 to 0.25',
        L2: '-0.21 to 0.25',
        Timestamp: '24-06-2021, 11:03:00.253 AM',
        Plant: 'Malaysia',
        Value: '0.4272 %',
        machineId: 'P1_6147',
        machineName: '2PLM0403',
        groupName: 'KPV'
      },
      {
        KPV: 'GEM SVID PostBondAngle',
        id: 'id-1-4',
        L1: '-0.132 to 0.5',
        L2: '-0.132 to 0.5',
        Timestamp: '24-06-2021, 12:39:00.012 PM',
        Plant: 'Vietnam',
        Value: '123.00 ms',
        machineId: 'P1_2035',
        machineName: '2PLM0403',
        groupName: 'KPV'
      }
    ],
    panesShortHandInfo: [
      {
        paneTitle: '',
        chartType: 'dataChart',
        machinesSelected: [
          {
            machineId: 'P1_2035',
            machineName: '1FAM0101',
            groupName: 'KPV',
            kpvId: 'id-1-1',
            kpvName: 'GEM SVID CurrentBondPadCol'
          },
          {
            machineId: 'P1_2035',
            machineName: '1FAM0102',
            groupName: 'KPV',
            kpvId: 'id-1-1',
            kpvName: 'GEM SVID CurrentBondPadCol'
          },
          {
            machineId: 'P1_2033',
            machineName: '1FAM0101',
            groupName: 'KPV',
            kpvId: 'id-1-8',
            kpvName: 'GEM SVID CurrentBondPadRow'
          },
          {
            machineId: 'P1_6147',
            machineName: '1FAM0102',
            groupName: 'KPV',
            kpvId: 'id-1-3',
            kpvName: 'GEM SVID CurrentBondPadTargetDieNum'
          }
        ],
        multiSelectKpv: false,
        showDetails: {
          'y-axis': true,
          'x-axis': true,
          legends: true,
          annotatedPts: false
        },
        multiAxis: false,
        singleGrid: true,
        scaleYaxis: 'auto',
        scaleYAxisRange: [],
        multiGrid: false,
        transitionChartType: false,
        pointInfoObj: []
      },
      {
        paneTitle: '',
        showDetails: {
          'y-axis': true,
          'x-axis': true,
          legends: true,
          annotatedPts: false
        },
        multiAxis: false,
        scaleYaxis: 'auto',
        scaleYAxisRange: [
          {
            from: '',
            to: ''
          }
        ],
        machinesSelected: [
          {
            kpvId: 'id-1-1',
            machineId: 'P1_2035',
            machineName: '1FAM0101',
            groupName: 'KPV',
            kpvName: 'GEM SVID CurrentBondPadCol'
          }
        ],
        chartType: 'dataChart',
        transitionChartType: 'lots',
        multiGrid: false,
        pointInfoObj: []
      }
    ]
  }
];

export const myDashboardData = [
  {
    id: 1,
    title: 'Dashboard/OEE/Summary/HGA/HGA Compact/Daily/9th june',
    category: 'Summary',
    searchTags: ['OEE', 'Summary'],
    ids: ['P2_1575', 'P2_1574', 'P2_2821', '3'],
    shared: true,
    menuId: 2000
  },
  {
    id: 2,
    title: 'Dashboard/OEE/Trend/ASM/Monthly/May',
    category: 'Trend',
    searchTags: ['OEE', 'Trend', 'Summary'],
    shared: false,
    menuId: 2000,
    ids: ['P1_7622', 'P1_7623', 'P1_3102', '4']
  },
  {
    id: 3,
    title: 'Dashboard/OEE/Comparison/HGA/Combo/20th May',
    category: 'Comparison',
    searchTags: ['OEE', 'Comparison'],
    shared: false,
    menuId: 2000,
    ids: ['P1_2035', 'P1_2033', 'P1_6147', '5']
  }
];

export const alaramsData = [
  {
    id: '101',
    kpvId: 'id-1-1',
    machineName: 'ACAM55',
    kpvName: 'Logfile: UV1 Box',
    message: 'ACAM55, Logfile: UV1 Box Width raised Below Min. Limit Alarm',
    time: '08:14 AM'
  },
  {
    id: '102',
    kpvId: 'id-1-1',
    machineName: 'ACAM55',
    kpvName: 'Logfile: UV1 Box',
    message: 'ACAM55, Logfile: UV1 Box Height raised Below Min. Limit Alarm ',
    time: '08:00 AM'
  },
  {
    id: '103',
    kpvId: 'id-1-2',
    machineName: 'ACAM55',
    kpvName: 'Logfile: UV2 Box',
    message: 'ACAM55, Logfile: UV2 Box Width raised Below Min. Limit Alarm',
    time: '06:23 AM'
  },
  {
    id: '104',
    kpvId: 'id-1-3',
    machineName: 'Diakite01',
    kpvName: 'VS : VS - POS2 US',
    message: 'Diakite01, VS : VS - POS2 US Power - Side raised Below Min. Limit Alarm',
    time: '12:30 AM'
  }
];

export const detailedAlaramData = {
  101: {
    machines: 'ACAM-55',
    parameters: 'LogFile : UV1 Box Width',
    startTime: '08/17/2021 04:19:55 PM',
    endTime: '08/17/2021 04:19:55 PM',
    status: 'Below Min Limit',
    setMinLimit: '246',
    setMaxLimit: '254',
    setDuration: '1sec'
  },
  102: {
    machines: 'ACAM-55',
    parameters: 'LogFile : UV2 Box Width',
    startTime: '08/17/2021 04:19:55 PM',
    endTime: '08/17/2021 04:19:55 PM',
    status: 'Below Min Limit',
    setMinLimit: '246',
    setMaxLimit: '254',
    setDuration: '1sec'
  },
  103: {
    machines: 'Diakite-01',
    parameters: 'VS : VS - POS2 US Power - Side',
    startTime: '08/17/2021 04:19:55 PM',
    endTime: '08/17/2021 04:19:55 PM',
    status: 'Below Min Limit',
    setMinLimit: '246',
    setMaxLimit: '254',
    setDuration: '200ms'
  },
  104: {
    machines: 'Diakite-01',
    parameters: 'VS : VS - POS2 US Power - Bottom',
    startTime: '08/17/2021 04:19:55 PM',
    endTime: '08/17/2021 04:19:55 PM',
    status: 'Below Min Limit',
    setMinLimit: '246',
    setMaxLimit: '254',
    setDuration: '200ms'
  }

  //   : {
  //     machines:
  // parameters:
  // startTime:
  // endTime:
  // status:
  // setMinLimit:
  // setMaxLimit:
  // setDuration:
  //   }
};

export const alaramComments = {
  101: {
    description: 'DI water pH in wiping station above Normal',
    comments: [
      {
        profilePic: '',
        name: 'Lim Wei Chuen',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        profilePic: '',
        name: 'Chan, Liang Teng',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        profilePic: '',
        name: 'Bin Zaidin, Mohd Shafik',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ]
  }
};

export const approvalsData = [
  {
    message: 'Ainol Syakina Binti Mohd Rodhi submitted a Production Information and your approval is required.',
    time: '08:14 AM'
  },
  {
    message: 'Homer Castro submitted a Lot Test Information and your approval is required.',
    time: '08:00 AM'
  },
  {
    message: 'Aileen Marsh submitted a Production Information and your approval is required.',
    time: '06:23 AM'
  }
];

export const cbmAlertsData = [
  {
    message: 'Equipment Violation alert on 1SAW0420',
    time: '08:14:45 AM',
    date: '7/15/2021'
  },
  {
    message: 'Equipment Violation alert on 1SAW0420',
    time: '10:14:38 AM',
    date: '7/15/2021'
  },
  {
    message: 'Equipment Violation alert on 1SAW0460',
    time: '06:14:45 PM',
    date: '7/15/2021'
  },
  {
    message: 'Equipment Violation alert on 1SAW0320',
    time: '10:54:38 PM',
    date: '7/15/2021'
  }
];

export const scheduleData = [
  {
    message: 'Lim Wei Chuen submitted ADHOC schedule request and your approval is required',
    time: '08:14 AM'
  },
  {
    message: 'Chan, Liang Teng submitted New schedule request and your approval is required',
    time: '08:00 AM'
  },
  {
    message: 'Aileen Marsh submitted a ADHOC Schedule request and your approval is required.',
    time: '06:23 AM'
  },
  {
    message: 'Lim Wei Chuen submitted a 100% DVF Request and your approval is required.',
    time: '04:23 AM'
  }
];

export const userProfileDetails = {
  profileName: 'Mohammad Akhil',
  empId: 39403,
  userId: 'MdAkhil',
  role: 'Engineer',
  mail: 'md.akhil@panorbit.in',
  reportingManager: 'Louie Corbyn',
  phone: '0788- 536 7542'
};

export const obl = {
  0: {
    name: 'WUX',
    id: '_P2',
    attribute: 'Module'
  },
  1: {
    name: 'MF1 - APT',
    id: '_P2_1009',
    attribute: 'Process'
  },
  2: {
    name: 'TAPE',
    id: '_P2_1311',
    attribute: 'Group'
  },
  3: {
    name: 'TOKYO_WELD',
    id: '_P2_1380',
    attribute: 'Equipment'
  },
  4: [
    {
      name: '7BTWTS02',
      id: '_P2_1382',
      attribute: null
    },
    {
      name: '7BTWTS03',
      id: '_P2_1383',
      attribute: 'Equipment'
    }
  ]
};

export const cummObj = {
  Plant: {
    0: {
      0: {
        name: 'PEN',
        id: '_P1',
        attribute: 'Module'
      },
      1: {
        name: 'MF2 - SMARTLED',
        id: '_P1_1026',
        attribute: 'Process'
      },
      2: {
        name: 'AVI',
        id: '_P1_2886',
        attribute: 'Group'
      },
      3: {
        name: '2AVI04_E01',
        id: '_P1_2923',
        attribute: 'Equipment'
      },
      4: [
        {
          name: '2AVI0401',
          id: '_P1_3108',
          attribute: null
        }
      ]
    },
    1: {
      0: {
        name: 'PEN',
        id: '_P1',
        attribute: 'Module'
      },
      1: {
        name: 'MF1 - OSTAR',
        id: '_P1_1045',
        attribute: 'Process'
      },
      2: {
        name: 'PLASMA',
        id: '_P1_1046',
        attribute: 'Group'
      },
      3: {
        name: '1PLM01_F02',
        id: '_P1_2032',
        attribute: 'Equipment'
      },
      4: [
        {
          name: '1PLM0112',
          id: '_P1_2033',
          attribute: null
        },
        {
          name: '1PLM0111',
          id: '_P1_2034',
          attribute: null
        },
        {
          name: '1PLM0110',
          id: '_P1_2035',
          attribute: null
        }
      ]
    },
    2: {
      0: {
        name: 'PEN',
        id: '_P1',
        attribute: 'Module'
      },
      1: {
        name: 'MF1 - OSTAR',
        id: '_P1_1045',
        attribute: 'Process'
      },
      2: {
        name: 'SORTTAPER',
        id: '_P1_1320',
        attribute: 'Group'
      },
      3: {
        name: '1FBT01_T01',
        id: '_P1_1525',
        attribute: 'Equipment'
      },
      4: [
        {
          name: '1FBT0104',
          id: '_P1_1377',
          attribute: null
        },
        {
          name: '1FBT0105',
          id: '_P1_1378',
          attribute: null
        },
        {
          name: '1FBT0107',
          id: '_P1_1567',
          attribute: null
        }
      ]
    },
    3: {
      0: {
        name: 'WUX',
        id: '_P2',
        attribute: 'Module'
      },
      1: {
        name: 'MF1 - APT',
        id: '_P2_1009',
        attribute: 'Process'
      },
      2: {
        name: 'DETAPE',
        id: '_P2_2561',
        attribute: 'Group'
      },
      3: {
        name: 'INTO_TX20',
        id: '_P2_1709',
        attribute: 'Equipment'
      },
      4: [
        {
          name: '7BITDS01',
          id: '_P2_2700',
          attribute: null
        }
      ]
    },
    4: {
      0: {
        name: 'WUX',
        id: '_P2',
        attribute: 'Module'
      },
      1: {
        name: 'MF1 - APT',
        id: '_P2_1009',
        attribute: 'Process'
      },
      2: {
        name: 'LAYER_TRANSFER',
        id: '_P2_1327',
        attribute: 'Group'
      },
      3: {
        name: 'DATACON',
        id: '_P2_1328',
        attribute: 'Equipment'
      },
      4: [
        {
          name: '7BLAYS09',
          id: '_P2_1337',
          attribute: null
        },
        {
          name: '7BLAYS02',
          id: '_P2_1330',
          attribute: null
        }
      ]
    }
  },
  Interval: {
    0: {
      0: {
        name: 'Weekly',
        id: '_5',
        attribute: 'Week'
      },
      1: {
        name: 'Current Week',
        id: '_6',
        attribute: null
      }
    }
  }
};
