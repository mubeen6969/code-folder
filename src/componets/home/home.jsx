import React from 'react'
import Navbar from './navbar'



const home = () => {
  return (
    <div
     className="h-screen bg-cover bg-center "
      style={{
        backgroundImage: "url('/websiteimages/t7-press-release-2.png')",
      }}
    >
      <Navbar/>

    </div>
  )
}

export default home
