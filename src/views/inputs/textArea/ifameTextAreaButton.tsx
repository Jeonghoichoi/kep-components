const IframeTextAreaButton = () => {
	return (
		<div className="flex flex-col gap-5 mt-12">
			<div className="flex min-w-0 items-center">With Actions (Contained)</div>
			<div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
				<fieldset className="w-full">
					<legend className="hidden">액션 버튼을 포함한 textarea</legend>

					<div className="overflow-hidden rounded-lg border border-solid border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 w-1/3 mx-auto ">
						<textarea
							id="text"
							className="w-full resize-none border-none align-top sm:text-sm focus:outline-0 p-2 dark:bg-slate-900"
							rows={4}
							placeholder="Enter any additional order notes..."
						></textarea>

						<div className="flex items-center justify-end gap-2 bg-white p-3 dark:bg-slate-900">
							<button type="button" className="rounded bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
								취소
							</button>
							<button type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
								확인
							</button>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeTextAreaButton;
