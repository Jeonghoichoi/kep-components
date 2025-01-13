import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';
import { numberFormat } from '@/utils/util';
import { StatusType } from '@/interfaces/UtilityInterface';
const IframeCardStatus = () => { 
    const data: StatusType[] = [
        {
            key: "1",
            name: "매출",
            profit: 12469000,
            profitPercent: 67.85,
        },
        {
            key: "2",
            name: "매입",
            profit: 1019000,
            profitPercent: -17.85,
        },
    ]
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Card with Status</div>
          <button className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">PREVIEW</button>
        </div>
        <div className="flex p-6 border-gray-200 border border-solid rounded-lg gap-x-4"> 
            {data.map((item)=>(
                <article 
                    key={item.key}
                    className="rounded-lg border border-solid border-gray-100 bg-white dark:bg-gray-900 py-4 px-5"
                >
                    <div>
                        <h3 className="text-sm text-gray-500">{item.name}</h3>
                        <h5 className="text-xl font-bold text-gray-900 dark:text-gray-200">{numberFormat(item.profit)}</h5>
                    </div>
                    <div className="mt-1 flex justify-between gap-1 text-xs">
                        <div className="flex gap-x-1">
                            {item.profitPercent < 0 ? <ArrowTrendingDownIcon className="w-4 h-4 text-red-600" /> :  <ArrowTrendingUpIcon className="w-4 h-4 text-green-600" />}
                            <span className="font-medium"> {item.profitPercent}% </span>
                        </div>
                        <span className="text-gray-500">1일전</span>
                    </div>
                </article>
            ))}
        </div>
      </div>
    );
  };
  
  export default IframeCardStatus;
  