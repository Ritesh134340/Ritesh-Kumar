import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import AddData from '../pages/AddData'
import Search from '../pages/Search'

const AllRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add/data" element={<AddData/>}/>
        <Route path="/search" element={<Search/>}/>
    </Routes>
  )
}

export default AllRoute