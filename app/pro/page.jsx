import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: "Prompttop",
    description: "Enhance AI outcomes with catalystic prompts, optimizing AI performance through innovative prompts and experimentation. This project leverages advanced AI techniques to generate effective prompts for various AI applications.",
    image: "/prompttop.png",
    github: "https://github.com/NiranjanxPatil/prompttop",
    link: "https://prompttop.niranjann.tech",
  },
  {
    name: "TextSight",
    description: "Convert images to text, generate captions for accessibility, leveraging AI to enhance digital content comprehension. TextSight utilizes OCR technology and AI-driven algorithms to convert visual information into readable text and provide descriptive captions.",
    image: "/textsight.png",
    github: "https://github.com/NiranjanxPatil/textsight",
    link: "https://textsight.niranjann.tech",
  },
  {
    name: "Personal Website",
    description: "Showcase professional prowess and insights with a dynamic platform for portfolio and idea sharing. This project includes a custom-built CMS for easy content management and integration with third-party APIs for enhanced functionality.",
    image: "/port.png",
    github: "https://github.com/NiranjanxPatil/version2_myportfolio",
    link: "https://niranjann.tech",
  },
  {
    name: "Skeleton",
    description: "Kickstart projects with essential features like Appwrite, DB integration, and Mailer functionalities using a custom API. Skeleton provides a ready-to-deploy template with modular components and scalable architecture for rapid application development.",
    image: "/skeleton.png",
    github: "https://github.com/NiranjanxPatil/skeleton_app",
    link: "https://skeleton.niranjann.tech",
  },
  {
    name: "Draw_Detech",
    description: "Automate analysis of hand-drawn or digital content with AI-based canvas object detection, enhancing productivity and creativity. Draw_Detech employs computer vision algorithms to detect and analyze objects in digital artwork, facilitating automated analysis and enhancement.",
    image: "/draw.png",
    github: "https://github.com/NiranjanxPatil/draw_detect",
    link: "https://github.com/NiranjanxPatil/draw_detect",
  },
  {
    name: "Artify",
    description: "A blockchain-based web app using React and Pinata with MetaMask integration for trading AI-generated art as NFTs. It provides ownership and rights to individual creators, ensuring secure and transparent transactions.",
    image: "/artify.png",
    github: "https://github.com/NiranjanxPatil/Artify",
    link: "https://artify.niranjann.tech",
  },
  {
    name: "Store Analytic",
    description: "A Power BI-based dashboard for comprehensive analytics and research, facilitating data-driven decision-making. This project integrates various data sources to provide actionable insights through interactive visualizations.",
    image: "/store.png",
    github: "https://github.com/NiranjanxPatil",
    link: "https://niranjann.tech",
  },
  {
    name: "CricSights",
    description: "A Next.js and Power BI-based web app providing analytical forecasts and real-time cricket data using open-source APIs. It features a sleek, user-friendly design, offering detailed analysis of player performance, win ratios, and strategic insights.",
    image: "/cric.png",
    github: "https://github.com/NiranjanxPatil",
    link: "https://niranjann.tech",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition-transform hover:scale-105 h-full">
            <Link href={project.link}>
              <div className="relative h-52 md:h-60">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            </Link>
            <div className="p-4 flex flex-col flex-grow">
              <h5 className="mb-2 text-lg font-bold text-gray-800">
                {project.name}
              </h5>
              <p className="mb-4 text-gray-800 text-sm">
                {project.description}
              </p>
              <div className="flex items-center mt-auto space-x-4">
                <Link href={project.github} target="_blank">
                  <BsGithub
                    size={24}
                    className="text-gray-600 hover:text-gray-900 cursor-pointer"
                  />
                </Link>
                <div className="flex items-center">
                  <Link href={project.link} target="_blank">
                    <BsArrowUpRightSquare
                      size={24}
                      className="text-gray-600 hover:text-gray-900 cursor-pointer"
                    />
                  </Link>
                  <span className="ml-1 text-sm text-gray-600">Live</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
