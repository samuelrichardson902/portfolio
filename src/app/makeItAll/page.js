"use client";

import NavBar from "../components/navbar";
import Carousel from "../components/carousel";

export default function MakeItAll() {
  let shieldHeight = "28px";
  // Carousel images
  const images = [
    {
      src: "/project_images/make_it_all/dashboard.png",
      alt: "Make it All Dashboard",
    },
    {
      src: "/project_images/make_it_all/tasks.png",
      alt: "Make it All Tasks",
    },
    {
      src: "/project_images/make_it_all/knowledgeSystem.png",
      alt: "Make it All Knowledge System",
    },
    {
      src: "/project_images/make_it_all/chat.png",
      alt: "Make it All Chat",
    },
    {
      src: "/project_images/make_it_all/chat_members.png",
      alt: "Make it All Chat Member Selection",
    },
    {
      src: "/project_images/make_it_all/login_2.png",
      alt: "Make it All Login",
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
          <h2 className="text-3xl font-bold mb-8 heading-effect">
            Make it All
          </h2>
          <div className="flex flex-col items-center gap-8 w-full">
            <Carousel images={images} />

            <div className="flex flex-col md:flex-row w-full max-w-7xl md:w-[80vw] gap-8">
              <p className="text-xl text-left md:w-2/3">
                As a key member of a 7-person agile team, I collaborated on the
                development of Make-It-All, a comprehensive business management
                web application designed to centralize team operations.
                <br />
                <br />
                The platform integrates several essential tools, including task
                management boards and a dashboard for data analytics. It also
                features a real-time chat system for team communication and an
                integrated knowledge base for documentation.
                <br />
                <br />
                As a lead developer on the project, my role spanned the full
                stack. I architected and implemented the backend system and its
                core API, while also making significant contributions to the
                frontend. I was also responsible for leading the infrastructure
                setup and CI/CD integration, which streamlined the team's
                development and deployment workflow. The final application was
                deployed on a GCP Virtual Machine, with the SQL database managed
                via phpMyAdmin.
              </p>
              {/* Tech Stack Section */}
              <div className="flex flex-col items-start md:w-1/3">
                <h3 className="text-xl font-semibold mb-4">Tech Stack:</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  <img
                    src="https://img.shields.io/badge/GCP-4285F4?logo=googlecloud&logoColor=white"
                    alt="GCP"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white"
                    alt="React"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black"
                    alt="JavaScript"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/phpMyAdmin-6C78AF?logo=phpmyadmin&logoColor=white"
                    alt="phpMyAdmin"
                    style={{ height: shieldHeight }}
                  />
                  <img
                    src="https://img.shields.io/badge/SQL-4479A1?logo=postgresql&logoColor=white"
                    alt="SQL"
                    style={{ height: shieldHeight }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Back Button */}
          <div className="mt-12 flex justify-center">
            <a
              href="/#make-it-all"
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
