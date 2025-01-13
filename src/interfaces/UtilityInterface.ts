// 자주사용하거나 공통으로 사용하는 타입의 Interface를 정의합니다.
export interface GeneralType {
  stringType: string;
  numberType: number;
  booleanType: boolean;
  undefinedType: undefined;
  nullTypeType: null;
  symbolType: symbol;
  dateType: Date;
  regexpType: RegExp;
  errorType: Error;
}
export interface BreadcrumbsItem {
  label: string;
  path: string;
  children?: BreadcrumbsItem[];
}
export interface PageInfoType {
  title: string;
  description: string;
}

export interface Item {
  key: string;
  name: string;
  path: string;
  description?: string;
  icon?: React.ReactElement; // 아이콘
}
export interface Toggle {
  onToggle: () => void;
}
export interface VariousModal {
  modalId?: string;
  modalName?: string;
  size?: string;
  onToggle: (modalName: string) => void;
}
export interface ListItem {
  key: string;
  name: string;
  email: string;
  cost: string;
}
export interface FormModalProps {
  onToggle: () => void;
  onDataChange: (data: ListItem[]) => void;
}
export interface FormCardModalProps {
  onClose: () => void;
  onCreate: () => void;
  setNewTitle: (state: string) => void;
  setNewText: (state: string) => void;
}
export interface SelectedItem {
  key?: string;
  isBadge?: boolean;
  title?: string;
  description?: string;
  cost?: string;
}
export interface SelectedLoadItem {
  onToggle: () => void;
  item?: SelectedItem;
  key?: string;
}

export interface SelectedUpdateItem {
  onToggle: () => void;
  onUpdate: (state: SelectedItem) => void;
  item?: SelectedItem;
}

export interface CardData {
  name: string;
  description: string;
}

export interface tableData {
  key: string;
  name: string;
  info: string;
  limit: number;
  cost: number;
  checked?: boolean;
}
export interface MembertableData {
  id: number;
  name: string;
  city: string;
  member: string;
  children: string;
}
export interface CustomfilterParamsType {
  filterOptions?: string[];
  textFormatter?: (r: string) => void;
  debounceMs?: number;
  maxNumConditions?: number;
}
export interface SelecterDeleteItem {
  onToggle: (state: boolean) => void;
  onRemove: () => void;
}
export interface SelecterEditItem {
  onToggle: (state: boolean) => void;
  item: tableData;
  onEditData: (state: tableData) => void;
}
export interface AccidentType {
  경상자수: number;
  발생월: number;
  부상신고자수: number;
  사고건수: number;
  사망자수: number;
  중상자수: number;
}
export interface CovidType {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
}
export interface CovidTypeSample3 {
  data: CovidTypeSample3[];
  countryNm: string; // 시도명,
  deathCnt: number; // 국내 사망률,
  incDec: number; // 전일대비(확진),
  incDecF: number; // 전일대비(확진-해외),
  incDecK: number; // 전일대비(확진-지역),
  qurRate: number; // 코로나19 발생률
  totalCnt: number; // 전체 수
}
export interface Option {
  key: string;
  value: string;
  optionName: string;
}
export interface OptionGroup {
  key: string;
  label: string;
  option: Option[];
}

export interface EmojiItem {
  key: number;
  name: string;
  emoji: string;
  onClick: () => void;
}

export interface dataType {
  name: string;
  topic: string;
  text: string;
  Published: string;
  readingTime: number | string;
}

export interface ContentCardType {
  price: number;
  address: string;
  parking: number;
  max: number;
  classRoom: number;
}

export type DateType = string | null | Date;
export interface DatepickerType {
  startDate: DateType;
  endDate: DateType;
}

export interface CardType {
  name: string;
  text: string;
  job?: string;
}

export interface StatusType {
  key: string;
  name: string;
  profit: number;
  profitPercent: number;
}
export interface StatusTotalType {
  key: string;
  name: string;
  total: number;
  today: number;
  icon: string;
}
export interface OlympicDataType{
  athlete: string;
  age: number;
  country: string;
  year: number;
  date: string;
  sport: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}
export interface OlympicDataType2 extends OlympicDataType{
  dateObject: Date;
  hasGold: boolean;
  countryObject: {
    name: string;
  };
}