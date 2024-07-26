import React, { useState } from 'react'
import rightArrow from '../../assets/img/myPage/rightArrow.svg'
import { useNavigate } from 'react-router-dom';

const EditInfo = () => {
    const [userId, setUserId] = useState('text');
    const [password, setPassword] = useState('123456789');
    const [passwordre, setPasswordre] = useState('123456789');
    const [name, setName] = useState('김익명');
    const [email, setEmail] = useState('test@naver.com');
    const navigation = useNavigate()

    const Back = () => {
        navigation(-1)
    }

    return (
        <div className='EditInfo_wrap container'>
            <button className="back" onClick={() => {Back()}}>
                <img src={rightArrow} alt="rightArrow" />
            </button>
            <h2>개인 정보 수정</h2>
            <div className="main">
                <div>
                    <p className="kind">아이디</p>
                    <input type="text" value={userId} onChange={(e) => { setUserId(e.target.value) }} placeholder='아이디' />
                </div>
                <div>
                    <p className="kind">비밀번호</p>
                    <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='비밀번호' />
                </div>
                <div>
                    <p className="kind">비밀번호 확인</p>
                    <input type="text" value={passwordre} onChange={(e) => { setPasswordre(e.target.value) }} placeholder='비밀번호 재입력' />
                </div>
                <div>
                    <p className="kind">이름</p>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='이름' />
                </div>
                <div>
                    <p className="kind">이메일</p>
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='이메일' />
                </div>
            </div>
            <button className="submit">
                <p>회원정보 수정</p>
            </button>
        </div>
    )
}

export default EditInfo