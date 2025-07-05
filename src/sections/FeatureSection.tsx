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
      alt: '채용부터 출결·급여까지 가게 운영을 한번에',
      detail: '공고 등록부터 지원 현황 확인, 근태 관리와 급여 지급까지 한 번에 처리할 수 있습니다.',
    },
    {
      src: '/img/feature2.png',
      alt: '간편한 공고 지원',
      detail: '원하는 조건에 맞는 공고를 자동으로 확인하고, 클릭 한 번으로 간편 지원하면 매니저가 직접 연락드립니다.',
    },
    {
      src: '/img/feature3.png',
      alt: '반복 근무자 중심의 빠른 대체 구인',
      detail: '기존 근무이력이 있는 인력에게 빠르게 요청을 전송하고, 스케줄 기반으로 대체 인력을 손쉽게 구할 수 있습니다.',
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

      <Modal {...modalData} onClose={closeModal} />
    </section>
  );
}