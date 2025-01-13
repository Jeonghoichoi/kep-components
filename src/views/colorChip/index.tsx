import Breadcrumbs from '@/components/common/Breadcrumbs'; 
import PageInformation from '@/components/common/PageInformation';
import IframeColor from './iframeColor';
const ColorChip = () => {
	const items = [
		{
		  label: 'Home',
		  path: '/home/index',
		  children: [
			{
			  label: 'colorChip',
			  path: '/colorChip',
			  
			},
		  ],
		},
	  ];
	
	  const PageInfo = {
		title: "ColorChip",
		description: `tailwind에서 사용하는 기본 컬러 팔레트입니다. ex) bg-slate-50, bg-red-600`
	  }
	  return (
		<div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full w-full overflow-y-auto">
			<Breadcrumbs items={items} />
			<PageInformation PageInfo={PageInfo} />
			<IframeColor />
		</div>
	);
};

export default ColorChip;
