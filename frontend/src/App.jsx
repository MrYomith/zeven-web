import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedBackground from './components/animatedbackground'
import Noise from './components/Noise'
import Home from './pages/Home'
function App() {
  return (
    <>
      <AnimatedBackground />
      <Noise/>
      <Home/>
    </>
  )
}

export default App
