import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button, Modal, ModalHeader, ModalBody, ModalFooter
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

  const toggle = () => {
    setShowModal(!showModal)
  }
  const cancel = () => {
    setConfirmDelete(false)
    toggle()
  }
  const confirm = () => {
    setConfirmDelete(true)
    deleteBeast(currentBeast.id)
    navigate('/beastindex')
    toggle()
  }

  const mutateBeast = (e) => {
    navigate(`/beastedit/${beasts[activeIndex].id}`)
  }

  const eliminateBeast = (e) => {
    setShowModal(true)
    console.log(showModal)
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
      <Modal className="modalContent" isOpen={showModal} toggle={toggle} backdrop="static" centered>
        <ModalHeader className="modalHeader" toggle={toggle}>
          {`Warning!!!`}
        </ModalHeader>
        <ModalBody className="modalBody">
          Are you sure you would like to delete {currentBeast.name}?
        </ModalBody>
        <ModalFooter>
          <Button onClick={confirm} color='success'>Confirm</Button>
          <Button onClick={cancel} color='danger'>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default BeastShow