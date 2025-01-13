const IframeTable = () => {
    interface tableDataType {
        key: string,
        name: string,
        use: number ,
        helpful: number ,
        male: number ,
        female: number ,
    }
    const tableData: tableDataType[] = [
        {
            key: '1',
            name: '열나요',
            use: 43.2 ,
            helpful: 42.9,
            male: 29.9,
            female: 48.3 ,
        },
        {
            key: '2',
            name: '베이비타임',
            use: 41.8 ,
            helpful: 40.7,
            male: 38.6,
            female: 41.7 ,
        },
        {
            key: '3',
            name: '차이의 놀이',
            use: 23 ,
            helpful: 19,
            male: 7.9,
            female: 23.7 ,
        },
        {
            key: '4',
            name: '베이비빌리',
            use: 24.6 ,
            helpful: 18.7,
            male: 12.6,
            female: 21.7 ,
        }
    ]
    return (
        <>
            <table className="min-w-full bg-white text-xs rounded-lg overflow-hidden text-center text-gray-900 whitespace-nowrap">
                 <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 font-medium">이름</th>
                        <th className="px-4 py-2 font-medium">현재 이용 앱</th>
                        <th className="px-4 py-2 font-medium">도움이 되는 앱</th>
                        <th className="px-4 py-2 font-medium">남성</th>
                        <th className="px-4 py-2 font-medium">여성</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-200">
                     {tableData.map((item)=>(
                        <tr 
                            className="border-solid hover:bg-gray-50" 
                            key={item.key}
                        >
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">{item.use}</td>
                            <td className="px-4 py-2">{item.helpful}</td>
                            <td className="px-4 py-2">{item.male}</td>
                            <td className="px-4 py-2">{item.female}</td>
                        </tr>
                     ))}
                 </tbody>
            </table>
        </>
    )
};
export default IframeTable;
