const IframeFloatinLabelInside = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">With Floating Label (Inside)</div>
			<div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
				<fieldset className="w-full">
					<legend className="hidden">인풋 클릭시 글자가 안에서 이동하는 형식</legend>
					<div className="w-1/3 m-0 mx-auto">
						<label
							htmlFor="floatingLabelInside"
							className="pt-4 relative block h-11 rounded-md border border-solid border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
						>
							<input
								type="text"
								id="floatingLabelInside"
								placeholder="floatingLabelInside"
								className="peer h-auto w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm px-2.5"
							/>
							<span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
								Floating Label Inside
							</span>
						</label>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeFloatinLabelInside;
