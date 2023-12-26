import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata } from "@/components";
import Loading from "@/app/loading";
import "@/styles/globals.css";
import { ThemeContext } from "@/context";
import Particles from "@/components/particles";

export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token="cea78beb-0056-47f4-8382-00f1ed721ce1"
        async
      />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in isDarkTheme ? 'bg-black' : 'bg-white'"
        quantity={200}
        speed={1}
      />
      <body>
        <ThemeContext>
          <AppHeader />
          <main className="overflow-y-auto">
            {children}
          </main>
          <AppFooter />
        </ThemeContext>
      </body>
    </html>
  );
}
