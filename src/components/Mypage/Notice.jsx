import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/sass/section/_notice.scss'
import rightArrow from '../../assets/img/myPage/rightArrow.svg'

const Notice = () => {
  const navigate = useNavigate();

  const handleNotice1 = () => {
    navigate('/notice1');
  };
  const handleNotice2 = () => {
    navigate('/notice2');
  };
  return (
    <div className='container'>
      <div className='notice_container'>
        <div className='rightArrow'>
          <img src={rightArrow} />
        </div>
        <span>공지사항</span>
        <div className='noticeBoxes'>
          <div className='notice_box' onClick={handleNotice1}>
            <p>드림캐쳐 개인정보처리방침 개정 안내</p>
            <span>2024/06/30</span>
          </div>
          <div className='notice_box' onClick={handleNotice2}>
            <p>알림 관련 안내드립니다.</p>
            <span>2024/05/30</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notice