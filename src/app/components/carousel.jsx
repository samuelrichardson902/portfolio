import { useRef, useEffect, useState } from "react";

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const carouselRef = useRef(null);

  // Helper for looping backwards
  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  // Helper for looping forwards
  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // Auto-advance every 4 seconds
  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(goToNext, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, images.length]);

  // Swipe/scroll support
  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;
    let startX = 0;
    let isTouch = false;
    const onTouchStart = (e) => {
      isTouch = true;
      startX = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
      if (!isTouch) return;
      const endX = e.changedTouches[0].clientX;
      if (endX - startX > 50) {
        goToPrev();
      } else if (startX - endX > 50) {
        goToNext();
      }
      isTouch = false;
    };
    node.addEventListener("touchstart", onTouchStart);
    node.addEventListener("touchend", onTouchEnd);
    return () => {
      node.removeEventListener("touchstart", onTouchStart);
      node.removeEventListener("touchend", onTouchEnd);
    };
  }, [images.length]);

  // Keyboard arrow navigation
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [images.length]);

  return (
    <div className="w-full flex justify-center rounded-4xl bg-base-200/35">
      <div
        className="carousel rounded-2xl shadow-xl w-full max-w-7xl md:w-[70vw] relative overflow-hidden flex items-center justify-center"
        ref={carouselRef}
        tabIndex={0}
      >
        {/* Arrow left */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 transition-colors focus:outline-none"
          onClick={goToPrev}
          aria-label="Previous slide"
          tabIndex={0}
          style={{ backdropFilter: "blur(4px)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {/* Arrow right */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 transition-colors focus:outline-none"
          onClick={goToNext}
          aria-label="Next slide"
          tabIndex={0}
          style={{ backdropFilter: "blur(4px)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        {/* Slides with sliding effect */}
        <div
          className="w-full h-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div
              key={img.src}
              className="carousel-item w-full h-full flex items-center justify-center flex-shrink-0 flex-grow-0"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-auto h-full object-contain rounded-2xl select-none pointer-events-none mx-auto"
                draggable={false}
              />
            </div>
          ))}
        </div>
        {/* Subtle bar indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`transition-all duration-200 h-1 rounded-full ${
                current === idx ? "bg-primary w-10" : "bg-gray-400/60 w-6"
              }`}
              style={{
                border: "none",
                outline: "none",
                opacity: current === idx ? 0.95 : 0.5,
                boxShadow:
                  current === idx ? "0 2px 8px 0 rgba(0,0,0,0.12)" : "none",
              }}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              tabIndex={0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
