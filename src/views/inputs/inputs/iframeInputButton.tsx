import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const IframeInputButton = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">With Button in Input</div>
			<div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
				<fieldset className="w-full">
					<legend className="hidden">인풋 + 버튼</legend>
					<div className="relative w-1/3 m-0 mx-auto">
						<label htmlFor="Search" className="sr-only">
							Search
						</label>
						<input
							type="text"
							id="Search"
							placeholder="검색어를 입력하세요"
							className="w-full rounded-md border border-solid border-gray-200 h-8 px-4 shadow-sm sm:text-sm dark:bg-slate-900"
						/>
						<span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
							<button type="button" className="text-gray-600 hover:text-gray-700">
								<span className="sr-only">Search</span>
								<MagnifyingGlassIcon className="w-4 h-4" />
							</button>
						</span>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeInputButton;
