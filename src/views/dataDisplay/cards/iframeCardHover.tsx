import { CardType } from '@/interfaces/UtilityInterface';
const IframeCardHover = () => { 
    const data: CardType = {
        name: "Tony Wayne",
        job: "Developer",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?"
    }
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Darkened Background with Content on Hover</div>
        <div className="flex p-6 border-gray-200 border border-solid rounded-lg"> 
            <a href="#" className="group relative block bg-black w-1/2">
                <img
                    alt="Developer"
                    src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />
                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-white"> {data.job}</p>
                    <p className="text-xl font-bold text-white sm:text-2xl">{data.name}</p>
                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-white">
                            {data.text}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
      </div>
    );
  };
  
  export default IframeCardHover;
  