import { useState } from 'react';
import { CovidTypeSample3 } from '@/interfaces/UtilityInterface';
import { numberFormatPerson } from '@/utils/util';

const LeftListComponents = (props: { data: CovidTypeSample3[]; setSelectedCountryName: (countryName: string) => void }) => {
  const [selectedCountryName, setSelectedCountryName] = useState('서울');

  const onSelectedCode = (countryNm: string) => {
    setSelectedCountryName(countryNm);
    props.setSelectedCountryName(countryNm);
  };

  return (
    <div className="p-4 border border-gray-500 overflow-auto w-2/3 h-[60rem]">
      <div className={`flex flex-col w-full gap-y-4`}>
        {props.data.map(
          (item, index) =>
            index > 1 && (
              <div
                key={item.countryNm}
                className={`flex p-4 gap-y-5 border border-solid ${
                  selectedCountryName === item.countryNm ? 'border-green-600' : 'border-gray-200'
                }`}
                onClick={() => {
                  onSelectedCode(item.countryNm);
                }}
              >
                <dt className="text-gray-500 md:text-lg dark:text-gray-400">{item.countryNm}</dt>
                <dd className="ml-4 text-gray-500 md:text-lg dark:text-gray-400">
                  전체 확진자 수: {numberFormatPerson(item.totalCnt)}
                </dd>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default LeftListComponents;
