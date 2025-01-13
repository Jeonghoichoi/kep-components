import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeTextArea from './iframeTextArea';
import IframeTextAreaButton from './ifameTextAreaButton';
import IframeTextAreaEmoji from './iframeTextAreaEmoji';
const TextArea = () => {
  const simpleTextArea: string = `const simpleTextArea = () => {
		return (
			<fieldset className="w-full">
				<div className="flex flex-col">
					<label htmlFor="OrderNotes" className="block text-sm font-medium text-gray-700">
						텍스트 입력
					</label>

					<textarea
						id="OrderNotes"
						className="mt-2 w-full rounded-lg border border-gray-200 align-top shadow-sm sm:text-sm p-2"
						rows={4}
						placeholder="텍스트를 입력하세요."
					></textarea>
				</div>
			</fieldset>	
		)
	}`;
  const textAreaButton: string = `const textAreaButton = () => {
		return (
			<fieldset className="w-full">
				<label htmlFor="OrderNotes" className="sr-only">
					액션 버튼을 포함한 textarea
				</label>

				<div className="overflow-hidden rounded-lg border border-solid border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 w-1/3 mx-auto">
					<textarea
						id="OrderNotes"
						className="w-full resize-none border-none align-top sm:text-sm focus:outline-0 p-2"
						rows={4}
						placeholder="Enter any additional order notes..."
					></textarea>

					<div className="flex items-center justify-end gap-2 bg-white p-3">
						<button type="button" className="rounded bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
							취소
						</button>
						<button type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
							확인
						</button>
					</div>
				</div>
			</fieldset>
		)
	}`;
const textAreaEmoji: string = `import { useState } from 'react';
import { EmojiItem } from '@/interfaces/UtilityInterface';

const textAreaEmoji = () => {
	const emojiList: EmojiItem[] = [
		{
		  key: 1,
		  name: 'good',
		  emoji: '😀 좋음',
		  onClick: () => {
			setSelected('😀');
			setSelectDown(false);
		  },
		},
		{
		  key: 2,
		  name: 'um..',
		  emoji: '🥲 보통',
		  onClick: () => {
			setSelected('🥲');
			setSelectDown(false);
		  },
		},
		{
		  key: 3,
		  name: 'bad',
		  emoji: '😡 나쁨',
		  onClick: () => {
			setSelected('😡');
			setSelectDown(false);
		  },
		},
		{
		  key: 4,
		  name: 'Nothing',
		  emoji: '☻ 없음',
		  onClick: () => {
			setSelected('☻');
			setSelectDown(false);
		  },
		},
	];

	const [selectDown, setSelectDown] = useState(false);
	const [selected, setSelected] = useState('☻');
	return(
		<div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
        <fieldset className="w-full">
          <legend className="hidden">액션 버튼과 이모티콘을 포함한 textarea</legend>

          <div className="rounded border border-solid border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 w-1/3 mx-auto">
            <textarea
              id="text"
              className="w-full resize-none border-none align-top sm:text-sm focus:outline-0 p-2 dark:bg-slate-900"
              rows={4}
              placeholder="Enter any additional order notes..."
            ></textarea>
            <div className="flex justify-between items-center p-3">
              <div className="relative">
                <button
                  className="peer flex items-center justify-start text-lg text-gray-500"
                  onClick={() => {
                    setSelectDown(!selectDown);
                  }}
                >
                  {selected}
                </button>
                <ul
                  className={"${
                    "selectDown" ? 'block' : 'hidden'
                  }  min-w-max absolute border border-solid border-gray-200 rounded p-2 bg-white w-full flex flex-col items-start justify-start gap-y-2"}
                >
                  {emojiList.map((item) => (
                    <li key={item.key} onClick={item.onClick} className="cursor-pointer text-md">
                      {item.emoji}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-end gap-2 bg-white dark:bg-slate-900">
                <button type="button" className="rounded bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
                  취소
                </button>
                <button type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
                  확인
                </button>
              </div>
            </div>
          </div>
        </fieldset>
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
          path: '/inputs/textarea',
          children: [
            {
              label: 'Inputs',
              path: '/inputs/textarea',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo: PageInfoType = {
    title: 'TextArea',
    description: `textarea 태그는 사용자가 여러 줄의 텍스트를 입력할 수 있는 텍스트 입력 영역을 정의할 때 사용합니다. 텍스트 입력 영역에는
    개수의 제한 없이 문자를 입력할 수 있으며, 입력된 문자는 고정폭 글꼴로 렌더링됩니다. 텍스트 입력 영역의 크기는 textarea
    요소의 cols 속성과 rows 속성으로 지정할 수 있으며, CSS에서 height 속성과 width 속성을 사용하면 더욱 손쉽게 지정할 수
    있습니다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <CodeBoard code={simpleTextArea} />
      <IframeTextArea />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* With Actions (Contained) */}
      <CodeBoard code={textAreaButton} />
      <IframeTextAreaButton />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* with Emosi and Actions */}
      <CodeBoard code={textAreaEmoji} />
      <IframeTextAreaEmoji />
    </div>
  );
};

export default TextArea;
