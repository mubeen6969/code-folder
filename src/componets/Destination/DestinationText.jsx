import React from 'react'
import { MdArrowOutward } from "react-icons/md";


const DestinationText = () => {
  return (
    <>
      <div className="mt-10  ">
        <p className='test-black shadow-md p-[4px_8px] w-35 bg-gray-100 rounded-full font-medium mb-10   ' >Our Destination</p>
        <div className="flex flex-wrap gap-[30px] items-center justify-between ">
          <h1>Your journey to the perfect <br /> Destination Bedins Here</h1>
          <div className="flex items-center  gap-2 ">
            <h3 className='test-black shadow-md p-[4px_8px] w-45 bg-gray-100 rounded-full'>See All Destination</h3>
            <button className=''> <MdArrowOutward className='text-4xl text-white bg-black p-2 rounded-full' /></button>
          </div>
        </div>
      </div>

      {/*    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti iure aperiam similique, tempora laudantium suscipit quae perferendis corporis commodi, labore atque quod ipsa voluptate. Nemo.</h1>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti iure aperiam similique, tempora laudantium suscipit quae perferendis corporis commodi, labore atque quod ipsa voluptate. Nemo.</h2>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti iure aperiam similique, tempora laudantium suscipit quae perferendis corporis commodi, labore atque quod ipsa voluptate. Nemo.</h3>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti iure aperiam similique, tempora laudantium suscipit quae perferendis corporis commodi, labore atque quod ipsa voluptate. Nemo.</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti iure aperiam similique, tempora laudantium suscipit quae perferendis corporis commodi, labore atque quod ipsa voluptate. Nemo.</p> */}
    </>
  )
}

export default DestinationText
