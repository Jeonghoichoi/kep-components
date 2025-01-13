import { PageInfoType } from "@/interfaces/UtilityInterface";
const PageInformation = ( { PageInfo }: {PageInfo: PageInfoType }) => {
    return (
      <div>
           <h1 className="text-4xl font-bold dark:text-gray-400 text-gray-500 lg:text-3xl md:text-xl">
              { PageInfo.title }
          </h1>
           <p className="mt-5 dark:text-gray-400 text-gray-500 lg:text-sm lg:mt-2">
             { PageInfo.description }
          </p>
      </div>
    )
  };
  export default PageInformation;
  