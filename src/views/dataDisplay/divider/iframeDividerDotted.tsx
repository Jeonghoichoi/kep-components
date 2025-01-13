const IframeDividerDotted = () => { 
    return (
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex min-w-0 items-center text-lg text-slate-900 dark:text-gray-400">Dotted Divider</div>
        <div className="flex flex-col p-6 border-gray-200 border border-solid rounded-lg"> 
           <hr className="border-t border-dashed border-gray-500 w-full"/>
        </div>
      </div>
    );
  };
  
  export default IframeDividerDotted;
  