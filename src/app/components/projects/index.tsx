import React from "react";
import Project from "./Project";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div
      id={"projects"}
      className="container flex flex-col items-center   max-w-7xl m-auto animate-fade-in"
    >
      <h1 className="mt-32 text-2xl mb-16 font-bold  w-fit text-rose-500 border-4 border-rose-500 p-2">
        PROJECTS
      </h1>
      <div className="container max-w-sm lg:max-w-none">
        <Project
          images={["1", "2", "3"]}
          projectName="fastRide"
          description={
            "The Jungle™ FastRider system enhances amusement park visits by enabling visitors to reserve attraction time slots without requiring VIP tickets. It utilizes server-side rendering for a smooth user experience, with features like a user-friendly interface and robust validation for efficient ride access."
          }
          stack={["Next.js", "Redux", "CSS Modules", "Javascript", "Moment"]}
          features={[
            "API Integration",
            "Smooth Layout",
            "Choose ride",
            "Card Validation",
            "Reserve Time Slots",
          ]}
          gitHub={"https://github.com/ronfried1/The-Jungle-FastRide-app"}
          website={"https://the-jungle-fast-ride-app.vercel.app/"}
        />
        <Project
          images={["1", "2", "3"]}
          projectName="chatApp"
          description={
            "A feature-rich, fullstack, real-time chat application with M.E.R.N Tech"
          }
          stack={[
            "React",
            "Javascript",
            "Context",
            "Node.js",
            "Express",
            "MongoDB",
            "Socket.io",
            "Cors",
            "Mongoose",
          ]}
          features={[
            "Add and Remove Users",
            "Private, 1-1 messaging",
            "Database authentication",
            "Real-time app",
          ]}
          gitHub={"https://github.com/ronfried1/chat-game-app"}
          website={"https://ronfried1.github.io/chat-game-app/"}
        />
        <Project
          images={["1", "2", "3"]}
          projectName="portfolio"
          description={
            "This is my portfolio,a showcase of my projects and a glimpse into my skills and passions and how to reach me. "
          }
          stack={["Next.js", "Typescript", "Tailwind"]}
          features={[
            "Responsive app",
            "Next.js 13 routing",
            "Seamless User Experience",
          ]}
          gitHub={"https://github.com/ronfried1/portfolio"}
          website={"https://ronfried-portfolio.vercel.app/"}
        />
        <Project
          images={["1", "2", "3"]}
          projectName="gypsica"
          description={
            "Built a tailored e-commerce website using WordPress, precisely meeting user requirements. Crafted customized themes and plugins to ensure seamless functionality, enhancing the overall user experience and satisfaction."
          }
          stack={["Wordpress", "Php", "Javascript"]}
          features={[
            "Fast and secure transactions.",
            "Smooth scrolling",
            "Payment Gateways",
            "Multi-Lang",
          ]}
          website={"https://gypsica.com/"}
        />
      </div>
    </div>
  );
};

export default Projects;
