import { useState } from "react";
const IframeColorPicker = () => {
	const [color, setColor] = useState<string>('#000')
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">ColorPicker</div>
			<div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg ">
                <div className="flex items-center gap-1">
                    <input
                        id="color"
                        name="color"
                        type="color"
                        defaultValue={"black"}
                        className="bg-white border-none w-6 h-7"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setColor(e.target.value)}
                        required
                    />
                    <label htmlFor="color" className="text-sm">선택된 색상: {color}</label>
                </div>
			</div>
		</div>
	);
};

export default IframeColorPicker;
