import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const KakaoAddress = () => {
  const [address, setAddress] = useState(''); // 주소
  const [isOpenPost, setIsOpenPost] = useState(true);

  const onCompletePost = (data: any) => {
    let fullAddr = data.address;
    let extraAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }
    setIsOpenPost(false);
    setAddress(data.zonecode);
    console.log(address);
  };

  return (
    <div className="absolute left-0 top-0 h-full w-full">
      {isOpenPost ? (
        <DaumPostcode
          className="daum_postcode"
          onComplete={onCompletePost} // 값을 선택할 경우 실행되는 이벤트
          autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
          defaultQuery="" // 팝업을 열때 기본적으로 입력되는 검색어
        />
      ) : null}
    </div>
  );
};

export default KakaoAddress;
