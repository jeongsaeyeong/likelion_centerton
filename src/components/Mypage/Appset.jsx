import React from 'react'
import '../../assets/sass/section/_appset.scss'
import rightArrow from '../../assets/img/myPage/rightArrow.svg'
import checkedBtn from '../../assets/img/myPage/checked.svg'
import uncheckedBtn from '../../assets/img/myPage/unchecked.svg'


const Appset = () => {
  return (
    <div className="container">
      <div className='as_container'>
        <div className='rightArrow'>
          <img src={rightArrow} />
        </div>
        <span>앱 설정</span>
        <p className='noSet'>알림 설정</p>
        <div className='pushNotify'>
          <span>푸시 알림</span>
        </div>

        <div className='as_list'>
          <div className='textList'>
            <p>좋아요 알림</p>
            <p>서비스 공지 및 안내 사항 알림</p>
            <p>나의 캐릭터 행동 입력 안내 알림 </p>
          </div>

          <div className='btnList'>
            <img src={checkedBtn} className='as_btn' />
            <img src={uncheckedBtn} className='as_btn' />
            <img src={checkedBtn} className='as_btn' />
          </div>
        </div>

        <div className='emailNotify'>
          <p>이메일 알림</p>
        </div>
        <p className='checkEmail'>이메일 알림</p>
        <img src={checkedBtn} className='en_btn' />
      </div>
    </div>
  )
}

export default Appset