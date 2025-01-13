const IframeInput = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Input with label</div>
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
		</div>
	);
};

export default IframeInput;
