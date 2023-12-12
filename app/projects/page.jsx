 "use cilent  "
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Prompttop",
    description:
      "AI-powered prompts to enhance the outcomes of AI with Catalystic Prompts. and experiment with prompts to enhance their interactions with AI, catalyzing the AI's output. This interactive and user-friendly tool empowers individuals to influence AI-generated content.",
    image: "/prompttop.png",
    github: "https://github.com/NiranjanxPatil/prompttop",
    link: "https://prompttop.niranjann.tech",
  },
  {
    name: "TextSight",
    description: "Craft a comprehensive personal portfolio website using Next.js, designed to highlight your skills, projects, blogs, and contact information. This website serves as a dynamic platform to not only showcase your professional prowess but also share your unique insights and ideas. ",
    image: "/textsight.png",
    github: "https://github.com/NiranjanxPatil/textsight",
    link: "https://textsight.niranjann.tech",
  },
  {
    name: "Personal Website",
    description: "Craft a comprehensive personal portfolio website using Next.js, designed to highlight your skills, projects, blogs, and contact information. This website serves as a dynamic platform to not only showcase your professional prowess but also share your unique insights and ideas. ",
    image: "/port.png",
    github: "https://github.com/NiranjanxPatil/version2_myportfolio",
    link: "https://niranjann.tech",
  },
  {
    name: "Skeleton",
    description: "Get a head start on your Next.js web application development with this comprehensive app skeleton. Built on a custom API with MongoDB, this skeleton app includes all the essential features you need to kickstart your project Appwirte, DB, Mailer.",
    image: "/skeleton.png",
    github: "https://github.com/NiranjanxPatil/skeleton_app",
    link: "https://skeleton.niranjann.tech",
  },
  {
    name: "Draw_Detech",
    description: "The AI-Based Canvas Object Detection project has the potential to revolutionize various domains by automating the analysis of hand-drawn or digitally created content, saving time, enhancing productivity, and opening new avenues for creativity and education.",
    image: "/draw.png",
    github: "https://github.com/NiranjanxPatil/draw_detect",
    link: "https://github.com/NiranjanxPatil/draw_detect",
  },
  
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-500 text-light py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">PROJECTS</h1>

        <div className="flex flex-col space-y-8 md:space-y-12 overflow-y-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="border rounded-md p-4">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex items-center justify-center">
                  <Link href={project.link}>
                    <img
                      src={project.image}
                      alt=""
                      className="max-w-46 max-h-60 rounded-lg shadow-lg hover:opacity-80 cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="mt-4 md:w-1/2">
                  <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
                  <p className="text-lg leading-6 mb-4 text-light">
                    {project.description}
                  </p>
                  <div className="flex flex-row space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;