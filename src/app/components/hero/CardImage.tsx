import Image from "next/image";
import React from "react";

type Props = {};

const CardImage = (props: Props) => {
  return (
    <>
      <div className=" hidden absolute xl:inline-flex xl:left-auto xl:-right-[15rem] xl:bottom-0 animate-fade-in">
        <div className={"custom-mask-image "}>
          <Image
            src={"/images/ron.png"}
            width={330}
            height={20}
            alt="Picture of the author"
            className="absolute -bottom-2 left-6"
          />
        </div>
      </div>
      <div className="xl:hidden flex flex-col gap-3 py-6 items-center animate-fade-in delay-300">
        <div className={`bg-gray-300 rounded-full w-[250px] h-[250px] `}>
          <Image
            src={"/images/ron.png"}
            alt={"alt"}
            width={200}
            height={200}
            className=" object-cover h-full w-full rounded-full "
          />
        </div>
      </div>
    </>
  );
};

export default CardImage;
