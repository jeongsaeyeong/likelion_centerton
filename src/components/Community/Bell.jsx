import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Back from '../../assets/img/community/backbtn.svg';
import nullImg from '../../assets/img/community/nullImg.png';
import HartFull from '../../assets/img/community/hart_full.svg';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Bell = () => {
    const [notifications, setNotifications] = useState([]);
    const [fadingOut, setFadingOut] = useState([]);
    const navigate = useNavigate();

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } }
    };

    const fadeOut = {
        hidden: { opacity: 1 },
        visible: { opacity: 0, transition: { duration: 0.5 } }
    };

    const fetchNotifications = () => {
        axios.get('http://3.25.237.92:8000/notifications/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                setNotifications(res.data);
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            });
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    const readAlram = (notificationId, postId) => {
        setFadingOut(prev => [...prev, notificationId]);
        setTimeout(() => {
            axios.post(`http://3.25.237.92:8000/notifications/mark_as_read/${notificationId}/`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    navigate(`/communitypost/${postId}`)
                    console.log(res);


                })
                .catch(err => {
                    console.error(err);
                });
        }, 500);
    };

    const GoBack = () => {
        navigate(-1);
    };

    return (
        <div className='Bell_wrap container'>
            <div className="header">
                <img src={Back} alt="Backbtn" onClick={GoBack} />
                <h2>알림</h2>
            </div>
            <motion.div className="main"
                variants={fadeIn}
                initial="hidden"
                animate="visible">
                {notifications.filter(notification => !notification.read).length === 0 ? (
                    <div className='no_alram'>
                        <p className='no-alram'>온 알람이 없습니다</p>
                    </div>
                ) : (
                    notifications.filter(notification => !notification.read).map(notification => (
                        <AnimatePresence key={notification.id}>
                            <motion.div
                                className="like"
                                onClick={() => readAlram(notification.id, notification.post.id)}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={fadingOut.includes(notification.id) ? fadeOut : fadeIn}
                            >
                                <img src={HartFull} alt="HartFull" />
                                <div>
                                    <div className="people">
                                        <img src={notification.sender.photo || nullImg} alt="profil" />
                                    </div>
                                    <p className="info">
                                        <em>{notification.sender.username}</em> 님이 내 게시물을 좋아합니다.
                                    </p>
                                    <p className="text">
                                        {notification.post.content}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    ))
                )}
            </motion.div>
        </div>
    );
};

export default Bell;
