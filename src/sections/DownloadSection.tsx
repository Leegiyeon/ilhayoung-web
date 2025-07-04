'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function DownloadSection() {
  const [open, setOpen] = useState<'android' | 'ios' | null>(null);

  const toggle = (target: 'android' | 'ios') => {
    setOpen((prev) => (prev === target ? null : target));
  };

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
          {/* iOS 토글 */}
          <div className="border rounded-lg shadow-sm">
            <button
              className="w-full text-center px-6 py-4 text-lg font-semibold text-white bg-gray-700 hover:bg-black active:bg-black rounded-md transition-colors duration-200 ease-in-out shadow-md"
              onClick={() => toggle('ios')}
            >
              🍎 iOS 다운로드
            </button>
            {open === 'ios' && (
              <div className="px-6 py-4 bg-gray-50 border-t text-center">
                <p className="mb-2 text-sm text-gray-600">QR 코드를 스캔해 다운로드하세요</p>
                <div className="w-40 h-40 mx-auto relative">
                  <Image
                    src="/img/qr_ios.png"
                    alt="iOS QR"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Android 토글 */}
          <div className="border rounded-lg shadow-sm">
            <button
              className="w-full text-center px-6 py-4 text-lg font-semibold text-white bg-gray-700 hover:bg-black active:bg-black rounded-md transition-colors duration-200 ease-in-out shadow-md"
              onClick={() => toggle('android')}
            >
              📱 Android 다운로드
            </button>
            {open === 'android' && (
              <div className="px-6 py-4 bg-gray-50 border-t text-center">
                <p className="mb-2 text-sm text-gray-600">QR 코드를 스캔해 다운로드하세요</p>
                <div className="w-40 h-40 mx-auto relative">
                  <Image
                    src="/img/qr_android.png"
                    alt="Android QR"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}