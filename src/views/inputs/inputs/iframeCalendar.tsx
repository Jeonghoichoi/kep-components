import { useState } from "react";
import Calendar from "react-calendar";
import { ChevronRightIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import "./index.less";
const IframeCalendar = () => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [value, onChange] = useState<Value>(new Date());
	return (
		<>
      <Calendar 
        // selectRange={true} //range선택 가능
        onChange={onChange} value={value} 
        className="kep-calendar"
        nextLabel={<ChevronRightIcon className="w-4 h-4" />}
        next2Label={<ChevronDoubleRightIcon className="w-4 h-4" />}
        prevLabel={<ChevronLeftIcon className="w-4 h-4" />}
        prev2Label={<ChevronDoubleLeftIcon className="w-4 h-4" />}
      />
    </>
	);
};

export default IframeCalendar;
