import React from "react";

type Props = { content: string; features: string[] };

const Description = ({ content, features }: Props) => {
  return (
    <div className="flex flex-col gap-4 mx-4">
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold">Description</div>
        <div>{content}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold">Features include</div>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Description;
