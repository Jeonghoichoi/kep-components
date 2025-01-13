const IframeDividerVertical = () => { 
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Vertical Divider</div>
        <div className="flex gap-x-2 items-center p-6 border-gray-200 border border-solid rounded-lg"> 
           <div className="h-8 bg-gray-500 w-px"></div>
           <span className="text-gray-500">세로 구분선</span>
        </div>
      </div>
    );
  };
  
  export default IframeDividerVertical;
  