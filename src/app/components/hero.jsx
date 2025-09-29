import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrolled * 0.5}px`;
      }
      setShowArrows(scrolled === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex flex-col justify-center items-center text-center h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/mountain-background/mountain_landscape24_generated.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
        <div className="backdrop-blur-sm bg-base-300/50 rounded-4xl p-6 shadow-xl items-center font-['Rubik_Doodle_Shadow'] sm:mx-8">
          <h1 className="text-5xl font-extrabold text-base-100-content">
            Sam Richardson
          </h1>
          <p className="text-2xl text-base-100-content pt-2">
            Developer
          </p>
        </div>
        {showArrows && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div
              className="w-8 h-8 border-l-4 border-b-5 border-white rounded transform -rotate-45 animate-pulse duration-[2500ms] opacity-90"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="w-8 h-8 border-l-4 border-b-5 border-white rounded transform -rotate-45 animate-pulse duration-[2500ms] opacity-90"
              style={{ animationDelay: "0.4s", marginTop: "-15px" }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
