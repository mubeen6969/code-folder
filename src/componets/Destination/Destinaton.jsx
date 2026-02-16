import React from 'react'
import DestinationText from './DestinationText'
import DestinationCards from './DestinationCards'


const Destinaton = () => {
  return (
    <div className='flex flex-col min-h-screen  w-full px-6  '>

        <DestinationText/>
        <DestinationCards/>
      
    </div>
  )
}

export default Destinaton
