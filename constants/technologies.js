import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio, DiPostgresql, DiMysql, DiDocker } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaTrello } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import AdobeXDIcon from "@/public/assets/svg/adobexd.svg";
import ZeplinIcon from "@/public/assets/svg/zeplin.svg";
import WebstormIcon from "@/public/assets/svg/webstorm.svg";
import JiraIcon from "@/public/assets/svg/jira.svg";
import HeadlessUiIcon from "@/public/assets/svg/headlessui.svg";
import MuiIcon from "@/public/assets/svg/mui.svg";
import ChakraIcon from "@/public/assets/svg/chakraui.svg";
import StyledIcon from "@/public/assets/svg/styledcomponents.svg";
import { FaAws } from "react-icons/fa"; // AWS icon
import { SiKubernetes, SiTerraform, SiAnsible } from "react-icons/si"; // Kubernetes, Terraform, Ansible

export const TECHNOLOGIES = [
	{
		category: "Languages",
		items: [
			{ name: "Java", icon: <DiVisualstudio size={32} /> }, // Placeholder icon
			{ name: "Python", icon: <DiVisualstudio size={32} /> }, // Placeholder icon
			{ name: "REST API", icon: <DiVisualstudio size={32} /> }, // Placeholder icon
			{ name: "SQL", icon: <DiVisualstudio size={32} /> } // Placeholder icon
		]
	},
	{
		category: "Frameworks",
		items: [
			{ name: "Next.js", icon: <TbBrandNextjs size={32} /> },
			{ name: "Node.js", icon: <DiVisualstudio size={32} /> }, // Placeholder icon
			{ name: "React.js", icon: <FaReact size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "Tailwind", icon: <TbBrandTailwind size={32} /> }
		]
	},
	{
		category: "Tools",
		items: [
			{ name: "Docker", icon: <DiDocker size={32} /> },
			{ name: "Kubernetes", icon: <SiKubernetes size={32} /> },
			{ name: "GIT", icon: <AiFillGithub size={32} /> },
			{ name: "PostgreSQL", icon: <DiPostgresql size={32} /> },
			{ name: "MySQL", icon: <DiMysql size={32} /> },
			{ name: "MongoDB", icon: <DiVisualstudio size={32} /> }, // Placeholder icon
			{ name: "Terraform", icon: <SiTerraform size={32} /> },
			{ name: "Ansible", icon: <SiAnsible size={32} /> } 
		]
	},
	{
		category: "Platforms",
		items: [
			{ name: "AWS", icon: <FaAws size={32} /> },
			{ name: "Git", icon: <AiFillGithub size={32} /> },
			{ name: "Power BI", icon: <DiVisualstudio size={32} /> }, // Placeholder icon
			{ name: "Figma", icon: <FaFigma size={32} /> },
			{ name: "Linux", icon: <DiVisualstudio size={32} /> }, // Placeholder icon
			{ name: "Windows", icon: <DiVisualstudio size={32} /> } // Placeholder icon
		]
	}
];
