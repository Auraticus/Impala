import { useState } from 'react'
import {react} from 'react'
//You had 2 Slider variables imported here and caused a clash in javascript causing the page to crash
import {Slider} from "react-slick";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import HomePage from './pages'
import LegendaryImpala from './pages/legendaryImpala'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/legendaryimpala" element={< LegendaryImpala />} />
        </Routes>
      </Router>
    </>
  )
}
 
export default App