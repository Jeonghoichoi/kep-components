import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
	const goHome = () => {
		navigate("/home/index");
	};
	return (
		<div className="w-full grid h-screen px-4 bg-white place-content-center">
			<div className="text-center">
				<h1 className="font-black text-gray-200 text-9xl">404</h1>
				<p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">페이지를 찾을 수 없습니다</p>
				<p className="mt-4 text-gray-500">We cant find that page.</p>
				<button
					onClick={goHome}
					className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring"
				>
					홈으로 가기
				</button>
			</div>
		</div>
	);
};

export default NotFoundPage;
