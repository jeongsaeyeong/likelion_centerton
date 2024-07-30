import React from 'react'
import Back from '../../assets/img/user/back.svg'
import { useNavigate } from 'react-router-dom';

const FindPass = () => {
    const navigate = useNavigate();
    const Backbtn = () => {
        navigate(-1)
    }

    return (
        <div className='FindPass_wrap container'>
            <button className="back" onClick={() => { Backbtn() }}>
                <img src={Back} alt="Back" />
            </button>
            <h2>비밀번호 변경하기</h2>
            <div className="main">
                <p>이메일</p>
                <input type="text" placeholder='회원가입 시 등록한 이메일 계정을 입력 해주세요.' />
                <button>비밀번호 초기화</button>
            </div>
        </div>
    )
}

export default FindPass