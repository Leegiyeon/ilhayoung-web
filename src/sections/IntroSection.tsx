'use client';

import Image from 'next/image';

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative w-full h-screen flex items-center justify-center text-center text-white"
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/intro.png"
          alt="서비스 소개 배경"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* 텍스트 콘텐츠 */}
      <div className="relative z-10 px-4 max-w-2xl">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6">일이 필요한 청년, <br /> 인력이 필요한 가게</h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          일하영은 제주 지역 소상공인을 위한 단기 인력 연결 플랫폼입니다.
          <br className="hidden sm:block" />
          간편한 구직, 맞춤형 일자리 매칭, 그리고 출결 기반 인사관리까지!
        </p>
      </div>
    </section>
  );
}