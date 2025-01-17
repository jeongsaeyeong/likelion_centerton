import React, { useState, useEffect } from 'react';
import Modify from '../../assets/img/community/modify.svg';
import HartFull from '../../assets/img/community/hart_full.svg';
import HartBin from '../../assets/img/community/hart_bin.svg';
import CommunityModify from './CommunityModify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CommunityMy = () => {
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // 유저 정보 가져오기
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
        // 글 불러오기
        axios.get('http://3.25.237.92:8000/post/posthome/', {
            params: {
                sort: 'date',
                category: 'my_posts'
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data);
                    const ModifyState = res.data.map(post => ({
                        ...post,
                        isModify: false
                    }));
                    setPosts(ModifyState);
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    const toggleModify = (postId) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, isModify: !post.isModify } : post
        ));
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

    return (
        <>
            {loading ? (
                <div className="posts-loading">로딩 중...</div>
            ) : posts.length > 0 ? (
                posts.map(post => (
                    <div className="post_box" key={post.id}>
                        <div className="profile">
                            {post.author_profile && (

                                <img src={post.author_profile} alt="이미지" />

                            )}
                        </div>
                        <div className="post">
                            <div className="info">
                                <div>
                                    <h3>{post.author_username}</h3>
                                    <p>{new Date(post.date_posted).toLocaleTimeString()}</p>
                                </div>
                                <img onClick={() => toggleModify(post.id)} src={Modify} alt="Modify" />
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
                                    src={(post.likes || []).includes(userId) ? HartFull : HartBin}
                                    alt="HartIcon"
                                    onClick={() => heart(post.id)}
                                />
                                <p>{post.total_likes > 0 ? post.total_likes : null}</p>
                            </div>
                        </div>
                        {post.isModify && (
                            <CommunityModify
                                modifyshow={post.isModify}
                                postId={post.id}
                                onDelete={() => deletePost(post.id)}
                                onModify={() => {
                                    toggleModify(post.id);
                                    navigate(`/communityset/${post.id}`);
                                }}
                            />
                        )}
                    </div>
                ))
            ) : (
                <p className='nopost'>나의 글을 작성해보세요!</p>
            )}
        </>
    );
};

export default CommunityMy;
