'use client';

import { useEffect, useState } from 'react';

export default function IntroSection() {
  const [showLine, setShowLine] = useState([false, false, false]);
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowLine([true, false, false]), 300),
      setTimeout(() => setShowLine([true, true, false]), 900),
      setTimeout(() => setShowLine([true, true, true]), 1500),
      setTimeout(() => setShowDesc(true), 2300),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const lines = [
    { head: '일', text: '손이 부족한 사장님을 위해' },
    { head: '하', text: '나의 플랫폼으로 채용과 출결 관리까지' },
    { head: '영', text: '업에만 집중할 수 있도록 도와드려요' },
  ];

  return (
    <section
      id="intro"
      className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* 배경 애니메이션 */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-indigo-400 via-sky-300 to-pink-300" />

      {/* 텍스트 콘텐츠 */}
      <div className="relative z-10 px-6 max-w-3xl w-full flex flex-col items-center">
        <div className="space-y-4">
          {lines.map(({ head, text }, idx) => (
            <div
              key={idx}
              className={`text-xl sm:text-3xl font-semibold flex items-center justify-start transition-all duration-700 ease-in-out ${showLine[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <div className="flex items-center">
                <span className="w-6 sm:w-8 text-4xl sm:text-5xl font-extrabold text-emerald-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] mr-3 text-left">
                  {head}
                </span>
                <span className="text-white text-left drop-shadow-[0_1.5px_4px_rgba(0,0,0,0.8)]">
                  {text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 플랫폼 설명 문구: 위치 고정 */}
      {showDesc && (
        <p
          className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 
               text-sm sm:text-lg text-white font-medium text-center leading-relaxed 
               px-4 animate-fade-slide-up"
        >
          단기 일자리 연결과 인사관리를 간편하게,<br />
          사장님과 청년을 잇는 플랫폼
        </p>
      )}
    </section>
  );
}