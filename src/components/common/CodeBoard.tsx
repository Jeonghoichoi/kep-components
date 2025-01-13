import { useEffect } from 'react';
import { copyClipboard } from '@/utils/util';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

const CodeBoard = ({ code }: { code: string }) => {
  const handleCopy = () => {
    copyClipboard(code);
  };

  // 코드 highlight 처리
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block: Element) => {
      hljs.highlightBlock(block as HTMLElement);
    });
  }, [code]);

  return (
    <div className="mt-12">
      <pre>
        <div className="bg-black rounded-md mb-4">
          <div className="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md">
            <span>jsx</span>
            <button className="flex ml-auto gap-2" onClick={handleCopy}>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              </svg>
              Copy Code
            </button>
          </div>
          {/* 코드 작성  */}
          <div className="code-wrapper">
            <code className="language-jsx max-h-[480px]">{code}</code>
          </div>
        </div>
      </pre>
    </div>
  );
};

export default CodeBoard;
