import React from 'react'

//  CONTEXTO SOBRE FILMES
import HarryPotter from './components/HarryPotter/HarryPotter'
import SenhorDosAneis from './components/SenhorDosAneis/SenhorDosAneis'
import DistribuoPraTodoMundo from './components/Context/DistribuoPraTodoMundo'
import Filme from './components/Filme/Filme'

//  CONTEXTO SOBRE TEMA
import ThemeProvider from './components/Context/Theme'
import Tema from './components/Tema/Tema'

function App() {
  return (
    <div>
      {/* FILMES */}
      <DistribuoPraTodoMundo>
        <Filme />
        <HarryPotter />
        <SenhorDosAneis />
      </DistribuoPraTodoMundo>

      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />


      {/* TEMA */}
      <ThemeProvider>
        <Tema />
      </ThemeProvider>

    </div>
  )
}

export default App
