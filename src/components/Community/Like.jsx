import React, { useState } from 'react';
import alert from '../../assets/img/community/alert.svg';
import heart from '../../assets/img/community/heart-before.svg';
import fullheart from '../../assets/img/community/heart-after.svg';
import '../../assets/sass/section/_community.scss';
import ex from '../../assets/img/community/ex1.png'; 

const Like = ({  onDeclareClick }) => {
    const contents = [
        { id: 1, nickname: '닉네임1', time: '1분전', profileImg: ex, text: '좋아요 내용', imgSrc: '', liked: false, count: 5 },

    ];
  const [likeList, setLikeList] = useState(contents);

  const toggleLike = (id) => {
    setLikeList(prevList => 
      prevList.map(item =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  return (
    <div className='like-page'>
      {likeList.map(item => (
        <div className="contents" key={item.id}>
          <div className="profil">
            <div className="pro-img"><img src={item.profileImg} alt="프로필 사진" /></div>
          </div>
          <div className="content">
            <div className='nickname'>
              <h1>{item.nickname}</h1>
              <p className='time'>{item.time}</p>
              <button className='declarebtn' onClick={() => onDeclareClick(item.id)}>
                <img src={alert} alt="신고버튼" />
              </button>
            </div>
            <div className="text">
              {item.text}
            </div>
            <div className="img">
              <img src={item.imgSrc} alt="이미지" />
            </div>
            <div className="heart">
              <img src={item.liked ? fullheart : heart} alt="하트" onClick={() => toggleLike(item.id)} />
              <p className="count">
                {item.liked ? 4 : 3}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Like;
