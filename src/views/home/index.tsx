import './index.less';

type CategoryList = { key: string; label: string; path: string };

const categoryList: CategoryList[] = [
  {
    key: '1',
    label: 'inputs Type',
    path: '/kep-component/inputs/button',
  },
  {
    key: '2',
    label: 'Data Display',
    path: '/kep-component/dataDisplay/avatar',
  },
  {
    key: '3',
    label: 'FeedBack',
    path: '/kep-component/feedback/alert',
  },
  {
    key: '4',
    label: 'Layout',
    path: '/kep-component/layout/grid',
  },
  {
    key: '5',
    label: 'Chart',
    path: '/kep-component/layout/grid',
  },
  {
    key: '6',
    label: 'Color Chip',
    path: '/kep-component/colorChip',
  },
  {
    key: '7',
    label: 'Icons',
    path: '/kep-component/icons',
  },
  {
    key: '8',
    label: 'BreakPoint',
    path: '/kep-component/breakpoint',
  },
];

const Home = () => {
  return (
    <>
      <div className="py-16 px-12 lg:p-6 md:p-4 border border-gray-500 h-full overflow-y-auto">
        <div className="flex-col text-left">
          <p className="mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">Intrduction</p>
          <h1 className="mt-4 text-2xl font-extrabold sm:text-lg md:max-w-4xl dark:text-gray-400 text-gray-500">
            KEP Components를 소개합니다. <br />
          </h1>
          <p className="mt-4 text-lg font-semibold text-slate-700 dark:text-gray-400 sm:text-base">
            모든 UI Elements는 Tailwind css로 스타일링 되어있습니다.
          </p>
          <p className="mt-4 leading-8 text-sm dark:text-gray-400 text-gray-500 sm:text-xs">
            - HTML 파일 및 자바스크립트 구성 요소 스캔: 테일윈드 CSS는 HTML 파일과 자바스크립트 구성 요소의 코드를 스캔하여 CSS
            클래스 이름을 파악합니다. 이 클래스 이름은 테일윈드의 스타일을 적용하기 위해 사용됩니다. <br />
            - 스타일 생성: 테일윈드는 스캔한 HTML 파일과 자바스크립트 구성 요소에서 파악한 클래스 이름을 기반으로 해당 스타일을
            생성합니다. 이 스타일은 테일윈드의 다양한 기능과 유틸리티 클래스를 포함합니다. <br />- 정적 CSS 파일에 기록:
            테일윈드가 생성한 스타일을 정적 CSS 파일에 기록합니다. 이 정적 CSS 파일은 브라우저가 로드할 때 불러와서 웹 페이지에
            스타일을 적용합니다.
          </p>
          <ul className="grid gap-12 grid-cols-4 mt-12 md:grid-cols-2  md:gap-4 md:mt-8">
            {categoryList.map((item) => (
              <a
                href={item.path}
                className="flex flex-wrap content-center text-white justify-center h-[124px] rounded-xl md:h-24 md:text-xs"
                key={item.key}
                style={{ background: '#1c90fb' }}
              >
                {item.label}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
