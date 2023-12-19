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
						<script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="cea78beb-0056-47f4-8382-00f1ed721ce1"
          async
        />
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
