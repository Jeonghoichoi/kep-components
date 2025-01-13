import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import { MembertableData } from '@/interfaces/UtilityInterface';
import './index.less';

const Griddles = () => {
  const data: MembertableData[] = [
    {
      "id": 0,
      "name": "류윤태",
      "city": "서울",
      "member": "비회원",
      "children": "1명"
    },
    {
      "id": 1,
      "name": "박예숙",
      "city": "서울",
      "member": "회원",
      "children": "2명"
    },
    {
      "id": 2,
      "name": "고정태",
      "city": "서울",
      "member": "회원",
      "children": "2명"
    },
    {
      "id": 3,
      "name": "오명희",
      "city": "서울",
      "member": "회원",
      "children": "2명"
    },
    {
      "id": 4,
      "name": "표원재",
      "city": "서울",
      "member": "회원",
      "children": "2명"
    },
    {
      "id": 5,
      "name": "추호정",
      "city": "서울",
      "member": "비회원",
      "children": "3명"
    },
    {
      "id": 6,
      "name": "서예훈",
      "city": "서울",
      "member": "회원",
      "children": "2명"
    },
    {
      "id": 7,
      "name": "백우재",
      "city": "서울",
      "member": "비회원",
      "children": "2명"
    },
    {
      "id": 8,
      "name": "신광훈",
      "city": "서울",
      "member": "회원",
      "children": "1명"
    },
    {
      "id": 9,
      "name": "장한결",
      "city": "서울",
      "member": "회원",
      "children": "1명"
    },
    {
      "id": 10,
      "name": "노하나",
      "city": "서울",
      "member": "회원",
      "children": "1명"
    },
  ]

  const items = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/tables/griddle',
          children: [
            {
              label: 'Griddle',
              path: '/tables/griddle',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: 'Griddle Table',
    description: ``,
  };
  
  const CustomHeading = ({title}: {title: string}) => <span style={{ color: '#3b82f6' }}>{title}</span>;
  const NewLayout = ({ Table, Pagination, Filter, SettingsWrapper }: any) => (
    <div>
      <div className="flex justify-between mb-4">
        <Filter/>
        <SettingsWrapper/>
      </div>
      <Table />
      <Pagination />
    </div>
  );

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto w-full">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <div className='griddle-wrap mt-10'>
        <Griddle
          data={data}
          plugins={[plugins.LocalPlugin]}
          components={{
            Layout: NewLayout,
          }}
        >
          <RowDefinition>
            <ColumnDefinition id="id" title="아이디" />
            <ColumnDefinition id="name" title="이름" customHeadingComponent={CustomHeading} />
            <ColumnDefinition id="member" title="회원상태" />
            <ColumnDefinition id="city" title="지역" />
            <ColumnDefinition id="children" title="자녀수" />
          </RowDefinition>
        </Griddle>
      </div>
    </div>
  );
};

export default Griddles;
