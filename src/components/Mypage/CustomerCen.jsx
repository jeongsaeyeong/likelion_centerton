import React from 'react'
import { useNavigate } from 'react-router-dom';
import rightArrow from '../../assets/img/myPage/rightArrow.svg'
import '../../assets/sass/section/_customerCen.scss'
import searchImg from '../../assets/img/myPage/search.svg'
import qImg from '../../assets/img/myPage/Q.svg'
import ccLeft from '../../assets/img/myPage/ccLeftArrow.svg'

const CustomerCen = () => {
  const navigate = useNavigate();

  const handleccq1 = () => {
    navigate('/ccques1');
  };
  const handleccq2 = () => {
    navigate('/ccques2');
  };
  return (
    <div className='container'>
      <div className='cc_container'>
        <div className='cc_ra_img'>
          <img src={rightArrow} />
        </div>
        <span>고객센터</span>
        <p>해피해피캣님,<br/>
        무엇을 도와드릴까요?</p>
        <div className='searchBar'>
          <img src={searchImg} />
          <input type='text' />
        </div>
        <b>여기서 빠르게 해결하세요</b>
        <div className='solveBoxes'>
          <div className='solveBox' onClick={handleccq1}>
            <img src={qImg} className='qImg'/>
            <p>캐릭터 수정은 어디에서 하나요?</p>
            <img src={ccLeft} className='ccLeft' />
          </div>
          <div className='solveBox' onClick={handleccq2}>
            <img src={qImg} className='qImg'/>
            <p>커뮤니티 글의 이미지가 안 보여요.</p>
            <img src={ccLeft} className='ccLeft' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerCen
