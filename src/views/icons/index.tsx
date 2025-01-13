import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import IframeIcons from './iframeIcon';

const Icons = () => {
  const items = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'icons',
          path: '/icons',
        },
      ],
    },
  ];

  const PageInfo = {
    title: 'Icons',
    description: `Hero Icon을 상속받아 사용합니다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full w-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <IframeIcons />
    </div>
  );
};

export default Icons;
