'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function DownloadSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const videoItems = [
    {
      src: '/videos/sign_up.mp4',
      title: '회원가입',
      description: '구글 또는 카카오 계정으로\n간편하게 회원가입할 수 있어요.',
    },
    {
      src: '/videos/manager.mp4',
      title: '매니저 기능 시연',
      description: '매니저가 배너 설정, 출결 관리 등\n다양한 기능을 하나의 화면에서 편리하게 관리할 수 있어요.',
    },
    {
      src: '/videos/apply_recruit.mp4',
      title: '지원 및 채용 연동',
      description:
        '스태프가 공고에 지원하면 매니저가 상태를 변경하고 채용을 확정할 수 있어요.\n채용이 완료되면 해당 스케줄이 스태프 일정에도 자동으로 반영돼요.',
    },
  ];

  // ESC 키 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVideoOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 바깥 클릭 닫기
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsVideoOpen(false);
    }
  };

  return (
    <section
      id="download"
      className="bg-white w-full py-20 px-4 flex justify-center relative"
    >
      <div className="max-w-xl w-full">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10 text-gray-800">
          다운로드
        </h2>

        <div className="space-y-6">
          {/* iOS 다운로드 */}
          <div className="flex justify-center">
            <button
              onClick={() => alert('출시 예정입니다.')}
              className="w-full max-w-xs mx-auto flex items-center justify-center gap-3 px-6 py-3 bg-[#0D0D0D] text-white rounded-lg shadow hover:bg-[#1a1a1a] transition"
            >
              <Image
                src="/img/logo_appstore.png"
                alt="App Store"
                width={24}
                height={24}
              />
              <span className="text-sm font-medium">App Store에서 받기</span>
            </button>
          </div>

          {/* Android 다운로드 */}
          <div className="flex justify-center">
            <button
              onClick={() => alert('출시 예정입니다.')}
              className="w-full max-w-xs mx-auto flex items-center justify-center gap-3 px-6 py-3 bg-[#2F8140] text-white rounded-lg shadow hover:bg-[#2c8a45] transition"
            >
              <Image
                src="/img/logo_playstore.png"
                alt="Google Play"
                width={24}
                height={24}
              />
              <span className="text-sm font-medium">Google Play에서 받기</span>
            </button>
          </div>

          {/* 시연 영상 버튼 */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              🎬 <span className="text-sm font-medium">시연 영상 보러가기</span>
            </button>
          </div>
        </div>
      </div>

      {/* 시연 영상 모달 */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-4 relative"
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>

            {/* 슬라이드 비디오 */}
            <Swiper modules={[Navigation]} navigation className="w-full h-auto">
              {videoItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center">
                    {/* 제목 */}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center">
                      {item.title}
                    </h3>

                    {/* 비디오 */}
                    <video
                      src={item.src}
                      controls
                      autoPlay
                      className="w-full h-[18rem] sm:h-[26rem] object-contain rounded-xl bg-black"
                    >
                      브라우저가 video 태그를 지원하지 않습니다.
                    </video>

                    {/* 설명 */}
                    <p className="mt-4 text-sm sm:text-base text-gray-700 text-center whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
}