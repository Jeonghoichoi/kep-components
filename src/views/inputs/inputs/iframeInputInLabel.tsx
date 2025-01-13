const IframeInputInLabel = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">With Label in Input</div>
			<div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg text-left">
				<fieldset className="w-full">
					<legend className="hidden">라벨 안에 있는 인풋</legend>
					<div className="w-1/3 m-0 mx-auto">
						<label
							htmlFor="UserEmail"
							className="block overflow-hidden rounded-md border border-solid border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
						>
							<span className="text-xs font-medium text-gray-700 dark:text-gray-400"> Email </span>

							<input
								type="email"
								id="UserEmail"
								placeholder="anthony@rhcp.com"
								className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:bg-slate-900"
							/>
						</label>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeInputInLabel;
