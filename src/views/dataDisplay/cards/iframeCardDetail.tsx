import { BuildingLibraryIcon, UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline';
import { ContentCardType } from '@/interfaces/UtilityInterface';
const IframeCardDetail = () => { 
    const data: ContentCardType = {
        price: 240000,
        address: "서울시 종로구 999길, 21",
        parking: 2,
        max: 3,
        classRoom: 6
    }
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Bordered with Image, Price, Content and Details</div>
        <div className="flex p-6 border-gray-200 border border-solid rounded-lg"> 
            <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt="Class"
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                    className="h-56 w-full rounded-md object-cover"
                />
                <div className="mt-2">
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-500">{data.address}</span>
                        <span className="text-sm text-gray-500">{data.price}원</span>
                    </div>
                    <ul className="mt-4 flex justify-between items-center gap-8 text-xs">
                        <li className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <InboxIcon className="w-4 h-4 text-gray-500" />
                            <div className="mt-1.5">
                                <p className="text-gray-500">주차</p>
                                <p className="font-medium">{data.parking} spaces</p>
                            </div>
                        </li>
                        <li className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <UserGroupIcon className="w-4 h-4 text-gray-500" />
                            <div className="mt-1.5">
                                <p className="text-gray-500">최대 인원</p>
                                <p className="font-medium">{data.max} 명</p>
                            </div>
                        </li>
                        <li className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <BuildingLibraryIcon className="w-4 h-4 text-gray-500" />
                            <div className="mt-1.5">
                                <p className="text-gray-500">수업실</p>
                                <p className="font-medium">{data.classRoom} room</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </a>
        </div>
      </div>
    );
  };
  
  export default IframeCardDetail;
  