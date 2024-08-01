<<<<<<< HEAD
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/signup/success/${username}`);
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

      <form className='info' method="post" onSubmit={handleSubmit}>
        <div className="id">
          <input
            type="text"
            placeholder='아이디'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="button">중복 확인</button>
        </div>

        <input type="password" placeholder='비밀번호' />
        <input type="password" placeholder='비밀번호 확인' />
        <input type="text" placeholder='이름' />
        <input type="email" placeholder='이메일' />
        <button type="submit" className='signupbtn'>가입하기</button>
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
          <button type="button" onClick={handleShowTerm1}><img src={left} alt="상세페이지" className='term-info' /></button>
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
          <button type="button" onClick={handleShowTerm2}><img src={left} alt="상세페이지" className='term-info' /></button>
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
          <button type="button" onClick={handleShowTerm3}><img src={left} alt="상세페이지" className='term-info' /></button>
        </div>
      </div>

      <div className={showTerm1 ? 'etc' : 'hide'}><Term1 onClose={handleShowTerm1} /></div>
      <div className={showTerm2 ? 'etc' : 'hide'}><Term2 onClose={handleShowTerm2} /></div>
      <div className={showTerm3 ? 'etc' : 'hide'}><Term3 onClose={handleShowTerm3} /></div>
      
      <img className='underlogo' src={UnderLogo} alt="드림캐쳐" />
    </div>
  )
=======
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Back from '../../assets/img/user/back.svg'
import Terms from './Terms'
import axios from 'axios'

const Signup = () => {
    const URL = 'http://3.25.237.92:8000/'

    const [allterms, setAllterms] = useState(false)
    const [userid, setUserId] = useState('');
    const [sameOk, setSameOk] = useState(false)
    const [useridMsg, setUserIdMsg] = useState('')
    const [password, setPassword] = useState('');
    const [passwordre, setPasswordre] = useState('');
    const [passwordMsg, setPasswordMsg] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profile, setProfile] = useState([])

    const navigate = useNavigate();
    const Backbtn = () => {
        navigate(-1)
    }

    // 아이디 중복 체크
    const SameId = () => {
        if (userid === '') {
            alert('아이디를 채워주세요!')
            return;
        }

        axios.post(`${URL}check_user_id/`, {
            user_id: userid
        })
            .then((res) => {
                if (res.status === 200) {
                    setUserIdMsg('사용 가능한 아이디입니다.')
                    setSameOk(true)
                } else {
                    setUserIdMsg('사용이 불가한 아이디입니다.')
                    setSameOk(false)
                }
            })
    }

    // 비밀번호 중복 체크
    useEffect(() => {
        if (password !== passwordre) {
            setPasswordMsg('비밀번호가 일치하지 않습니다.')
        } else {
            setPasswordMsg('')
        }
    }, [password, passwordre])

    // 회원가입 
    const SubmitJoin = () => {
        if (!allterms) {
            alert('약관에 동의해주세요.')
            return;
        }

        if (!sameOk) {
            alert('아이디 중복검사 해주세요.')
            return;
        }

        if (userid !== '' && password !== '' && name !== '' && email !== '') {
            axios.post(`${URL}signup/`, {
                user_id: userid,
                username: name,
                password: password,
                email: email,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    console.log(res.status)
                    
                })

                .catch((err) => {
                    console.log(err)
                })
        } else {
            alert('빈칸을 모두 채워주세요!')
            return;
        }
    }

    useEffect(() => {
        console.log(profile)
    }, [profile])

    return (
        <div className='container signup'>
            <button className="back" onClick={() => { Backbtn() }}>
                <img src={Back} alt="Back" />
            </button>
            <h1>회원가입</h1>
            <div className="pro-img">
                <input type="file" id='profile' onChange={(e) => { setProfile(e.target.files[0]) }} />
                <label htmlFor='profile'></label>
            </div>

            <div className='info'>
                <div className="id">
                    <input type="text" placeholder='아이디' value={userid} onChange={(e) => setUserId(e.target.value)} />
                    <button type="button" onClick={() => { SameId() }}>중복 확인</button>
                </div>
                <p className={useridMsg === '사용 가능한 아이디입니다.' ? 'id_ok' : 'id_no'}>{useridMsg}</p>

                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='비밀번호' />
                <input value={passwordre} onChange={(e) => setPasswordre(e.target.value)} type="password" placeholder='비밀번호 확인' />
                <p className={passwordMsg === '비밀번호가 일치하지 않습니다.' ? 'id_no' : ''}>{passwordMsg}</p>

                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='이름' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='이메일' />

                <div className='submitbox'>
                    <button type="submit" className='signupbtn' onClick={() => { SubmitJoin() }}>가입하기</button>
                </div>
            </div>

            <Terms setAllterms={setAllterms} />

        </div>
    )
>>>>>>> a3ee1af2a8b25492a78f9e388b76cdb33f7e84e7
}

export default Signup;
