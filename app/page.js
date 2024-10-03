import Head from 'next/head';
import { WelcomeSection, AboutSection, TechnologiesSection } from "@/app/sections";

export default function Page() {
  return (
    <div className="container-md">
      <Head>
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="4d20bd4c-d15a-4b5d-8a64-8f801a646e90"
          async
        ></script>
      </Head>      
      <WelcomeSection />	
      <AboutSection />
      <TechnologiesSection />
    </div>
  );
}
