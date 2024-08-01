<<<<<<< HEAD
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
=======
import React, { useState } from 'react'
import WriteBtn from '../../assets/img/community/writebtn.svg'
import CommunityHeader from './CommunityHeader'
import CommunityNew from './CommunityNew'
import CommunityPop from './CommunityPop'
import CommunityMy from './CommunityMy'
import CommunityLike from './CommunityLike'
import { useNavigate } from 'react-router-dom'

const Community = () => {
    const [hartclick, setHartClick] = useState(false);
    const [tabclick, setTabClick] = useState('new');
    const [showDe, setShowDe] = useState(false)
    const navigation = useNavigate();

    const GoingWrite = () => {
        navigation('/communitywrite')
    }

    return (
        <div className='Community_wrap container'>
            <CommunityHeader tabclick={tabclick} setTabClick={setTabClick} />
            <div className="main">
                {tabclick === 'new' ? (
                    <CommunityNew hartclick={hartclick} setHartClick={setHartClick} setShowDe={setShowDe} />
                ) : (
                    <>
                        {tabclick === 'my' ? (
                            <CommunityMy hartclick={hartclick} setHartClick={setHartClick} setShowDe={setShowDe} />

                        ) : (
                            <CommunityLike hartclick={hartclick} setHartClick={setHartClick} setShowDe={setShowDe} />
                        )}
                    </>
                )}
            </div>
            <button className="write_btn">
                <img src={WriteBtn} alt="WriteBtn" onClick={() => {GoingWrite()}}/>
            </button>

            <CommunityPop showDe={showDe} setShowDe={setShowDe} />
>>>>>>> a3ee1af2a8b25492a78f9e388b76cdb33f7e84e7
        </div>
    );
};

export default Community;
