import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import Table from './ReactTable';
import './index.less';

const ReactTable = () => {
  const items = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/tables/React-Table',
          children: [
            {
              label: 'React-Table',
              path: '/tables/React-Table',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: 'React-Table',
    description:
      'TanStack Table은 TS/JS, React, Vue, Solid, Svelte를 지원하는 데이터 그리드를 구축하기 위한 헤드리스 UI 라이브러리입니다 헤드리스 UI는 UI 요소 및 상호 작용을 위한 논리, 상태, 처리 및 API를 제공하지만 마크업, 스타일 또는 사전 구축된 구현은 제공하지 않는 라이브러리 및 유틸리티에 대한 용어입니다.',
  };

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 overflow-y-auto h-full flex flex-col">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <Table />
      {/* <Test /> */}
    </div>
  );
};

export default ReactTable;
