import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Section/Nav'
import Community from './components/Community/Community'
import List from './components/List/List'
import MyChracter from './components/MyChracter/MyChracter'
import Mypage from './components/Mypage/Mypage'
import CommWrite from './components/Community/CommWrite/CommWrite'
import Bell from './components/Community/Bell'
import Loading from './components/User/Loading'
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
import axios from 'axios'
import FindPass from './components/User/FindPass/FindPass'
import ResetOk from './components/User/FindPass/ResetOk'
import Ending from './components/MyChracter/Ending/Ending'
import CommSet from './components/Community/CommWrite/CommSet'
import CommunityDetail from './components/Community/CommunityDetail'
import CusCenContent from './components/Mypage/CusCenContent'

const App = () => {
    const [accessToken, setAccessToken] = useState('')
    const [login, setLogin] = useState(false)
    const [loding, setLoding] = useState(false)

    useEffect(() => {
        setAccessToken(localStorage.getItem('accessToken'));
    })

    useEffect(() => {
        if (accessToken) {
            axios.get('http://3.25.237.92:8000/user/', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
                .then((res) => {
                    if (res.status === 200) {
                        setLogin(true)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            setLogin(false)
        }
    }, [accessToken])

    return (
        <BrowserRouter>
            {loding ? (
                <>
                    <Routes>
                        <Route path='/' element={<Community />} />
                        <Route path='/community' element={<Community />} />
                        <Route path='/communitywrite' element={<CommWrite />} />
                        <Route path='/communityset/:postId' element={<CommSet />} />
                        <Route path='/communitypost/:postId' element={<CommunityDetail />} />
                        <Route path='/bell' element={<Bell />} />

                        <Route path='/list' element={<List />} />
                        <Route path='/listall' element={<ListAll />} />

                        <Route path='/mychracter' element={<MyChracter />} />
                        <Route path='/ending' element={<Ending />} />
                        <Route path='/mymemo' element={<MyMemo />} />

                        {/* 마이페이지 */}
                        <Route path='/mypage' element={<Mypage accessToken={accessToken}/>} />
                        <Route path='/profilemodify' element={<ProfileEdit/>} />
                        <Route path='/editinfo' element={<EditInfo/>} />
                        <Route path='/notice' element={<Notice />} />
                        <Route path='/notice/:noticenum' element={<NoticeContent />} />
                        <Route path='/appset' element={<Appset />} />
                        <Route path='/customercen' element={<CustomerCen/>} />
                        <Route path='/customercen/:cuscennum' element={<CusCenContent />} />

                        {/* 로그인/로딩/회원가입 */}
                        <Route path='/loading' element={<Loading />} />
                        <Route path='/login' element={<Login2 />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/signup/success/:username' element={<Success />} />
                        <Route path='/signup/success' element={<Success />} />
                        <Route path='/findpass' element={<FindPass />} />
                        <Route path='/resetok' element={<ResetOk />} />
                    </Routes>
                    <Nav />
                </>
            ) : (
                <Loading setLoding={setLoding} login={login} />
            )}
        </BrowserRouter>
    )
}

export default App