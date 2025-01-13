import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeQuantitySimple from './iframeQuantitySimple';
import IframeQuantityInput from './iframeQuantityInput';
const quantityInputs = () => {
  const quantitySimple: string = `const quantitySimple = () => {
	const [num, setNum] = useState<number>(0);
	const numPlus = () => {
		if (num >= 0) {
			setNum(num + 1);
		}
	};
	const numMinus = () => {
		if (num > 0) {
			setNum(num - 1);
		}
	};
	return(
		<div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
			<fieldset>
				<legend className="hidden">Quantity</legend>
				<div className="mt-2">
					<label htmlFor="Quantity" className="sr-only">
						Quantity
					</label>

					<div className="flex items-center gap-1">
						<button
							type="button"
							onClick={() => {
								numMinus();
							}}
							className="border border-solid border-gray-200 rounded p-1"
						>
							<MinusIcon className="w-4 h-4 dark:text-gray-400 text-gray-500" />
						</button>
						<span className="w-10 text-center dark:text-gray-400 text-gray-500">{num}</span>
						<button
							type="button"
							onClick={() => {
								numPlus();
							}}
							className="border border-solid border-gray-200 rounded p-1"
						>
							<PlusIcon className="w-4 h-4 dark:text-gray-400 text-gray-500" />
						</button>
					</div>
				</div>
			</fieldset>
		</div>	
	)
}`;
const quantityInput: string = `const quantityInput = () => {
	const [num, setNum] = useState<number>(0);
	const numPlus = () => {
		if (num >= 0) {
			setNum(num + 1);
		}
	};
	const numMinus = () => {
		if (num > 0) {
			setNum(num - 1);
		}
	};
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex items-center justify-between">
				<div className="flex min-w-0 items-center dark:text-white text-gray-500">Quantity</div>
				<button className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">PREVIEW</button>
			</div>
			<div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
				<fieldset>
					<legend className="hidden">Quantity</legend>
					<div className="mt-2">
						<div className="flex items-center gap-x-1">
							<button
								type="button"
								onClick={() => {
									numMinus();
								}}
							>
								<MinusIcon className="w-4 h-10 dark:text-white text-gray-500" />
							</button>
							<span className="w-10 text-center dark:text-gray-400 text-gray-500">{num}</span>
							<button
								type="button"
								onClick={() => {
									numPlus();
								}}
							>
								<PlusIcon className="w-5 h-10 dark:text-white text-gray-500" />
							</button>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	);
}`;

  const items: BreadcrumbsItem[] = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/inputs/quantityInputs',
          children: [
            {
              label: 'Inputs',
              path: '/inputs/quantityInputs',
            },
          ],
        },
      ],
    },
  ];
  const PageInfo: PageInfoType = {
    title: 'Quantity Input',
    description: 'Quantiy input는 버튼을 이용하여 수량을 변경할 수 있도록 합니다.',
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={quantitySimple} />
      <IframeQuantitySimple />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={quantityInput} />
      <IframeQuantityInput />
    </div>
  );
};

export default quantityInputs;
