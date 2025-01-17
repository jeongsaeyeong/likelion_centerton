import React from 'react'
import { Link, useParams } from 'react-router-dom'
import UnderLogo from '../../assets/img/user/DreamCatcher.png'
import Logo from '../../assets/img/user/logo.png'

const Success = () => {
    const { username } = useParams();
    return (
        <div className='success container'>
            <div className="wrap">
                <img src={Logo} alt="로고" />
                <h1><span>{username}</span> 님
                    <br /> 가입을 축하합니다!
                </h1>
                <Link to='/login' className='gologin'>로그인 하러 가기</Link>
            </div>
            <img className='underlogo' src={UnderLogo} alt="드림캐쳐" />
        </div>
    )
}

export default Success
