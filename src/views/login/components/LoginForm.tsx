import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useStore } from '@/store/user';
import RegisterModal from '@/views/login/components/RegisterFormModal';
import { setStoredLogin, getStoredLogin, clearStoredLogin } from '@/utils/util';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Logo from '@/assets/logo.svg';
const LoginForm = () => {
  const navigate = useNavigate();
  
  // 상태관리
  const user = useStore((state) => state); // state => state 현재상태를 가져온 후 반환하는 함수
  const [formState, setFormState] = useState({
    id: '',
    password: '',
    autoLogin: false,
  });
  const formRemember = JSON.parse(getStoredLogin()!); 

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState.id === user.mem_id && formState.password === user.password) {
      alert(formState.id + "님 안녕하세요✨");
      navigate('/home/index');
      if(formState.autoLogin){
        setStoredLogin(JSON.stringify(formState)) //로그인 정보 문자열로 저장
      }else{
        clearStoredLogin()
      }
    } else {
      alert('로그인 실패하였습니다.');
    }
  };

  // 회원가입 모달
  const [registerVisible, setRegisterVisible] = useState(false);

  const onRegisterToggle = () => {
    setRegisterVisible(!registerVisible);
  };

  useEffect(()=>{
    if(formRemember === null) {
      setFormState(formState)
    }else{
      setFormState(formRemember) // 로그인 정보 불러오기
    }
  }, [])
  
  const [passwordToggle, setPasswordToggle] = useState(false)

  return (
    <>
      <section className="w-1/4 lg:w-1/2 md:w-full">
        <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
          <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white gap-2">
            <img className="w-8 h-8" src={Logo} alt="logo" />
            세모가방
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-8 py-10 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                CEO-ADMIN 컴포넌트
              </h1>
              <form className="space-y-4 md:space-y-6" id="loginForm" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="text" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">
                    아이디
                  </label>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    defaultValue={formState.id}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ID:admin"
                    required={true}
                    onChange={(e) => {
                      setFormState((prevState) => ({
                        ...prevState,
                        id: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">
                    패스워드
                  </label>
                  <div className='relative'>
                    <input
                      type={passwordToggle ?  'text' : 'password'}
                      name="password"
                      id="password"
                      defaultValue={formState.password}
                      placeholder="패스워드: 123456"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required={true}
                      onChange={(e) => {
                        setFormState((prevState) => ({
                          ...prevState,
                          password: e.target.value,
                        }));
                      }}
                    />
                    <button 
                      type='button'
                      className='absolute right-4 top-1/2 -translate-y-1/2' 
                      onClick={(e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        setPasswordToggle(!passwordToggle)
                      }}
                    >
                      {passwordToggle ? <EyeSlashIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" /> }
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                      <input
                        id="autoLogin"
                        checked={formState.autoLogin}
                        aria-describedby="autoLogin"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        onChange={(e) => {
                          setFormState((prevState) => ({
                            ...prevState,
                            autoLogin: e.target.checked,
                          }));
                        }}
                      />
                      <label htmlFor="autoLogin" className="text-gray-500 dark:text-gray-300 text-sm cursor-pointer ">
                        로그인 저장
                      </label>
                  </div>
                  <button
                    className="text-blue-500 text-sm"
                    type="button"
                    onClick={onRegisterToggle}
                  >
                    회원가입
                </button>
                </div>
                <button
                  disabled={formState.id.length === 0 || formState.password.length === 0}
                  type="submit"
                  form="loginForm"
                  className="disabled:bg-gray-300 w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  로그인
                </button>
              </form>
            </div>
          </div>
          <p className="text-xs mt-4">Copyright © 2023 세모 가방 KEP COMPONENT. All rights reserved.</p>
        </div>
      </section>
      {registerVisible ? <RegisterModal onToggle={onRegisterToggle} /> : null}
    </>
  );
};

export default LoginForm;

