import React from 'react'
import Home from './pages/Home'
import Story from './pages/Story'
import Menu from './pages/Menu'
import Reserve from './pages/Reserve'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Story />
      <Menu />
      <Reserve />
      <Footer />
    </>
  )
}

export default App