const IframeCardRadio = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Cards</div>
			<div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
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
								defaultChecked={true}
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
			</div>
		</div>
	);
};

export default IframeCardRadio;
