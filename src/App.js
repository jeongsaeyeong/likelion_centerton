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
                {/* 
                    해당 위치에서 Router을 관리합니다.
                    각자 맡은 부분에서 자유롭게 params를 추가하거나 페이지를 추가해 사용해주세요.
                */}
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