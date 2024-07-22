import React from 'react'
import '../../../assets/sass/section/_user.scss'
import termimg from '../../../assets/img/user/term2.png' // Replace with actual image path

const Term2 = ({ onClose }) => {
  return (
    <div className='term-etc'>
      <button className="check" onClick={onClose}>확인</button>
      <h1>개인정보 수집 이용동의 (필수)</h1>
      <img src={termimg} alt="약관" />
    </div>
  )
}

export default Term2
