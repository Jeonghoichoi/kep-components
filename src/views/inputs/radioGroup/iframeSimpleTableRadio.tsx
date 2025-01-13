const IframeSimpleTableRadio = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Simple table</div>
			<div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
				<fieldset className="w-full">
					<legend className="hidden">기본 테이블 라디오</legend>
					<div className="border border-solid border-gray-200 divide-y">
						<div>
							<input
								type="radio"
								name="group10"
								value="simpleTalbe01"
								id="simpleTalbe01"
								className="peer hidden [&:checked_+_label_svg]:text-blue-600 [&:checked_+_label_.highlight]:text-blue-600"
							/>
							<label
								htmlFor="simpleTalbe01"
								className="grid grid-cols-7 cursor-pointer peer-checked:outline peer-checked:outline-blue-500 p-4 "
							>
								<svg className="h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<p className="dark:text-gray-400 text-gray-900 m-0">name</p>
								<p className="dark:text-gray-400 text-gray-900 m-0 highlight">age</p>
								<p className="dark:text-gray-400 text-gray-900 m-0 col-span-4 highlight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</label>
						</div>
						<div className="border-solid border-gray-200">
							<input
								type="radio"
								name="group10"
								value="simpleTalbe02"
								id="simpleTalbe02"
								className="peer hidden [&:checked_+_label_svg]:text-blue-600 [&:checked_+_label_.highlight]:text-blue-600"
							/>
							<label
								htmlFor="simpleTalbe02"
								className="grid grid-cols-7 cursor-pointer peer-checked:outline peer-checked:outline-blue-500 p-4"
							>
								<svg className="h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<p className="dark:text-gray-400 text-gray-900 m-0">name</p>
								<p className="dark:text-gray-400 text-gray-900 m-0 highlight">age</p>
								<p className="dark:text-gray-400 text-gray-900 m-0 col-span-4 highlight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</label>
						</div>
						<div className="border-solid border-gray-200">
							<input
								type="radio"
								name="group10"
								value="simpleTalbe03"
								id="simpleTalbe03"
								className="peer hidden [&:checked_+_label_svg]:text-blue-600 [&:checked_+_label_.highlight]:text-blue-600"
							/>
							<label
								htmlFor="simpleTalbe03"
								className="grid grid-cols-7 cursor-pointer peer-checked:outline peer-checked:outline-blue-500 p-4"
							>
								<svg className="h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<p className="dark:text-gray-400 text-gray-900 m-0">name</p>
								<p className="dark:text-gray-400 text-gray-900 m-0 highlight">age</p>
								<p className="dark:text-gray-400 text-gray-900 m-0 col-span-4 highlight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</label>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeSimpleTableRadio;
