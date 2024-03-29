  import Link from 'next/link';
  import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';


  const projects = [
      {
        name: "Prompttop",
        description:"  AI-poweres prompts to enhance the outcomes of AI with Catalystic Prompts, and experiment with prompts to enhance their interactions. ",
        image: "/prompttop.png",
        github: "https://github.com/NiranjanxPatil/prompttop",
        link: "https://prompttop.niranjann.tech",
      },
      {
        name: "TextSight",
        description: "Designed and developed an AI-driven website converting images to text, enhancing comprehension and generating captions for improved accessibility.  ",
        image: "/textsight.png",
        github: "https://github.com/NiranjanxPatil/textsight",
        link: "https://textsight.niranjann.tech",
      },
      {
        name: "Personal Website",
        description: "This website serves as a dynamic platform to not only showcase your professional prowess but also share your unique insights and ideas.   ",
        image: "/port.png",
        github: "https://github.com/NiranjanxPatil/version2_myportfolio",
        link: "https://niranjann.tech",
      },
      {
        name: "Skeleton",
        description: "Built on a custom API with MongoDB, this skeleton app includes all the essential features you need to kickstart your project Appwirte, DB, Mailer.",
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

    export default function ProjectsPage() {
      return (
        <div className='flex items-center justify-center min-h-screen w-screen flex-col'>
          {projects.map((project, index) => (
            <div key={index} className="mb-4 mt-7 w-full max-w-7xl">
              <div className="no-underline">
                <div className="flex flex-row bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700">
                  <Link href={project.link}>
                    <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-s-lg"
                      src={project.image}
                      alt={project.name}
                      style={{ width: '800px', height: '200px' }} // Add this style attribute
                    />
                  </Link>
                  <div className="flex flex-col p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray dark:text-white">
                      {project.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
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
            </div>
          ))}
        </div>
      );
    }