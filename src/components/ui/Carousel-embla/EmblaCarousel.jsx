import React from "react";
import { DotButton, useDotButton } from "../Carousel-embla/EmblaCarouselDotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "../Carousel-embla/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="container">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide bg-[url('./bg-news.jpg')] bg-no-repeat bg-cover	bg-center" key={index}>
                <div className="embla__slide__number">{index + 1}</div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton key={index} onClick={() => onDotButtonClick(index)} className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")} />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EmblaCarousel;