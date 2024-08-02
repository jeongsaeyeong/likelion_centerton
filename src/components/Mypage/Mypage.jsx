import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import leftArrow from '../../assets/img/myPage/leftArrow.svg';
import Popup from './PopUp';
import defaultProfileImage from '../../assets/img/myPage/proImgEdit.svg';

const Mypage = ({ accessToken, setLoading }) => {
    const [userData, setUserData] = useState(null);
    const [cancle, setCancle] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (accessToken) {
            axios.get('http://3.25.237.92:8000/user/', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
                .then((res) => {
                    if (res.status === 200) {
                        setUserData(res.data);
                    }
                })
                .catch((err) => {
                    console.error(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [accessToken, setLoading]);

    const OpenPopup = () => {
        setCancle(true);
    };

    const ClosePopup = () => {
        setCancle(false);
    };

    const handleProfileEditClick = () => {
        navigate('/profilemodify');
    };

    const handleEditInfoClick = () => {
        navigate('/editinfo');
    };

    const handleNoticeClick = () => {
        navigate('/notice');
    };

    const handleAppSetClick = () => {
        navigate('/appset');
    };

    const handleCustomerCen = () => {
        navigate('/customercen');
    };

    return (
        <>
            <div className="container mypage_wrap">
                <p className="c_mypage">마이페이지</p>
                <div className="profile">
                    <div>
                        <img
                            src={userData && userData.photo ? `http://3.25.237.92:8000/${userData.photo}` : defaultProfileImage}
                            alt="profile"
                        />
                        <div className="mp_ID">
                            {userData ? userData.username : '로딩 중...'}
                        </div>
                        <div className="editProfile" onClick={handleProfileEditClick}>
                            프로필 수정
                            <div>
                                <img src={leftArrow} alt="leftArrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="box EI_box" onClick={handleEditInfoClick}>
                        <span>개인 정보 수정</span>
                    </div>
                    <div className="box Notice_box" onClick={handleNoticeClick}>
                        <span>공지사항</span>
                    </div>
                    <div className="box CC_box" onClick={handleCustomerCen}>
                        <span>고객센터</span>
                    </div>
                    <div className="box AS_box" onClick={handleAppSetClick}>
                        <span>앱설정</span>
                    </div>
                    <div className="box logout_box">
                        <span>로그아웃</span>
                    </div>
                    <div className="box gb_box" onClick={OpenPopup}>
                        <span>회원탈퇴</span>
                    </div>
                </div>
                {cancle && <Popup onClose={ClosePopup} />}
            </div>
        </>
    );
};

export default Mypage;
