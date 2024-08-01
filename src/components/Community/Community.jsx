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
        </div>
    );
};

export default Community;
