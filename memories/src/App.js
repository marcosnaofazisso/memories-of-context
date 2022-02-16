import React from 'react'

//  CONTEXTO SOBRE FILMES
import Filme from './components/Filme/Filme'
import HarryPotter from './components/HarryPotter/HarryPotter'
import SenhorDosAneis from './components/SenhorDosAneis/SenhorDosAneis'
import Titanic from './components/Titanic/Titanic'
import DistribuoPraTodoMundo from './components/Context/DistribuoPraTodoMundo'

//  CONTEXTO SOBRE TEMA
import ThemeProvider from './components/Context/Theme'
import Tema from './components/Tema/Tema'

function App() {
  return (
    <div>
      {/* FILMES */}
      <DistribuoPraTodoMundo>
        <Filme />
        <br />
        <HarryPotter />
        <br />
        <SenhorDosAneis />
        <br />
        <Titanic />
      </DistribuoPraTodoMundo>

      <br />
      <br />
      <hr />
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
