import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UnderLogo from '../../assets/img/user/DreamCatcher.png'
import axios from 'axios'

const Login2 = () => {
    const [userid, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const [full, setFull] = useState(false)
    const navigate = useNavigate()

    const LoginSubmit = () => {
        axios.post('http://3.25.237.92:8000/login/', {
            user_id: userid,
            password: password
        })
            .then((res) => {
                if (res.status == 200) {
                    const accessToken = res.data.access;
                    localStorage.setItem('accessToken', accessToken)
                    navigate('/')
                } 
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (userid !== '' && password !== ''){
            setFull(true)
        } else {
            setFull(false)
        }
    }, [userid, password])

    return (
        <div className='container login2'>
            <div className="wrap">
                <h1>로그인</h1>
                <div method="post" className='form'>
                    <input value={userid} onChange={(e) => { setUserId(e.target.value) }} className='info' type="text" placeholder='아이디' />
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='info' type="password" placeholder='비밀번호' />
                    <Link to='/findpass' className='tofind'>비밀번호를 잊으셨나요?</Link>
                    <div onClick={() => { LoginSubmit() }}>
                        <button className={full ? 'loginbtn' : 'loginbtnbin'}>로그인</button>
                    </div>
                </div>
                <Link to='/signup' className='tosignup'>회원가입</Link>
            </div>
            <img className='underlogo' src={UnderLogo} alt="드림캐쳐" />
        </div>
    )
}

export default Login2
