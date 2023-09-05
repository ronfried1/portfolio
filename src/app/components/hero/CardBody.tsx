import React from "react";

type Props = {};

const CardBody = (props: Props) => {
  return (
    <div
      className={" animate-slide-in-left mt-12 delay-700 text-white text-lg"}
    >
      <p className="xl:text-4xl">
        I'm a <b>Full stack developer </b>from
        <br />
        Tel Aviv, Israel.
      </p>
    </div>
  );
};

export default CardBody;
