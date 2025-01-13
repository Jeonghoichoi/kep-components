import Cookies from 'js-cookie';
import * as XLSX from 'xlsx';
import moment from 'moment';
/**
 * accessToken 쿠키 조회
 * @returns accessToken
 */
export function getAccessToken() {
  return Cookies.get('accessToken');
}

/**
 * AccessToken 쿠키 설정
 * @param {string} accessToken
 */
export function setAccessToken(accessToken: string) {
  Cookies.set('accessToken', accessToken);
}

/**
 * localStorage AccessToken 조회
 * @returns accessToken
 */
export function getStoredAccessToken() {
  return localStorage.getItem('accessToken');
}

/**
 * localStorage AccessToken 설정
 * @param {string} accessToken
 */
export function setStoredAccessToken(accessToken: string) {
  localStorage.setItem('accessToken', accessToken);
}

export function clearStoredAccessToken() {
  Cookies.remove('accessToken');
  localStorage.removeItem('accessToken');
}
// localStorage 로그인 정보 저장
export function setStoredLogin(loginInformation: string) {
  localStorage.setItem('loginInformation', loginInformation);
}
export function getStoredLogin() {
  return localStorage.getItem('loginInformation');
}

// localStorage 채팅 데이터 저장
export function setStoredChat(roomId: string, chatData: string) {
  localStorage.setItem(roomId, chatData);
}
export function getStoredChat(roomId: string) {
  return localStorage.getItem(roomId);
}

export function clearStoredLogin() {
  localStorage.removeItem('loginInformation');
}
/**
 * localStorage clear
 */
export function clearStoredAll() {
  localStorage.clear();
}

/**
 * @description 난수 생성
 * @param {Number} min 최소값
 * @param {Number} max 최대값
 * @return number
 */
export function randomNum(min: number, max: number): number {
  const num = Math.floor(Math.random() * (min - max) + max);
  return num;
}

/**
 * @description 코드 카피
 * @param {code} code 복제 코드
 * @return string
 */
export const copyClipboard = async (code: string) => {
  try {
    await navigator.clipboard.writeText(code);
    alert('코드가 복사되었습니다!');
    console.log('코드가 복사되었습니다!');
  } catch (error) {
    console.error('코드 복제를 실패하였습니다!', error);
  }
};

/**
 * @description 3자리수
 * @param {number} num
 * @return string
 */
export const numberFormat = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
};

/**
 * @description 3자리수 사람 수
 * @param {number} num
 * @return string
 */

export const numberFormatPerson = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '명';
};

/**
 * @description classname 리턴
 * @param {object} classes
 * @return string
 */
export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * @description body scroll Lock
 * @param {boolean}
 */
export const scrollLock = (isLocked: boolean) => {
  if (isLocked) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

/**
 * @description 년월일
 * @param {Date} Date
 * @return string
 */
export const formattinDate = (date: Date): string => {
  return date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일';
};

/**
 * @description 엑셀 내보내기
 * @param {data, fileName} object[], string
 */

export const onExcelExport = (data: object[], fileName: string) => {
  const excelDownName = `${fileName}.xlsx`;
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, fileName);

  XLSX.writeFile(wb, excelDownName);
};

/**
 * @ e
 */

export const maxLengthCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.value.length > e.target.maxLength) {
    e.target.value = e.target.value.slice(0, e.target.maxLength);
  }
};

export const isLogin = (): boolean => {
  const loginInfo = JSON.parse(getStoredLogin()!);
  let accessToken = getAccessToken();

  if (loginInfo !== null && loginInfo !== undefined && loginInfo !== 'undefined' && loginInfo.role > 0 && accessToken !== null) {
    return true;
  } else {
    return false;
  }
};

export const hasMenuAuthority = (menuAutority: number | undefined): boolean => {
  const userInfo = JSON.parse(getStoredLogin()!);

  if (!isLogin()) {
    return false;
  }

  if (menuAutority === undefined) {
    return false;
  } else {
    if (userInfo.role >= menuAutority) {
      return true;
    } else {
      return false;
    }
  }
};

/**
 * date => YYYY-MM-DD
 * @param {*} date
 * @returns
 */
export function toShortStringTimeFromDate(dateString: string, delimiter = '-') {
  if (!dateString) return moment().format(`YYYY${delimiter}MM${delimiter}DD`);

  return moment(dateString).format(`YYYY${delimiter}MM${delimiter}DD`);
}

/**
 * date => YYYY-MM-DD HH:mm:ss
 * @param {*} date
 * @returns
 */
export function toStringFullTimeFromDate(dateString: string) {
  if (!dateString) return moment(dateString).format('YYYY-MM-DD HH:mm:ss');

  return moment(dateString).format('YYYY-MM-DD HH:mm:ss');
}

/**
 * 천 단위 콤마찍기
 * @param {*} amount, locales, options
 * @returns
 */
export function toCurrencyFormat(amonut: number, locales?: string, options?: any) {
  if (!locales) return amonut.toLocaleString(locales, options);
  return amonut.toLocaleString('ko-KR', options);
}

export function isUrlAddr(url: string) {
  const urlRegex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
  return urlRegex.test(url);
}
