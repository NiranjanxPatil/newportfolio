import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata } from "@/components";
import Loading from "@/app/loading";
import "@/styles/globals.css"
import { ThemeContext } from "@/context";

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