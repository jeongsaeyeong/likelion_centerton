import React from 'react';
import alert from '../../assets/img/community/alert.svg';
import heart from '../../assets/img/community/heart-before.svg';
import fullheart from '../../assets/img/community/heart-after.svg';
import '../../assets/sass/section/_community.scss';

const Resent = ({ contents, onDeclareClick }) => {
    return (
        <>
            {contents.map(content => (
                <div key={content.id} className='resent-page'>
                    <div className="contents">
                        <div className="profil">
                            <div className="pro-img">
                                <img src={content.profileImg} alt="프로필 사진" />
                            </div>
                        </div>
                        <div className="content">
                            <div className='nickname'>
                                <h1>{content.nickname}</h1>
                                <p className='time'>{content.time}</p>
                                <button className='declarebtn' onClick={onDeclareClick}>
                                    <img src={alert} alt="신고버튼" />
                                </button>
                            </div>
                            <div className="text">
                                {content.text}
                            </div>
                            <div className="img">
                                <img src={content.imgSrc} alt="이미지" />
                            </div>
                            <div className="heart">
                                <img src={content.liked ? fullheart : heart} alt="하트" />
                                <p className="count">{content.count}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Resent;
