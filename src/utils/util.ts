import Cookies from 'js-cookie';

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
  localStorage.removeItem('accessToken');
}
// localStorage 로그인 정보 저장
export function setStoredLogin(loginInformation: string) {
  localStorage.setItem('loginInformation', loginInformation);
}
export function getStoredLogin() {
  return localStorage.getItem('loginInformation');
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
