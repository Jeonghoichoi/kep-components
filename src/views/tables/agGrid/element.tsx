import { OlympicDataType } from "@/interfaces/UtilityInterface";
const Element = ({data}: {data: OlympicDataType}) => {
    return (
        <div className="custom-element">
            <input defaultValue={data.country ? data.country : ''} />
            <a className="text-blue-500 underline text-xs hover:text-blue-600" href={`https://www.google.com/search?q=${data.country}`} target="_blank">
               자세히 보기
            </a>
        </div>
    )
};

export default Element;
