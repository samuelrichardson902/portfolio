import NavBar from "../components/navbar";

export default function RoboHand() {
  let shieldHeight = "28px";

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
          <h2 className="text-3xl font-bold mb-8 heading-effect">Robot Hand</h2>
          <div className="flex flex-col items-center gap-8 w-full">
            {/* Embedded YouTube Video */}
            <div className="w-full flex justify-center mb-8">
              <div className="w-full max-w-7xl aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/WUCHbTORnVs"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-xl w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full max-w-7xl md:w-[80vw] gap-8">
              <p className="text-xl text-left md:w-2/3">
                This project involved the iterative design of a functional,
                3D-printed prosthetic hand controlled in real-time by a camera
                using Google's MediaPipe API. The initial prototype was
                developed with Python and C++ to process the hand-tracking data,
                which was then sent to an Arduino to control the physical hand.
                The system was later enhanced to create a more seamless user
                experience, transitioning to a web-based interface that runs the
                MediaPipe hand tracking directly in the client's browser using
                JavaScript. This modern approach enables the hand to be
                controlled wirelessly via Bluetooth from a Raspberry Pi Pico W,
                creating a self-contained and highly responsive system.
              </p>
              {/* Tech Stack Section */}
              <div className="flex flex-col items-start md:w-1/3">
                <h3 className="text-xl font-semibold mb-4">Tech Stack:</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  <img
                    src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black"
                    alt="JavaScript"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/Raspberry%20Pi-C51A4A?logo=raspberrypi&logoColor=white"
                    alt="Raspberry Pi"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white"
                    alt="Python"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/Arduino-00979D?logo=arduino&logoColor=white"
                    alt="Arduino"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/C++-00599C?logo=c%2B%2B&logoColor=white"
                    alt="C++"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/MediaPipe-FF6F00?logo=google&logoColor=white"
                    alt="MediaPipe"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB"
                    alt="React"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/CAD-0077C2?logo=autodesk&logoColor=white"
                    alt="CAD"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/3D%20Printing-FFB300?logo=3d&logoColor=white"
                    alt="3D Printing"
                    style={{ height: shieldHeight }}
                  />
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://robo-hand.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors flex items-center gap-2 text-lg"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/samuelrichardson902/prosthetic-hand"
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
          {/* Back Button */}
          <div className="mt-12 flex justify-center">
            <a
              href="/#robot-hand"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
