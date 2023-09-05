import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

type Props = { images: string[]; projectName: string };

const ImageCarousel = ({ images, projectName }: Props) => {
  const getConfigurableProps = () => ({
    showStatus: false,
    showThumbs: false,
    autoplay: false,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
  });

  return (
    <Carousel {...getConfigurableProps()}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={`/images/projects/${projectName}/${image}.jpeg`}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
