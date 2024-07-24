import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import addbtn from '../../assets/img/community/plusbtn.png';
import Resent from './Resent';
import Like from './Like';
import Write from './Write';
import ex from '../../assets/img/community/ex1.png'; // 예시 이미지, 필요에 따라 다른 이미지로 교체

const Community = () => {
    const [activeTab, setActiveTab] = useState('resent');
    const [isDeclared, setIsDeclared] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleDeclareClick = () => {
        setIsDeclared(prev => !prev); // 상태 토글
    };

    // 예시 데이터
    const resentContents = [
        { id: 1, nickname: '닉네임1', time: '3분전', profileImg: ex, text: '최신글 내용', imgSrc: '', liked: false, count: 3 },
        // 더 많은 데이터 추가
    ];

    const likeContents = [
        { id: 1, nickname: '닉네임1', time: '1분전', profileImg: ex, text: '좋아요 내용', imgSrc: '', liked: false, count: 5 },
        // 더 많은 데이터 추가
    ];

    return (
        <div className='Community_wrap container'>
            <div className="header">
                <h1>커뮤니티</h1>
                <button></button>
            </div>
            <div className="nav">
                <ul>
                    <li className={activeTab === 'resent' ? 'on' : ''}>
                        <button className='resent' onClick={() => handleTabClick('resent')}>최신글</button>
                    </li>
                    <li className={activeTab === 'write' ? 'on' : ''}>
                        <button className='write' onClick={() => handleTabClick('write')}>내가 작성한 글</button>
                    </li>
                    <li className={activeTab === 'like' ? 'on' : ''}>
                        <button className='like' onClick={() => handleTabClick('like')}>좋아요</button>
                    </li>
                </ul>
            </div>
            <div className="line"></div>
            <div className="main">
                <div className={`resent ${activeTab === 'resent' ? '' : 'hide'}`}>
                    <Resent contents={resentContents} onDeclareClick={handleDeclareClick} />
                </div>
                <div className={`write ${activeTab === 'write' ? '' : 'hide'}`}>
                    <Write />
                </div>
                <div className={`like ${activeTab === 'like' ? '' : 'hide'}`}>
                    <Like contents={likeContents} onDeclareClick={handleDeclareClick} />
                </div>
            </div>
            <Link to ='/write' className='addbtn'>
                <img src={addbtn} alt="글쓰기 버튼" />
            </Link>
            <div className={`Community_wrap ${isDeclared ? 'declare' : 'hide'}`}>
                <button className='dec-btn'>신고하기</button>
                <button className='cancel' onClick={() => setIsDeclared(false)}>취소</button>
            </div>
        </div>
    );
};

export default Community;
