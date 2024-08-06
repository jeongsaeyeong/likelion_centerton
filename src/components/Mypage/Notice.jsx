import React from 'react'
import { useNavigate } from 'react-router-dom';
import rightArrow from '../../assets/img/myPage/rightArrow.svg'

const Notice = () => {
    const navigate = useNavigate();

    const handleNotice = (noticenum) => {
        navigate(`/notice/:${noticenum}`);
    };

    const Back = () => {
        navigate(-1)
    }

    return (
        <div className='container notice_wrap'>
            <div className="header">
                <button className='rightArrow' onClick={() => {Back()}}>
                    <img src={rightArrow} />
                </button>
                <h2>공지사항</h2>
            </div>
            <div className='noticeBoxes'>
                <div className='notice_box' onClick={() => handleNotice('1')}>
                    <p className='title'>드림캐쳐 개인정보처리방침 개정 안내</p>
                    <p className='day'>2024/06/30</p>
                </div>
                <div className='notice_box' >
                    <p className='title'>알림 관련 안내드립니다.</p>
                    <p className='day'>2024/05/30</p>
                </div>
            </div>
        </div>
    )
}

export default Notice