import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-16 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h3 className="font-semibold mb-1">📍 제주 갭이어</h3>
          <p>청년의 성장을 돕는 제주형 갭이어 프로젝트를 통해 <br /> 일하영 서비스가 기획 및 개발되었습니다.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">👩‍💻 만든이 정보</h3>
          <p>기획·개발: 이기연</p>
          <p>디자인·운영: MIL-LO 팀</p>
          <p className="mt-1">© {new Date().getFullYear()} 일하영. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}