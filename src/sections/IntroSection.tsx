'use client';

import { useEffect, useState } from 'react';

export default function IntroSection() {
  const [showLine, setShowLine] = useState([false, false, false, false]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowLine([true, false, false, false]), 300),
      setTimeout(() => setShowLine([true, true, false, false]), 900),
      setTimeout(() => setShowLine([true, true, true, false]), 1500),
      setTimeout(() => setShowLine([true, true, true, true]), 2100),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const lines = [
    { head: '일', text: '손이 부족한 사장님을 위해' },
    { head: '하', text: '나의 플랫폼으로 채용, 출결관리까지' },
    { head: '영', text: '업에만 집중할 수 있도록 도와드려요' },
    { head: '', text: <><br />지금, 일하영에서 연결의 경험을 시작해보세요.</> },
  ];

  return (
    <section
      id="intro"
      className="relative w-full h-screen flex items-start justify-center text-center text-white overflow-hidden"
    >
      {/* 배경 애니메이션 */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-indigo-400 via-sky-300 to-pink-300" />

      {/* 텍스트 콘텐츠 */}
      <div className="relative z-10 px-6 max-w-[860px] w-full pt-[18vh] flex flex-col items-center">
        <div className="space-y-5">
          {lines.map(({ head, text }, idx) => (
            <div
              key={idx}
              className={`text-2xl sm:text-4xl font-semibold flex items-center justify-start transition-all duration-700 ease-in-out ${
                showLine[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center">
                {head && (
                  <span className="w-8 sm:w-10 text-5xl sm:text-6xl font-extrabold text-emerald-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] mr-4 text-left">
                    {head}
                  </span>
                )}
                <span className="text-white text-left drop-shadow-[0_1.5px_4px_rgba(0,0,0,0.8)]">
                  {text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}