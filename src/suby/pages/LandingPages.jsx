import React from 'react'
import TopBar from '../components/TopBar'
import ItemsDisplay from '../components/ItemsDisplay'
import Chains from '../components/Chains'
import FirmCollections from '../components/FirmCollections'

const LandingPages = () => {
  return (
    <div>
        <TopBar/>
        <div className="landingsection">
          <ItemsDisplay/>
          <Chains/>
          <FirmCollections/>
        </div>
    </div>
  )
}

export default LandingPages