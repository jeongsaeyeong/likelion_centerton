import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Section/Nav'
import Community from './components/Community/Community'
import List from './components/List/List'
import MyChracter from './components/MyChracter/MyChracter'
import Mypage from './components/Mypage/Mypage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Community />} />
                <Route path='/community' element={<Community />} />
                <Route path='/list' element={<List />} />
                <Route path='/mychracter' element={<MyChracter />} />
                <Route path='/mypage' element={<Mypage />} />
            </Routes>
            <Nav />
        </BrowserRouter>
    )
}

export default App