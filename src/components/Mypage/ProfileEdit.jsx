import React, { useState, useEffect } from 'react';
import axios from 'axios';
import rightArrow from '../../assets/img/myPage/rightArrow.svg';
import { useNavigate } from 'react-router-dom';
import changeImg from '../../assets/img/myPage/changeImg.svg';
import accountImg from '../../assets/img/myPage/account-circle.svg';

const ProfileEdit = ({ userData: initialUserData }) => {
    const [userData, setUserData] = useState(initialUserData);
    const [nick, setNick] = useState('해피해피캣');
    const [photo, setPhoto] = useState(null);
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        if (initialUserData) {
            if (initialUserData.username) {
                setNick(initialUserData.username);
            }
            if (initialUserData.photo_url) {
                setPhoto(initialUserData.photo_url);
            }
        }
    }, [initialUserData]);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(file);
        }
    };

    const Back = () => {
        navigate(-1);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('username', nick);
        if (photo && typeof photo !== 'string') {
            formData.append('photo', photo);
        }

        try {
            const response = await axios.post('http://3.25.237.92:8000/profile-edit/', formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                alert('프로필이 성공적으로 수정되었습니다.');
            } else {
                alert('프로필 수정에 실패했습니다.');
            }
        } catch (error) {
            alert('서버와 통신 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className='container ProfileEdit_wrap'>
            <div className="header">
                <button className='back' onClick={Back}>
                    <img src={rightArrow} alt="뒤로가기" />
                </button>
                <h2>프로필 수정</h2>
                <button className='edit' onClick={handleSubmit}>저장</button>
            </div>
            <div className="main">
                <input type="file" id='profile' onChange={handlePhotoChange} />
                <label htmlFor='profile' className="photo-label">
                    {photo ? (
                        typeof photo === 'string' ? (
                            <img src={initialUserData.photo_url} alt="Profile" className="profile-photo" />
                        ) : (
                            <img src={URL.createObjectURL(photo)} alt="Profile" className="profile-photo" />
                        )
                    ) : <img src={accountImg}/>}
                    <img src={changeImg} className='changeImg' alt="Change" />
                </label>
                <input 
                    type="text" 
                    value={nick} 
                    onChange={(e) => setNick(e.target.value)} 
                    placeholder='닉네임' 
                />
            </div>
        </div>
    );
};

export default ProfileEdit;
