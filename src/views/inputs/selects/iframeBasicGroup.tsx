import { useState, useEffect } from 'react';
import { OptionGroup } from '@/interfaces/UtilityInterface';
import { scrollLock } from '@/utils/util';

const IframeBasicGroup = () => {
  const [isScrollLock, setIsScrollLock] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<string>('');

  const optionGroupData: OptionGroup[] = [
    {
      key: 'A',
      label: 'A',
      option: [
        {
          key: 'A1',
          value: 'A-01',
          optionName: 'A로 시작합니다1.',
        },
        {
          key: 'A2',
          value: 'A-02',
          optionName: 'A로 시작합니다2.',
        },
      ],
    },
    {
      key: 'B',
      label: 'B',
      option: [
        {
          key: 'B1',
          value: 'B-01',
          optionName: 'B로 시작합니다1.',
        },
        {
          key: 'B2',
          value: 'B-02',
          optionName: 'B로 시작합니다2.',
        },
      ],
    },
  ];

  const handleFocus = () => {
    setIsScrollLock(true);
  };

  const handleBlur = () => {
    setIsScrollLock(false);
  };

  const onchangeSelectedData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedData(value);
    handleBlur();
  };

  useEffect(() => {
    scrollLock(isScrollLock);
  }, [isScrollLock]);

  return (
    <div className="flex flex-col gap-5 mt-6">
      <div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Simple Group native</div>
      <div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
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
      </div>
    </div>
  );
};

export default IframeBasicGroup;
