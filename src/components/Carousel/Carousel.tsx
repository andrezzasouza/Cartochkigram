import { Carousel } from "react-responsive-carousel";
import "../../assets/styles/carousel.css";
import img1 from "../../assets/images/brandi-redd-aJTiW00qqtI-unsplash.jpg";
import img4 from "../../assets/images/kate-trysh-WX5jK0BT5JQ-unsplash.jpg";
import img5 from "../../assets/images/kelly-sikkema-0iKjge_aOVo-unsplash.jpg";
import img6 from "../../assets/images/thomas-renaud-_i2uAmskZcQ-unsplash.jpg";
import Image from "next/image";

const carouselImageArray = [
  {
    image: img1,
    alt: "",
  },
  {
    image: img4,
    alt: "",
  },
  {
    image: img5,
    alt: "",
  },
  {
    image: img6,
    alt: "",
  },
];

const CarouselComponent = () => (
  <Carousel
    showThumbs={false}
    showStatus={false}
    infiniteLoop
    autoPlay
  >
    {carouselImageArray.map((image, index) => (
      <div key={index}>
        <Image alt={image.alt} src={image.image} />
      </div>
    ))}
  </Carousel>
);

export default CarouselComponent;
