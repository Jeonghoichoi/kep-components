const IframeRadioRight = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">List with radio on right</div>
			<div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
				<fieldset className="w-1/2 lg:w-full">
					<legend className="hidden">리스트 우측에 있는 라디오</legend>
					<div className="divide-y grid grid-cols-1">
						<div className="flex items-start gap-x-2 justify-between py-4">
							<div className="flex-1">
								<label htmlFor="rightRadio01" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
									1번 라디오
									<p className="text-xs dark:text-gray-400 text-gray-500">1번 라디오에 대한 설명입니다</p>
								</label>
							</div>
							<div>
								<input id="rightRadio01" name="group5" type="radio" className="h-5 w-5" defaultChecked={true} />
							</div>
						</div>
						<div className="flex items-start gap-x-2 justify-between border-solid border-gray-400 py-4">
							<div className="flex-1">
								<label htmlFor="rightRadio02" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
									2번 라디오
									<p className="text-xs dark:text-gray-400 text-gray-500">2번 라디오에 대한 설명입니다</p>
								</label>
							</div>
							<div>
								<input id="rightRadio02" name="group5" type="radio" className="h-5 w-5" />
							</div>
						</div>
						<div className="flex items-start gap-x-2 justify-between border-solid border-gray-400 py-4">
							<div className="flex-1">
								<label htmlFor="rightRadio03" className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900 cursor-pointer">
									3번 라디오
									<p className="text-xs dark:text-gray-400 text-gray-500">3번 라디오에 대한 설명입니다</p>
								</label>
							</div>
							<div>
								<input id="rightRadio03" name="group5" type="radio" className="h-5 w-5" />
							</div>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeRadioRight;
