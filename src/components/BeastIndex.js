import React, {useState} from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';


const BeastIndex = ({beasts}) => {
  console.log(beasts)
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === beasts.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? beasts.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = beasts?.map((beast) => {
    
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={beast.id}
      >
        <img src={beast.image} alt={beast.name} />
        <CarouselCaption
          captionText={beast.description}
          captionHeader={beast.name}
        />
      </CarouselItem>
    );
  });

  return (
   <>
    <div className='content'>
      <h2>Meet your beast</h2>
     {slides}
      <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false}
      {...beasts}
    >
      <CarouselIndicators
        items={beasts}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>

    </div>
    </>
  )
}

export default BeastIndex