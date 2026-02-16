import React from 'react'
import { RiCameraAiLine } from "react-icons/ri";
import { RiStairsLine } from "react-icons/ri";
import { RiTempHotLine } from "react-icons/ri";
import { RiMapPin2Line } from "react-icons/ri";
import { RiCalendar2Line } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { RiDownloadLine } from "react-icons/ri";





const hero = () => {
  return (
    <div className='h-[40vh] lg:h-[30vh] w-full flex flex-col lg:flex-row justify-between  px-6  mb-14 '>
      <div className=" w-full  lg:w-[40vw] flex flex-col items-center gap-9 justify-between  ">
        <h1 className='text-black  lg:text-white text-4xl font-bold capitalize tracking-widest [word-spacing:8px] leading-12 w-full'>uncover the world's <br /> naturals wonders.</h1>

        <div className="flex items-center justify-items-start gap-10  w-full text-white ">
          <p>300+ Iconics <br />Sports Included</p>
          <div className="icons flex items-center justify-between gap-3 ">
            <RiCameraAiLine className='text-4xl rounded-full bg-[#1C3C6F] p-2' />
            <RiStairsLine className='text-4xl rounded-full bg-[#1C3C6F] p-2' />
            <RiTempHotLine className='text-4xl rounded-full bg-[#1C3C6F] p-2' />
            <RiMapPin2Line className='text-4xl rounded-full bg-[#1C3C6F] p-2' />
          </div>
        </div>
      </div>



      <div className=" w-full  lg:w-[55vw] flex flex-col gap-8  justify-between ">

        <div className="lg:flex hidden items-center justify-between bg-[#FFFFFF] p-4 rounded-2xl h-25 font-normal text-black ">
          <div className="flex flex-col items-start gap-2.5">
            <p>Location</p>
            <p className='bg-gray-300 p-[2px_15px] flex items-center  gap-1 rounded-full font-thin'><RiMapPin2Line className='inline' />Pakistan</p>
          </div>
          <div className="flex flex-col items-start gap-2.5 ">
            <p>Date</p>
            <p className='bg-gray-300 p-[2px_15px] flex items-center gap-1 rounded-full '><RiCalendar2Line className='inline' />Sunday,11 JAN2026</p>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <p>Guest</p>
            <p className='bg-gray-300 p-[2px_15px] flex items-center gap-1 rounded-full'><RiUser3Line className='inline' />2 People <RiDownloadLine className='inline' /></p>
          </div>
          <div className="flex flex-col items-start justify-items-end ">
            <button className=' border mt-7.5 bg-[#131A29] text-white p-[5px_15px] rounded-full'>Book Schedule</button>
          </div>
        </div>

        <div className="">
          <p className='text-gray-300 font-thin [word-spacing:-2px] leading-5'>Discover nature finest places. breathtaking landscopes, untouched beauty. and nature at its <br />purest discover nature's finest places. breathing landscopes. untouched</p>
        </div>
      </div>
    </div>
  )
}

export default hero
