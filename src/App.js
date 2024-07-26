import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Section/Nav'
import Community from './components/Community/Community'
import List from './components/List/List'
import MyChracter from './components/MyChracter/MyChracter'
import Mypage from './components/Mypage/Mypage'
import CommWrite from './components/Community/CommWrite/CommWrite'
import Bell from './components/Community/Bell'
import Loading from './components/User/Loading'
import Login from './components/User/Login'
import Login2 from './components/User/Login2'
import Signup from './components/User/Signup'
import Success from './components/User/Success'
import ListAll from './components/List/ListAll'
import MyMemo from './components/MyChracter/MyMemo/MyMemo'
import ProfileEdit from './components/Mypage/ProfileEdit'
import EditInfo from './components/Mypage/EditInfo'
import Notice from './components/Mypage/Notice'
import NoticeContent from './components/Mypage/NoticeContent'
import Appset from './components/Mypage/Appset'
import CustomerCen from './components/Mypage/CustomerCen'

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
                <Route path='/communitywrite' element={<CommWrite />} />

                <Route path='/bell' element={<Bell />} />

                <Route path='/list' element={<List />} />
                <Route path='/listall' element={<ListAll />} />

                <Route path='/mychracter' element={<MyChracter />} />
                <Route path='/mymemo' element={<MyMemo />} />

                {/* 마이페이지 */}
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/profilemodify' element={<ProfileEdit />} />
                <Route path='/editinfo' element={<EditInfo />} />
                <Route path='/notice' element={<Notice />} />
                <Route path='/notice/:noticenum' element={<NoticeContent />} />
                <Route path='/appset' element={<Appset />} />
                <Route path='/customercen' element={<CustomerCen />} />

                {/* 로그인/로딩/회원가입 */}
                <Route path='/loading' element={<Loading />} />
                <Route path='/login2' element={<Login />} />
                <Route path='/login' element={<Login2 />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/signup/success/:username' element={<Success />} />
            </Routes>
            <Nav />
        </BrowserRouter>
    )
}

export default App