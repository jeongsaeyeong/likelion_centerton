import React, { useState, useEffect } from 'react';
import Back from '../../assets/img/community/backbtn.svg';
import Modify from '../../assets/img/community/modify.svg';
import HartFull from '../../assets/img/community/hart_full.svg';
import HartBin from '../../assets/img/community/hart_bin.svg';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import CommunityModify from './CommunityModify';
import { motion } from 'framer-motion';

const CommunityDetail = () => {
    const [post, setPost] = useState({});
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);
    const { postId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(`Bearer ${localStorage.getItem('accessToken')}`)
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
                console.error('Error fetching user:', err);
            });

        loadPosts();
    }, [postId]);

    const loadPosts = () => {
        axios.get(`http://3.25.237.92:8000/post/${postId}/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    setPost(res.data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    const handleHeartClick = (postId) => {
        axios.post(`http://3.25.237.92:8000/post/like/${postId}/`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    loadPosts();
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const toggleModify = () => {
        setPost((prevPost) => ({
            ...prevPost,
            isModify: !prevPost.isModify
        }));
    };

    const deletePost = (postId) => {
        axios.delete(`http://3.25.237.92:8000/post/delete/${postId}/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    navigate('/community');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='CommunityDetail container'>
            <div className="header">
                <img src={Back} alt="Back" onClick={() => navigate(-1)} />
                <h2>게시물</h2>
            </div>
            <motion.div
                className="post_box"
                key={post.id}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
            >
                <div className="profile">
                    {post.author_profile && (
                        <img src={post.author_profile} alt="Author Profile" />
                    )}
                </div>
                <div className="post">
                    <div className="info">
                        <div>
                            <h3>{post.author_username}</h3>
                            <p>{new Date(post.date_posted).toLocaleTimeString()}</p>
                        </div>

                        <img onClick={toggleModify} src={Modify} alt="Modify" />

                    </div>
                    <div className="post_text">
                        <p>{post.content}</p>
                        {post.image && (
                            <div>
                                <img src={post.image} alt="Post" />
                            </div>
                        )}
                    </div>
                    <div className="like">
                        <img
                            src={post.likes?.includes(userId) || post.liked ? HartFull : HartBin}
                            alt="Like Button"
                            onClick={() => handleHeartClick(post.id)}
                        />
                        <p>{post.total_likes || ' '}</p>
                    </div>
                </div>
                {post.isModify && (
                <CommunityModify
                    modifyshow={post.isModify}
                    postId={post.id}
                    onDelete={() => deletePost(post.id)}
                    onModify={() => {
                        toggleModify();
                        navigate(`/communityset/${post.id}`);
                    }}
                />
            )}
            </motion.div>
          
        </div>
    );
}

export default CommunityDetail;
