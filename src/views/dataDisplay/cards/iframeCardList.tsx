import { useState } from 'react';
import IframeCardAdd from './iframeCardAdd';
import { v4 as uuidv4 } from 'uuid';
import { CardType } from '@/interfaces/UtilityInterface';
import { faker } from '@faker-js/faker';

const IframeCardList = () => {
  const [cardInfo, setCardInfo] = useState<CardType[]>([
    {
      name: 'Project A',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti, unde ab ut in!',
    },
    {
      name: 'Project B',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque saepe sit.',
    },
  ]);
  // 새로 입력되는 제목 & 내용
  const [newTitle, setNewTitle] = useState<string>('');
  const [newText, setNewText] = useState<string>('');
  const newArray: { name: string; text: string } = { name: newTitle, text: newText };

  //입력한 값 원래 배열에 push
  const onCreate = (): void => {
    if (newArray.name.length > 0 && newArray.text.length > 0) {
      const copyCardInfo = [...cardInfo];
      copyCardInfo.push(newArray);
      setCardInfo(copyCardInfo);
    } else {
      alert('제목과 내용을 모두 입력해주세요!');
    }
    onClose();
  };
  // popup
  const [modal, setModal] = useState<boolean>(false);
  const onClose = (): void => {
    setModal(false);
    setNewTitle('');
    setNewText('');
  };
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">
        Image, Name, with Social Links and Project Links
      </div>
      <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
        <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
          <div className="flex items-center gap-4">
            <img alt="Default avatar" src={faker.image.url()} className="h-16 w-16 rounded-full object-cover" />
            <div>
              <h3 className="text-lg font-medium text-white">Claire Mac</h3>
              <div className="flow-root">
                <ul className="-m-1 flex flex-wrap">
                  <li className="p-1 leading-none">
                    <a href="#" className="text-xs font-medium text-gray-300">
                      {' '}
                      Twitter{' '}
                    </a>
                  </li>
                  <li className="p-1 leading-none">
                    <a href="#" className="text-xs font-medium text-gray-300">
                      {' '}
                      GitHub{' '}
                    </a>
                  </li>
                  <li className="p-1 leading-none">
                    <a href="#" className="text-xs font-medium text-gray-300">
                      Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="mt-4 space-y-2">
            {cardInfo.map((data) => {
              return (
                <li key={uuidv4()}>
                  <a href="#" className="block h-full rounded-lg border border-solid border-gray-700 p-4 hover:border-blue-600">
                    <strong className="font-medium text-white">{data.name}</strong>
                    <p className="mt-1 text-xs font-medium text-gray-300">{data.text}</p>
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            className="w-12 h-12 mt-4 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center"
            onClick={() => {
              setModal(true);
            }}
          >
            +
          </button>
          {modal ? (
            <IframeCardAdd setNewTitle={setNewTitle} setNewText={setNewText} onCreate={onCreate} onClose={onClose} />
          ) : null}
        </article>
      </div>
    </div>
  );
};

export default IframeCardList;
