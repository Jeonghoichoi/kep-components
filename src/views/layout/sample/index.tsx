import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
const sample = () => {
  const age: number[] = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const classHour: number[] = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300];
  const [postcodePopup, setPostcodePopup] = useState<boolean>(false);
  const [address, setAdress] = useState<string>('');
  const [bname, setBname] = useState<string>('');
  const [zonecode, setZonecode] = useState<string>('');

  type HandleType = {
    clickButton: () => void;
    selectAddress: (data: dataType) => void;
  };
  type dataType = {
    address: string;
    bname: string;
    zonecode: string;
  };

  const handle: HandleType = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setPostcodePopup((current) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data: dataType) => {
      setAdress(data.address); //주소
      setBname(data.bname); //동
      setZonecode(data.zonecode); //우편번호
      setPostcodePopup(false); //팝업 toggle
    },
  };

  const items: BreadcrumbsItem[] = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/layout/flexgridsample',
          children: [
            {
              label: 'Layout',
              path: '/layout/flexgridsample',
            },
          ],
        },
      ],
    },
  ];
  const PageInfo: PageInfoType = {
    title: 'Grid와 Flex를 이용한 Form Sample',
    description: `일반적으로 탐색할 수 있는 다른 섹션 또는 페이지를 나타내며, 
  사용자는 이러한 탭을 클릭하거나 탭 제목을 터치하여 해당 섹션으로 이동할 수 있습니다.
  또한 포커스 관리 및 키보드 탐색 지원을 통해 UI요소에 액세스 가능합니다.
  `,
  };
  return (
    <div className="py-16 px-12 w-full">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      <div className="bg-slate-100 p-4 mt-10">
        <header className="mb-4 p-6 flex items-center justify-between bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-600">상품상세 페이지</h2>
          <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg">저장</button>
        </header>
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-base font-semibold mb-2 text-gray-600">상품 상세 정보</h3>
          <div className="grid grid-cols-3 border-solid border-t border-slate-300">
            <div className="flex border-b border-solid border-slate-300 col-span-3">
              <span className="min-w-[8.75rem] bg-slate-100 flex items-center justify-end px-2 text-sm">상품명</span>
              <div className="p-2 w-full">
                <input
                  type="text"
                  maxLength={30}
                  className="border border-gray-300 border-solid w-full text-gray-900 text-sm rounded-md p-1 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="상품명을 작성해주세요.(최대 30자)"
                />
              </div>
            </div>
            <div className="flex border-b border-solid border-slate-300 col-span-2 row-span-2">
              <span className="min-w-[8.75rem] bg-slate-100 flex items-center justify-end px-2 text-sm">상품설명</span>
              <div className="p-2 w-full">
                <textarea className="w-full h-full p-1 border border-gray-300 rounded-md bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"></textarea>
              </div>
            </div>
            <div className="flex border-b border-solid border-slate-300">
              <span className="min-w-[8.75rem] bg-slate-100 flex items-center justify-end px-2 text-sm">판매상태</span>
              <div className="p-2 flex gap-x-4">
                <div className="flex items-center gap-x-1 whitespace-nowrap">
                  <input id="simpleDscRadio01" name="group1" type="radio" className="h-4 w-4" defaultChecked={true} />
                  <label
                    htmlFor="simpleDscRadio01"
                    className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
                  >
                    판매중
                  </label>
                </div>
                <div className="flex items-center gap-x-1 whitespace-nowrap">
                  <input id="simpleDscRadio02" name="group1" type="radio" className="h-4 w-4" />
                  <label
                    htmlFor="simpleDscRadio02"
                    className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
                  >
                    판매 중지
                  </label>
                </div>
              </div>
            </div>
            <div className="flex border-b border-solid border-slate-300">
              <span className="min-w-[8.75rem] bg-slate-100 flex items-center justify-end px-2 text-sm">노출상태</span>
              <div className="p-2 flex gap-x-4">
                <div className="flex items-center gap-x-1">
                  <input id="simpleDscRadio03" name="group2" type="radio" className="h-4 w-4" defaultChecked={true} />
                  <label
                    htmlFor="simpleDscRadio03"
                    className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
                  >
                    노출
                  </label>
                </div>
                <div className="flex items-center gap-x-1">
                  <input id="simpleDscRadio04" name="group2" type="radio" className="h-4 w-4" />
                  <label
                    htmlFor="simpleDscRadio04"
                    className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
                  >
                    비노출
                  </label>
                </div>
              </div>
            </div>
            <div className="flex border-b border-solid border-slate-300 col-span-2">
              <span className="min-w-[8.75rem] bg-slate-100 flex items-center justify-end px-2 text-sm">판매기간</span>
              <div className="p-2 flex gap-x-1 items-center">
                <input
                  name="start"
                  type="date"
                  className="border border-gray-300 text-gray-900 text-sm rounded-md w-full px-2 py-1 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                  required
                />
                <span>~</span>
                <input
                  name="end"
                  type="date"
                  className="border border-gray-300 text-gray-900 text-sm rounded-md w-full px-2 py-1 0 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                  required
                />
              </div>
            </div>
            <div className="flex border-b border-solid border-slate-300"></div>
            <div className="flex border-b border-solid border-slate-300 col-span-3">
              <span className="min-w-[8.75rem] bg-slate-100 flex items-center justify-end px-2 text-sm">썸네일</span>
              <div className="p-2 w-full">
                <input
                  type="file"
                  className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-1 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                  accept="image/*"
                  multiple
                />
              </div>
            </div>
            <div className="flex border-b border-solid border-slate-300 col-span-3">
              <span className="min-w-[8.75rem] bg-slate-100 flex items-center justify-end px-2 text-sm">서브 썸네일</span>
              <div className="p-2 w-full">
                <input
                  type="file"
                  className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-1 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                  accept="image/*"
                />
              </div>
            </div>
            <div className="flex border-b border-solid border-slate-300 col-span-3">
              <span className="min-w-[8.75rem] bg-slate-100 flex items-center justify-end px-2 text-sm">상세 이미지</span>
              <div className="p-2 w-full">
                <input
                  type="file"
                  className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-1 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                  accept="image/*"
                />
              </div>
            </div>
            <div className="flex border-b border-solid border-slate-300 col-span-2">
              <span className="min-w-[8.75rem] bg-slate-100 flex items-center justify-end px-2 text-sm">추천 연령</span>
              <div className="p-2 flex items-center gap-x-1">
                <div className="space-x-1">
                  <select className="border border-gray-300 text-gray-900 text-sm rounded-md p-1 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed">
                    {age.map((data) => (
                      <option key={data}>{data}</option>
                    ))}
                  </select>
                  <span className="text-xs">세</span>
                </div>
                <span>~</span>
                <div className="space-x-1">
                  <select className="border border-gray-300 text-gray-900 text-sm rounded-md p-1 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed">
                    {age.map((data) => (
                      <option key={data}>{data}</option>
                    ))}
                  </select>
                  <span className="text-xs">세</span>
                </div>
              </div>
            </div>
            <div className="flex border-b border-solid border-slate-300">
              <span className="min-w-[8.75rem] bg-slate-100 flex items-center justify-end px-2 text-sm">타임 최대인원</span>
              <div className="p-2 flex gap-x-1 items-center">
                <input
                  type="number"
                  className="text-right border border-gray-300 text-gray-900 text-sm rounded-md  block w-20 p-1 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                  required
                />
                <span className="text-xs">명</span>
              </div>
            </div>
            <div className="flex border-b border-solid border-slate-300 col-span-2">
              <span className="min-w-[8.75rem] bg-slate-100 flex items-center justify-end px-2 text-sm">보호자 동반 여부</span>
              <div className="p-2 flex gap-x-4">
                <div className="flex items-center gap-x-1">
                  <input id="simpleDscRadio05" name="group3" type="radio" className="h-4 w-4" defaultChecked={true} />
                  <label
                    htmlFor="simpleDscRadio05"
                    className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
                  >
                    동반 가능
                  </label>
                </div>
                <div className="flex items-center gap-x-1">
                  <input id="simpleDscRadio06" name="group3" type="radio" className="h-4 w-4" />
                  <label
                    htmlFor="simpleDscRadio06"
                    className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer"
                  >
                    동반 불가
                  </label>
                </div>
              </div>
            </div>
            <div className="flex border-b border-solid border-slate-300">
              <span className="min-w-[8.75rem] bg-slate-100 flex items-center justify-end px-2 text-sm">진행 시간</span>
              <div className="p-2 flex items-center gap-x-1">
                <select className="border border-gray-300 text-gray-900 text-sm rounded-md p-1 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed">
                  {classHour.map((data) => (
                    <option key={data}>{data}</option>
                  ))}
                </select>
                <span className="text-xs">분</span>
              </div>
            </div>
            <div className="flex border-b border-solid border-slate-300 col-span-3">
              <span className="min-w-[8.75rem] bg-slate-100 flex items-center justify-end px-2 text-sm">장소</span>
              <div className="p-1 flex flex-col gap-1 w-full">
                <div className="flex gap-x-1">
                  <input
                    type="text"
                    disabled
                    className="border border-gray-300 border-solid  text-gray-900 text-sm rounded-md p-1 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                    defaultValue={zonecode}
                  />
                  <button
                    className="bg-gray-50 border border-gray-300 border-solid text-xs rounded-md p-1"
                    onClick={handle.clickButton}
                  >
                    주소찾기
                  </button>

                  {postcodePopup && (
                    <div className="fixed top-0 left-0 bg-black bg-opacity-60 w-full h-screen z-10" onClick={handle.clickButton}>
                      <section className="bg-white p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-xl overflow-hidden">
                        <DaumPostcode
                          style={{ height: '100%' }}
                          onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
                          autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                          // defaultQuery='서울시
                          // ' // 팝업을 열때 기본적으로 입력되는 검색어
                        />
                      </section>
                    </div>
                  )}
                </div>
                <div className="flex gap-x-1">
                  <input
                    type="text"
                    disabled
                    className="border border-gray-300 border-solid w-full text-gray-900 text-sm rounded-md p-1 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                    defaultValue={address}
                  />
                  <input
                    type="text"
                    disabled
                    className="border border-gray-300 border-solid w-full text-gray-900 text-sm rounded-md p-1 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                    defaultValue={bname}
                  />
                  <input
                    type="text"
                    className="border border-gray-300 border-solid w-full text-gray-900 text-sm rounded-md p-1 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="상세주소를 입력해주세요"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default sample;
