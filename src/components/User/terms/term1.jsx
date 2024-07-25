import React from 'react'
import '../../../assets/sass/section/_user.scss'
import termimg from '../../../assets/img/user/term1.png'

const Term1 = ({ onClose }) => {
  return (
    <div className='term-etc'>
      <button className="check" onClick={onClose}>확인</button>
      <h1>이용 약관 동의 (필수)</h1>
      <img src={termimg} alt="약관" />
    </div>
  )
}

export default Term1
