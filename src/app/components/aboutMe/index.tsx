import React from "react";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-24 mb-[4rem]">
      <div className="flex flex-col mx-8 lg:mx-24 gap-5 text-xl xl:text-2xl leading-relaxed xl:flex-row text-gray-600">
        {`
        Hello, I'm Ron, a dynamic full-stack developer with a rich and diverse
        journey. My path has taken me from owning a vibrant Tel Aviv bar, where
        I honed my communication and leadership skills, to the thrilling world
        of technology. In the realm of tech, I specialize in crafting end-to-end
        digital solutions. With two years of hands-on experience, I excel in
        developing user-friendly interfaces and innovative digital experiences.
        My background in music has nurtured my creative side, which I now infuse
        into my coding endeavors. I'm on a mission to blend my unique
        experiences with my tech expertise to compose meaningful digital
        stories. Let's collaborate and make a digital impact together.
       `}
      </div>
    </div>
  );
};
export default AboutMe;
