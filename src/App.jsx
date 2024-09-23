import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/HomePage'

function App() {

  return (
    <>

    <Routes>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
      
    </>
  )
}

export default App
