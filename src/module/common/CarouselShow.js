import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./common.scss";

const CarouselShow = ({ images }) => {
  return (
    <div className="carousel">
      <Carousel
        className="carousel-style"
        showArrows={true}
        showThumbs={true}
        showStatus={false}
      >
        {images.map((image, key) => {
          return (
            <div key={key}>
              <img src={image} />
            </div>
          );
        })}
      </Carousel>{" "}
    </div>
  );
};
CarouselShow.propTypes = {
  images: PropTypes.array
};
export default CarouselShow;
