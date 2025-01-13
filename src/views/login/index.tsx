import LoginForm from './components/LoginForm';
import './index.less';

const Login = () => {
  return (
    <section className="flex min-h-full flex-1 flex-col justify-center items-center bg-gray-100 dark:bg-gray-900">
      <LoginForm />
    </section>
  );
};

export default Login;
