import Head from 'next/head';
import { WelcomeSection, AboutSection, TechnologiesSection } from "@/app/sections";

export default function Page() {
  return (
    <div className="container-md">
		<Head>
			<script
			src="https://beamanalytics.b-cdn.net/beam.min.js"
			data-token="cea78beb-0056-47f4-8382-00f1ed721ce1"
			async
			/>
		</Head>
      
      <WelcomeSection />
      <AboutSection />
    </div>
  );
}
