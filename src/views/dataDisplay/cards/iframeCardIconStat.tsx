import { ArrowSmallUpIcon} from '@heroicons/react/24/outline';
import { numberFormat } from '@/utils/util';
import { StatusTotalType } from '@/interfaces/UtilityInterface';
const IframeCardIconStat = () => { 
    const data: StatusTotalType[] = [
        {
            key: "1",
            name: "Subscribers",
            total: 71897,
            today: 122,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>`,
        },
        {   
            key: "2",
            name: "Open",
            total: 58.16,
            today: 5.4,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
          </svg>`,
        },
        {   
            key: "3",
            name: "Click",
            total: 24.57,
            today: 3.2,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
          </svg>`,
        },
    ]
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Simple Status</div>
          <button className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">PREVIEW</button>
        </div>
        <div className="flex gap-y-4 p-6 border-gray-200 border border-solid rounded-lg gap-x-4"> 
            {data.map((item)=>(
                <article 
                    key={item.key} 
                    className="w-full flex items-start rounded-lg border border-solid border-gray-100 bg-white dark:bg-gray-900 p-4 gap-x-4"
                >
                    <span className="w-12 h-12 flex items-center justify-center bg-indigo-500 text-white rounded">
                       <i dangerouslySetInnerHTML={{ __html: item.icon }}></i>
                    </span>
                    <div>
                        <h3 className="text-sm text-gray-500 mb-1">{item.name}</h3>
                        <div className="flex items-end gap-x-1">
                            <h5 className="text-xl font-bold text-gray-900 leading-5 dark:text-gray-200">{numberFormat(item.total)}</h5>
                            <h6 className="text-green-500 flex">
                                <ArrowSmallUpIcon className="w-4 h-4" />
                                <span className="text-xs font-medium">{(item.today)}</span>
                            </h6>
                        </div>
                    </div>
                </article>
            ))}
        </div>
      </div>
    );
  };
  
  export default IframeCardIconStat;
  