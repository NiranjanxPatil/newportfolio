import { BsFillEnvelopeOpenFill, BsGithub, BsLinkedin, BsTwitter, BsX } from "react-icons/bs";

export const SOCIAL_MEDIA = [
	{
		id: "linkedin",
		icon: <BsLinkedin
		className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />,
		title: "Visit LinkedIn profile",
		url: "https://www.linkedin.com/in/niranjanxpatil"
	},
	{
		id: "github",
		icon: <BsGithub 
		className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />,
		title: "Visit Github profile",
		url: "https://github.com/NiranjanxPatil"
	},
	{
		id: "mail",
		icon: <BsFillEnvelopeOpenFill 
		className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />,
		title: "Send me an email",
		url: "mailto://niranjan41210@gmail.com"
	},

	{
		id: "X",
		icon: <BsTwitter
		className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />,
		title: "Connect on X",
		url: "https://twitter.com/NiranjanxPatil"
	}
];
