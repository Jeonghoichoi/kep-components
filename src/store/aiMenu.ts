import { NavigationItem } from '@/interfaces/MenuInterface';

const OpenAINavigationMeta: NavigationItem[] = [
  {
    key: `Kyobo AI menu`,
    label: 'Kyobo AI Menu',
    type: 'group',
    icon: `/kep-component/resources/icon/icon_menu_component.svg`,
    children: [
      {
        key: `GET STATED`,
        label: 'GET STATED',
        type: 'group',
        icon: `/kep-component/resources/icon/icon_menu_input.svg`,
        children: [
          {
            path: '/openAI/serviceDEMO01',
            key: `Overview`,
            label: 'Overview',
          },
          {
            path: '/#',
            key: `Quickstart`,
            label: 'Quickstart',
          },
          {
            path: '/#',
            key: `Models`,
            label: 'Models',
          },
          {
            path: '/#',
            key: `Terms and Policies`,
            label: 'Terms and Policies',
          },
        ],
      },
      {
        key: `CAPABILITIES`,
        label: 'CAPABILITIES',
        type: 'group',
        icon: `/kep-component/resources/icon/icon_menu_display.svg`,
        children: [
          {
            path: '/#',
            key: `Text generation`,
            label: 'Text generation',
          },
          {
            path: '/#',
            key: `Vision`,
            label: 'Vision',
          },
          {
            path: '/#',
            key: `Image generation`,
            label: 'Image generation',
          },
          {
            path: '/#',
            key: `Audio generation`,
            label: 'Audio generation',
          },
          {
            path: '/#',
            key: `Text to speech`,
            label: 'Text to speech',
          },
          {
            path: '/#',
            key: `Speech to text`,
            label: 'Speech to text',
          },
          {
            path: '/#',
            key: `Embeddings`,
            label: 'Embeddings',
          },
          {
            path: '/#',
            key: `Moderation`,
            label: 'Moderation',
          },
          {
            path: '/#',
            key: `Reasoning`,
            label: 'Reasoning',
          },
          {
            path: '/#',
            key: `Structured Outputs`,
            label: 'Structured Outputs',
          },
          {
            path: '/#',
            key: `Predicted Outputs`,
            label: 'Predicted Outputs',
          },
          {
            path: '/#',
            key: `Function calling`,
            label: 'Function calling',
          },
        ],
      },
      {
        key: `Realtime`,
        label: 'Realtime',
        type: 'group',
        icon: `/kep-component/resources/icon/icon_menu_feedback.svg`,
        children: [
          {
            path: '/#',
            key: `Overview`,
            label: 'Overview',
          },
          {
            path: '/#',
            key: `Connect with WebRTC`,
            label: 'Connect with WebRTC',
          },
          {
            path: '/#',
            key: `...`,
            label: '...',
          },
        ],
      },
    ],
  },
];

export default OpenAINavigationMeta;
