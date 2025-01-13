import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeInput from './iframeInput';
import IframeInputIcon from './iframeInputIcon';
import IframeInputButton from './iframeInputButton';
import IframeInputInLabel from './iframeInputInLabel';
import IframeFloatinLabel from './iframeFloatingLabel';
import IframeFloatinLabelInside from './iframeFloatingLabelInside';
import IframeInputEmail from './iframeInputEmail';
import IframeInputSelect from './iframeSelect';
import IframeInputDatepickerBasic from './iframeInputDatePickerBasic';
import IframeDatepicker from './ifameDatePicker';
import IframeCalendar from './iframeCalendar';
import IframeColorPicker from './iframeColorPicker';
const inputs = () => {
  const input: string = `const input = () => {
		return(
			<div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg text-left">
				<fieldset className="w-full">
					<legend className="hidden">기본 인풋</legend>
					<div className="w-1/3 mt-0 mx-auto mb-4">
						<label htmlFor="inputName" className="block text-xs font-medium text-gray-700">
							Label
						</label>
						<input
							type="text"
							id="inputName"
							placeholder="인풋에 이름을 입력하세요."
							className="mt-1 w-full rounded-md border-gray-200 border-solid border shadow-sm sm:text-sm h-8 px-2 dark:bg-slate-900"
						/>
					</div>
					<div className="w-1/3 m-0 mx-auto">
						<label htmlFor="inputName" className="block text-xs font-medium text-gray-700">
							Label
						</label>
						<input
							type="text"
							id="inputName"
							placeholder="disabled"
							className="mt-1 w-full rounded-md border-gray-200 border-solid border shadow-sm sm:text-sm h-8 px-2"
							disabled
						/>
					</div>
				</fieldset>
			</div>
		)
	}`;
  const inputIcon: string = `import { AtSymbolIcon } from "@heroicons/react/24/outline";

  const inputIcon = () => {
		return(
			<fieldset className="w-full">
				<legend className="text-sm font-semibold leading-6 text-gray-900 mb-1">인풋 + 아이콘</legend>
				<div className="relative w-1/3 m-0 mx-auto">
					<label htmlFor="inputIcon" className="sr-only">
						인풋
					</label>
					<input
						type="text"
						id="inputIcon"
						placeholder="이메일을 입력하세요"
						className="w-full rounded-mdpe-10 border-gray-200 border-solid border shadow-sm sm:text-sm h-8 px-2"
					/>
					<span className="absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
						<AtSymbolIcon className="w-4 h-4" />
					</span>
				</div>
			</fieldset>
		)
	}`;
  const inputButton: string = `import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
  const inputButton = () => {
		return(
			<fieldset className="w-full">
				<legend className="text-sm font-semibold leading-6 text-gray-900 mb-1">인풋 + 버튼</legend>
				<div className="relative w-1/3 m-0 mx-auto">
					<label htmlFor="Search" className="sr-only">
						Search
					</label>
					<input
						type="text"
						id="Search"
						placeholder="검색어를 입력하세요"
						className="w-full rounded-md border border-solid border-gray-200 py-2.5 px-4 shadow-sm sm:text-sm"
					/>
					<span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
						<button type="button" className="text-gray-600 hover:text-gray-700">
							<span className="sr-only">Search</span>
							<MagnifyingGlassIcon className="w-4 h-4" />
						</button>
					</span>
				</div>
			</fieldset>
		)
	}`;
  const labelInInput: string = `const labelInInput = () => {
		return(
			<fieldset className="w-full">
				<legend className="text-sm font-semibold leading-6 text-gray-900 mb-1">라벨 안에 있는 인풋</legend>
				<div className="w-1/3 m-0 mx-auto">
					<label
						htmlFor="UserEmail"
						className="block overflow-hidden rounded-md border border-solid border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
					>
						<span className="text-xs font-medium text-gray-700"> Email </span>

						<input
							type="email"
							id="UserEmail"
							placeholder="anthony@rhcp.com"
							className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
						/>
					</label>
				</div>
			</fieldset>
		)
	}`;
  const floatingLabel: string = `const floatingLabel = () => {
		return(
			<fieldset className="w-full">
				<legend className="text-sm font-semibold leading-6 text-gray-900 mb-1">인풋 클릭시 글자가 이동하는 형식</legend>
				<div className="w-1/3 m-0 mx-auto">
					<label
						htmlFor="floatingLabel"
						className="relative block h-10 rounded-md border border-solid border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
					>
						<input
							type="text"
							id="floatingLabel"
							className="peer border-none bg-transparent placeholder-transparent focus:ring-0 w-full h-full px-4"
							placeholder="floatingLabel"
						/>

						<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
							Floating Label
						</span>
					</label>
				</div>
			</fieldset>
		)
	}`;
  const floatingLabelInside: string = `const floatingLabelInside = () => {
  return(
    <fieldset className="w-full">
      <legend className="text-sm font-semibold leading-6 text-gray-900 mb-1">인풋 클릭시 글자가 안에서 이동하는 형식</legend>
      <div className="w-1/3 m-0 mx-auto">
        <label
          htmlFor="floatingLabelInside"
          className="pt-3 relative block h-10 rounded-md border border-solid border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            id="floatingLabelInside"
            placeholder="floatingLabelInside"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm px-2.5"
          />
          <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Floating Label Inside
          </span>
        </label>
      </div>
    </fieldset>
  )
}`;
  const inputEmail: string = `const inputEmail = () => {
  return(
    <fieldset className="w-full">
      <legend className="text-sm font-semibold leading-6 text-gray-900 mb-1">이메일</legend>
      <div className="relative w-1/3 m-0 mx-auto">
        <label htmlFor="email" className="block text-xs font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="abc@email.com"
          className="w-full rounded border-gray-200 border-solid border shadow-sm sm:text-sm h-8 px-2"
        />
        <span className="absolute inset-y-1/2 end-2 place-content-center text-gray-500">
          <EnvelopeIcon className="w-4 h-4" />
        </span>
      </div>
    </fieldset>
  )
}`;
  const inputSelect: string = `const inputSelect = () => {
  return(
    <div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg text-left">
      <fieldset className="w-full">
        <legend className="hidden">기본 인풋 + 셀렉트 박스</legend>
        <div className="relative mt-2 rounded-md shadow-sm w-1/3 mx-auto">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">단위</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>mm</option>
              <option>cm</option>
            </select>
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
          path: '/inputs/inputs',
          children: [
            {
              label: 'Inputs',
              path: '/inputs/inputs',
            },
          ],
        },
      ],
    },
  ];
  const inputdatepicker: string = `const inputdatepicker = () => {
      return(
        <div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg ">
            <input
                name="start"
                type="date"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block pl-4 p-2 w-72"
                required
            />
		  	</div>
      )
  }`
  const datepicker: string = `import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { DatepickerType } from "@/interfaces/UtilityInterface";
  
  const datepicker = () => {
      const [value, setValue] = useState<DatepickerType>({
        startDate: new Date(),
        endDate: new Date(),
      });

      return(
        <div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg ">
            <Datepicker 
              containerClassName="relative"
              inputClassName="border border-solid border-gray-300 text-gray-900 text-sm rounded-lg p-2 w-72"
              value={value} 
              useRange={false} 
              asSingle={true} 
              onChange={(date: any)=>setValue(date)}//type찾는중
              placeholder={"년-월-일"} 
            />
        </div>
      )
  }`
  const calendar: string = `import { useState } from "react";
  import Calendar from "react-calendar";
  import { ChevronRightIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
  import "./index.less";

  const calendar = () => {
    type ValuePiece = Date | null;
    type Value = ValuePiece | [ValuePiece, ValuePiece];
    const [value, onChange] = useState<Value>(new Date());
      return(
        <>
          <Calendar 
          //  selectRange={true} //range선택 가능
          onChange={onChange} value={value} 
          className="kep-calendar"
          nextLabel={<ChevronRightIcon className="w-4 h-4" />}
          next2Label={<ChevronDoubleRightIcon className="w-4 h-4" />}
          prevLabel={<ChevronLeftIcon className="w-4 h-4" />}
          prev2Label={<ChevronDoubleLeftIcon className="w-4 h-4" />}
          />
        </>
      )
  }`
  const colorpicker: string = `const colorpicker = () => {
      return(
        <div className="flex items-center gap-1">
            <input
                name="color"
                type="color"
                defaultValue={"black"}
                className="bg-white border-none w-6 h-7"
                onChange={(e: any)=>setColor(e.target.value)}
                required
            />
            <span className="text-sm">선택된 색상: {color}</span>
        </div>
      )
  }`
  const PageInfo: PageInfoType = {
    title: 'Inputs',
    description: `input 태그는 사용자로부터 입력을 받을 수 있는 입력 필드(input filed)를 정의할 때 사용합니다. 사용자가 데이터를 입력할 수
	있는 입력 필드를 선언하기 위해 form 요소 내부에서 사용됩니다. 이러한 입력 필드는 input 요소의 type 속성값을 달리함으로써
	여러 가지 모양으로 나타낼 수 있습니다. 빈 태그(empty tag)이며, 속성만을 포함하고 있습니다. label 요소를 사용하면 input
	요소의 라벨(label)을 정의할 수도 있습니다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      {/* Input with label */}
      <CodeBoard code={input} />
      <IframeInput />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* Input with Icon */}
      <CodeBoard code={inputIcon} />
      <IframeInputIcon />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* Input with Button */}
      <CodeBoard code={inputButton} />
      <IframeInputButton />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* With Label in Input */}
      <CodeBoard code={labelInInput} />
      <IframeInputInLabel />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* With Floating Label */}
      <CodeBoard code={floatingLabel} />
      <IframeFloatinLabel />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* With Floating Label (Inside) */}
      <CodeBoard code={floatingLabelInside} />
      <IframeFloatinLabelInside />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* Email Input */}
      <CodeBoard code={inputEmail} />
      <IframeInputEmail />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* Input width Select */}
      <CodeBoard code={inputSelect} />
      <IframeInputSelect />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* datepicker basic */}
      <CodeBoard code={inputdatepicker} />
      <IframeInputDatepickerBasic/>
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* datepicker */}
      <CodeBoard code={datepicker} />
      <IframeDatepicker/>
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* calendar */}
      <CodeBoard code={calendar} />
      <IframeCalendar />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* colorpicker */}
      <CodeBoard code={colorpicker} />
      <IframeColorPicker/>
    </div>
  );
};

export default inputs;
