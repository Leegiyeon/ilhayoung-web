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
    imageSrcs: string[];
  }>({
    isOpen: false,
    title: '',
    description: '',
    imageSrcs: [],
  });

  const featureItems = [
    {
      srcs: ['/img/manager1.png', '/img/manager2.png'],
      alt: '사장님의 인사관리 도우미',
      detail: '채용 공고 등록부터 출결 및 급여 처리까지 한 번에 관리할 수 있습니다.',
    },
    {
      srcs: ['/img/staff1.png', '/img/staff2.png'],
      alt: '간편한 단기 알바 지원',
      detail: '위치와 시간 설정만으로 적합한 공고를 확인하고, 간편하게 지원할 수 있습니다.',
    },
    {
      srcs: ['/img/replace1.png', '/img/replace2.png'],
      alt: '대체 인력 빠른 섭외',
      detail: '대체 스케줄 확인 후 기존 근무자에게 빠르게 요청할 수 있어 업무 공백을 줄일 수 있습니다.',
    },
  ];

  const openModal = (item: typeof featureItems[0]) => {
    setModalData({
      isOpen: true,
      title: item.alt,
      description: item.detail,
      imageSrcs: item.srcs,
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
                  <Image src={item.srcs[0]} alt={item.alt} fill className="object-cover" />
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

      {/* 슬라이드 이미지 모달 */}
      <Modal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        title={modalData.title}
        description={modalData.description}
        imageSrcs={modalData.imageSrcs}
      />
    </section>
  );
}