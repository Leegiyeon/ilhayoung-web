'use client';

import Image from 'next/image';

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="bg-white w-full py-20 px-4 flex justify-center"
    >
      <div className="max-w-xl w-full">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10 text-gray-800">
          다운로드
        </h2>

        <div className="space-y-6">
          {/* iOS 다운로드 */}
          <div className="flex justify-center">
            <button
              onClick={() => alert('iOS 버전은 7월 중순에 출시 예정입니다.')}
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
              onClick={() => alert('Android 버전은 7월 중순에 출시 예정입니다.')}
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
        </div>
      </div>
    </section>
  );
}