"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const categorizedSkills = [
  {
    category: "Languages & Markup",
    skills: [
      { name: "Python", icon: "devicon:python" },
      { name: "JavaScript", icon: "devicon:javascript" },
      { name: "Java", icon: "devicon:java" },
      { name: "C++", icon: "devicon:cplusplus" },
      { name: "HTML", icon: "devicon:html5" },
      { name: "CSS", icon: "devicon:css3" },
      { name: "PHP", icon: "devicon:php" },
    ],
  },
  {
    category: "Frontend Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: "devicon:react" },
      { name: "Next.js", icon: "devicon:nextjs" },
      { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
      { name: "daisyUI", customSvg: "/daisyUI-rotating.svg" },
    ],
  },
  {
    category: "Backend & Deployment",
    skills: [
      { name: "Node.js", icon: "devicon:nodejs" },
      { name: "Linux Bash", icon: "devicon:linux" },
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "GCP", icon: "devicon:googlecloud" },
      { name: "SupaBase", icon: "devicon:supabase" },
      { name: "MongoDB", icon: "devicon:mongodb" },
      { name: "CloudFlare Pages", icon: "simple-icons:cloudflarepages" },
      { name: "Vercel", icon: "simple-icons:vercel" },
    ],
  },
  {
    category: "Robotics & AI",
    skills: [
      { name: "Raspberry Pi", icon: "devicon:raspberrypi" },
      { name: "Arduino", icon: "devicon:arduino" },
      { name: "numpy", icon: "devicon:numpy" },
      { name: "opencv", icon: "devicon:opencv" },
    ],
  },
  {
    category: "Tools & Testing",
    skills: [
      { name: "Git", icon: "devicon:git" },
      { name: "GitHub", icon: "simple-icons:github" },
      { name: "VS Code", icon: "devicon:vscode" },
      { name: "Insomnia", icon: "devicon:insomnia" },
    ],
  },
  {
    category: "Prototyping & Design",
    skills: [
      { name: "Figma", icon: "devicon:figma" },
      { name: "Diagrams.net", icon: "simple-icons:diagramsdotnet" },
    ],
  },
];

const skills = [
  { name: "Python", icon: "devicon:python" },
  { name: "JavaScript", icon: "devicon:javascript" },
  { name: "React", icon: "devicon:react" },
  { name: "Next.js", icon: "devicon:nextjs" },
  { name: "Node.js", icon: "devicon:nodejs" },
  { name: "GCP", icon: "devicon:googlecloud" },
  { name: "Raspberry Pi", icon: "devicon:raspberrypi" },
  { name: "git", icon: "devicon:git" },
];

function SkillsDisplay({ skillsExpanded, setSkillsExpanded }) {
  // Group skills in sets of 3 for vertical columns
  const columns = 3;
  const groupedSkills = [];
  for (let i = 0; i < skills.length; i += columns) {
    groupedSkills.push(skills.slice(i, i + columns));
  }

  // Add the 'More Skills' box as the last item in the grid
  const lastGroupIdx = groupedSkills.length - 1;
  if (groupedSkills.length > 0) {
    groupedSkills[lastGroupIdx] = [
      ...groupedSkills[lastGroupIdx],
      { name: "More Skills", icon: "mdi:chevron-down", isExpand: true },
    ];
  }

  return (
    <div className="flex flex-col items-center w-full relative">
      {/* Default skills display */}
      <div className="flex flex-row flex-nowrap items-end gap-4">
        {groupedSkills.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className={
              `flex flex-col min-w-[105px] gap-4` +
              (groupIdx % 2 === 1 ? " translate-y-7" : "")
            }
          >
            {group.map((skill) =>
              skill.isExpand ? (
                <button
                  key="expand"
                  className={`border-4 border-primary rounded-lg w-[105px] flex flex-col justify-center items-center p-2 box-border shadow-md transition-transform bg-base-100 hover:shadow-[0_0_25px_rgba(74,144,226,0.44)] hover:-translate-y-1 focus:outline-none`}
                  onClick={() => setSkillsExpanded((prev) => !prev)}
                  aria-expanded={skillsExpanded}
                  tabIndex={0}
                >
                  <Icon
                    icon={
                      skillsExpanded ? "mdi:chevron-up" : "mdi:chevron-down"
                    }
                    className="w-[55px] h-[55px] mb-1"
                  />
                  <span className="font-bold text-center text-sm">
                    {skillsExpanded ? "Hide" : "More Skills"}
                  </span>
                </button>
              ) : (
                <div
                  key={skill.icon || skill.customSvg}
                  className="border-4 border-primary rounded-lg w-[105px] flex flex-col justify-center items-center p-2 box-border shadow-md hover:shadow-[0_0_25px_rgba(74,144,226,0.44)] transition-transform hover:-translate-y-1 bg-base-100"
                >
                  {skill.customSvg ? (
                    <img
                      src={skill.customSvg}
                      alt={skill.name}
                      className="w-[55px] h-[55px] mb-1"
                    />
                  ) : (
                    <Icon
                      icon={skill.icon}
                      className="w-[55px] h-[55px] h-max-[55px] mb-1"
                    />
                  )}
                  <span className="text-center text-sm">{skill.name}</span>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ExpandedSkills({ skillsExpanded }) {
  return (
    <div
      className={`transition-all duration-500 overflow-hidden mt-14 ${
        skillsExpanded
          ? "max-h-[2000px] opacity-100 mt-8"
          : "max-h-0 opacity-0 mt-0"
      }`}
      style={{ pointerEvents: skillsExpanded ? "auto" : "none" }}
    >
      <div className="w-full relative bg-base-200 rounded-2xl p-6 sm:p-10 shadow-lg flex flex-col gap-8">
        {categorizedSkills.map((cat) => (
          <div key={cat.category}>
            <div className="flex items-center mb-4">
              <h3 className="font-bold text-lg mr-4 whitespace-nowrap">
                {cat.category}
              </h3>
              <div className="flex-1 border-t border-gray-400" />
            </div>
            <div className="flex flex-wrap gap-6 justify-start">
              {cat.skills.map((skill) => (
                <div
                  key={skill.icon || skill.customSvg}
                  className="flex flex-col items-center w-24"
                >
                  {skill.customSvg ? (
                    <img
                      src={skill.customSvg}
                      alt={skill.name}
                      className="w-12 h-12 mb-1"
                    />
                  ) : (
                    <Icon
                      icon={skill.icon}
                      className="w-12 h-12 mb-1"
                      color="#fff"
                    />
                  )}
                  <span className="text-center text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const [skillsExpanded, setSkillsExpanded] = useState(false);
  return (
    <section className="w-full pt-8 pb-16" id="about">
      <div className="md:px-48 sm:px-8 md:text-left text-center">
        <h2 className="text-3xl font-bold mb-2 heading-effect">About Me</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center md:items-start text-left">
          <div className="w-full md:w-[60%] h-fit flex justify-center md:justify-start px-4 md:px-0">
            <p className="text-base sm:text-md">
              Hi, I’m Sam Richardson - a Computer Science student at
              Loughborough University with a passion for building innovative
              software that solves real-world problems. I specialize in
              full-stack development, AI, and scalable web applications, with
              hands-on experience using technologies like Next.js, Supabase,
              GCP, and React.
              <br />
              <br />
              I enjoy turning complex ideas into functional tools - from
              AI-driven forecasting models to job application tracking platforms
              and camera-controlled prosthetics. Whether collaborating on agile
              team projects or diving into solo builds, I’m always exploring new
              technologies and pushing my boundaries.
              <br />
              <br />
              When I’m not coding, you’ll probably find me at the climbing wall
              or participating in hackathons. I love learning by doing - and I’m
              always open to new challenges.
            </p>
          </div>
          <div className="w-full md:w-[40%] flex items-center justify-center mt-6 md:mt-0 flex-col">
            <SkillsDisplay
              skillsExpanded={skillsExpanded}
              setSkillsExpanded={setSkillsExpanded}
            />
          </div>
        </div>
        <ExpandedSkills skillsExpanded={skillsExpanded} />
      </div>
    </section>
  );
}
