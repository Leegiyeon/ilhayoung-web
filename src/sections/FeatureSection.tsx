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
    description: string[];
    imageSrcs: string[];
  }>({
    isOpen: false,
    title: '',
    description: [],
    imageSrcs: [],
  });

  const featureItems = [
    {
      thumbnail: '/img/thumbnail1.png',
      modalImages: ['/img/manager1.png', '/img/manager2.png'],
      alt: '사장님의 인사관리 도우미',
      detail: [
        '채용공고 등록, 출결 및 급여 처리까지 한 번에 관리할 수 있습니다.',
        '매장 운영에 필요한 인력 관리를 효율적으로 도와줍니다.',
      ],
    },
    {
      thumbnail: '/img/thumbnail2.png',
      modalImages: ['/img/staff1.png', '/img/staff2.png'],
      alt: '간편한 단기 알바 지원',
      detail: [
        '위치와 시간 설정만으로 적합한 공고를 확인하고, 간편하게 지원할 수 있습니다.',
        '원클릭 지원으로 알바 찾기가 더 쉬워집니다.',
      ],
    },
    {
      thumbnail: '/img/thumbnail3.png',
      modalImages: ['/img/replace1.png', '/img/replace2.png'],
      alt: '대체 인력 빠른 섭외',
      detail: [
        '대체 스케줄 확인 후 기존 근무자에게 빠르게 요청할 수 있어 업무 공백을 줄일 수 있습니다.',
        '돌발 상황에도 빠르게 대응할 수 있는 시스템을 제공합니다.',
      ],
    },
  ];

  const openModal = (item: typeof featureItems[0]) => {
    setModalData({
      isOpen: true,
      title: item.alt,
      description: item.detail,
      imageSrcs: item.modalImages,
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
                  className="relative w-full h-[28rem] sm:h-[36rem] cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <Image src={item.thumbnail} alt={item.alt} fill className="object-cover rounded-xl" />

                  {/* 우측 상단 '탭하여 상세보기' */}
                  <div className="absolute top-3 right-3 bg-white/60 border border-white text-gray-800 font-semibold text-sm sm:text-base px-3 py-1.5 rounded-full shadow-sm backdrop-blur-md">
                    탭하여 상세보기
                  </div>

                  {/* 하단 텍스트 오버레이 */}
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-4 text-sm sm:text-base">
                    <strong className="block text-lg sm:text-xl">{item.alt}</strong>
                    <p className="block mt-1 text-balance max-w-[90%] mx-auto text-xs sm:text-sm leading-relaxed">
                      {item.detail[0]}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .swiper-button-prev,
            .swiper-button-next {
              background-color: rgba(255, 255, 255, 0.3);
              border-radius: 9999px;
              width: 32px;
              height: 32px;
              box-shadow: none;
              color: #555;
              top: 50%;
              transform: translateY(-50%);
            }

            .swiper-button-prev:hover,
            .swiper-button-next:hover {
              background-color: rgba(0, 0, 0, 0.3);
              color: white;
            }

            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 16px;
              font-weight: bold;
            }
          `}</style>
        </div>
      </div>

      <Modal
        {...modalData}
        description={modalData.description.join('\n')}
        onClose={closeModal}
      />
    </section>
  );
}