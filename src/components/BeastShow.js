import React, { useState } from 'react'
import ModalComponent from './ModalComponent'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from 'reactstrap'

const BeastShow = ({ beasts, deleteBeast }) => {
  const navigate = useNavigate()

  let { id } = useParams()

  // Confirms that the beast with the param id exists
  if (-1 === beasts.find((beast) => beast.id === +id)) { navigate('/notfound') }

  const [currentBeast, setCurrentBeast] = useState(beasts.find((beast) => beast.id === +id))
  const [activeIndex, setActiveIndex] = useState(beasts.findIndex((beast) => beast.id === +id))
  const [animating, setAnimating] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false) // Pending implementation of a modal to confirm delete

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === beasts.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
    setCurrentBeast(beasts[nextIndex])
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? beasts.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
    setCurrentBeast(beasts[nextIndex])
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
    setCurrentBeast(beasts[newIndex])
  }

  const mutateBeast = (e) => {
    navigate(`/beastedit/${beasts[activeIndex].id}`)
  }

  const eliminateBeast = () => {
    // setShowModal(true)

    deleteBeast(currentBeast.id)
    navigate('/beastindex')
  }

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
        <div className='showMutateButton'>
          <Button onClick={mutateBeast}>
            Mutate
          </Button>
          <Button onClick={eliminateBeast}>
            Eliminate
          </Button>
        </div>
      </div>
      {/* Conditional rendering of a ModalComponent - does not function/pending update */}
      {<ModalComponent
        beastName={currentBeast.name}
        showModal={showModal}
        setShowModal={setShowModal}
        setConfirmDelete={setConfirmDelete}
      /> && showModal}
    </>
  )
}

export default BeastShow