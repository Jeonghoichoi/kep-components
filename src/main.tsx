import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@/styles/reset.less';
import '@/styles/common.less';
import './App.css';
import App from './App';

// React StrictMode는 렌더링을 이중화하여 사이드 이펙트 감지 또한 사이드이펙트가 있을 가능성을 먼저 알려준다.
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter basename="/kep-component">
    <App />
  </BrowserRouter>,
);
