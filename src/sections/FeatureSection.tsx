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
    imageSrcs: { src: string; caption: string }[];
  }>({
    isOpen: false,
    title: '',
    imageSrcs: [],
  });

  const featureItems = [
    {
      thumbnail: '/img/thumbnail1.png',
      modalImages: [
        { src: '/img/manager1.png', caption: '공고 등록, 출결 및 급여를 통합 관리할 수 있는 기능입니다.' },
        { src: '/img/manager2.png', caption: '사장님을 위한 직원 관리 도구를 손쉽게 사용할 수 있습니다.' },
      ],
      alt: '사장님의 인사관리 도우미',
    },
    {
      thumbnail: '/img/thumbnail2.png',
      modalImages: [
        { src: '/img/staff1.png', caption: '지역 기반으로 단기 알바를 쉽고 빠르게 찾아보세요.' },
        { src: '/img/staff2.png', caption: '간단한 정보 입력만으로 바로 지원할 수 있습니다.' },
      ],
      alt: '간편한 단기 알바 지원',
    },
    {
      thumbnail: '/img/thumbnail3.png',
      modalImages: [
        { src: '/img/replace1.png', caption: '갑작스러운 공백에도 빠르게 대체 인력을 요청할 수 있어요.' },
        { src: '/img/replace2.png', caption: '근무자의 스케줄을 바탕으로 적합한 인력을 매칭해줍니다.' },
      ],
      alt: '대체 인력 빠른 섭외',
    },
  ];

  const openModal = (item: typeof featureItems[0]) => {
    setModalData({
      isOpen: true,
      title: item.alt,
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
                  <Image src={item.thumbnail} alt={item.alt} fill className="object-cover" />
                  
                  {/* 우상단 "탭하여 상세보기" 안내 */}
                  <div className="absolute top-3 right-3 bg-white/80 text-gray-800 px-3 py-1 text-xs sm:text-sm rounded-md shadow-md">
                    탭하여 상세보기
                  </div>

                  {/* 중앙 제목 */}
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-4">
                    <p className="text-lg font-semibold">{item.alt}</p>
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

      <Modal {...modalData} onClose={closeModal} />
    </section>
  );
}