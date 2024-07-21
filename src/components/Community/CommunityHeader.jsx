import React from 'react'
import Bell from '../../assets/img/community/bell.svg'
import { useNavigate } from 'react-router-dom'

const CommunityHeader = ({tabclick, setTabClick}) => {
    const navigation = useNavigate();

    const Going = () => {
        navigation('/bell')
    }

    return (
        <div className="header">
            <div className='top'>
                <h2>커뮤니티</h2>
                <img src={Bell} alt="Bell" onClick={() => {Going()}}/>
            </div>
            <div className="tab">
                <p onClick={() => { setTabClick('new') }} className={tabclick === 'new' ? 'click' : ''}>최신글</p>
                <p onClick={() => { setTabClick('my') }} className={tabclick === 'my' ? 'click' : ''}>내가 작성한 글</p>
                <p onClick={() => { setTabClick('like') }} className={tabclick === 'like' ? 'click' : ''}>좋아요</p>
            </div>
        </div>
    )
}

export default CommunityHeader