import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UnderLogo from '../../assets/img/user/DreamCatcher.png'

const Login2 = () => {
  return (
    <div className='container login2'>
      <div className="wrap">
        <h1>로그인</h1>
        <form action="" method="post">
          <input className='info' type="text" placeholder='아이디' />
          <input className='info' type="password" placeholder='비밀번호' />
          <Link to='/' className='tofind'>비밀번호를 잊으셨나요?</Link>
          <div>
            <input className='loginbtn' type="submit" value="로그인" />
          </div>
        </form>
        <Link to='/signup' className='tosignup'>회원가입</Link>
      </div>
      <img className='underlogo' src={UnderLogo} alt="드림캐쳐" />
    </div>
  )
}

export default Login2
