const IframeFloatinLabel = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">With Floating Label</div>
			<div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg text-left">
				<fieldset className="w-full">
					<legend className="hidden">인풋 클릭시 글자가 이동하는 형식</legend>
					<div className="w-1/3 m-0 mx-auto">
						<label
							htmlFor="floatingLabel"
							className="relative block h-10 rounded-md border border-solid border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
						>
							<input
								type="text"
								id="floatingLabel"
								className="peer border-none bg-transparent placeholder-transparent focus:ring-0 w-full h-full px-4"
								placeholder="floatingLabel"
							/>

							<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white dark:bg-slate-900 p-0.5 text-xs text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
								Floating Label
							</span>
						</label>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeFloatinLabel;
