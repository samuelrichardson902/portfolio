"use client";

import NavBar from "../components/navbar";
import Carousel from "../components/carousel";

export default function Jobify() {
  let shieldHeight = "28px";

  const images = [
    {
      src: "/project_images/zentap/screens.png",
      alt: "zentap screens",
    },
    {
      src: "/project_images/zentap/features.png",
      alt: "zentap features",
    },
    {
      src: "/project_images/zentap/diyGuide.png",
      alt: "zentap diy guide",
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden">
      {/* Blurred background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/topography.svg')",
          backgroundRepeat: "repeat",
          filter: "blur(0px)",
          WebkitFilter: "blur(0px)",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />
      {/* Main content */}
      <div className="relative z-10 w-8xl">
        <NavBar />
        <div className="px-8 py-8 md:px-20 md:py-20 w-full">
          <h2 className="text-3xl font-bold mb-8 heading-effect">ZenTap</h2>
          <div className="flex flex-col items-center gap-8 w-full">
            <Carousel images={images} />
            <div className="flex flex-col md:flex-row w-full max-w-7xl md:w-[80vw] gap-8">
              <p className="text-xl text-left md:w-2/3">
                ZenTap was born from the observation that traditional software
                app blockers are too easy to bypass. This project introduces a
                tangible, real-world friction point: a physical NFC tag required
                to unlock distracting apps.
                <br />
                The open-source Android app, built with Kotlin and Jetpack
                Compose, allows users to manage blocked apps, set temporary
                access with 'Strict Mode,' and schedule focus sessions. To
                support the app, I designed and developed a full companion
                website using Next.js, Tailwind CSS, and Three.js, featuring
                interactive animations and a comprehensive DIY guide for users
                to program their own tags to work with the app.
              </p>
              {/* Tech Stack Section */}
              <div className="flex flex-col items-start md:w-1/3">
                <h3 className="text-xl font-semibold mb-4">Tech Stack:</h3>
                <div className="flex flex-wrap gap-3">
                  <img
                    src="https://img.shields.io/badge/Kotlin-7F52FF?logo=kotlin&logoColor=white"
                    alt="Kotlin"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/Android-3DDC84?logo=android&logoColor=white"
                    alt="Android"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/Jetpack%20Compose-4285F4?logo=jetpackcompose&logoColor=white"
                    alt="Jetpack Compose"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white"
                    alt="Next.js"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white"
                    alt="TailwindCSS"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/DaisyUI-5A0EF8?logo=daisyui&logoColor=white"
                    alt="DaisyUI"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/Three.js-000?logo=three.js&logoColor=white"
                    alt="Three.js"
                    style={{ height: shieldHeight }}
                  />
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://zentap.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors flex items-center gap-2 text-lg"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/samuelrichardson902/ZenTap"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-base-100 text-white font-semibold shadow hover:bg-base-200 transition-colors flex items-center gap-2 text-lg"
              >
                {/* GitHub Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
