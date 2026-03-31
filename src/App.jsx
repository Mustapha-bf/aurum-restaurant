import React from 'react'
import Home from './pages/Home'
import Story from './pages/Story'
import Menu from './pages/Menu'
import Experience from './pages/Experience'
import Reserve from './pages/Reserve'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Story />
      <Menu />
      <Experience />
      <Reserve />
    </>
  )
}

export default App