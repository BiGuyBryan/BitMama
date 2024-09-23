import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/HomePage'
import SignupPage from './Pages/SignupPage'


function App() {

  return (
    <>

    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
    </Routes>
      
    </>
  )
}

export default App
