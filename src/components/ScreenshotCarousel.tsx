"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { StaticImageData } from "next/image";

interface Screenshot {
  image: StaticImageData;
  label: string;
}

interface ScreenshotCarouselProps {
  screenshots: Screenshot[];
}

export function ScreenshotCarousel({ screenshots }: ScreenshotCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    scrollStartX.current = scrollContainerRef.current.scrollLeft;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const delta = dragStartX.current - e.clientX;
    scrollContainerRef.current.scrollLeft = scrollStartX.current + delta;
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-[#131313] scrollbar-thumb-[#e60000] scroll-smooth snap-x snap-mandatory select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ scrollbarWidth: 'thin' }}
      >
        {screenshots.map((card) => (
          <div
            key={card.label}
            className="flex-shrink-0 w-[320px] snap-center flex flex-col border border-[#353534] bg-[#0e0e0e] shadow-[4px_4px_0_#131313] transition-transform hover:scale-[1.02] select-none"
          >
            <div className="relative h-48 w-full overflow-hidden border-b border-[#353534]">
              <Image
                src={card.image}
                alt={card.label}
                fill
                sizes="320px"
                className="object-cover opacity-80 hover:opacity-100 transition-opacity pointer-events-none select-none"
                quality={85}
                draggable={false}
              />
            </div>
            <div className="px-6 py-4 font-mono text-[11px] tracking-[0.15em] text-[#e9bcb5]">
              {card.label}
            </div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#131313] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#131313] to-transparent" />
    </div>
  );
}
