import React from 'react'
import rightArrow from '../../assets/img/myPage/rightArrow.svg'
import '../../assets/sass/section/_editInfo.scss'

const Mypage = () => {
  return (
    <div className='container'>
      <div className='editinfo_container'>
        <div className='ei_ra_img'>
          <img src={rightArrow} />
        </div>
        <span>개인 정보 수정</span>
        <div className='ei_boxes'>
          <div className='ei_box ei_box_id'>
            아이디
            <input type="text" id="ei_id" />
          </div>
          <div className='ei_box ei_box_pw'>
            비밀번호
            <input type='password' id='ei_pw'></input>
          </div>
          <div className='ei_box ei_box_pwcheck'>
            비밀번호 확인
            <input type='password' id='ei_pwcheck'></input>
          </div>
          <div className='ei_box ei_box_name'>
            이름
            <input type="text" id="ei_name" />
          </div>
          <div className='ei_box ei_box_email'>
            이메일
            <input type="text" id="ei_email" />
          </div>
        </div>
      </div>
      <button type='button' className='editbtn'>회원 정보 수정</button>
    </div>
  )
}

export default Mypage