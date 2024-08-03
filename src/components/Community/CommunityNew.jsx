import React, { useState, useEffect } from 'react';
import Declaration from '../../assets/img/community/declaration.svg';
import HartFull from '../../assets/img/community/hart_full.svg';
import HartBin from '../../assets/img/community/hart_bin.svg';
import axios from 'axios';
import { motion } from 'framer-motion';

const CommunityNew = ({ setShowDe, setPostId }) => {
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } }
    };

    useEffect(() => {
        axios.get('http://3.25.237.92:8000/user/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    setUserId(res.data.id);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        loadPosts();
    }, []);

    const loadPosts = () => {

        axios.get('http://3.25.237.92:8000/post/posthome/', {
            params: {
                sort: 'date',
                category: 'latest'
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    setPosts(res.data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    const heart = (postId) => {
        axios.post(`http://3.25.237.92:8000/post/like/${postId}/`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res);
                    loadPosts();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            {loading ? (
                <div className="posts-loading">로딩 중...</div>
            ) : posts.length > 0 ? (
                posts.map(post => (
                    <motion.div className="post_box"
                        key={post.id}
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="profile">
                            {post.author_profile && (

                                <img src={post.author_profile} alt="이미지" />

                            )}
                        </div>
                        <div className="post">
                            <div className="info">
                                <div>
                                    <h3>{post.author}</h3>
                                    <p>{new Date(post.date_posted).toLocaleTimeString()}</p>
                                </div>
                                <img onClick={() => { setPostId(post.id); setShowDe(true); }} src={Declaration} alt="Declaration" />
                            </div>
                            <div className="post_text">
                                <p>{post.content}</p>

                                {post.image && (
                                    <div>
                                        <img src={post.image} alt="이미지" />
                                    </div>
                                )}
                            </div>
                            <div className="like">
                                <img
                                    src={post.likes.includes(userId) || post.liked ? HartFull : HartBin}
                                    alt="HartBin"
                                    onClick={() => heart(post.id)}
                                />
                                <p>{post.total_likes ? post.total_likes : ' '}</p>
                            </div>
                        </div>
                    </motion.div>
                ))
            ) : (
                <p className='nopost'>올라온 글이 없습니다</p>
            )}
        </>
    );
};

export default CommunityNew;
