import { useEffect, useRef } from "react";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  const projectsSectionRef = useRef(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (projectsSectionRef.current) {
        const scrollPosition = window.scrollY;
        const horizontalSpeed = 0.2;
        const verticalSpeed = 0.05;
        projectsSectionRef.current.style.backgroundPosition = `${
          scrollPosition * horizontalSpeed
        }px ${scrollPosition * verticalSpeed}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={projectsSectionRef}
      id="projects"
      className="w-full relative z-[1] overflow-hidden py-16 px-4 md:px-16 space-y-12"
      style={{
        backgroundImage: "url('/prism-background.svg')",
        backgroundSize: "500px",
        backgroundPosition: "0 0",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="px-16">
        <h2 className="text-3xl font-bold ml-12 heading-effect">Projects</h2>
      </div>
      {/*Jobify*/}
      <ProjectCard id="jobify" link="/jobify">
        <img
          src="/project_images/jobify/home.png"
          alt="Jobify"
          className="project-image"
        />
        <h2 className="text-2xl font-bold mb-2">Jobify</h2>
        <p className="text-base">
          A full-stack job application tracker built with React, Supabase, and
          Node.js, featuring Google OAuth authentication, AI-powered job data
          extraction, and integrated analytics to monitor application progress
          and insights.
        </p>
      </ProjectCard>

      {/*River Predictor*/}
      <ProjectCard id="river-predictor" link="/riverAi" reverse={true}>
        <img
          src="/project_images/river_ai.png"
          alt="River Predictor"
          className="project-image"
        />
        <h2 className="text-2xl font-bold mb-2">River Flow Predictor</h2>
        <p className="text-base">
          A river flow forecasting system utilizing a fully custom Multi-Layer
          Perceptron (MLP) implemented from scratch in Python and NumPy, trained
          via backpropagation with support for techniques such as momentum,
          annealing, and weight decay.
        </p>
      </ProjectCard>
      {/*ZenTap*/}
      <ProjectCard id="zentap" link="/zentap">
        <img
          src="/project_images/zentap/screens.png"
          alt="ZenTap"
          className="project-image"
        />
        <h2 className="text-2xl font-bold mb-2">ZenTap</h2>
        <p className="text-base">
          An open-source Android app blocker designed to combat digital
          distraction by requiring a physical NFC tag to unlock apps. Key
          features include a "Strict Mode", recurring scheduling with AutoLock,
          and an emergency "Break Glass" override. The project is supported by a
          companion showcase website built with Next.js.
        </p>
      </ProjectCard>
      {/*Robot Hand*/}
      <ProjectCard id="robot-hand" link="/roboHand" reverse={true}>
        <img
          src="/project_images/prosthetic_hand2.png"
          alt="Robot Hand"
          className="project-image"
        />
        <h2 className="text-2xl font-bold mb-2">Robot Hand</h2>
        <p className="text-base">
          A fully 3D-printed prosthetic hand custom-designed from the ground up,
          controlled via real-time hand tracking using a webcam and Google’s
          MediaPipe library. Initially prototyped with Python and Arduino, the
          system now runs entirely in the browser with JavaScript and wirelessly
          controls the hand via Bluetooth for seamless, camera-based control.
        </p>
      </ProjectCard>
      {/*Make It All*/}
      <ProjectCard id="make-it-all" link="/makeItAll">
        <img
          src="/project_images/make_it_all/dashboard.png"
          alt="Make It All"
          className="project-image"
        />
        <h2 className="text-2xl font-bold mb-2">Make It All</h2>
        <p className="text-base">
          A comprehensive project management system featuring a drag-and-drop
          task board, analytics dashboard, real-time chat system (DMs and group
          chats), and an integrated knowledge base. With secure JWT-based
          authentication for user management.
        </p>
      </ProjectCard>
      {/*Tetris Ai*/}
      <ProjectCard id="tetris-ai" link="/tetrisAi" reverse={true}>
        <img
          src="/project_images/tetris_ai.png"
          alt="Tetris Ai"
          className="project-image"
        />
        <h2 className="text-2xl font-bold mb-2">Tetris Ai</h2>
        <p className="text-base">
          An autonomous Tetris-playing agent developed in Python using Pygame,
          leveraging heuristic-based algorithms and machine learning to make
          real-time gameplay decisions.
        </p>
      </ProjectCard>
      {/*Uni projects*/}
      <ProjectCard id="uni-projects" link="/uniProjects">
        <img
          src="/project_images/uniProjects/climbingApp.png"
          alt="Uni Projects"
          className="project-image"
        />
        <h2 className="text-2xl font-bold mb-2">Uni Projects</h2>
        <p className="text-base">
          This collection showcases key projects from my university studies,
          including an Android application for climbers to log sessions and
          track performance, a web platform to help users discover and compare
          wedding venues, and a robust shop management system built on
          object-oriented principles.
        </p>
      </ProjectCard>
    </section>
  );
}
