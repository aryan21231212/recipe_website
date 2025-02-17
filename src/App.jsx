import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main'
import Recipie from './components/Recipie';

const App = () => {
  
  return (
    <>
   <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/:mealid' element={<Recipie/>}/>
   </Routes>
    </>
  )
}

export default App