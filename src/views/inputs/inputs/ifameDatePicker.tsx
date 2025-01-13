import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { DatepickerType } from "@/interfaces/UtilityInterface";
const IframeDatepicker = () => {
	const [value, setValue] = useState<DatepickerType>({
        startDate:null,
        endDate: null,
    });
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">DatePicker</div>
			<div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg ">
       <Datepicker 
					containerClassName="relative"
				 	inputClassName="border border-solid border-gray-300 text-gray-900 text-sm rounded-lg p-2 w-72"
					value={value} 
					useRange={false} 
					asSingle={true} 
					onChange={(e:  DatepickerType | null) =>setValue(e!)}
					placeholder={"년-월-일"} 
				  />
			</div>
		</div>
	);
};

export default IframeDatepicker;
