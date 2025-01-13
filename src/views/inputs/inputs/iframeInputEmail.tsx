import { EnvelopeIcon } from "@heroicons/react/24/outline";
const IframeInputEmail = () => {
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center text-slate-900 dark:text-gray-400">Input with leading icon / Input with corner hint</div>
			<div className="flex p-6 md:px-2 border-gray-600 border border-solid rounded-lg text-left">
				<fieldset className="w-full">
					<legend className="hidden">이메일</legend>
					<div className="relative w-1/3 m-0 mx-auto">
						<label htmlFor="email" className="block text-xs font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							id="email"
							placeholder="abc@email.com"
							className="w-full rounded border-gray-200 border-solid border shadow-sm sm:text-sm h-8 pl-8 dark:bg-slate-900"
						/>
						<span className="absolute bottom-0 start-0 grid w-8 h-8 place-content-center">
							<EnvelopeIcon className="w-4 h-4" />
						</span>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeInputEmail;
