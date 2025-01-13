const IframeDividerText = () => { 
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Text Divider</div>
        <div className="flex flex-col p-6 border-gray-200 border border-solid rounded-lg"> 
            <div className="flex items-center gap-x-4">
                <span className="w-full h-px bg-gray-500"></span>
                <span className="whitespace-nowrap text-gray-500">중간 영역</span>
                <span className="w-full h-px bg-gray-500"></span>
            </div>
        </div>
      </div>
    );
  };
  
  export default IframeDividerText;
  