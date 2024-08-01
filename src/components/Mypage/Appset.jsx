import React from 'react'
import rightArrow from '../../assets/img/myPage/rightArrow.svg'
import checkedBtn from '../../assets/img/myPage/checked.svg'
import uncheckedBtn from '../../assets/img/myPage/unchecked.svg'
import { useNavigate } from 'react-router-dom'

const Appset = () => {
    const navigation = useNavigate()

    const Back = () => {
        navigation(-1)
    }

    return (
        <div className="as_wrap container">
            <div className="header">
                <button className='rightArrow' onClick={() => { Back() }}>
                    <img src={rightArrow} />
                </button>
                <h2>앱 설정</h2>
            </div>
            <div className="main">
                <h3 className='noSet'>알림 설정</h3>
                <div className="push">
                    <h3>푸쉬 알림</h3>
                    <div>
                        <div>
                            <p>좋아요 알림</p>
                            <img src={checkedBtn} className='as_btn' />
                        </div>
                        <div>
                            <p>서비스 공지 및 안내 사항 알림</p>
                            <img src={uncheckedBtn} className='as_btn' />
                        </div>
                        <div>
                            <p>나의 캐릭터 행동 입력 안내 알림</p>
                            <img src={checkedBtn} className='as_btn' />
                        </div>
                    </div>
                </div>
                <div className="email">
                    <h3>이메일 알림</h3>
                    <div>
                        <div>
                            <p className='checkEmail'>이메일 알림</p>
                            <img src={checkedBtn} className='en_btn' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appset