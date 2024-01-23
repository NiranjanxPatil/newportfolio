"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "@/components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

  const Introduction = () => {
    const [hovered, setHovered] = React.useState(false);
  
    const handleHover = () => {
      setHovered(!hovered);
    };
  }
	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
				<div
  tabIndex="0"
  ref={ref}
  className="text-xl font-light leading-relaxed"
  style={{
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  }}
>
<p>
          Hey there! Im <strong>Niranjan </strong>, a tech enthusiast skilled in <strong>Designe</strong>, <strong>Development</strong>,  and <strong>OPS</strong>.
        </p>
      </div>

      <div className={`intro-paragraph ${hovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <p>
          Currently on an exciting journey in AIML engineering at <strong>Mumbai University</strong>, with a diploma in Computer Engineering from <strong>Pune University</strong>.
          Outside of coding, you can catch me diving into blogs—both reading and writing on my personal website <a href="https://niranjann.tech" target="_blank" rel="noopener noreferrer">niranjann.tech</a>.
        </p>
      </div>

      <div>
        <p>
          My programming adventure officially kicked off in 2019 as a Java developer.
        </p>
      </div>

      <div className="intro-paragraph">
        <p>
          Thrived in group leadership and project management in my past roles, and Im particularly proud of my achievements in mobile app development during my Diploma years.
        </p>
      </div>

      <div>
        <p>
          Bringing a blend of expertise in cloud, DevOps, and AI/ML to the table, Im equally passionate about crafting designs in Figma and Canva.
        </p>
      </div>

      <div className={`intro-paragraph ${hovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <p>
          Currently, Im laser-focused on honing my cloud and DevOps skills. Eager to collaborate on projects that harness my knowledge in AIML and AI tools. Lets build something amazing together!
        </p>
</div>

				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
