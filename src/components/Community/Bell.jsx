import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Back from '../../assets/img/community/backbtn.svg';
import HartFull from '../../assets/img/community/hart_full.svg';
import { useNavigate } from 'react-router-dom';

const Bell = () => {
    const [notifications, setNotifications] = useState([]);
    const navigation = useNavigate();

    useEffect(() => {
        console.log(`Bearer ${localStorage.getItem('accessToken')}`)
        axios.get('http://3.25.237.92:8000/notifications/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                setNotifications(res.data);
                console.log(res)
            })
            .catch(err => {
                console.error(err);
            });

    }, []);

    const GoBack = () => {
        navigation(-1);
    };

    return (
        <div className='Bell_wrap container'>
            <div className="header">
                <img src={Back} alt="Backbtn" onClick={() => { GoBack() }} />
                <h2>알림</h2>
            </div>
            <div className="main">
                {notifications.map(notification => (
                    <div key={notification.id} className="like">
                        <img src={HartFull} alt="HartFull" />
                        <div>
                            <div className="people">
                            </div>
                            <p className="info">
                                <em>{notification.user}</em>님이 <em>{notification.post.title}</em> 글을 좋아합니다.
                            </p>
                            <p className="text">
                                {notification.message}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bell;
