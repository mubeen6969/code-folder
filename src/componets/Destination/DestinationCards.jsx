import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const cardData = [
  {
    image: '/code-folder/websiteimages/hero5.jpg',
    title: 'Sahara Dawn',
    price: '$55'
  },
  {
    image: '/code-folder/websiteimages/hero2.jpg',
    title: 'Mountains',
    price: '$60'
  },
  {
    image: '/code-folder/websiteimages/hero3.jpg',
    title: 'Nature',
    price: '$65'
  },
  {
    image: '/code-folder/websiteimages/hero1.jpg',
    title: 'Buildings',
    price: '$40'
  }
];
const DestinationCards = () => {
  return (
    <>
      <div className="flex justify-between gap-2 flex-wrap w-full mt-8  min-h-[60vh]   ">
        {cardData.map((card, index) => (
          <div className=' h-[60vh]  bg-cover bg-center w-70 rounded-3xl ' key={index} style={{ backgroundImage: `url(${card.image})` }}>
            <div className="flex flex-col  h-full p-6 justify-between">
              <button className='self-end'> <MdArrowOutward className='text-4xl text-black bg-white p-2 rounded-full ' /></button>
              <div className='sahara text-white'>
                <h3>{card.title}</h3>
                <p>{card.price}/Person</p></div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DestinationCards




