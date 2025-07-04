'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Modal from '@/components/Modal';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function FeatureSection() {
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    imageSrc: string;
  }>({
    isOpen: false,
    title: '',
    description: '',
    imageSrc: '',
  });

  const featureItems = [
    {
      src: '/img/feature1.png',
      alt: '출결 기반 출근 체크 기능',
      detail: '출결 관리는 QR코드 기반으로 자동 체크됩니다. 출근 이력은 인사 리포트로 가공됩니다.',
    },
    {
      src: '/img/feature2.png',
      alt: '간편한 일자리 매칭',
      detail: '구직자는 일정을 등록하면 자동으로 맞춤형 공고 리스트를 확인할 수 있습니다.',
    },
    {
      src: '/img/feature3.png',
      alt: '가게별 구인 관리 대시보드',
      detail: '사장님은 공고 등록과 출결 현황을 대시보드에서 간편하게 관리할 수 있습니다.',
    },
  ];

  const openModal = (item: typeof featureItems[0]) => {
    setModalData({
      isOpen: true,
      title: item.alt,
      description: item.detail,
      imageSrc: item.src,
    });
  };

  const closeModal = () => {
    setModalData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="features" className="bg-gray-50 w-full py-20 px-4 flex justify-center relative">
      <div className="max-w-5xl w-full">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 text-gray-800">일하영의 주요 기능</h2>

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
            {featureItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full h-64 sm:h-96 cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-4">
                    {item.alt}
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

      {/* 모달 */}
      <Modal {...modalData} onClose={closeModal} />
    </section>
  );
}