import React, { useState } from 'react';
import WriteBtn from '../../assets/img/community/writebtn.svg';
import CommunityHeader from './CommunityHeader';
import CommunityNew from './CommunityNew';
import CommunityPop from './CommunityPop';
import CommunityMy from './CommunityMy';
import CommunityLike from './CommunityLike';
import { useNavigate } from 'react-router-dom';

const Community = () => {
    const [hartclick, setHartClick] = useState(false);
    const [tabclick, setTabClick] = useState('new');
    const [showDe, setShowDe] = useState(false);
    const [postId, setPostId] = useState(null);
    const navigate = useNavigate();

    const GoingWrite = () => {
        navigate('/communitywrite');
    };

    return (
        <div className='Community_wrap container'>
            <CommunityHeader tabclick={tabclick} setTabClick={setTabClick} />
            <div className="main">
                {tabclick === 'new' ? (
                    <CommunityNew setShowDe={setShowDe} setPostId={setPostId} setHartClick = {setHartClick} />
                ) : tabclick === 'my' ? (
                    <CommunityMy setShowDe={setShowDe} setPostId={setPostId} setHartClick = {setHartClick}/>
                ) : (
                    <CommunityLike setShowDe={setShowDe} setPostId={setPostId} setHartClick = {setHartClick} />
                )}
            </div>
            <button className="write_btn" onClick={GoingWrite}>
                <img src={WriteBtn} alt="WriteBtn" />
            </button>
            <CommunityPop showDe={showDe} setShowDe={setShowDe} postId={postId} />
        </div>
    );
};

export default Community;
