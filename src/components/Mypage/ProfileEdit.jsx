import React, { useState } from 'react'
import rightArrow from '../../assets/img/myPage/rightArrow.svg'
import { useNavigate } from 'react-router-dom'

const ProfileEdit = () => {
    const [nick, setNick] = useState('해피해피캣')
    const navigation = useNavigate()

    const Back = () => {
        navigation(-1)
    }

    return (
        <div className='container ProfileEdit_wrap'>
            <div className="header">
                <button className='back' onClick={() => {Back()}}>
                    <img src={rightArrow} alt="" />
                </button>
                <h2>프로필 수정</h2>
                <button className='edit'>저장</button>
            </div>
            <div className="main">
                <input type="file" id='profile' />
                <label for='profile'></label>
                <input type="text" value={nick} onChange={(e) => { setNick(e.target.value) }} placeholder='닉네임' />
            </div>
        </div>
    )
}

export default ProfileEdit