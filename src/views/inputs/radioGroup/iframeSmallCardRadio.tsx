const IframeSmallCardRadio = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Small cards</div>
			<div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
				<fieldset>
					<legend className="hidden">작은 카드 라디오</legend>
					<div className="flex gap-x-4">
						<div>
							<input type="radio" name="group8" value="smallCardRadio01" id="smallCardRadio01" className="peer hidden" defaultChecked={true}/>
							<label
								htmlFor="smallCardRadio01"
								className="flex cursor-pointer rounded-lg border-solid border border-gray-200 p-2 text-sm font-medium shadow-sm peer-checked:bg-blue-500 peer-checked:text-white text-gray-500 dark:text-gray-400"
							>
								button01
							</label>
						</div>
						<div>
							<input type="radio" name="group8" value="smallCardRadio02" id="smallCardRadio02" className="peer hidden" />
							<label
								htmlFor="smallCardRadio02"
								className="flex cursor-pointer rounded-lg border-solid border border-gray-200 p-2 text-sm font-medium shadow-sm peer-checked:bg-blue-500 peer-checked:text-white text-gray-500 dark:text-gray-400"
							>
								button02
							</label>
						</div>
						<div>
							<input type="radio" name="group8" value="smallCardRadio03" id="smallCardRadio03" className="peer hidden"  />
							<label
								htmlFor="smallCardRadio03"
								className="flex cursor-pointer rounded-lg border-solid border border-gray-200 p-2 text-sm font-medium shadow-sm peer-checked:bg-blue-500 peer-checked:text-white text-gray-500 dark:text-gray-400"
							>
								button03
							</label>
						</div>
						<div>
							<input type="radio" name="group8" value="smallCardRadio04" id="smallCardRadio04" className="peer hidden" disabled />
							<label
								htmlFor="smallCardRadio04"
								className="flex cursor-not-allowed rounded-lg border-solid border border-gray-200 bg-gray-100 p-2"
							>
								button disabled
							</label>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeSmallCardRadio;
