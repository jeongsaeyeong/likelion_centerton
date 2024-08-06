import React from 'react';
import Delete from '../../assets/img/community/delete.svg';
import ModifyPost from '../../assets/img/community/modifypost.svg';
import axios from 'axios';

const CommunityModify = ({ modifyshow, postId, onDelete, onModify }) => {
    
    const delpost = () => {
        axios.delete(`http://3.25.237.92:8000/post/delete/${postId}/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then((res) => {
            if (res.status === 200) {
                console.log(res);
                onDelete(postId); 

               
            }
        })
        .catch((err) => {
            console.error(err);
        });
    };

    return (
        <div className={modifyshow ? "modify" : "none"}>
            <button className="postdelete" onClick={delpost}>
                <p>게시물 삭제</p>
                <img src={Delete} alt="Delete" />
            </button>
            <button className="postmodify" onClick={onModify}>
                <p>게시물 수정</p>
                <img src={ModifyPost} alt="ModifyPost" />
            </button>
        </div>
    );
};

export default CommunityModify;
