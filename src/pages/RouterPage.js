import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Detail from './detail/Detail'
import Result from './result/Result'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/result' element={<Result/>} />
            <Route path='/detail' element={<Detail/>} />
        </Routes>
     </Router>
  )
}
