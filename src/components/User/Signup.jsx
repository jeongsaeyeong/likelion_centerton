import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Back from '../../assets/img/user/back.svg'
import Terms from './Terms'
import axios from 'axios'

const Signup = () => {
    const URL = 'http://3.25.237.92:8000/'

    const [allterms, setAllterms] = useState(false)
    const [userid, setUserId] = useState('');
    const [sameOk, setSameOk] = useState(false)
    const [useridMsg, setUserIdMsg] = useState('')
    const [password, setPassword] = useState('');
    const [passwordre, setPasswordre] = useState('');
    const [passwordMsg, setPasswordMsg] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profile, setProfile] = useState([])

    const navigate = useNavigate();
    const Backbtn = () => {
        navigate(-1)
    }

    // 아이디 중복 체크
    const SameId = () => {
        if (userid === '') {
            alert('아이디를 채워주세요!')
            return;
        }

        axios.post(`${URL}check_user_id/`, {
            user_id: userid
        })
            .then((res) => {
                if (res.status === 200) {
                    setUserIdMsg('사용 가능한 아이디입니다.')
                    setSameOk(true)
                } else {
                    setUserIdMsg('사용이 불가한 아이디입니다.')
                    setSameOk(false)
                }
            })
    }

    // 비밀번호 중복 체크
    useEffect(() => {
        if (password !== passwordre) {
            setPasswordMsg('비밀번호가 일치하지 않습니다.')
        } else {
            setPasswordMsg('')
        }
    }, [password, passwordre])

    // 회원가입 
    const SubmitJoin = () => {
        if (!allterms) {
            alert('약관에 동의해주세요.')
            return;
        }

        if (!sameOk) {
            alert('아이디 중복검사 해주세요.')
            return;
        }

        if (userid !== '' && password !== '' && name !== '' && email !== '') {
            axios.post(`${URL}signup/`, {
                user_id: userid,
                username: name,
                password: password,
                email: email,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    console.log(res.status)
                    
                })

                .catch((err) => {
                    console.log(err)
                })
        } else {
            alert('빈칸을 모두 채워주세요!')
            return;
        }
    }

    useEffect(() => {
        console.log(profile)
    }, [profile])

    return (
        <div className='container signup'>
            <button className="back" onClick={() => { Backbtn() }}>
                <img src={Back} alt="Back" />
            </button>
            <h1>회원가입</h1>
            <div className="pro-img">
                <input type="file" id='profile' onChange={(e) => { setProfile(e.target.files[0]) }} />
                <label htmlFor='profile'></label>
            </div>

            <div className='info'>
                <div className="id">
                    <input type="text" placeholder='아이디' value={userid} onChange={(e) => setUserId(e.target.value)} />
                    <button type="button" onClick={() => { SameId() }}>중복 확인</button>
                </div>
                <p className={useridMsg === '사용 가능한 아이디입니다.' ? 'id_ok' : 'id_no'}>{useridMsg}</p>

                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='비밀번호' />
                <input value={passwordre} onChange={(e) => setPasswordre(e.target.value)} type="password" placeholder='비밀번호 확인' />
                <p className={passwordMsg === '비밀번호가 일치하지 않습니다.' ? 'id_no' : ''}>{passwordMsg}</p>

                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='이름' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='이메일' />

                <div className='submitbox'>
                    <button type="submit" className='signupbtn' onClick={() => { SubmitJoin() }}>가입하기</button>
                </div>
            </div>

            <Terms setAllterms={setAllterms} />

        </div>
    )
}

export default Signup;
