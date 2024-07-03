import Image from "next/image";
import Hero from "./components/hero/page";
import States from "./components/state/States";
import Services from "./components/services/page";
import Works from "./components/works/page";
import Resume from "./components/resume/page";
import Skills from "./components/skills/page";

export default function Home() {
  return (
    <main className="py-16 max-w-screen-2xl">
      <Hero></Hero>
      <Services></Services>
      <Works></Works>
      <Resume></Resume>
      <Skills></Skills>
    </main>
  );
}
