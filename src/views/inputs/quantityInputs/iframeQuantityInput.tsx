import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
const IframeQuantityInput = () => {
	const [num, setNum] = useState<number>(0);
	const numPlus = () => {
		if (num >= 0) {
			setNum(num + 1);
		}
	};
	const numMinus = () => {
		if (num > 0) {
			setNum(num - 1);
		}
	};
	return (
		<div className="flex flex-col gap-5 mt-6">
			<div className="flex min-w-0 items-center dark:text-white text-gray-500">Quantity</div>
			<div className="flex justify-center p-6 md:px-2 border-gray-600 border border-solid rounded-lg">
				<fieldset>
					<legend className="hidden">Quantity</legend>
					<div className="mt-2">
						<div className="flex items-center gap-x-1">
							<button
								type="button"
								onClick={() => {
									numMinus();
								}}
							>
								<MinusIcon className="w-4 h-10 dark:text-white text-gray-500" />
							</button>
							<span className="w-10 text-center dark:text-gray-400 text-gray-500">{num}</span>
							<button
								type="button"
								onClick={() => {
									numPlus();
								}}
							>
								<PlusIcon className="w-5 h-10 dark:text-white text-gray-500" />
							</button>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default IframeQuantityInput;
