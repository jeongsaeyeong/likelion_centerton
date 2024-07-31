import React, { useEffect, useState } from 'react'
import Back from '../../../assets/img/user/back.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InputEmail = ({ email, setEmail, setChange }) => {
    const navigate = useNavigate();
    const [full, setFull] = useState(false)
    const [Msg, setMsg] = useState('')

    const Backbtn = () => {
        navigate(-1)
    }

    const SendEmail = () => {
        if (email === '') {
            alert('이메일을 채워주세요!')
            return;
        }

        axios.post('http://3.25.237.92:8000/password-reset-request/', {
            email: email
        })
            .then((res) => {
                if (res.status === 200) {
                    setChange(true)
                }
            })
            .catch((err) => {
                console.log(err)
                setMsg('존재하지 않는 이메일입니다.')
            })

    }

    useEffect(() => {
        if (email !== '') {
            setFull(true)
        } else {
            setFull(false)
        }
    }, [email])

    return (
        <div>
            <button className="back" onClick={() => { Backbtn() }}>
                <img src={Back} alt="Back" />
            </button>
            <h2>비밀번호 변경하기</h2>
            <div className="main">
                <p>이메일</p>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder='회원가입 시 등록한 이메일 계정을 입력 해주세요.' />
                <p className="msg">{Msg}</p>
                <button onClick={() => { SendEmail() }} className={full ? 'full' : ''}>비밀번호 초기화</button>
            </div>
            <p>
                Dream<br />
                Catcher
            </p>
        </div>
    )
}

export default InputEmail