import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Registration from './pages/Registration'
import Signin from './pages/Signin'
import Dsahbord from './pages/Dsahbord'
import Home from './pages/Home'

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/Registration" element={<Registration/>}/>
   <Route path="/Signin" element={<Signin/>}/>
   <Route path="/Dsahbord" element={<Dsahbord/>}/>
   </Routes>
   </BrowserRouter>
  )
}
