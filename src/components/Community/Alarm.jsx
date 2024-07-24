import React from 'react'
import {useNavigate } from 'react-router-dom'
import Left from '../../assets/img/community/left.png';
import fullheart from '../../assets/img/community/heart-after.svg';
import ex from '../../assets/img/community/ex1.png';

const Alarm = () => {
    const navigate = useNavigate();  

    const handleGoBack = () => {
        navigate(-1); 
    };
    return (
        <div className='alarm-page container'>
            <div className="header">
                <button  className='alarm' onClick={handleGoBack}>
                    <img src={Left} alt="이전" />
                </button>
                <h1>알림</h1>

            </div>
            <div className="alarm">
                <div className="heart">
                    <img src={fullheart} alt="하트" />
                </div>
                <div className="user">
                    <img src={ex} alt="프로필사진" />
                    <h1><span className='username'>닉네임</span>님이 내 게시물을 좋아합니다.</h1>
                    <p className='text'>내가 쓴 글 텍스트</p>
                </div>
            </div>
            <div className="alarm">
                <div className="heart">
                    <img src={fullheart} alt="하트" />
                </div>
                <div className="user">
                    <div className="img">
                        <img src={ex} alt="프로필사진" />
                        <img src={ex} alt="프로필사진" />
                    </div>

                    <h1><span className='username'>닉네임</span>님과 <span className='username'>닉네임</span>님이 게시물을 좋아합니다.</h1>
                    <p className='text'>내가 쓴 글 텍스트</p>
                </div>
            </div>


        </div>
    )
}

export default Alarm
