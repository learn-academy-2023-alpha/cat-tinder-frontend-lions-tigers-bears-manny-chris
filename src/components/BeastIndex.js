import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

const BeastIndex = ({ beasts }) => {
  const navigate = useNavigate()

  const attackBeast = (e) => {
    navigate(`/beastshow/${e.target.id}`)
  }

  return (
    <>
      <div className='content'>
        <h2>Meet your beast</h2>
        <div className='cardViewer'>
          {beasts.map((beast, index) => {
            console.log({ index: beast })
            return (
              <Card style={{ width: '18rem' }} key={index}>
                <img
                  alt={beast.name}
                  src={beast.image}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {beast.name}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    {beast.age}
                  </CardSubtitle>
                  <CardText>
                    {beast.description}
                  </CardText>
                  <Button onClick={attackBeast} id={beast.id}>
                    Attack
                  </Button>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default BeastIndex