import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeChipBasic from './iframeChipBasic';
import IframeChipDeletable from './iframeChipDeletable';
import IframeChipAvatar from './iframeChipAvatar';
import IframeChipIcon from './iframeChipIcon';
import IframeChipColor from './iframeChipColor';
import IframeChipDeletableIcon from './iframeChipDeletableIcon';
const Chip = () => {
  const basicChip = `const basicChip = () => {
    const state:string[] = ["Chip Filled", "Chip Outlined"];
		return (
			<div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
				<div className="flex items-center gap-x-2">
					<span className="bg-gray-200 text-xs cursor-pointer border border-solid border-gray-200 px-3 py-2 rounded-2xl">{state[0]}</span>
					<span className="bg-white hover:bg-gray-100 text-xs cursor-pointer border border-solid border-gray-200 px-3 py-2 rounded-2xl">{state[1]}</span>
				</div>
			</div>
		)
	  }`;
  const DeletableChip = `import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'; 

const DeletableChip = () => {
  const [state, setState] = useState<string[]>(["Deletable Chip 01", "Deletable Chip 02", "Deletable Chip 03"]);
  return (
    <div className="flex items-center gap-x-2">
        {state.map((data, index)=>(
            <span 
                key={data} 
                className="bg-white hover:bg-gray-100 text-xs cursor-pointer border border-solid border-gray-200 px-3 py-2 rounded-2xl flex items-center gap-x-1">
                    {state[index]}
                <button
                    className=" rounded-full bg-gray-100 p-0.5 text-gray-600 transition hover:bg-gray-200"
                    onClick={()=>{
                        let copyState = [...state];
                        copyState.splice(index, 1);
                        setState(copyState);
                    }}
                  >
                <XMarkIcon className="w-3 h-3" />
            </button>
            </span>
        ))}
    </div>
  )
}`;

const DeletableIconChip = `import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
  
const DeletableIconChip = () => {
  return (
    <div className="flex items-center gap-x-2">
        {state.map((data, index)=>(
            <span 
                key={data} 
                className="bg-white hover:bg-gray-100 text-xs cursor-pointer border border-solid border-gray-200 px-3 py-2 rounded-2xl flex items-center gap-x-1">
                    {state[index]}
                <button
                    className=" rounded-full bg-gray-100 p-0.5 text-gray-600 transition hover:bg-gray-200"
                    onClick={()=>{
                        let copyState = [...state];
                        copyState.splice(index, 1);
                        setState(copyState);
                    }}
                  >
                <TrashIcon className="w-3 h-3" />
            </button>
            </span>
        ))}
    </div>
  )
}`;

const AvartarChip = `const AvartarChip = () => {
  const name:string = "Avatar";
  return (
    <div className="flex items-center gap-x-2">
      <span className="bg-gray-200 text-xs cursor-pointer border border-solid border-gray-200 p-1 pr-2 rounded-2xl flex items-center gap-x-1">
          <img
          className="w-6 h-6 rounded-full"
          src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
          alt="avatar_picture_1"
          />
          {name}
      </span>
      <span className="bg-white text-xs cursor-pointer border border-solid border-gray-200 p-1 pr-2 rounded-2xl flex items-center gap-x-1">
          <img
          className="w-6 h-6 rounded-full"
          src="https://dev.semokids.com/contents/images/avatar_picture_2.jpg"
          alt="avatar_picture_2"
          />
          {name}
      </span>
    </div>
  )
}`;
const IconChip = `const IconChip = () => {
  const name:string = "Avatar";
  return (
    <div className="flex items-center gap-x-2">
      <span className="bg-gray-200 text-xs cursor-pointer border border-solid border-gray-200 p-1 pr-2 rounded-2xl flex items-center gap-x-1">
          <UserIcon className="w-4 h-4" />
          {name}
      </span>
      <span className="bg-white text-xs cursor-pointer border border-solid border-gray-200 p-1 pr-2 rounded-2xl flex items-center gap-x-1">
          <UserCircleIcon className="w-4 h-4" />
          {name}
      </span>
    </div>
  )
}`;
const ColorChip = `const ColorChip = () => {
	return (
    <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
      <div className="flex items-center gap-x-2">
        <span className="bg-blue-200 text-xs cursor-pointer px-3 py-2 rounded-2xl">
          primary
        </span>
        <span className="bg-green-200 text-xs cursor-pointer px-3 py-2 rounded-2xl">
          primary
        </span>
        <span className="text-xs cursor-pointer border border-solid border-blue-200 text-blue-500 px-3 py-2 rounded-2xl">
          primary
        </span>
        <span className="text-xs cursor-pointer border border-solid border-green-200 text-green-500 px-3 py-2 rounded-2xl">
          primary
        </span>
      </div>
    </div>
  )
}`;
  const items = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/dataDisplay/chip',
          children: [
            {
              label: 'Data Display',
              path: '/dataDisplay/chip',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo = {
    title: "Chip",
    description: `칩을 사용하면 사용자는 정보를 입력하고, 선택하고, 콘텐츠를 필터링하고, 작업을 실행할 수 있습니다. 여기에는 독립 실행형
    구성 요소로 포함되어 있지만 가장 일반적으로 사용되는 방식은 입력 형식이므로 여기에 설명된 동작 중 일부는 컨텍스트에
    표시되지 않습니다.`
  }
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo}/>
      {/* 기본칩 */}
      <CodeBoard code={basicChip} />
      <IframeChipBasic />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 삭제할 수 있는 칩 */}
      <CodeBoard code={DeletableChip} />
      <IframeChipDeletable />
      {/* 삭제할 수 있는 칩 */}
      <CodeBoard code={DeletableIconChip} />
      <IframeChipDeletableIcon />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 아바타 칩 */}
      <CodeBoard code={AvartarChip} />
      <IframeChipAvatar />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 아이콘 칩 */}
      <CodeBoard code={IconChip} />
      <IframeChipIcon />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 컬러 칩 */}
      <CodeBoard code={ColorChip} />
      <IframeChipColor />
    </div>
  );
};

export default Chip;
