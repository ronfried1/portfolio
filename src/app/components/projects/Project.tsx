"use client";
import React from "react";
import ImageCarousel from "./ImageCarousel";
import Description from "./Description";
import Stack from "./Stack";
import Links from "./Links";

type Props = {
  images: string[];
  projectName: string;
  description: string;
  gitHub?: string;
  website?: string;
  stack: string[];
  features: string[];
};

const Project = ({
  images,
  projectName,
  description,
  gitHub,
  website,
  stack,
  features,
}: Props) => {
  return (
    <div className="flex items-end w-full">
      <div className="flex flex-col xl:flex-row gap-8 my-16 w-full">
        <div className="flex flex-col gap-4 flex-1 justify-between mt-2">
          <ImageCarousel projectName={projectName} images={images} />
          <Links gitHub={gitHub} website={website} />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <Description content={description} features={features} />
          <Stack stack={stack} gitHub={gitHub} website={website} />
        </div>
      </div>
    </div>
  );
};

export default Project;
