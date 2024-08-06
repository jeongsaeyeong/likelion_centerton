import React from 'react';
import axios from 'axios';

const CommunityPop = ({ showDe, setShowDe, postId }) => {
    const reportPost = () => {
        
        axios.post(`https://dreamcatcherrr.store/post/report_post/${postId}/`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then((res) => {
            if (res.status === 200) {
                console.log(res);
                setShowDe(false); 
                alert('신고가 완료되었습니다.');
            }
        })
        .catch((err) => {
            console.log(err);
            if (err.response && err.response.status === 400) {
                alert('이미 신고한 게시물입니다.');
            }
        });
    };

    return (
        <div className={showDe ? "popup" : "none"}>
            <div>
                <button className="decla" onClick={reportPost}>신고하기</button>
                <button className="nope" onClick={() => setShowDe(false)}>취소</button>
            </div>
        </div>
    );
};

export default CommunityPop;
