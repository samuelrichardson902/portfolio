"use client";

import NavBar from "../components/navbar";
import Carousel from "../components/carousel";

export default function UniProjects() {
  let shieldHeight = "28px";

  // Project data
  const projects = [
    {
      title: "Climbing Logger",
      description:
        "This Android app allows climbers to log their ascents and monitor performance over time. The project emphasized creating a an intuitive and user-friendly interface for efficient, specialized data entry.",
      images: [
        {
          src: "/project_images/uniProjects/climbingApp.png",
          alt: "Climbing App Dashboard",
        },
      ],
      techStack: [
        {
          src: "https://img.shields.io/badge/Kotlin-0095D5?logo=kotlin&logoColor=white",
          alt: "Kotlin",
        },
        {
          src: "https://img.shields.io/badge/Android%20Studio-3DDC84?logo=android-studio&logoColor=white",
          alt: "Android Studio",
        },
      ],
      reverse: false,
    },
    {
      title: "Venue Vista",
      description:
        "A full-stack web platform designed to simplify the process of finding and comparing wedding venues, enabling users to search and filter wedding venues. This project demonstrated skills across the stack, from front-end UI design to back-end logic for handling search queries.",
      images: [
        {
          src: "/project_images/uniProjects/venueVista.png",
          alt: "Venue Vista Main",
        },
        {
          src: "/project_images/uniProjects/venueVistaMap.png",
          alt: "Venue Vista Map",
        },
      ],
      techStack: [
        {
          src: "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black",
          alt: "JavaScript",
        },
        {
          src: "https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white",
          alt: "PHP",
        },
        {
          src: "https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white",
          alt: "HTML5",
        },
        {
          src: "https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white",
          alt: "CSS3",
        },
        {
          src: "https://img.shields.io/badge/Bootstrap-563D7C?logo=bootstrap&logoColor=white",
          alt: "Bootstrap",
        },
      ],
      reverse: true, // Middle project: reverse layout
    },
    {
      title: "Peripheral Store",
      description:
        "This coursework project is a robust shop management system designed to handle core retail functions like inventory and sales processing. The backend was architected using fundamental OOP concepts, including encapsulation, inheritance, and polymorphism, to ensure a maintainable design.",
      images: [
        {
          src: "/project_images/uniProjects/oop_store/user_home.png",
          alt: "OOP Store Home",
        },
        {
          src: "/project_images/uniProjects/oop_store/user_basket.png",
          alt: "OOP Store Basket",
        },
        {
          src: "/project_images/uniProjects/oop_store/stock_view.png",
          alt: "OOP Store Stock View",
        },
        {
          src: "/project_images/uniProjects/oop_store/stock_add.png",
          alt: "OOP Store Stock Add",
        },
      ],

      techStack: [
        {
          src: "https://img.shields.io/badge/Java-ED8B00?logo=openjdk&logoColor=white",
          alt: "Java",
        },
      ],
      reverse: false,
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
      <div className="relative z-10 w-full">
        <NavBar />
        <div className="px-8 py-8 md:px-20 md:py-20 w-full">
          <h2 className="text-3xl font-bold mb-8 heading-effect">
            University Projects
          </h2>
          <div className="flex flex-col items-center gap-16 w-full">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className={`flex flex-col md:flex-row w-full max-w-7xl items-center gap-8 ${
                  project.reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image or Carousel */}
                <div className="w-full md:w-3/4 flex justify-center">
                  {project.images.length === 1 ? (
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: 12,
                      }}
                    />
                  ) : (
                    <div style={{ width: "100%" }}>
                      <Carousel images={project.images} />
                    </div>
                  )}
                </div>
                {/* Description & Tech Stack */}
                <div
                  className={`w-full md:w-1/4 flex flex-col gap-4 items-start text-left`}
                  style={{ alignSelf: "flex-start" }}
                >
                  <h3 className="text-2xl font-semibold mb-2 heading-effect">
                    {project.title}
                  </h3>
                  <p className="text-lg">{project.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-3 justify-lfet">
                      {project.techStack.map((badge, i) => (
                        <img
                          key={i}
                          src={badge.src}
                          alt={badge.alt}
                          style={{ height: shieldHeight }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
