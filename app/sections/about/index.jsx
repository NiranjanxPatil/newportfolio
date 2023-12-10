"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "@/components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

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
  Hello, Im Niranjan Patil, skilled in Next.js, Java, Docker, and K8s.
  </p>
  <p className="my-3.5">
  Im currently pursuing AIML engineering at Mumbai University and hold a Diploma in Computer Engineering from Pune University. 
  Outside of work, I enjoy reading blogs and writing blogs on my personal website niranjann.tech.
  </p>
  <p>My programming journey officially began in 2019 as a java developer.</p>
  <p className="my-3.5">
  In my past roles, I excelled in group leadership and project management, and 
  Im proud of my achievements in mobile app development during my Diploma years.
  </p>
  <p>
  I bring to the table expertise in cloud, DevOps, and AI/ML, along with a passion for designing in Figma and Canva.
  </p>
  <p className="my-3.5">
  Currently, Im focused on honing my cloud and DevOps skills, and 
  Im eager to collaborate on projects that leverage my knowledge in AIML and AI toolss.
  </p>
</div>

				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
