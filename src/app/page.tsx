import Hero from "./components/hero";
import SkillsAndTools from "./components/skillsAndTools";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="overflow-hidden scroll-smooth flex flex-col justify-around mx-auto min-h-screen w-full">
      <Hero />
      <SkillsAndTools />
      <Projects />
    </div>
  );
}
