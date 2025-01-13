import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
const IframeChipDeletableIcon = () => {
    const [state, setState] = useState<string[]>(["Deletable Chip 01", "Deletable Chip 02", "Deletable Chip 03"]);
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Deletable Icon</div>
        <div className="flex p-6 md:px-2 border-gray-200 border border-solid rounded-lg">
            <div className="flex items-center gap-x-2">
                {state.map((data, index)=>(
                    <span 
                        key={data} 
                        className="bg-white hover:bg-gray-100 text-xs cursor-pointer border border-solid border-gray-200 px-3 py-2 rounded-2xl flex items-center gap-x-1">
                           {state[index]}
                        <button
                            className=" rounded-full bg-gray-100 p-0.5 text-gray-600 transition hover:bg-gray-200"
                            onClick={()=>{
                               let copyState = [...state];
                               copyState.splice(index, 1);
                               setState(copyState);
                            }}
                         >
                        <TrashIcon className="w-3 h-3" />
                    </button>
                    </span>
                ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default IframeChipDeletableIcon;
  