import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeRadioGroup from './iframeRadioGroup';
import IframeRadioRowGroup from './IframeRadioRowGroup';
import IframeRadioDscGroup from './IframeRadioDscGroup';
import IframeRadioDscRowGroup from './IframeRadioDscRowGroup';
import IframeRadioRight from './IframeRadioRight';
import IframeColorRadio from './iframeColorRadio';
import IframeSmallCardRadio from './iframeSmallCardRadio';
import IframeCardRadio from './IframeCardRadio';
import IframeStackedCardRadio from './iframeStackedCardRadio';
import IframeSimpleTableRadio from './iframeSimpleTableRadio';
const RadioGroup = () => {
  const simpleGroup: string = `const simpleGroup = () => {
		return (
			<fieldset>
				<legend className="hidden">기본 라디오</legend>
				<div className="mt-2 space-y-2">
					<div className="flex items-center gap-x-2">
						<input id="simpleRadio01" name="group1" type="radio" className="h-5 w-5" />
						<label htmlFor="simpleRadio01" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
							1번 라디오
						</label>
					</div>
					<div className="flex items-center gap-x-2">
						<input id="simpleRadio02" name="group1" type="radio" className="h-5 w-5" />
						<label htmlFor="simpleRadio02" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
							2번 라디오
						</label>
					</div>
				</div>
			</fieldset>
		)
	  }`;
  const simpleRowGroup: string = `const simpleRowGroup = () => {
		return (
			<fieldset>
				<legend className="hidden">인라인 라디오</legend>
				<div className="mt-2 flex gap-x-2">
					<div className="flex items-center gap-x-2">
						<input id="simpleDscRadio01" name="group2" type="radio" className="h-5 w-5" />
						<label htmlFor="simpleDscRadio01" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
							1번 라디오
						</label>
					</div>
					<div className="flex items-center gap-x-2">
						<input id="simpleDscRadio02" name="group2" type="radio" className="h-5 w-5" />
						<label htmlFor="simpleDscRadio02" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
							2번 라디오
						</label>
					</div>
					<div className="flex items-center gap-x-2">
						<input id="simpleDscRadio03" name="group2" type="radio" className="h-5 w-5" />
						<label htmlFor="simpleDscRadio03" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
							3번 라디오
						</label>
					</div>
				</div>
			</fieldset>
		)}`;
  const simpleDiscriptionGroup: string = `const simpleDiscriptionGroup = () => {
		return (
			<fieldset>
				<legend className="hidden">설명이 하단에 있는 라디오</legend>
				<div className="mt-2 space-y-2">
					<div className="flex items-start gap-x-2">
						<input id="simpleDscColRadio01" name="group3" type="radio" className="h-5 w-5" />
						<div className="flex gap-x-2 items-center flex-col">
							<label htmlFor="simpleDscColRadio01" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
								1번 라디오
							</label>
							<span className="text-xs text-blue-500">description</span>
						</div>
					</div>
					<div className="flex items-start gap-x-2">
						<input id="simpleDscColRadio02" name="group3" type="radio" className="h-5 w-5" />
						<div className="flex gap-x-2 items-center flex-col">
							<label htmlFor="simpleDscColRadio02" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
								2번 라디오
							</label>
							<span className="text-xs text-blue-500">description</span>
						</div>
					</div>
					<div className="flex items-start gap-x-2">
						<input id="simpleDscColRadio03" name="group3" type="radio" className="h-5 w-5" />
						<div className="flex gap-x-2 items-center flex-col">
							<label htmlFor="simpleDscColRadio03" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
								3번 라디오
							</label>
							<span className="text-xs text-blue-500">description</span>
						</div>
					</div>
				</div>
			</fieldset>
		)
	  }`;
  const simpleDiscriptionRowGroup: string = `const simpleDiscriptionRowGroup = () => {
		return (
			<fieldset>
				<legend className="hidden">설명이 우측에 있는 라디오</legend>
				<div className="mt-2 space-y-2">
					<div className="flex items-center gap-x-2">
						<input id="simpleDscRadio01" name="group3" type="radio" className="h-5 w-5" />
						<div className="flex gap-x-2 items-center">
							<label htmlFor="simpleDscRadio01" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
								1번 라디오
							</label>
							<span className="text-xs text-blue-500">description</span>
						</div>
					</div>
					<div className="flex items-center gap-x-2">
						<input id="simpleDscRadio02" name="group3" type="radio" className="h-5 w-5" />
						<div className="flex gap-x-2 items-center">
							<label htmlFor="simpleDscRadio02" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
								2번 라디오
							</label>
							<span className="text-xs text-blue-500">description</span>
						</div>
					</div>
					<div className="flex items-center gap-x-2">
						<input id="simpleDscRadio03" name="group3" type="radio" className="h-5 w-5" />
						<div className="flex gap-x-2 items-center">
							<label htmlFor="simpleDscRadio03" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
								3번 라디오
							</label>
							<span className="text-xs text-blue-500">description</span>
						</div>
					</div>
				</div>
			</fieldset>
		)
	  }`;
  const radioRight: string = `const RadioRight = () => {
		return (
			<fieldset className="w-1/3">
				<legend className="hidden">리스트 우측에 있는 라디오</legend>
				<div className="divide-y grid grid-cols-1">
					<div className="flex items-start gap-x-2 justify-between py-4">
						<div className="flex-1">
							<label htmlFor="rightRadio01" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
								1번 라디오
								<p className="text-xs text-gray-500">1번 라디오에 대한 설명입니다</p>
							</label>
						</div>
						<div>
							<input id="rightRadio01" name="group5" type="radio" className="h-5 w-5" />
						</div>
					</div>
					<div className="flex items-start gap-x-2 justify-between border-solid border-gray-400 py-4">
						<div className="flex-1">
							<label htmlFor="rightRadio02" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
								2번 라디오
								<p className="text-xs text-gray-500">2번 라디오에 대한 설명입니다</p>
							</label>
						</div>
						<div>
							<input id="rightRadio02" name="group5" type="radio" className="h-5 w-5" />
						</div>
					</div>
					<div className="flex items-start gap-x-2 justify-between border-solid border-gray-400 py-4">
						<div className="flex-1">
							<label htmlFor="rightRadio03" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
								3번 라디오
								<p className="text-xs text-gray-500">3번 라디오에 대한 설명입니다</p>
							</label>
						</div>
						<div>
							<input id="rightRadio03" name="group5" type="radio" className="h-5 w-5" />
						</div>
					</div>
				</div>
			</fieldset>
		)
	  }`;
  const colorRadio: string = `const colorRadio = () => {
		return (
			<fieldset>
				<legend className="hidden">컬러 선택 라디오</legend>
				<div className="flex gap-x-4">
					<div className="mt-2 space-y-2">
						<input
							id="simpleDscColRadio01"
							name="group6"
							type="radio"
							className="cursor-pointer h-10 w-10 appearance-none rounded-full bg-red-500 border-solid border-2 border-white checked:outline-3 checked:outline checked:outline-red-500"
						/>
						<label
							htmlFor="simpleDscColRadio01"
							className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
						></label>
					</div>
					<div className="mt-2 space-y-2">
						<input
							id="simpleDscColRadio02"
							name="group6"
							type="radio"
							className="cursor-pointer h-10 w-10 appearance-none rounded-full bg-blue-500 border-solid border-2 border-white checked:outline-3 checked:outline checked:outline-blue-500"
						/>
						<label
							htmlFor="simpleDscColRadio02"
							className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
						></label>
					</div>
					<div className="mt-2 space-y-2">
						<input
							id="simpleDscColRadio03"
							name="group6"
							type="radio"
							className="cursor-pointer h-10 w-10 appearance-none rounded-full bg-green-500 border-solid border-2 border-white checked:outline-3 checked:outline checked:outline-green-500"
						/>
						<label
							htmlFor="simpleDscColRadio03"
							className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
						></label>
					</div>
					<div className="mt-2 space-y-2">
						<input
							id="simpleDscColRadio04"
							name="group6"
							type="radio"
							className="cursor-pointer h-10 w-10 appearance-none rounded-full bg-purple-500 border-solid border-2 border-white checked:outline-3 checked:outline checked:outline-purple-500"
						/>
						<label
							htmlFor="simpleDscColRadio04"
							className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
						></label>
					</div>
					<div className="mt-2 space-y-2">
						<input
							id="simpleDscColRadio05"
							name="group6"
							type="radio"
							className="cursor-pointer h-10 w-10 appearance-none rounded-full bg-orange-500 border-solid border-2 border-white checked:outline-3 checked:outline checked:outline-orange-500"
						/>
						<label
							htmlFor="simpleDscColRadio05"
							className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
						></label>
					</div>
				</div>
			</fieldset>
		)
	  }`;
  const cardRadio: string = `const cardRadio = () => {
		return(
			<fieldset>
				<legend className="hidden">카드 라디오</legend>
				<div className="grid grid-cols-4 gap-x-2 lg:grid-cols-2 sm:grid-cols-1 sm:gap-y-2">
					<div>
						<input
							type="radio"
							name="group7"
							value="cardRadio01"
							id="cardRadio01"
							className="peer hidden [&:checked_+_label_svg]:block"
							checked
						/>
						<label
							htmlFor="cardRadio01"
							className="flex flex-col cursor-pointer justify-between rounded-lg border-solid border border-gray-200 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
						>
							<div className="flex items-center gap-2 justify-between mb-1">
								<span className="text-gray-700 m-0">title</span>
								<svg
									className="hidden h-5 w-5 text-blue-600"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<p className="text-gray-900 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</label>
					</div>
					<div>
						<input
							type="radio"
							name="group7"
							value="cardRadio02"
							id="cardRadio02"
							className="peer hidden [&:checked_+_label_svg]:block"
							checked
						/>
						<label
							htmlFor="cardRadio02"
							className="flex flex-col cursor-pointer justify-between rounded-lg border-solid border border-gray-200 bg-white p-4 text-sm font-medium shadow-sm peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
						>
							<div className="flex items-center gap-2 justify-between  mb-1">
								<span className="text-gray-700 m-0">title</span>
								<svg
									className="hidden h-5 w-5 text-blue-600"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<p className="text-gray-900 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</label>
					</div>
				</div>
			</fieldset>
		)
	}`;
  const smallCardRadio: string = `const smallCardRadio = () => {
		return(
			<fieldset>
				<legend className="hidden">작은 카드 라디오</legend>
				<div className="flex gap-x-4">
					<div>
						<input type="radio" name="group7" value="smallCardRadio01" id="smallCardRadio01" className="peer hidden" checked />
						<label
							htmlFor="smallCardRadio01"
							className="flex cursor-pointer rounded-lg border-solid border border-gray-200 p-2 text-sm font-medium shadow-sm peer-checked:bg-blue-500 peer-checked:text-white"
						>
							button01
						</label>
					</div>
					<div>
						<input type="radio" name="group7" value="smallCardRadio02" id="smallCardRadio02" className="peer hidden" />
						<label
							htmlFor="smallCardRadio02"
							className="flex cursor-pointer rounded-lg border-solid border border-gray-200 bg-white p-2 text-sm font-medium shadow-sm peer-checked:bg-blue-500 peer-checked:text-white"
						>
							button02
						</label>
					</div>
					<div>
						<input type="radio" name="group7" value="smallCardRadio03" id="smallCardRadio03" className="peer hidden" checked />
						<label
							htmlFor="smallCardRadio03"
							className="flex cursor-pointer rounded-lg border-solid border border-gray-200 p-2 text-sm font-medium shadow-sm peer-checked:bg-blue-500 peer-checked:text-white"
						>
							button03
						</label>
					</div>
					<div>
						<input type="radio" name="group7" value="smallCardRadio04" id="smallCardRadio04" className="peer hidden" disabled />
						<label
							htmlFor="smallCardRadio04"
							className="flex cursor-not-allowed rounded-lg border-solid border border-gray-200 bg-gray-100 p-2"
						>
							button disabled
						</label>
					</div>
				</div>
			</fieldset>
		)
	}`;
  const stackedCardRadio: string = `const stackedCardRadio = () => {
		return(
			<fieldset className="w-full">
				<legend className="hidden">Stacked 카드 라디오</legend>
				<div className="space-y-4 w-1/2">
					<div>
						<input
							type="radio"
							name="group9"
							value="stackedCardRadio01"
							id="stackedCardRadio01"
							className="peer hidden"
							checked
						/>

						<label
							htmlFor="stackedCardRadio01"
							className="flex flex-col cursor-pointer rounded-lg border border-solid border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
						>
							<div className="flex justify-between items-center">
								<p className="text-gray-700 mb-0">Name1</p>
								<p className="text-gray-900 mb-0">Free</p>
							</div>
							<p className="text-xs font-normal text-gray-500 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</label>
					</div>
					<div>
						<input type="radio" name="group9" value="stackedCardRadio02" id="stackedCardRadio02" className="peer hidden" />
						<label
							htmlFor="stackedCardRadio02"
							className="flex flex-col cursor-pointer rounded-lg border border-solid border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
						>
							<div className="flex justify-between items-center">
								<p className="text-gray-700 mb-0">Name2</p>
								<p className="text-gray-900 mb-0">Free</p>
							</div>
							<p className="text-xs font-normal text-gray-500 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</label>
					</div>
				</div>
			</fieldset>
		)
	}`;
  const simpleTableRadio: string = `const simpleTableRadio = () => {
  return(
    <fieldset className="w-full">
      <legend className="hidden">기본 테이블 라디오</legend>
      <div className="border border-solid border-gray-200 divide-y">
        <div>
          <input
            type="radio"
            name="group10"
            value="simpleTalbe01"
            id="simpleTalbe01"
            className="peer hidden [&:checked_+_label_svg]:text-blue-600 [&:checked_+_label_.highlight]:text-blue-600"
          />
          <label
            htmlFor="simpleTalbe01"
            className="grid grid-cols-7 cursor-pointer peer-checked:outline peer-checked:outline-blue-500 p-4 "
          >
            <svg className="h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-900 m-0">name</p>
            <p className="text-gray-900 m-0 highlight">age</p>
            <p className="text-gray-900 m-0 col-span-4 highlight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </label>
        </div>
        <div className="border-solid border-gray-200">
          <input
            type="radio"
            name="group10"
            value="simpleTalbe02"
            id="simpleTalbe02"
            className="peer hidden [&:checked_+_label_svg]:text-blue-600 [&:checked_+_label_.highlight]:text-blue-600"
          />
          <label
            htmlFor="simpleTalbe02"
            className="grid grid-cols-7 cursor-pointer peer-checked:outline peer-checked:outline-blue-500 p-4"
          >
            <svg className="h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-900 m-0">name</p>
            <p className="text-gray-900 m-0 highlight">age</p>
            <p className="text-gray-900 m-0 col-span-4 highlight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </label>
        </div>
        <div className="border-solid border-gray-200">
          <input
            type="radio"
            name="group10"
            value="simpleTalbe03"
            id="simpleTalbe03"
            className="peer hidden [&:checked_+_label_svg]:text-blue-600 [&:checked_+_label_.highlight]:text-blue-600"
          />
          <label
            htmlFor="simpleTalbe03"
            className="grid grid-cols-7 cursor-pointer peer-checked:outline peer-checked:outline-blue-500 p-4"
          >
            <svg className="h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-900 m-0">name</p>
            <p className="text-gray-900 m-0 highlight">age</p>
            <p className="text-gray-900 m-0 col-span-4 highlight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </label>
        </div>
      </div>
    </fieldset>
  )
	}`;
  const items: BreadcrumbsItem[] = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/inputs/radioGroup',
          children: [
            {
              label: 'Inputs',
              path: '/inputs/radioGroup',
            },
          ],
        },
      ],
    },
  ];
  const PageInfo: PageInfoType = {
    title: 'Radio Group',
    description:
      '둘 이상의 설정 중에서 하나를 선택할 수 있도록 설계되었으며, 주어진 그룹에서 하나의 라디오 버튼만 동시에 선택할 수 있습니다.',
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      {/* 기본 */}
      <CodeBoard code={simpleGroup} />
      <IframeRadioGroup />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 기본 row 정렬 */}
      <CodeBoard code={simpleRowGroup} />
      <IframeRadioRowGroup />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 디스크립션 라디오 */}
      <CodeBoard code={simpleDiscriptionGroup} />
      <IframeRadioDscGroup />
      {/* 디스크립션 인라인 라디오 */}
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={simpleDiscriptionRowGroup} />
      <IframeRadioDscRowGroup />
      {/* 오른쪽 버튼 */}
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={radioRight} />
      <IframeRadioRight />
      {/* 컬러 칩 라디오버튼 */}
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={colorRadio} />
      <IframeColorRadio />
      {/* 카드 라디오 버튼 */}
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={cardRadio} />
      <IframeCardRadio />
      {/* sm 카드 라디오 버튼 */}
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={smallCardRadio} />
      <IframeSmallCardRadio />
      {/* Stacked cards 카드 라디오 버튼 */}
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={stackedCardRadio} />
      <IframeStackedCardRadio />
      {/* Simple table */}
      <hr className="border-t border-solid border-gray-300 mt-12" />
      <CodeBoard code={simpleTableRadio} />
      <IframeSimpleTableRadio />
    </div>
  );
};

export default RadioGroup;
