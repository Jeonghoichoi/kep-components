const IframeBasicSelect = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Simple native</div>
			<div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
				<fieldset className="w-full">
					<legend className="hidden">기본 셀렉트박스</legend>
					<div className="w-1/3 m-0 mx-auto">
						<select name="BasicSelect" id="BasicSelect" className="h-8 w-full text-gray-600 border border-solid border-gray-400 rounded dark:bg-slate-900">
							<option value="">선택하세요.</option>
							<option value="ex01">Select Box Ex 01</option>
							<option value="ex02">Select Box Ex 02</option>
						</select>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeBasicSelect;
