const IframeInputDatepickerBasic = () => {
	
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">DatePicker</div>
			<div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg ">
                <input
                    name="start"
                    type="date"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block pl-4 p-2 w-72"
                    required
                />
			</div>
		</div>
	);
};

export default IframeInputDatepickerBasic;
