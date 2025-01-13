import { BreadcrumbsItem, PageInfoType } from '@/interfaces/UtilityInterface';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageInformation from '@/components/common/PageInformation';
import CodeBoard from '@/components/common/CodeBoard';
import IframeCardList from './iframeCardList';
import IframeCardContents from './iframeCardContents';
import IframeCardDetail from './iframeCardDetail';
import IframeCardHover from './iframeCardHover';
import IframeCardPost from './iframCardPost';
import IframeCardStatus from './iframeCardStatus';
import IframeCardSimpleStat from './iframeCardSimpleStat';
import IframeCardIconStat from './iframeCardIconStat';
const Cards = () => {
const listCard: string = `import { useState } from 'react';
import IframeCardAdd from './iframeCardAdd';
import { v4 as uuidv4 } from 'uuid';
import { CardType } from '@/interfaces/UtilityInterface';
const listCard = () => {
	const [cardInfo, setCardInfo] = useState<CardType []>([
		{
		  name: 'Project A',
		  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti, unde ab ut in!',
		},
		{
		  name: 'Project B',
		  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque saepe sit.',
		},
	  ]);
	  // 새로 입력되는 제목 & 내용
	  const [newTitle, setNewTitle] = useState<string>('');
	  const [newText, setNewText] = useState<string>('');
	  const newArray:{name: string, text: string} = { name: newTitle, text: newText };
	
	  //입력한 값 원래 배열에 push
	  const onCreate = (): void => {
		if (newArray.name.length > 0 && newArray.text.length > 0) {
		  const copyCardInfo = [...cardInfo];
		  copyCardInfo.push(newArray);
		  setCardInfo(copyCardInfo);
		} else {
		  alert('제목과 내용을 모두 입력해주세요!');
		}
		onClose();
	  };
	  // popup
	  const [modal, setModal] = useState<boolean>(false);
	  const onClose = (): void => {
		setModal(false);
		setNewTitle('');
		setNewText('');
	  };
	return (
		<article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
		<div className="flex items-center gap-4">
		  <img
			alt="Default avatar"
			src="https://dev.semokids.com/contents/images/avatar_picture_1.jpg"
			className="h-16 w-16 rounded-full object-cover"
		  />
		  <div>
			<h3 className="text-lg font-medium text-white">Claire Mac</h3>
			<div className="flow-root">
			  <ul className="-m-1 flex flex-wrap">
				<li className="p-1 leading-none">
				  <a href="#" className="text-xs font-medium text-gray-300">
					{' '}
					Twitter{' '}
				  </a>
				</li>
				<li className="p-1 leading-none">
				  <a href="#" className="text-xs font-medium text-gray-300">
					{' '}
					GitHub{' '}
				  </a>
				</li>
				<li className="p-1 leading-none">
				  <a href="#" className="text-xs font-medium text-gray-300">
					Website
				  </a>
				</li>
			  </ul>
			</div>
		  </div>
		</div>
		<ul className="mt-4 space-y-2">
		  {cardInfo.map((data) => {
			return (
			  <li key={uuidv4()}>
				<a href="#" className="block h-full rounded-lg border border-solid border-gray-700 p-4 hover:border-blue-600">
				  <strong className="font-medium text-white">{data.name}</strong>
				  <p className="mt-1 text-xs font-medium text-gray-300">{data.text}</p>
				</a>
			  </li>
			);
		  })}
		</ul>
		<button
		  className="w-12 h-12 mt-4 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center"
		  onClick={() => {
			setModal(true);
		  }}
		>
		  +
		</button>
		{modal ? (
		  <IframeCardAdd setNewTitle={setNewTitle} setNewText={setNewText} onCreate={onCreate} onClose={onClose} />
		) : null}
	  </article>
	)
}`;

  const contentCard: string = `import { dataType } from '@/interfaces/UtilityInterface';
const contentCard = () => {
	const data: dataType = {
		name: 'John Doe',
		topic: 'Building a SaaS product as a software developer!',
		text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.',
		Published: '2023.06.03',
		readingTime: 6,
	};
	return (
        <a href="#" className="relative block overflow-hidden rounded-lg border border-solid border-gray-100 p-6">
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
          <div className="flex ustify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-500">{data.topic}</h3>
              <p className="mt-1 text-xs font-medium text-gray-600">By. {data.name}</p>
            </div>
            <img
              alt="Default avatar"
              src="https://dev.semokids.com/contents/images/avatar_picture_2.jpg"
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
          <div className="mt-4">
            <p className="max-w-[40ch] text-sm text-gray-500">{data.text}</p>
          </div>
          <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Published</dt>
              <dd className="text-xs text-gray-500">{data.Published}</dd>
            </div>

            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Reading time</dt>
              <dd className="text-xs text-gray-500">{data.readingTime} minute</dd>
            </div>
          </dl>
        </a>
	)
}`;
  const detailCard: string = `import { BuildingLibraryIcon, UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline';
  import { ContentCardType } from '@/interfaces/UtilityInterface';
  
  const detailCard = () => {
	const data: ContentCardType = {
        price: 240000,
        address: "서울시 종로구 999길, 21",
        parking: 2,
        max: 3,
        classRoom: 6
    }
	return (
		<a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
			<img
				alt="Class"
				src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
				className="h-56 w-full rounded-md object-cover"
			/>
			<div className="mt-2">
				<div className="flex flex-col">
					<span className="font-medium text-gray-500">{data.address}</span>
					<span className="text-sm text-gray-500">{data.price}원</span>
				</div>
				<ul className="mt-4 flex justify-between items-center gap-8 text-xs">
					<li className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
						<InboxIcon className="w-4 h-4 text-gray-500" />
						<div className="mt-1.5">
							<p className="text-gray-500">주차</p>
							<p className="font-medium">{data.parking} spaces</p>
						</div>
					</li>
					<li className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
						<UserGroupIcon className="w-4 h-4 text-gray-500" />
						<div className="mt-1.5">
							<p className="text-gray-500">최대 인원</p>
							<p className="font-medium">{data.max} 명</p>
						</div>
					</li>
					<li className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
						<BuildingLibraryIcon className="w-4 h-4 text-gray-500" />
						<div className="mt-1.5">
							<p className="text-gray-500">수업실</p>
							<p className="font-medium">{data.classRoom} room</p>
						</div>
					</li>
				</ul>
			</div>
		</a>
	)
}`;
const hoverCard: string = `import { CardType } from '@/interfaces/UtilityInterface';

const hoverCard = () => {
	const data: CardType = {
		name: "Tony Wayne",
		job: "Developer",
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?"
	}

	return (
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
    )
}`;
  const postCard: string = `const postCard = () => {
	return (
		<div className="flex p-6 border-gray-200 border border-solid rounded-lg">
			<article className="rounded-xl bg-white dark:bg-gray-900 p-4 ring ring-indigo-50">
			  <div className="flex items-start gap-8">
				<div
				  className="grid h-20 w-20 shrink-0 place-content-center rounded-full border-2 border-solid border-indigo-500"
				  aria-hidden="true"
				>
				  <div className="flex items-center gap-1">
					<span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
					<span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
					<span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
					<span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
					<span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
				  </div>
				</div>
				<div>
				  <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
					Episode #101
				  </strong>
				  <h3 className="mt-4 text-lg font-medium sm:text-xl">
					<a href="" className="hover:underline dark:text-gray-400">
					  {' '}
					  Some Interesting Podcast Title{' '}
					</a>
				  </h3>
				  <p className="mt-1 text-sm text-gray-700">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla amet voluptatum sit rerum, atque, quo culpa
					ut necessitatibus eius suscipit eum accusamus, aperiam voluptas exercitationem facere aliquid fuga. Sint.
				  </p>
				  <div className="mt-4 sm:flex sm:items-center sm:gap-2">
					<div className="flex items-center gap-1 text-gray-500">
					  <ClockIcon className="w-4 h-4" />
					  <p className="text-xs font-medium">48:32 minutes</p>
					</div>
					<span className="hidden sm:block" aria-hidden="true">
					  &middot;
					</span>
					<p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
					  Featuring{' '}
					  <a href="#" className="underline hover:text-gray-700">
						Barry
					  </a>
					  ,
					  <a href="#" className="underline hover:text-gray-700">
						Sandra
					  </a>{' '}
					  and
					  <a href="#" className="underline hover:text-gray-700">
						August
					  </a>
					</p>
				  </div>
				</div>
			  </div>
			</article>
		</div>
	)
}`;
  const cardStaus: string = `const cardStaus = () => {
	const data: StatusType[] = [
        {
            key: "1",
            name: "매출",
            profit: 12469000,
            profitPercent: 67.85,
        },
        {
            key: "2",
            name: "매입",
            profit: 1019000,
            profitPercent: -17.85,
        },
    ]

	return(
		<div className="flex p-6 border-gray-200 border border-solid rounded-lg gap-x-4"> 
			{data.map((item)=>(
				<article 
					key={item.key}
					className="rounded-lg border border-solid border-gray-100 bg-white dark:bg-gray-900 py-4 px-5"
				>
					<div>
						<h3 className="text-sm text-gray-500">{item.name}</h3>
						<h5 className="text-xl font-bold text-gray-900 dark:text-gray-200">{numberFormat(item.profit)}</h5>
					</div>
					<div className="mt-1 flex justify-between gap-1 text-xs">
						<div className="flex gap-x-1">
							{item.profitPercent < 0 ? <ArrowTrendingDownIcon className="w-4 h-4 text-red-600" /> :  <ArrowTrendingUpIcon className="w-4 h-4 text-green-600" />}
							<span className="font-medium"> {item.profitPercent}% </span>
						</div>
						<span className="text-gray-500">1일전</span>
					</div>
				</article>
			))}
		</div>
	)
}`;
  const cardRowStaus: string = `const cardRowStaus = () => {
	const data: StatusType[] = [
        {
            key: "1",
            name: "매출",
            profit: 12469000,
            profitPercent: 67.85,
        },
        {
            key: "2",
            name: "매입",
            profit: 1019000,
            profitPercent: -17.85,
        },
    ]
	return(
		<div className="flex flex-col gap-y-4 p-6 border-gray-200 border border-solid rounded-lg gap-x-4"> 
			{data.map((item)=>(
				<article 
					key={item.key}
					className="flex items-end justify-between rounded-lg border border-solid border-gray-100 dark:bg-gray-900 bg-white p-6 w-1/2"
				>
					<div>
						<h3 className="text-sm text-gray-500">{item.name}</h3>
						<h5 className="text-xl font-bold text-gray-900 dark:text-gray-200">{numberFormat(item.profit)}</h5>
					</div>
					{item.profitPercent < 0 ? 
						(<div className="flex items-center text-xs gap-2 rounded bg-red-100 p-1 text-red-600">
						<ArrowTrendingDownIcon className="w-4 h-4" /> 
						{item.profitPercent}
						</div>)
						:  
						(<div className="flex items-center text-xs gap-2 rounded bg-green-100 p-1 text-green-600">
						<ArrowTrendingUpIcon className="w-4 h-4" />
						{item.profitPercent}
						</div>)
					}

			</article>
			))}
		</div>
	)
}`;
  const cardIconStaus: string = `const cardIconStaus = () => {
	const data: StatusTotalType[] = [
        {
            key: "1",
            name: "Subscribers",
            total: 71897,
            today: 122,
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>,
        },
        {   
            key: "2",
            name: "Open",
            total: 58.16,
            today: 5.4,
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
          </svg>,
        },
        {   
            key: "3",
            name: "Click",
            total: 24.57,
            today: 3.2,
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
          </svg>,
        },
    ]
	return(
		<div className="flex gap-y-4 p-6 border-gray-200 border border-solid rounded-lg gap-x-4"> 
			{data.map((item)=>(
				<article 
					key={item.key} 
					className="w-full flex items-start rounded-lg border border-solid border-gray-100 bg-white dark:bg-gray-900 p-4 gap-x-4"
				>
					<span className="w-12 h-12 flex items-center justify-center bg-indigo-500 text-white rounded">
					<i dangerouslySetInnerHTML={{ __html: item.icon }}></i>
					</span>
					<div>
						<h3 className="text-sm text-gray-500 mb-1">{item.name}</h3>
						<div className="flex items-end gap-x-1">
							<h5 className="text-xl font-bold text-gray-900 leading-5 dark:text-gray-200">{numberFormat(item.total)}</h5>
							<h6 className="text-green-500 flex">
								<ArrowSmallUpIcon className="w-4 h-4" />
								<span className="text-xs font-medium">{(item.today)}</span>
							</h6>
						</div>
					</div>
				</article>
			))}
		</div>
	)
}`;

  const items: BreadcrumbsItem[] = [
    {
      label: 'Home',
      path: '/home/index',
      children: [
        {
          label: 'Kep-components',
          path: '/dataDisplay/cards',
          children: [
            {
              label: 'Data Display',
              path: '/dataDisplay/cards',
            },
          ],
        },
      ],
    },
  ];

  const PageInfo: PageInfoType = {
    title: 'Cards',
    description: `Card UI는 SNS부터 E-commerce에 이르기까지 보편적으로 사용되는 UI요소입니다. 정보를 담은 컨테이너로서 Card는 Text, Rich
	media, Button 등과 같은 모든 요소를 포함하고 있습니다. 다양한 요소가 포함될 수 있겠지만 그것들이 담은 내용은 모두 동일한
	토픽이어야함을 전제합니다.`,
  };

  return (
    <div className="py-16 px-12 lg:p-6 md:p-6 border border-gray-500 h-full overflow-y-auto">
      <Breadcrumbs items={items} />
      <PageInformation PageInfo={PageInfo} />
      {/* 카드 안에 리스트 */}
      <CodeBoard code={listCard} />
      <IframeCardList />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 콘텐츠 카드 */}
      <CodeBoard code={contentCard} />
      <IframeCardContents />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* datail 카드 */}
      <CodeBoard code={detailCard} />
      <IframeCardDetail />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 마우스 오버 효과 카드 */}
      <CodeBoard code={hoverCard} />
      <IframeCardHover />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* post 카드 */}
      <CodeBoard code={postCard} />
      <IframeCardPost />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 매출현황 카드 */}
      <CodeBoard code={cardStaus} />
      <IframeCardStatus />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 매출현황 로우 카드 */}
      <CodeBoard code={cardRowStaus} />
      <IframeCardSimpleStat />
      <hr className="border-t border-solid border-gray-300 mt-12" />
      {/* 아이콘이 있는 매출현황 카드 */}
      <CodeBoard code={cardIconStaus} />
      <IframeCardIconStat />
    </div>
  );
};

export default Cards;
