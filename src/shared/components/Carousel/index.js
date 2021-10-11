/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Carousel from "react-material-ui-carousel";

import Paper from "@material-ui/core/Paper";


const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    imgAddress:
      "https://icms-image.slatic.net/images/ims-web/b5d6d3da-204e-4aef-a42b-69bd22aa430e.jpg_1200x1200.jpg",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    imgAddress:
      "https://icms-image.slatic.net/images/ims-web/82f7a2ea-e218-40db-94a4-1096aa145263.jpg",
  },
  {
    name: "Random Name #3",
    description: "Hello World!",
    imgAddress:
      "https://icms-image.slatic.net/images/ims-web/c5102ccf-6a6b-4058-b539-00193491e6b1.jpg",
  },
];

const CarouselView = () => {
  return (
    <Carousel
      indicatorIconButtonProps={{
        style: {
          display: "none",
        },
      }}
    >
      {items.map((item, i) => (
          <img
            src={item?.imgAddress}
            style={{ height: "400px", width: "100%" }}
          />
      ))}
    </Carousel>
  );
};

export default CarouselView;