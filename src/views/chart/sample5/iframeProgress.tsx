const IframeProgress = () => {
   interface progressDataType {
      key: string,
      name: string,
      img: string,
      state: number ,
   }
  const progressData: progressDataType[] = [
      {
          key: '1',
          name: 'Lia',
          img: '/kep-component/resources/img-landing01.png',
          state: 75.6 ,
      },
      {
          key: '2',
          name: 'Tomas Antony',
          img: '/kep-component/resources/img-landing02.png',
          state: 43.2 ,
      },
      {
          key: '3',
          name: 'Andrew L',
          img: '/kep-component/resources/img-landing03.png',
          state: 50.7 ,
      },
      {
          key: '4',
          name: 'Alice',
          img: '/kep-component/resources/img-landing04.png',
          state: 10.6 ,
      },
  ]
   return(
    <div className="grid grid-cols-1 gap-4">
      {progressData.map((item)=>(
         <div className="flex items-center space-x-4" key={item.key}>
            <img
            className="w-10 h-10 rounded-full"
            src={item.img}
            alt="avatar_picture_1"
            />
            <div className="w-full">
               <h6 className="uppercase text-xs mb-1">{item.name}</h6>
               <div className="flex gap-x-1">
                  <span className="inline-block h-3 bg-pink-400 rounded-full" style={{width: `${item.state}%`}}></span>
                  <span className="text-xs">{item.state}%</span>
               </div>
            </div>
         </div>
      ))}
    </div>
   )
};
export default IframeProgress;
