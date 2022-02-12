import React from 'react'
import HarryPotter from './components/HarryPotter/HarryPotter'
import SenhorDosAneis from './components/SenhorDosAneis/SenhorDosAneis'
import DistribuoPraTodoMundo from './components/Context/DistribuoPraTodoMundo'
import Filme from './components/Filme/Filme'

function App() {
  return (
    <DistribuoPraTodoMundo>
      <div>
        <Filme />
      </div>
      <div>
        <HarryPotter />
        <hr />
        <SenhorDosAneis />
      </div>
    </DistribuoPraTodoMundo>
  )
}

export default App
