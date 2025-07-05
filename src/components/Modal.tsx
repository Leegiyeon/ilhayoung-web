'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageSrc: string;
};

export default function Modal({ isOpen, onClose, title, description, imageSrc }: ModalProps) {
  // ESC 키로 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-md w-full relative p-6 text-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
          aria-label="닫기"
        >
          ×
        </button>

        {/* 이미지 */}
        <div className="relative w-full h-64 mb-5">
          <Image src={imageSrc} alt={title} fill className="object-cover rounded-md" />
        </div>

        {/* 제목 */}
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>

        {/* 설명 */}
        <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
}