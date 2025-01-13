import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeAlertRightBottom from './iframeAlertRightBottom';
import IframeAlertCenterTop from './iframeAlertCenterTop';
import IframeAlertCenterBottom from './iframeAlertCenterBottom';
const Alert = () => {
  const alertRightBottom: string = `import { useEffect, useState } from 'react';
  const alertRightBottom = () => {
	const [alert, setAlert] = useState<boolean>(false);
	const [delay, setDelay] = useState<number>(5);
  
	useEffect(() => {
	  if (alert && delay > 0) {
		let timer = setInterval(() => {
		  setDelay((prevDelay) => prevDelay - 1);
		}, 1000);
  
		return () => {
		  clearInterval(timer);
		};
	  } else {
		setAlert(false);
	  }
	}, [alert, delay]);	

	return (
		<div className="p-6 border-gray-200 border border-solid rounded-lg">
        <button
          className="bg-gray-50 text-sm p-4"
          onClick={() => {
            setAlert(true);
            setDelay(5);
          }}
        >
          {' '}
          우측 하단 Alert 보기{' '}
        </button>
        {alert ? (
          <aside className="fixed bottom-12 end-12 z-50 flex items-center justify-center gap-4 rounded-lg bg-green-100 p-4 text-green-600">
            <a href="#" target="_blank" className="text-sm font-medium hover:opacity-75">
            👋 Welcome 👋  <br />
            안녕하세요 KEP 웹입니다. 만나서 반가워요! &ensp;
            {delay} 초 뒤에 사라집니다. 🙂  <br />
            </a>
          </aside>
        ) : null}
      </div>
	);
}`;
  const alertCenterTop: string = `import { useEffect, useState } from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

  const alertCenterTop = () => {
	const [alert, setAlert] = useState<boolean>(false);
	useEffect(() => {
	  let timer = setTimeout(() => {
		setAlert(false);
	  }, 3000);
	  return () => {
		clearTimeout(timer);
	  };
	}, [alert]);
	
	return (
		<div className="p-6 border-gray-200 border border-solid rounded-lg">
			<button
			className="bg-gray-50 text-sm p-4"
			onClick={() => {
				setAlert(true);
			}}
			>
			{' '}
			가운데 상단 Alert{' '}
			</button>
			{alert ? (
			<aside className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 p-2 text-white">
				<ShieldCheckIcon className="w-5 h-5" />
				성공적으로 저장하였습니다.
			</aside>
			) : null}
		</div>
	);
}`;
  const alertCenterBottom: string = `import { useEffect, useState } from 'react';
import { ShieldExclamationIcon } from '@heroicons/react/24/outline';

const alertCenterBottom = () => {
	const [alert, setAlert] = useState<boolean>(false);
	useEffect(() => {
	  let timer = setTimeout(() => {
		setAlert(false);
	  }, 3000);
	  return () => {
		clearTimeout(timer);
	  };
	}, [alert]);
		
	return (
	 <div className="p-6 border-gray-200 border border-solid rounded-lg">
        <button
          className="bg-gray-50 text-sm p-4 rounded"
          onClick={() => {
            setAlert(true);
          }}
        >
          {' '}
          가운데 하단 Alert 보기{' '}
        </button>
        {alert ? (
          <aside className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-2 rounded-lg bg-red-400 px-4 p-2 text-white">
            <ShieldExclamationIcon className="w-5 h-5" />
            ERROR! 저장할 수 없는 내용이 포함되어 있습니다.
          </aside>
        ) : null}
      </div>
	);
}`;

  const items: BreadcrumbsItem[] = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/feedback/alert',
          children: [
            {
              label: 'FeedBack',
              path: '/feedback/alert',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo: PageInfoType = {
    title: 'Alert',
    description: `Alert는 사용자의 작업을 방해하지 않고 사용자의 관심을 끄는 방식으로 짧고 중요한 메시지를 표시합니다.`,
  };
  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      {/* 오른쪽 하단 alert  */}
      <CodeBoard code={alertRightBottom} />
      <IframeAlertRightBottom />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 가운데 상단 alert */}
      <CodeBoard code={alertCenterTop} />
      <IframeAlertCenterTop />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 가운데 하단 alert */}
      <CodeBoard code={alertCenterBottom} />
      <IframeAlertCenterBottom />
    </div>
  );
};

export default Alert;
