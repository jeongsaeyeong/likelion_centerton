import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import addbtn from '../../assets/img/community/plusbtn.png';
import Resent from './Resent';
import Like from './Like';
import Write from './Write';
import ex from '../../assets/img/community/ex1.png'; 
import alarm from '../../assets/img/community/alarm.png';

const Community = () => {
    const [activeTab, setActiveTab] = useState('resent');
    const [isDeclared, setIsDeclared] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleDeclareClick = () => {
        setIsDeclared(!isDeclared); 
    };

   

    return (
        <div className='Community_wrap container'>
            <div className="header">
                <h1>커뮤니티</h1>
                <Link to='/alarm' className='alarm'>
                    <img src={alarm} alt="알람" />
                </Link>
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
                    <Resent  onDeclareClick={handleDeclareClick} />
                </div>
                <div className={`write ${activeTab === 'write' ? '' : 'hide'}`}>
                    <Write />
                </div>
                <div className={`like ${activeTab === 'like' ? '' : 'hide'}`}>
                    <Like  onDeclareClick={handleDeclareClick} />
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
