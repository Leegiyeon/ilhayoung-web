'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

export default function FeatureSection() {
  const featureImages = [
    { src: '/img/feature1.png', alt: '출결 기반 출근 체크 기능' },
    { src: '/img/feature2.png', alt: '간편한 일자리 매칭' },
    { src: '/img/feature3.png', alt: '가게별 구인 관리 대시보드' },
  ];

  return (
    <section
      id="features"
      className="bg-gray-50 w-full py-20 px-4 flex justify-center relative"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
          일하영의 주요 기능
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
            navigation
            className="rounded-xl overflow-hidden"
          >
            {featureImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-64 sm:h-96">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-4">
                    {img.alt}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 화살표 스타일링을 위한 className hook */}
          <style jsx global>{`
            .swiper-button-prev,
            .swiper-button-next {
              background-color: white;
              border-radius: 9999px;
              width: 44px;
              height: 44px;
              box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
              color: #2563eb;
              top: 50%;
              transform: translateY(-50%);
            }

            .swiper-button-prev:hover,
            .swiper-button-next:hover {
              background-color: #2563eb;
              color: white;
            }

            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 18px;
              font-weight: bold;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}