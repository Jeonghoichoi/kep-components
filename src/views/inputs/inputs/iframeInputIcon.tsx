import { AtSymbolIcon } from "@heroicons/react/24/outline";
const IframeInputIcon = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">With Icon</div>
			<div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
				<fieldset className="w-full">
					<legend className="hidden">인풋 + 아이콘</legend>
					<div className="relative w-1/3 m-0 mx-auto">
						<label htmlFor="inputIcon" className="sr-only">
							인풋
						</label>
						<input
							type="text"
							id="inputIcon"
							placeholder="이메일을 입력하세요"
							className="w-full rounded border-gray-200 border-solid border shadow-sm sm:text-sm h-8 px-2 dark:bg-slate-900"
						/>
						<span className="absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
							<AtSymbolIcon className="w-4 h-4" />
						</span>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeInputIcon;
