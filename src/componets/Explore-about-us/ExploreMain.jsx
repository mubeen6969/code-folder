import React from 'react'
import ExploreLeft from './ExploreLeft'
import ExploreRight from './ExploreRight'

const ExploreMain = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col lg:items-start items-center gap-[9vh] pr-10 justify-between   min-h-[90vh] mt-30 w-full px-6">
        <ExploreLeft/>
        <ExploreRight/>
      </div>
    </>
  )
}

export default ExploreMain
