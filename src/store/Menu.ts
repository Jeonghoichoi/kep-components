import { NavigationItem } from '@/interfaces/MenuInterface';

const NavigationMeta: NavigationItem[] = [
  {
    key: `KEP components`,
    label: 'KEP Components',
    type: 'group',
    icon: `/kep-component/resources/icon/icon_menu_component.svg`,
    children: [
      {
        key: `inputs`,
        label: 'Inputs type',
        type: 'group',
        icon: `/kep-component/resources/icon/icon_menu_input.svg`,
        children: [
          {
            path: '/inputs/button',
            key: `button`,
            label: 'Button',
          },
          {
            path: '/inputs/buttonGroup',
            key: `button group`,
            label: 'Button Group',
          },
          {
            path: '/inputs/radio',
            key: `radio`,
            label: 'Radio',
          },
          {
            path: '/inputs/radioGroup',
            key: `radio group`,
            label: 'Radio Group',
          },
          {
            path: '/inputs/selects',
            key: `selects`,
            label: 'Selects',
          },
          {
            path: '/inputs/inputs',
            key: `inputs`,
            label: 'Inputs',
          },
          {
            path: '/inputs/autoComplete',
            key: `autocomplete`,
            label: 'Autocomplete',
          },
          {
            path: '/inputs/quantityInputs',
            key: `quantity inputs`,
            label: 'Quantity Inputs',
          },
          {
            path: '/inputs/textarea',
            key: `textarea`,
            label: 'Textarea',
          },
          {
            path: '/inputs/toggles',
            key: `toggles`,
            label: 'Toggles',
          },
          {
            path: '/inputs/tabs',
            key: `tabs`,
            label: 'Tabs',
          },
          {
            path: '/inputs/form',
            key: `form`,
            label: 'form',
          },
        ],
      },
      {
        key: `dataDisplay`,
        label: 'Data Display',
        type: 'group',
        icon: `/kep-component/resources/icon/icon_menu_display.svg`,
        children: [
          {
            path: '/dataDisplay/avatar',
            key: `avatar`,
            label: 'Avatar',
          },
          {
            path: '/dataDisplay/badge',
            key: `badge`,
            label: 'Badge',
          },
          {
            path: '/dataDisplay/chip',
            key: `chip`,
            label: 'Chip',
          },
          {
            path: '/dataDisplay/lists',
            key: `lists`,
            label: 'Lists',
          },
          {
            path: '/dataDisplay/cards',
            key: `cards`,
            label: 'Cards',
          },

          {
            path: '/dataDisplay/table',
            key: `table`,
            label: 'Table',
          },
          {
            path: '/dataDisplay/popover',
            key: `popover`,
            label: 'Popover',
          },
          {
            path: '/dataDisplay/tooltip',
            key: `tooltip`,
            label: 'Tooltip',
          },
          {
            path: '/dataDisplay/divider',
            key: `divider`,
            label: 'Divider',
          },
          {
            path: '/dataDisplay/accordion',
            key: `accordion`,
            label: 'Accordion',
          },
        ],
      },
      {
        key: `feedback`,
        label: 'FeedBack',
        type: 'group',
        icon: `/kep-component/resources/icon/icon_menu_feedback.svg`,
        children: [
          {
            path: '/feedback/alert',
            key: `alert`,
            label: 'Alert',
          },
          {
            path: '/feedback/modal',
            key: `modal`,
            label: 'Modal',
          },
          {
            path: '/feedback/progress',
            key: `progress`,
            label: 'Progress',
          },
        ],
      },
      {
        key: `layout`,
        label: 'Layout',
        type: 'group',
        icon: `/kep-component/resources/icon/icon_menu_layout.svg`,
        children: [
          {
            path: '/layout/grid',
            key: `grid`,
            label: 'Grid',
          },
          {
            path: '/layout/flex',
            key: `flex`,
            label: 'Flex',
          },
          {
            path: '/layout/flexgridsample',
            key: `flexgridsample`,
            label: 'FlexgridSample',
          },
        ],
      },
      {
        key: `chart`,
        label: 'Chart',
        type: 'group',
        icon: `/kep-component/resources/icon/icon_menu_chart.svg`,
        children: [
          {
            path: '/chart/barChart',
            key: `barchart`,
            label: 'Barchart',
          },
          {
            path: '/chart/doughnutChart',
            key: `doughnutchart`,
            label: 'Doughnutchart',
          },
          {
            path: '/chart/bubbleChart',
            key: `bubblechart`,
            label: 'Bubblechart',
          },
          {
            path: '/chart/lineChart',
            key: `linechart`,
            label: 'Linechart',
          },
          {
            path: '/chart/pieChart',
            key: `piechart`,
            label: 'Piechart',
          },
          {
            path: '/chart/polarAreaChart',
            key: `polarAreachart`,
            label: 'PolarAreachart',
          },
          {
            path: '/chart/radarChart',
            key: `radarchart`,
            label: 'Radarchart',
          },
          {
            path: '/chart/scatterChart',
            key: `scatterchart`,
            label: 'Scatterchart',
          },
          {
            path: '/chart/chartsample',
            key: `chartSample`,
            label: 'ChartSample',
          },
          {
            path: '/chart/chartsample02',
            key: `chartSample02`,
            label: 'ChartSample02',
          },
          {
            path: '/chart/chartsample03',
            key: `chartSample03`,
            label: 'ChartSample03',
          },
          {
            path: '/chart/chartsample04',
            key: `chartSample04`,
            label: 'ChartSample04',
          },
          {
            path: '/chart/chartsample05',
            key: `chartSample05`,
            label: 'chartSample05',
          },
        ],
      },
    ],
  },
  {
    path: '/colorChip',
    key: `color chip`,
    label: 'Color chip',
    icon: `/kep-component/resources/icon/icon_menu_colors.svg`,
  },
  {
    path: '/icons',
    key: `icons`,
    label: 'Icons',
    icon: `/kep-component/resources/icon/icon_menu_icons.svg`,
  },
  {
    path: '/breakPoint',
    key: `breakpoint`,
    label: 'BreakPoint',
    icon: `/kep-component/resources/icon/icon_menu_breakpoint.svg`,
  },
  {
    key: `tables`,
    label: 'React-Tables',
    type: 'group',
    icon: `/kep-component/resources/icon/icon_menu_display.svg`, // 임시
    children: [
      {
        path: '/tables/reactTable',
        key: `react table`,
        label: 'React-Table',
        icon: `/kep-component/resources/icon/icon_menu_RT.svg`,
      },
      {
        path: '/tables/agGrid',
        key: `ag-grid`,
        label: 'Ag-Grid',
        icon: `/kep-component/resources/icon/icon_menu_AG.svg`,
      },
      {
        path: '/tables/griddle',
        key: `griddle`,
        label: 'Griddle',
        icon: `/kep-component/resources/icon/icon_menu_GD.svg`,
      },
    ],
  },
  {
    path: '/kakaoAddress',
    key: `kakaoAddress`,
    label: '카카오 주소검색',
    icon: `/kep-component/resources/icon/icon_menu_colors.svg`,
  },
  {
    key: `openAI`,
    label: 'openAI',
    type: 'group',
    icon: `/kep-component/resources/icon/icon_menu_display.svg`, // 임시
    children: [
      {
        path: '/openAI/playground',
        key: `playground`,
        label: 'playground',
        icon: `/kep-component/resources/icon/icon_menu_RT.svg`,
      },
      // {
      //   path: '/openAI/statistics',
      //   key: `statistics`,
      //   label: 'statistics',
      //   icon: `/kep-component/resources/icon/icon_menu_RT.svg`,
      // },
    ],
  },
];

export default NavigationMeta;
