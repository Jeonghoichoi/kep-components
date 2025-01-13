const IframeRadioGroup = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Simple list</div>
			<div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
				<fieldset>
					<legend className="hidden">기본 라디오</legend>
					<div className="mt-2 space-y-2">
						<div className="flex items-center gap-x-2">
							<input id="simpleRadio01" name="group1" type="radio" className="h-5 w-5" defaultChecked={true} />
							<label htmlFor="simpleRadio01" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer dark:text-gray-400">
								1번 라디오
							</label>
						</div>
						<div className="flex items-center gap-x-2">
							<input id="simpleRadio02" name="group1" type="radio" className="h-5 w-5" />
							<label htmlFor="simpleRadio02" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer dark:text-gray-400">
								2번 라디오
							</label>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeRadioGroup;
