import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import accountImg from '../../assets/img/myPage/account-circle.svg'
import leftArrow from '../../assets/img/myPage/leftArrow.svg'
import Popup from './PopUp';
import axios from 'axios';

const Mypage = () => {
    const [accessToken, setAccessToken] = useState('')
    const [cancle, setCancle] = useState(false);
    const navigate = useNavigate();

    const OpenPopup = () => {
        setCancle(true);
    };

    const ClosePopup = () => {
        setCancle(false);
    };

    const handleprofileEditClick = () => {
        navigate('/profilemodify');
    };

    const handleEditInfoClick = () => {
        navigate('/editinfo');
    };

    const handlenoticeClick = () => {
        navigate('/notice');
    }

    const handleappsetClick = () => {
        navigate('/appset');
    }

    const handleCustomerCen = () => {
        navigate('/customercen');
    }

    useEffect(() => {
        setAccessToken(localStorage.getItem('accessToken'));
    })

    const Logout = () => {
        // eslint-disable-next-line no-restricted-globals
        const isConfirmed = confirm('정말 로그아웃하시겠습니까?');

        if (isConfirmed) {
            axios.post('http://3.25.237.92:8000/logout/', {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
                .then((res) => {
                    if (res.status === 200) {
                        localStorage.clear();
                        navigate('/login')
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <>
            <div className="container mypage_wrap">
                <p className='c_mypage'>마이페이지</p>
                <div className='profile'>
                    <div>
                        <img src={accountImg} alt='profile' />
                        <div className='mp_ID'>
                            해피해피캣
                        </div>
                        <div className='editProfile' onClick={handleprofileEditClick}>
                            프로필 수정
                            <div>
                                <img src={leftArrow} alt='leftArrow' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className='box EI_box' onClick={handleEditInfoClick}>
                        <span> 개인 정보 수정 </span>

                    </div>
                    <div className='box Notice_box' onClick={handlenoticeClick}>
                        <span> 공지사항 </span>

                    </div>
                    <div className='box CC_box' onClick={handleCustomerCen}>
                        <span> 고객센터 </span>

                    </div>
                    <div className='box AS_box' onClick={handleappsetClick}>
                        <span> 앱설정 </span>

                    </div>
                    <div className='box logout_box' onClick={() => { Logout() }}>
                        <span>
                            로그아웃
                        </span>
                    </div>
                    <div className='box gb_box' onClick={OpenPopup}>
                        <span>
                            회원탈퇴
                        </span>
                    </div>
                </div>
                {cancle && <Popup onClose={ClosePopup} />}
            </div>
        </>
    );
}

export default Mypage;