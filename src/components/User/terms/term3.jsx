import React from 'react'
import '../../../assets/sass/section/_user.scss'
import termimg from '../../../assets/img/user/term3.png' // Replace with actual image path

const Term3 = ({ onClose }) => {
  return (
    <div className='term-etc'>
      <button className="check" onClick={onClose}>확인</button>
      <h1>마케팅 정보 수신 동의 (선택)</h1>
      <img src={termimg} alt="약관" />
    </div>
  )
}

export default Term3
