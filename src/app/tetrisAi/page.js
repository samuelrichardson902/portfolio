import NavBar from "../components/navbar";

export default function TetrisAi() {
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
          <h2 className="text-3xl font-bold mb-8 heading-effect">Tetris AI</h2>
          <div className="flex flex-col items-center gap-8 w-full">
            {/* Embedded YouTube Video */}
            <div className="w-full flex justify-center mb-8">
              <div className="w-full max-w-7xl aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/J1CAo_8KpNA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-xl w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full max-w-7xl md:w-[80vw] gap-8">
              <p className="text-xl text-left md:w-2/3">
                This project features an autonomous AI agent designed to master
                the classic game of Tetris. Developed in Python with the Pygame
                library, the AI evaluates every possible move in real-time using
                a heuristic-based algorithm to decide on the optimal placement
                for each piece. The core strategy is designed to minimize board
                height, reduce the number of holes, and maximize completed
                lines. To elevate its performance, the agent's decision-making
                heuristics were optimized using a genetic algorithm. This
                process involved training multiple generations of the AI,
                allowing it to evolve the most effective strategies for
                long-term survival and high scores. A key feature of this
                project is the online multiplayer functionality, enabling the AI
                to compete directly against human players.
              </p>
              {/* Tech Stack Section */}
              <div className="flex flex-col items-start md:w-1/3">
                <h3 className="text-xl font-semibold mb-4">Tech Stack:</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  <img
                    src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white"
                    alt="Python"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/Pygame-000000?logo=pygame&logoColor=white"
                    alt="Pygame"
                    style={{ height: shieldHeight }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Back Button */}
          <div className="mt-12 flex justify-center">
            <a
              href="/#tetris-ai"
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
