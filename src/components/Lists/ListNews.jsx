import EmblaCarousel from "../ui/Carousel-embla/EmblaCarousel";

import "../../css/embla.css";

export function ListNews() {
  const OPTIONS = { containScroll: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <div className="container mt-[28px]">
        <h4 className="font-medium text-base mb-[15px]">Feed de novidades</h4>
      </div>

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
}
