import React, { useState } from 'react'
import UnderLogo from '../../assets/img/user/DreamCatcher.png'
import Pro from '../../assets/img/user/profil.png'
import camera from '../../assets/img/user/camera.png'
import left from '../../assets/img/user/left-allow.png'
import Term1 from './terms/term1'
import Term2 from './terms/term2'
import Term3 from './terms/term3'

const Signup = () => {
  const [showTerm1, setShowTerm1] = useState(false);
  const [showTerm2, setShowTerm2] = useState(false);
  const [showTerm3, setShowTerm3] = useState(false);
  const [term1Checked, setTerm1Checked] = useState(false);
  const [term2Checked, setTerm2Checked] = useState(false);
  const [term3Checked, setTerm3Checked] = useState(false);
  const [allTermsChecked, setAllTermsChecked] = useState(false);

  const handleShowTerm1 = () => {
    setShowTerm1(!showTerm1);
  };

  const handleShowTerm2 = () => {
    setShowTerm2(!showTerm2);
  };

  const handleShowTerm3 = () => {
    setShowTerm3(!showTerm3);
  };

  const handleAllTermsChange = (e) => {
    const checked = e.target.checked;
    setAllTermsChecked(checked);
    setTerm1Checked(checked);
    setTerm2Checked(checked);
    setTerm3Checked(checked);
  };

  const handleTerm1Change = (e) => {
    setTerm1Checked(e.target.checked);
    if (!e.target.checked) {
      setAllTermsChecked(false);
    }
  };

  const handleTerm2Change = (e) => {
    setTerm2Checked(e.target.checked);
    if (!e.target.checked) {
      setAllTermsChecked(false);
    }
  };

  const handleTerm3Change = (e) => {
    setTerm3Checked(e.target.checked);
    if (!e.target.checked) {
      setAllTermsChecked(false);
    }
  };

  return (
    <div className='container signup'>
      <h1>회원가입</h1>
      <div className="pro-img">
        <img src={Pro} alt="프로필사진" />

        <button className='addimg'>
          <img src={camera} alt="camera" className='camera' />
        </button>
      </div>

      <form className='info' method="post">
        <div className="id">
          <input type="text" placeholder='아이디' />
          <button>중복 확인</button>
        </div>

        <input type="password" placeholder='비밀번호' />
        <input type="password" placeholder='비밀번호 확인' />
        <input type="text" placeholder='이름' />
        <input type="email" placeholder='이메일' />
      </form>

      <div className="terms">
        <div>
          <input
            type="checkbox"
            name="allTerms"
            id="1"
            checked={allTermsChecked}
            onChange={handleAllTermsChange}
          />
          <label htmlFor="1" className="custom-checkbox"></label>
          <label htmlFor="1">약관 전체 동의</label>
        </div>
        <div className="line"></div>
        <div className='inner'>
          <input
            type="checkbox"
            name="term1"
            id="2"
            checked={term1Checked}
            onChange={handleTerm1Change}
          />
          <label htmlFor="2" className="custom-checkbox"></label>
          <label htmlFor="2">이용 약관 동의 <span className='red'>(필수)</span></label>
          <button onClick={handleShowTerm1}><img src={left} alt="상세페이지" className='term-info' /></button>
        </div>
        
        <div className='inner'>
          <input
            type="checkbox"
            name="term2"
            id="3"
            checked={term2Checked}
            onChange={handleTerm2Change}
          />
          <label htmlFor="3" className="custom-checkbox"></label>
          <label htmlFor="3">개인정보 수집 이용동의 <span className='red'>(필수)</span></label>
          <button onClick={handleShowTerm2}><img src={left} alt="상세페이지" className='term-info' /></button>
        </div>
        
        <div className='inner'>
          <input
            type="checkbox"
            name="term3"
            id="4"
            checked={term3Checked}
            onChange={handleTerm3Change}
          />
          <label htmlFor="4" className="custom-checkbox"></label>
          <label htmlFor="4">마케팅 정보 수신 동의 <span className='gray'>(선택)</span></label>
          <button onClick={handleShowTerm3}><img src={left} alt="상세페이지" className='term-info' /></button>
        </div>
      </div>

      <div className={showTerm1 ? 'etc' : 'hide'}><Term1 onClose={handleShowTerm1} /></div>
      <div className={showTerm2 ? 'etc' : 'hide'}><Term2 onClose={handleShowTerm2} /></div>
      <div className={showTerm3 ? 'etc' : 'hide'}><Term3 onClose={handleShowTerm3} /></div>
      <button className='signupbtn'>가입하기</button>
      <img className='underlogo' src={UnderLogo} alt="드림캐쳐" />
    </div>
  )
}

export default Signup
