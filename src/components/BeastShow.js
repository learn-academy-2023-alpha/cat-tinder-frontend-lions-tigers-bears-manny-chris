import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'

const BeastShow = ({ beasts }) => {
  const navigate = useNavigate()

  // Check if beast is good ? use the beast : redirect to not found
  const { id } = useParams()
  let currentBeast = -1 === beasts.find((beast) => beast.id === +id) ? navigate('/notfound') : beasts.find((beast) => beast.id === +id)

  const [activeIndex, setActiveIndex] = useState(currentBeast.id - 1)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === beasts.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  };

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? beasts.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  };

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
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
          captionHeader={`${beast.name} (${beast.age})`}
        />
      </CarouselItem>
    )
  })

  return (
    <>
      <div className='content'>
        <h2>Meet your beast</h2>

        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          interval={false}
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

export default BeastShow