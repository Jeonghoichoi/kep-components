const IframeColorRadio = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Color picker</div>
			<div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
				<fieldset>
					<legend className="hidden">컬러 선택 라디오</legend>
					<div className="flex gap-x-4">
						<div className="mt-2 space-y-2">
							<input
								defaultChecked={true}
								id="simpleDscColRadio01"
								name="group6"
								type="radio"
								className="cursor-pointer h-10 w-10 appearance-none rounded-full bg-red-500 border-solid border-2 border-white checked:outline-3 checked:outline checked:outline-red-500"
							/>
							<label
								htmlFor="simpleDscColRadio01"
								className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
							></label>
						</div>
						<div className="mt-2 space-y-2">
							<input
								id="simpleDscColRadio02"
								name="group6"
								type="radio"
								className="cursor-pointer h-10 w-10 appearance-none rounded-full bg-blue-500 border-solid border-2 border-white checked:outline-3 checked:outline checked:outline-blue-500"
							/>
							<label
								htmlFor="simpleDscColRadio02"
								className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
							></label>
						</div>
						<div className="mt-2 space-y-2">
							<input
								id="simpleDscColRadio03"
								name="group6"
								type="radio"
								className="cursor-pointer h-10 w-10 appearance-none rounded-full bg-green-500 border-solid border-2 border-white checked:outline-3 checked:outline checked:outline-green-500"
							/>
							<label
								htmlFor="simpleDscColRadio03"
								className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
							></label>
						</div>
						<div className="mt-2 space-y-2">
							<input
								id="simpleDscColRadio04"
								name="group6"
								type="radio"
								className="cursor-pointer h-10 w-10 appearance-none rounded-full bg-purple-500 border-solid border-2 border-white checked:outline-3 checked:outline checked:outline-purple-500"
							/>
							<label
								htmlFor="simpleDscColRadio04"
								className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
							></label>
						</div>
						<div className="mt-2 space-y-2">
							<input
								id="simpleDscColRadio05"
								name="group6"
								type="radio"
								className="cursor-pointer h-10 w-10 appearance-none rounded-full bg-orange-500 border-solid border-2 border-white checked:outline-3 checked:outline checked:outline-orange-500"
							/>
							<label
								htmlFor="simpleDscColRadio05"
								className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
							></label>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeColorRadio;
