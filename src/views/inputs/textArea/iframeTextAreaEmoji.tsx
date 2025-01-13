import { useState } from 'react';
import { EmojiItem } from '@/interfaces/UtilityInterface';

const IframeTextAreaEmoji = () => {
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
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center">With Emoji and actions</div>
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
                  className={`${
                    selectDown ? 'block' : 'hidden'
                  }  min-w-max absolute border border-solid border-gray-200 rounded p-2 bg-white w-full flex flex-col items-start justify-start gap-y-2`}
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
    </div>
  );
};

export default IframeTextAreaEmoji;
