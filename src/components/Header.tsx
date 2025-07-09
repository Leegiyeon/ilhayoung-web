'use client';

import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { name: '서비스 소개', to: 'intro' },
    { name: '주요 기능', to: 'features' },
    { name: '다운로드', to: 'download' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* 로고 클릭 시 최상단으로 스크롤 */}
        <ScrollLink
          to="top"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer flex items-center"
        >
          <Image src="/img/logo.png" alt="일하영 로고" width={60} height={60} />
        </ScrollLink>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {menuOpen && (
        <nav className="md:hidden bg-white px-4 pb-4">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>
      )}
    </header>
  );
}