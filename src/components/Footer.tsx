import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-16 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-4">

        {/* 만든이 정보 */}
        <div>
          <h3 className="font-semibold mb-1">👩‍💻 만든이 정보</h3>
          <div className="flex items-center gap-2 mb-1">
            <FaGithub className="text-lg" />
            <a
              href="https://github.com/MIL-LO"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 underline"
            >
              github.com/MIL-LO
            </a>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <FaInstagram className="text-lg" />
            <a
              href="https://instagram.com/millo_people"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 underline"
            >
              @millo_people
            </a>
          </div>
          <p className="mt-2">© {new Date().getFullYear()} 일하영. All rights reserved.</p>
        </div>

        {/* 제주 갭이어 정보 */}
        <div>
          <h3 className="font-semibold mb-1">📍 제주 갭이어</h3>
          <p>
            청년의 성장을 돕는 제주형 갭이어 프로젝트를 통해 <br />
            일하영 서비스가 기획 및 개발되었습니다.
          </p>
        </div>

      </div>
    </footer>
  );
}