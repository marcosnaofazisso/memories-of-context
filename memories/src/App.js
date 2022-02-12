import React from 'react'
import HarryPotter from './components/Memories/HarryPotter'
import SenhorDosAneis from './components/Rememberes/SenhorDosAneis'
import DistribuoPraTodoMundo from './components/Context/DistribuoPraTodoMundo'

function App() {
  return (
    <DistribuoPraTodoMundo>
      <div>
        <HarryPotter />
        <hr />
        <SenhorDosAneis />

      </div>
    </DistribuoPraTodoMundo>
  )
}

export default App
