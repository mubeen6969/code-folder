import React from 'react'

const VideoSection = () => {
  return (
    <div className=' h-[80vh] w-[90vw]  overflow-hidden m-auto relative '>
      <video autoPlay loop muted className=' h-full w-full  object-cover rounded-4xl ' src="/websiteimages/tour-video.mp4"></video>
      <div className=" flex flex-col  items-end h-[20vh] w-full p-7 absolute z-2  text-black top-0 ">
        <h4 className='text-7xl'>95%</h4>
        <h3 className='capitalize'>guest say they felt turly  <br />connected to nature.</h3>
      </div>



    </div>
  )
}

export default VideoSection
