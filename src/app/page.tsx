import AboutPage from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ProjectPage from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <AboutPage />
      <ProjectPage />
    </>
  );
}
