import Hero from "./components/hero";
import SkillsAndTools from "./components/skillsAndTools";
import AboutMe from "./components/aboutMe";

export default function Home() {
  return (
    <div className="overflow-hidden  scroll-smooth flex flex-col justify-around mx-auto min-h-screen animation-fade-in">
      <Hero />
      <SkillsAndTools />
      <AboutMe />
    </div>
  );
}
