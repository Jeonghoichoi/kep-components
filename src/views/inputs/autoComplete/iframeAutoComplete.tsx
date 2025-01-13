import { useState, useRef, useEffect } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
const IframeAutoComplete = () => {
  const data: { id: number; name: string }[] = [
    { id: 1, name: '가나다' },
    { id: 2, name: 'apple' },
    { id: 3, name: 'kep component' },
    { id: 4, name: '지식성장' },
    { id: 5, name: '아무거나' },
    { id: 6, name: '교보 가나다 가가가' },
  ];
  const [dataList, setDataList] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  // List
  const handleClose = () => {
    setDataList(false); 
  }
  // 검색 하는 것만 필터링
  const filteredlist: { id: number; name: string }[] =
    inputValue === ''
      ? data
      : data.filter((item) => item.name.toLowerCase().replace(/\s+/g, '').includes(inputValue.toLowerCase().replace(/\s+/g, '')));

  // 검색창 외 공간 클릭시 함수 실행
  const searchRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleFocus = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) handleClose();
    };
    document.addEventListener('mousedown', handleFocus);
    return () => {
      document.addEventListener('mousedown', handleFocus);
    };
  }, [searchRef]);

  // focus
  const focusText = useRef<any>(null);
  const inputRef = useRef<any>(null);
  const handleinputKeyDown = (e: React.Attributes) => {
      if (e.key === "ArrowDown") {
        focusText.current.children[0].focus();
      }  
      if(e.key === "Escape"){
        handleClose();
      }
  }

  const handleKey = (e: React.Attributes, item:{ id: number; name: string }, index: number) => {
    if(e.key === "Enter"){
      setInputValue(item.name);
      handleClose()
    }
    if(e.key === "ArrowDown"){
      focusText.current.children[ filteredlist.length - 1  > index ? index + 1 : 0].focus() //마지막 list에서 focus 첫번째로 이동
    }
    if(e.key === "ArrowUp"){
      index > 0 ?  focusText.current.children[ index - 1 ].focus() : inputRef.current.focus(); //첫번째 list에서 focus input으로 이동
    }
    if(e.key === "Escape"){
      handleClose();
    }
  }

  return (
    <div className="flex flex-col gap-5 mt-6">
      <div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Auto Complete Input</div>
      <div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg text-left ">
        <fieldset>
          <legend className="hidden">인풋 클릭시 글자가 이동하는 형식</legend>
          <div className="relative" ref={searchRef}>
            <input
              ref={inputRef}
              onKeyDown={handleinputKeyDown}
              value={inputValue}
              type="text"
              id="inputName"
              placeholder="입력하세요."
              onFocus={() => {
                setDataList(true);
              }}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              autoComplete='off'
              className="w-full rounded-md border-gray-200 border-solid border shadow-sm sm:text-sm h-8 px-2 pe-10 dark:bg-slate-900 text-gray-600"
            />
            
            <span className="absolute inset-y-0 end-0 w-8 h-8 grid place-content-center dark:text-gray-400">
              <ChevronUpDownIcon className="w-4 h-4" />
            </span>

            {inputValue.length >= 0 && dataList ? (
              <ul className="rounded border border-solid border-gray-200 absolute w-full bg-white shadow max-h-60 overflow-y-auto dark:bg-slate-900 text-gray-600" ref={focusText}>
                {filteredlist.length === 0 ? (
                  <li className="relative cursor-default select-none p-2 text-gray-700 text-sm">찾는 내용 없음</li>
                ) : (
                  filteredlist.map((item, index) => (
                    <li
                      tabIndex={0}
                      key={item.id}
                      className="hover:bg-gray-50 cursor-pointer p-2 text-sm focus-visible:bg-blue-500 focus-visible:text-white outline-none"
                      onClick={() => {
                        setInputValue(item.name);
                        handleClose();
                      }}
                      onKeyDown={(e)=>{
                        e.preventDefault();
                        handleKey(e, item, index)
                      }}
                    >
                      {item.name}
                    </li>
                  ))
                )}
              </ul>
            ) : null}
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default IframeAutoComplete;
