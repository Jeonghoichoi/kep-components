# 시작
 
 - npm install
 이후 npm run dev

# 경로
 
 - base: /kep-component
 - url: https://d28ooetvhd6wrj.cloudfront.net/kep-component
# React + TypeScript + Vite + tailwind

# 프로젝트 버전은 아래와 같습니다.

 - React 18.2
 - Typescript 5.0
 - zustand 

## Kep-components

 - public: 정적 리소스
 - src: 소스코드
 - vite.config.ts: Vite 환경설정 파일
 - tsconfig.json: 타입스크립트 환경설정 파일 
 - package.json: 프로젝트 내 의존성 - dependencies는 배포할때 포함되는 라이브러리, devDependencies는 포함되지 않는 라이브러리 */

### 소스폴더

 - kep-components/src
  - /api: api 호출 코드 및 객체의 인터페이스(변수 타입)을 설정한다.
  - /assets: 폰트 / 아이콘 / 이미지 저장장소
  - /components: /views 하위 페이지에서 사용할 공통 컴포넌트를 관리한다.
  - /interfaces: 데이터 타입에 맞는 인터페이스를 설정한다.
  - /state: 로우 데이터를 사용해야할 경우 해당 폴더에 작성한다.
  - /styles: less(css) 폴더
  - /utils: utility 코드 모음
  - /views: 페이지에 해당하는 컴포넌트들의 집합소

#### 설치파일

  프로젝트 pull 이후 아래 의존성 설치

 - headlessui/react / npm install @headlessui/react // 테일윈드 기반 UI
 - heroicons/react / npm install @heroicons/react // 테일윈드 기반 아이콘
 - highlight.js / npm install highlight.js // 코드블록 디자인을 위한 스크립트
 - uuid / npm i --save-dev @types/uuid // 고유 key값을 사용하기 위함
  

#### 필히 숙지 푸시 전 테스트 코드!!!!!!!!!!!!!

  - npm run build:dev // dev 환경으로 dist 파일 생성
  - npm run preview // 푸시 후 올렸을 때 환경과 동일 

