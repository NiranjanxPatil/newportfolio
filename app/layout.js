import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata } from "@/components";
import Loading from "@/app/loading";
import "@/styles/globals.css"
import { ThemeContext } from "@/context";
import Particles from "@/components/particles"
import { Analytics } from "@vercel/analytics/react"
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
				<Particles
			className="absolute inset-0 -z-10 animate-fade-in isDarkTheme ? 'bg-black' : 'bg-white'"
			quantity={200} // Increase the quantity to 300 or any other value you prefer
			speed={1} // Increase the speed to 0.5 or any other value you prefer
		/>
				<ThemeContext>
		 
					<AppHeader />
					{children}
					<Analytics />
					<AppFooter />
		  
				</ThemeContext>
			</body>
		</html>
	);
}
