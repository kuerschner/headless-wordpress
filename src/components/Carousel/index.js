import React, { useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from "reactstrap";
import Button from "../Button";
import "./styles.css";


export default ({ type, slides }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const items = slides.map(slide => (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={slide.carousel_image.url}
        >
            <div className="100vw" style={{ backgroundImage: `url(${slide.carousel_image.url})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh" }}>
                <div className="h-100 row d-flex justify-content-center align-items-center">
                    <div className="col-9 text-white carouselText text-center">
                        {slide.carousel_headline && <h1 className="text-white">{slide.carousel_headline}</h1>}
                        {slide.carousel_body && <p className="carouselSubheading mb-5">{slide.carousel_body}</p>}
                        {slide.carousel_cta_text && <a href={slide.carousel_cta_link}><Button>{slide.carousel_cta_text}</Button></a>}
                    </div>
                </div>
            </div>
        </CarouselItem>
    ))

    return (
        <div className={type === "fullScreen" ? "fullScreen" : "col-12"}>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {items}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}