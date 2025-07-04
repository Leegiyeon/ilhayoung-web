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
    // ESC 키 누르면 모달 닫기
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
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4"
            onClick={onClose} // 배경 클릭 시 닫기
        >
            <div
                className="bg-white rounded-lg shadow-xl max-w-md w-full relative p-6"
                onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫힘 방지
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                >
                    ×
                </button>

                <div className="relative w-full h-64 mb-4">
                    <Image src={imageSrc} alt={title} fill className="object-cover rounded-md" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
}