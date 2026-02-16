import { useState } from 'react'
import Home from './componets/home/home'
import Destinaton from './componets/Destination/Destinaton'
import ExploreMain from './componets/Explore-about-us/ExploreMain'
import Faqs from './componets/FAQS/Faqs'
import ClientNumbers from './componets/clientNumbers/ClientNumbers'
import VideoTour from './componets/video-tour/videoTour'
import Custmain from './componets/coustmers/Custmain'
import Lastpage from './componets/lastpage/Lastpage'


function App() {


  return (

    <div className='md:px- bg-[#F7F7F7]'>

      <Home />
      <Destinaton/>
      <ExploreMain />
      <Faqs/>
      <ClientNumbers/>
      <VideoTour/>
      <Custmain/>
      <Lastpage/>
    </div>
  )
}

export default App
