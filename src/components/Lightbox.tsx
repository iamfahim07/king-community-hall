'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface LightboxProps {
  src: string | null;
  onClose: () => void;
}

const Lightbox = ({ src, onClose }: LightboxProps) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (src) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [src, handleKeyDown]);

  if (!src) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-background hover:text-primary transition-colors z-[101]">
        <X className="w-8 h-8" />
      </button>
      <div
        className="relative h-[90vh] w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={src} alt="Selected gallery image" fill sizes="100vw" className="object-contain rounded-lg" />
      </div>
    </div>
  );
};

export default Lightbox;
