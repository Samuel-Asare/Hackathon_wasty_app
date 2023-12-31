import { useState } from "react";
import "../../css/Carousel_Testimonies.css";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

const items = [
  {
    word: "I've been using the CleanWaste system for a year now, and I couldn't be happier. The convenience of scheduling pickups, the reliability of the service, and the reduced environmental impact have made a significant difference in my household. I highly recommend CleanWaste to anyone looking for an efficient and eco-friendly waste management solution.",
    by: "John D. - Residential User",
    key: 1,
    imageSource: "Image 1 source: ....",
  },
  {
    word: "CleanWaste has been a game-changer for my small business. With their easy-to-use platform, I can request waste pickups for my restaurant without any hassle. The service is prompt, and the recycling options align perfectly with my commitment to sustainability. CleanWaste has become an essential partner in our daily operations.",
    by: "Sarah M. - Small Business Owner",
    key: 2,
    imageSource: "Image 2 source: .....",
  },
  {
    word: "Collaborating with CleanWaste has revolutionized our waste agency. Their system streamlines collections, offers real-time data, and enhances scheduling, resulting in improved operations and customer satisfaction. CleanWaste's environmental commitment and advanced tech demonstrate their dedication to waste management.",
    by: "David S. - Waste Agency Partner",
    key: 3,
    imageSource: "Image 3 source: .....",
  },
];

const Carousel_Testimonies = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="carousel_item"
      >
        <div className="testimonial-div">
          <figcaption className="text">
            <p className="quote">{`"${item.word}"`}</p>
            <cite className="by">~{item.by}</cite>
          </figcaption>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div className="carousel_wrapper">
      <div className="header">
        <h2>
          What Customers Are Saying<span>?</span>
        </h2>
      </div>
      <div className="content">
        <div className="carousel_div">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...args}
            className="carousel"
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
              className="carousel_dash_indicators"
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
              className="carousel_controls"
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
              className="carousel_controls"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Carousel_Testimonies;
