import React from 'react'
import Memories from './components/Memories/Memories'
import Remembers from './components/Rememberes/Remembers'
import ContextProvider from './components/Context/ContextProvider'

function App() {
  return (
    <ContextProvider>
      <div>
        <Memories />
        <hr />
        <Remembers />

      </div>
    </ContextProvider>
  )
}

export default App
