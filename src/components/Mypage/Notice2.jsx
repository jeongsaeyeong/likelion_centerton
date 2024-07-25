import React from 'react'
import '../../assets/sass/section/_noticeIn.scss'
import rightArrow from '../../assets/img/myPage/rightArrow.svg'

const Notice2 = () => {
  return (
    <div className='container'>
      <div className='noticeIn_container'>
        <div className='rightArrow'>
          <img src={rightArrow} />
        </div>
        <span className='textnoti'>공지사항</span>
        <p className='noTitle'>알림 관련 안내드립니다.</p>
        <span className='date'>2024/05/30</span>
        <div className='no_bar'></div>
        <div className='restP1'>
          <p >안녕하세요 드림캐쳐입니다.<br /><br /><br /></p>
          <p>
            최근 드림캐쳐 커뮤니티에 알림은 뜨나 실제 확인 시, 알림의 내용이 아무것도 확인되지 않으신다는
            장애 메일이 지속적으로 접수되고 있습니다. <br />
            <br /><br />
            이러한 분들의 경우 아래 사항에 해당되시는지 먼저 확인해 보시기 바랍니다.<br /><br /><br />
            드림캐쳐를 로그아웃 후 앱을 완전히 끄고 재로그인 해 보시기 바랍니다. <br /><br />
          </p>
        </div>

      </div>
    </div>
  )
}

export default Notice2