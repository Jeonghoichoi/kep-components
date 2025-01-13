import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeBasicSelect from './iframeBasicSelect';
import IframeBasicGroup from './iframeBasicGroup';
import IframeHdlAvartarSelect from './iframeHdlAvatarSelect';

const Selects = () => {
  const basicSelect: string = `const basicSelect = () => {
		return(
			<fieldset className="w-full">
				<legend className="hidden">기본 셀렉트박스</legend>
				<div className="w-1/3 m-0 mx-auto">
					<select name="BasicSelect" id="BasicSelect" className="h-8 w-full text-gray-600 border border-solid border-gray-400 rounded dark:bg-slate-900">
						<option value="">선택하세요.</option>
						<option value="ex01">Select Box Ex 01</option>
						<option value="ex02">Select Box Ex 02</option>
					</select>
				</div>
			</fieldset>
		)
	}`;
  const basicGroupSelect: string = `const basicGroupSelect = () => {
		return(
			<fieldset className="w-full">
				<legend className="hidden">기본 셀렉트박스 그룹</legend>
				<div className="w-1/3 m-0 mx-auto">
					<select
					name="BasicGroup"
					id="BasicGroup"
					className="h-8 w-full border border-solid border-gray-400 rounded text-gray-600 dark:bg-slate-900"
					onFocus={handleFocus}
					onBlur={handleBlur}
					onChange={onchangeSelectedData}
					value={selectedData}
					>
					<option value="select">선택하세요.</option>
					{optionGroupData.map((item) => (
						<optgroup label={item.label} key={item.key}>
						{item.option.map((data) => (
							<option value={data.value}>{data.optionName}</option>
						))}
						</optgroup>
					))}
					</select>
				</div>
			</fieldset>
		)
	}`;
  const headlessAvatarSelect: string = `const headlessAvatarSelect = () => {
	const people = [
		{
			id: 1,
			name: "사용자를 선택하세요",
			avatar:
				"https://plus.unsplash.com/premium_photo-1689606093808-3cb4393248d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
		},
		{
			id: 2,
			name: "석호필",
			avatar: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/200709/htm_20070902203638c000c070-001.JPG"
		},
		{
			id: 3,
			name: "김덕배",
			avatar:
				"https://mblogthumb-phinf.pstatic.net/MjAyMDAxMDZfMjYw/MDAxNTc4MzExMTk1NTI3.OFffx8GI1HmGzMS-wo_MSa6HWVWVOVytTeSqXXeIPX0g.2sKaYk1GflgRK94KhWahkDltR4YaVLUgOHjfvZlMvvgg.PNG.rara4000/714571678c2c5eb28a2b4ba092d3f0317ab7801496ab069a206d02e7137afba8effb75d53689.png?type=w800"
		}
	];

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	const [selected, setSelected] = useState(people[0]);
	return(
		<div className="flex flex-col p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
			<Listbox value={selected} onChange={setSelected}>
				{({ open }) => (
				<>
					<Listbox.Label className="hidden">아바타가 있는 셀렉트박스</Listbox.Label>
					<div className="relative mt-2 w-1/3 m-0 mx-auto">
					<Listbox.Button className="relative w-full cursor-default rounded-md bg-white dark:bg-slate-900 text-gray-600 py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6">
						<span className="flex items-center">
						<img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
						<span className="ml-3 block truncate">{selected.name}</span>
						</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
						<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
						</span>
					</Listbox.Button>

					<Transition
						show={open}
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterEnter={handleFocus}
						afterLeave={handleBlur}
					>
						<Listbox.Options className="absolute z-10 mt-1 max-h-[120px] -top-1 w-full overflow-auto rounded-md bg-white dark:bg-slate-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{people.map((person) => (
							<Listbox.Option
							key={person.id}
							className={({ active }) =>
								classNames(
								active ? 'bg-indigo-600 text-white' : 'text-gray-600',
								'relative cursor-default select-none py-2 pl-3 pr-9',
								)
							}
							value={person}
							>
							{({ selected, active }) => (
								<>
								<div className="flex items-center">
									<img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
									<span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
									{person.name}
									</span>
								</div>

								{selected ? (
									<span
									className={classNames(
										active ? 'text-white' : 'text-indigo-600',
										'absolute inset-y-0 right-0 flex items-center pr-4',
									)}
									>
									<CheckIcon className="h-5 w-5" aria-hidden="true" />
									</span>
								) : null}
								</>
							)}
							</Listbox.Option>
						))}
						</Listbox.Options>
					</Transition>
					</div>
				</>
				)}
			</Listbox>
		</div>
	)
}`;

  const items: BreadcrumbsItem[] = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/inputs/selects',
          children: [
            {
              label: 'Inputs',
              path: '/inputs/selects',
            },
          ],
        },
      ],
    },
  ];
  const PageInfo: PageInfoType = {
    title: 'Selects',
    description: `콤보박스라고도 하며 Pull-Down Menus라고 표현하기도 합니다. 
	select 태그는 옵션 메뉴를 제공하는 드롭다운 리스트(drop-down list)를 정의할 때 사용합니다.
	select 요소 내부의 option 요소는 드롭다운 리스트(drop-down list)에서 사용되는 각각의 옵션을
    정의합니다. 이러한 select 요소는 사용자로부터 입력을 받기 위한 폼(form)에 사용될 수 있습니다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      {/* 기본 셀렉트 박스 */}
      <CodeBoard code={basicSelect} />
      <IframeBasicSelect />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 기본 셀렉트 박스 그룹 */}
      <CodeBoard code={basicGroupSelect} />
      <IframeBasicGroup />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* === headlessUI === */}
      {/* 아바타 있는 샐랙트 박스 */}
      <CodeBoard code={headlessAvatarSelect} />
      <IframeHdlAvartarSelect />
    </div>
  );
};

export default Selects;
