import React from "react";
import CSharpIcon from "../../../../public/images/tools/cSharp.svg";
import CssIcon from "../../../../public/images/tools/css.svg";
import GitIcon from "../../../../public/images/tools/git.svg";
import GitHubIcon from "../../../../public/images/tools/github.svg";
import HtmlIcon from "../../../../public/images/tools/html.svg";
import JsIcon from "../../../../public/images/tools/js.svg";
import ReactIcon from "../../../../public/images/tools/react.svg";
import RestApiIcon from "../../../../public/images/tools/restApi.svg";
import JqueryIcon from "../../../../public/images/tools/jquery.svg";
import TsIcon from "../../../../public/images/tools/typescript.svg";
import TailwindIcon from "../../../../public/images/tools/tailwind.svg";
import DotNetIcon from "../../../../public/images/tools/microsoft-dot-net.svg";
import Image from "next/image";

type Props = {};

const tools = [
  { icon: ReactIcon, name: "React" },
  { icon: JsIcon, name: "JavaScript" },
  { icon: TsIcon, name: "TypeScript" },
  { icon: HtmlIcon, name: "HTML5" },
  { icon: CssIcon, name: "CSS3" },
  { icon: TailwindIcon, name: "Tailwind" },
  { icon: CSharpIcon, name: "C#" },
  { icon: DotNetIcon, name: ".net" },
  { icon: GitIcon, name: "Git" },
  { icon: GitHubIcon, name: "Github" },
  { icon: RestApiIcon, name: "Rest Api" },
  { icon: JqueryIcon, name: "Jquery" },
];

const Skills = (props: Props) => {
  return (
    <div className="flex items-center justify-between  md:justify-normal flex-wrap gap-4 mb-[6rem] ">
      {tools.map((ToolIcon, index) => {
        const Icon = ToolIcon.icon;
        return (
          <div
            key={index}
            className="flex justify-center flex-col items-center text-xl lg:text-2xl w-24 lg:w-32"
          >
            <Icon width="70" height="70" />
            <p className="mt-4 text-gray-600">{ToolIcon.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
