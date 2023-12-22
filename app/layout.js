import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata } from "@/components";
import Loading from "@/app/loading";
import "@/styles/globals.css"
import { ThemeContext } from "@/context";

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
		  <div classname = "bg-green">
					<AppHeader />
					{children}
					<AppFooter />
		  </div>
				</ThemeContext>
			</body>
		</html>
	);
}
