import React, { useState } from 'react';
import dots from '../../assets/img/community/dots.svg';
import trash from '../../assets/img/community/trash.svg';
import pencil from '../../assets/img/community/pencil.svg';
import ex from '../../assets/img/community/ex1.png';
import heart from '../../assets/img/community/heart-before.svg';
import fullheart from '../../assets/img/community/heart-after.svg';
import '../../assets/sass/section/_community.scss';

const Write = () => {
    const [contentList, setContentList] = useState([
        { id: 1, isDelete: false, text: "내가 쓴글", imgSrc: '' },
        { id: 2, isDelete: false, text: "내가 쓴글", imgSrc: '' }
    ]);

    const handleDeleteToggle = (id) => {
        setContentList(prevList => 
            prevList.map(content =>
                content.id === id ? { ...content, isDelete: !content.isDelete } : content
            )
        );
    };

    return (
        <div className='write-page'>
            {contentList.map(content => (
                <div className="contents" key={content.id}>
                    <div className="profil">
                        <div className="pro-img"><img src={ex} alt="프로필 사진" /></div>
                    </div>
                    <div className="content">
                        <div className='nickname'>
                            <h1>닉네임</h1>
                            <p className='day'>날짜</p>
                            <button className='category' onClick={() => handleDeleteToggle(content.id)}>
                                <img src={dots} alt="점점점" />
                            </button>
                        </div>
                        <div className={`${content.isDelete ? 'delete' : 'hide'}`} onClick={() => handleDeleteToggle(content.id)}>
                            <button className='delbtn'>게시물 삭제
                                <img src={trash} alt="아이콘" />
                            </button>
                            <button className='setbtn'>게시물 수정
                                <img src={pencil} alt="아이콘" />
                            </button>
                        </div>
                        <div className="text">
                            {content.text}
                        </div>
                        <div className="img">
                            <img src={content.imgSrc} alt="이미지" />
                        </div>
                        <div className="heart">
                            <img src={heart} alt="하트" />
                            <p className="count">
                                3
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Write;
