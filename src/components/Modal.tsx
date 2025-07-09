'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrcs: { src: string; caption: string }[];
};

export default function Modal({ isOpen, onClose, title, imageSrcs }: ModalProps) {
  const [currentCaption, setCurrentCaption] = useState('');
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // 초기 설명 설정
      if (imageSrcs.length > 0 && imageSrcs[0].caption) {
        setCurrentCaption(imageSrcs[0].caption);
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, imageSrcs]);

  const handleSlideChange = () => {
    if (!swiperInstance) return;
    const realIndex = swiperInstance.realIndex || 0;
    const newCaption = imageSrcs[realIndex]?.caption || '';
    setCurrentCaption(newCaption);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-md w-full relative p-6 max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>

        {/* 이미지 슬라이드 */}
        <div className="relative w-full h-[28rem] sm:h-[32rem] mb-6">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            className="rounded-md"
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
          >
            {imageSrcs.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-[28rem] sm:h-[32rem]">
                  {item.src ? (
                    <Image
                      src={item.src}
                      alt={`${title}-${idx}`}
                      fill
                      className="object-cover rounded-md"
                    />
                  ) : null}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 텍스트 콘텐츠 */}
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">{currentCaption}</p>

        {/* 화살표 스타일 커스터마이징 */}
        <style jsx global>{`
          .swiper-button-prev,
          .swiper-button-next {
            background-color: rgba(255, 255, 255, 0.3);
            color: #333;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
          }

          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 14px;
            font-weight: bold;
          }

          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            background-color: rgba(0, 0, 0, 0.4);
            color: #fff;
          }
        `}</style>
      </div>
    </div>
  );
}