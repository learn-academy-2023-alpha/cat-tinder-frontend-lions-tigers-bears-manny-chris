import React from 'react'
import notFound from '../assets/404.jpeg'

const NotFound = () => {
  return (
      <div className='content'>
            <img alt='not found' src={notFound}/>
      </div>
  )
}

export default NotFound