const IframeStackedCardRadio = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Stacked cards</div>
			<div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
				<fieldset className="w-full">
					<legend className="hidden">스택 라디오</legend>
					<div className="space-y-4 w-1/2">
						<div>
							<input
								type="radio"
								name="group9"
								value="stackedCardRadio01"
								id="stackedCardRadio01"
								className="peer hidden"
								defaultChecked={true}
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
			</div>
		</div>
	);
};

export default IframeStackedCardRadio;
