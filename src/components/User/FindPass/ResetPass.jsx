import React, { useEffect, useState } from 'react'
import Back from '../../../assets/img/user/back.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ResetPass = ({ setChange, setEmail, email }) => {
    const [password, setPassword] = useState('')
    const [passwordre, setPasswordre] = useState('')
    const [Msg, setMsg] = useState('')
    const [full, setFull] = useState(false)

    const navigation = useNavigate();

    useEffect(() => {
        if (password !== passwordre) {
            setMsg('비밀번호가 일치하지 않습니다.')
        } else {
            setMsg('')
        }

        if (password !== '' && passwordre !== '') {
            setFull(true)
        } else {
            setFull(false)
        }
    }, [password, passwordre])

    const ChangePass = () => {
        if (password === '' && passwordre === '') {
            alert('빈칸을 모두 채워주세요!')
            return;
        } else if (Msg !== '') {
            alert('비밀번호가 일치하지 않습니다.')
            return;
        }

        axios.post('http://3.25.237.92:8000/password-reset-confirm/', {
            email: email,
            new_password1: password,
            new_password2: passwordre
        })
            .then((res) => {
                if (res.status === 200) {
                    alert(res.data.message);
                    navigation('/login')
                }
            })
            .catch((err) => {
                console.log((err))
                alert('재설정 실패')
            })
    }

    return (
        <div>
            <button className="back" onClick={() => { setChange(false); setEmail('') }}>
                <img src={Back} alt="Back" />
            </button>
            <h2>새 비밀번호 입력</h2>
            <div className="main">
                <p>비밀번호</p>
                <input type='password' className='passwordinput' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='새 비밀번호 입력' />
                <input type='password' className='passwordinput' value={passwordre} onChange={(e) => { setPasswordre(e.target.value) }} placeholder='새 비밀번호 확인' />
                <p className="msg">{Msg}</p>
                <button onClick={() => { ChangePass() }} className={full ? 'full' : ''}>비밀번호 변경</button>
            </div>
            <p>
                Dream<br />
                Catcher
            </p>
        </div>
    )
}

export default ResetPass