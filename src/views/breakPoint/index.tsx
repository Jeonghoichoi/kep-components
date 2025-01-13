import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import IframeBreakPoint from './iframeBreakPoint';
import CodeBoard from '@/components/common/CodeBoard';
const Breakpoint = () => {
	const codebreakpoint = `const codebreakpoint = () => {
	return (
		<div className="flex items-center justify-center w-full h-40 text-center bg-gray-50 2xl:bg-gray-100 xl:bg-gray-200 lg:bg-gray-300 md:bg-gray-400 sm:bg-gray-500">
			<p className="text-sm text-gray-500 2xl:hidden">반응형 입니다.<br /> 해상도를 조절해보세요!</p>
			<p className="text-sm text-gray-500 hidden 2xl:block xl:hidden">2xl반응형 입니다.<br /> 해상도를 조절해보세요!</p>
			<p className="text-sm text-gray-500 hidden xl:block lg:hidden">xl 반응형 입니다. <br /> 해상도를 조절해보세요!</p>
			<p className="text-sm text-gray-500 hidden lg:block md:hidden">lg 반응형 입니다. <br /> 해상도를 조절해보세요!</p>
			<p className="text-sm text-gray-500 hidden md:block sm:hidden">md 반응형 입니다. <br /> 해상도를 조절해보세요!</p>
			<p className="text-sm text-white hidden sm:block">sm 반응형 입니다. <br /> 해상도를 조절해보세요!</p>
		</div>
	)
}`;
	const items = [
		{
		  label: 'Home',
		  path: '/home/index',
		  children: [
			{
			  label: 'breakPoint',
			  path: '/breakPoint',
			  
			},
		  ],
		},
	  ];
	
	  const PageInfo = {
		title: "Breakpoint",
		description: `다양한 디스플레이 크기와 해상도를 수용하기 위해 웹 사이트나 애플리케이션의 레이아웃이 변경되는 특정 화면 크기 또는 장치 너비를 나타냅니다.
		KEP COMPONENT는 tailwind를 사용하여 breakpoint를 정의하여 사용합니다.`
	  }
	return (
		<div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full w-full overflow-y-auto">
			<Breadcrumbs items={items} />
			<PageInformation PageInfo={PageInfo} />
			<IframeBreakPoint />
			<CodeBoard code={codebreakpoint} />
		</div>
	);
};

export default Breakpoint;

