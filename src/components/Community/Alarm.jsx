import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Left from '../../assets/img/community/left.png';
import fullheart from '../../assets/img/community/heart-after.svg';
import ex from '../../assets/img/community/ex1.png';
import axios from 'axios';  

const Alarm = () => {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://dreamcatcherrr.store/notifications/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    setNotifications(res.data); 
                    console.log(res);
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false); 
            });
    }, []);

    const handleGoBack = () => {
        navigate(-1);
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }

    return (
        <div className='alarm-page container'>
            <div className="header">
                <button className='alarm' onClick={handleGoBack}>
                    <img src={Left} alt="이전" />
                </button>
                <h1>알림</h1>
            </div>
            {notifications.map((notification, index) => (
                <div className="alarm" key={index}>
                    <div className="heart">
                        <img src={fullheart} alt="하트" />
                    </div>
                    <div className="user">
                        <img src={notification.profileImage || ex} alt="프로필사진" />
                        <h1>
                            <span className='username'>{notification.username}</span>님이 
                            {notification.type === 'like' ? ' 내 게시물을 좋아합니다.' : ' 댓글을 남겼습니다.'}
                        </h1>
                        <p className='text'>{notification.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Alarm;
