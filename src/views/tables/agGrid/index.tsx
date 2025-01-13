import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
// import 'ag-grid-enterprise'; //License 필요
import IframeAgGrid from './iframeAgGrid';
import IframeAgGridSet from './iframeAgGridSet';
import IframeAgGridPinning from './iframeAgGridPinning';
import IframeAgGridButton from './iframeAgGridButton';
import IframeAgGridRowDrag from './iframeAgGridRowDrag';
import IframeAgGridComplex from './iframeAgGridComplex';
import './agGrid.less';
const AgGrid = () => {
  const items = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/tables/AG-Grid',
          children: [
            {
              label: 'AG-Grid',
              path: '/tables/AG-Grid',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: 'AG Grid',
    description: '',
  };

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto w-full">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <IframeAgGrid />
      <hr className="border-t border-solid border-gray-300 my-12" />
      <IframeAgGridSet />
      <hr className="border-t border-solid border-gray-300 my-12" />
      <IframeAgGridPinning />
      <hr className="border-t border-solid border-gray-300 my-12" />
      <IframeAgGridButton />
      <hr className="border-t border-solid border-gray-300 my-12" />
      <IframeAgGridRowDrag />
      <hr className="border-t border-solid border-gray-300 my-12" />
      <IframeAgGridComplex />
    </div>
  );
};

export default AgGrid;
