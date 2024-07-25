import React from 'react'
import '../../assets/sass/section/_noticeIn.scss'
import rightArrow from '../../assets/img/myPage/rightArrow.svg'

const Notice1 = () => {
  return (
    <div className='container'>
      <div className='noticeIn_container'>
        <div className='rightArrow'>
          <img src={rightArrow} />
        </div>
        <span className='textnoti'>공지사항</span>
        <p className='noTitle'>드림캐쳐 개인정보처리방침 개정 안내</p>
        <span className='date'>2024/06/30</span>
        <div className='no_bar'></div>
        <div className='restP1'>
          <p >안녕하세요 드림캐쳐입니다.<br /><br /><br /></p>
          <p>
            드림캐쳐 개인정보처리방침이 아래와 같이 변경됨에 따라 변경내역을 공지하오니 참고 바랍니다.<br />
            <br /><br />
            <b>개정 일자 :</b> 2024-6-28 부터<br /><br />
            <b>개정 사유 :</b> 개인정보의 제 3자 제공, 개인정보처리의 위탁, 처리하는 개인정보의 항목, 권익침해 구제 방법 등에 관한 사항 내용 삭제·추가 및 변경에 따른 개인정보 처리방침 개정<br /><br />
            <b>개인정보 처리방침 버전 :</b> V9.5 → V9.6
          </p>
        </div>

      </div>
    </div>
  )
}

export default Notice1