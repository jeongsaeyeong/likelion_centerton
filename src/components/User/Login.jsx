import React from 'react'
import Logo from '../../assets/img/user/logo.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container login1'>
      <div className="wrap">
        <img src={Logo} alt="로고" />
        <h1>로그인을 해주세요!</h1>
        <Link to='/login2' className='tologin'>
          로그인/회원가입 하기</Link>
      </div>

    </div>
  )
}

export default Login
