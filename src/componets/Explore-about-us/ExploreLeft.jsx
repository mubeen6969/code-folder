import React from 'react'
import { MdArrowOutward } from "react-icons/md";
const ExploreLeft = () => {
    return (
        <>

            <div className="flex flex-col justify-between h-[70vh] gap-4 w-full lg:w-[40vw]">
                <div><p className='test-black shadow-md p-[4px_8px] w-35 bg-gray-100 rounded-full font-medium tracking-wider  ' >Explore About Us</p></div>
                <div><h1 className='tracking-wider  '>Where Every Journey <br />Begins With You</h1></div>
                <div><h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempora, exercitationem esse quam eveniet iure optio quis </h3></div>
                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam quam dolore, ipsum consectetur ut beatae eum quos atque accusamus nam commodi optio officiis soluta tempora molestias rerum porro dolorem? At animi hic incidunt quidem veritatis, quisquam temporibus architecto maiores! Unde voluptatum totam recusandae maxime</p></div>
                <div className="flex items-center  gap-2 ">
                    <h3 className='test-black shadow-md p-[4px_8px] w-35 bg-gray-100 rounded-full'>Start Your Trip</h3>
                    <button className=''> <MdArrowOutward className='text-4xl text-white bg-black p-2 rounded-full' /></button>
                </div>
            </div>









        </>
    )
}

export default ExploreLeft
