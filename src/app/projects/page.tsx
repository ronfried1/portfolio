import React from "react";
import Project from "../components/project";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="flex flex-col items-center  max-w-7xl m-auto animation-fade-in">
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
      <Project
        images={["1", "2", "3"]}
        projectName="fastRide"
        description={
          "The Jungle™ FastRider is an innovative system designed to enhance the visitor experience at The Jungle™ amusement park. This system allows park visitors to reserve time slots for their favorite attractions without the need for additional VIP ticket purchases. Users can easily select their desired attractions, receive an access code, and enjoy shorter queues, all while ensuring fairness and efficiency in ride access. The project includes a user-friendly interface, strict validation rules, and server-side management to optimize the park's operations and visitor satisfaction."
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
    </div>
  );
};

export default Projects;
