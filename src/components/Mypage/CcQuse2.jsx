import React from 'react'
import '../../assets/sass/section/_noticeIn.scss'
import rightArrow from '../../assets/img/myPage/rightArrow.svg'

const cCQuse2 = () => {
  return (
    <div className='container'>
    <div className='noticeIn_container'>
      <div className='rightArrow'>
        <img src={rightArrow} />
      </div>
      <span className='textnoti'>커뮤니티</span>
      <p className='noTitle'>커뮤니티 글의 이미지가 안 보여요.</p>
      <div className='no_bar'></div>
      <div className='restP1'>
        <p >커뮤니티 글의 이미지가 안 보이는 문제는<br /></p>
        <p>휴대폰의 최신 업데이트가 되지 않은 경우 발생하는 문제입니다.  <br />
          <br />휴대폰 업데이트 후, 어플을 다시 한번 켜 보시기 바랍니다. <br /><br />
        </p>
      </div>

    </div>
  </div>
  )
}

export default cCQuse2
