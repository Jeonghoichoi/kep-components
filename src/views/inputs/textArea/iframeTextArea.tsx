const IframeTextArea = () => {
	return (
		<div className="flex flex-col gap-5 mt-12">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Simple Textarea</div>
			<div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
				<fieldset className="w-full">
					<div className="flex flex-col">
						<label htmlFor="OrderNotes" className="hidden">기본 텍스트</label>
						<textarea
							id="OrderNotes"
							className="mt-2 w-full rounded-lg border border-gray-200 align-top shadow-sm sm:text-sm p-2 dark:bg-slate-900"
							rows={4}
							placeholder="텍스트를 입력하세요."
						></textarea>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeTextArea;
