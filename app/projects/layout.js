import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata } from "@/components";
import ProjectHeader from "@/app/projects/Head";

import "@/styles/globals.css"
import { ThemeContext } from "@/context";
import Link from "next/link";


export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {

	
	return (
		<html lang="en">
			<body>
			<ThemeContext>
					<AppHeader />
					{children}
					<AppFooter />
				</ThemeContext>
			
			</body>
		</html>
	);
}
