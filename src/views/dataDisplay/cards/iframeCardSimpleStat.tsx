import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';
import { numberFormat } from '@/utils/util';
import { StatusType } from '@/interfaces/UtilityInterface';
const IframeCardSimpleStat = () => { 
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
          <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Simple Status</div>
          <button className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">PREVIEW</button>
        </div>
        <div className="flex flex-col gap-y-4 p-6 border-gray-200 border border-solid rounded-lg gap-x-4"> 
            {data.map((item)=>(
                 <article 
                    key={item.key}
                    className="flex items-end justify-between rounded-lg border border-solid border-gray-100 dark:bg-gray-900 bg-white p-6 w-1/2"
                >
                    <div>
                        <h3 className="text-sm text-gray-500">{item.name}</h3>
                        <h5 className="text-xl font-bold text-gray-900 dark:text-gray-200">{numberFormat(item.profit)}</h5>
                    </div>
                    {item.profitPercent < 0 ? 
                        (<div className="flex items-center text-xs gap-2 rounded bg-red-100 p-1 text-red-600">
                          <ArrowTrendingDownIcon className="w-4 h-4" /> 
                          {item.profitPercent}
                        </div>)
                        :  
                        (<div className="flex items-center text-xs gap-2 rounded bg-green-100 p-1 text-green-600">
                          <ArrowTrendingUpIcon className="w-4 h-4" />
                          {item.profitPercent}
                        </div>)
                    }
              </article>
            ))}
        </div>
      </div>
    );
  };
  
  export default IframeCardSimpleStat;
  