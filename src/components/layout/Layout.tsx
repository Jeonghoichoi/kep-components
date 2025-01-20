import { Outlet } from 'react-router-dom';
import useScrollToTop from '@/shared/useScrollTop';

import Layoutmenu from './LayoutMenu';
const Layout = () => {
  useScrollToTop();

  return (
    <div className="dark:bg-gray-900 w-full">
      <main className="container">
        <Layoutmenu />
        <div className="flex py-4 text-left w-full">
          {/* 각각 컴포넌트들이 보여질 곳 Outlet으로 받아줌 */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
