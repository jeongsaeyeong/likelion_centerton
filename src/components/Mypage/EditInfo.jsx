import React, { useState, useEffect } from 'react';
import axios from 'axios';
import rightArrow from '../../assets/img/myPage/rightArrow.svg';
import { useNavigate } from 'react-router-dom';

const EditInfo = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordre, setPasswordre] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        const fetchUserData = async () => {
            if (accessToken) {
                try {
                    const res = await axios.get('http://3.25.237.92:8000/user/', {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    });
                    if (res.status === 200) {
                        const userData = res.data;
                        setUserId(userData.user_id);
                        setPassword(userData.password);
                        setPasswordre(userData.password2);
                        setName(userData.username);
                        setEmail(userData.email);
                    }
                } catch (err) {
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [accessToken]);

    useEffect(() => {
        if (userId && password && passwordre && name && email) {
            setIsFormComplete(true);
        } else {
            setIsFormComplete(false);
        }
    }, [userId, password, passwordre, name, email]);

    const Back = () => {
        navigate(-1);
    };

    const handleSubmit = async () => {
        if (!isFormComplete) return;

        const formData = new FormData();
        formData.append('user_id', userId);
        formData.append('username', name);
        formData.append('password', password);
        formData.append('password2', passwordre);
        formData.append('email', email);

        try {
            const response = await axios.post('http://3.25.237.92:8000/personal-info-edit/', formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                alert('정보가 성공적으로 수정되었습니다.');
            } else {
                alert('정보 수정에 실패했습니다.');
            }
        } catch (error) {
            alert('서버와 통신 중 오류가 발생했습니다.');
        }
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }

    return (
        <div className='EditInfo_wrap container'>
            <button className="back" onClick={Back}>
                <img src={rightArrow} alt="rightArrow" />
            </button>
            <h2>개인 정보 수정</h2>
            <div className="main">
                <div>
                    <p className="kind">아이디</p>
                    <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder='아이디' />
                </div>
                <div>
                    <p className="kind">비밀번호</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='비밀번호' />
                </div>
                <div>
                    <p className="kind">비밀번호 확인</p>
                    <input type="password" value={passwordre} onChange={(e) => setPasswordre(e.target.value)} placeholder='비밀번호 재입력' />
                </div>
                <div>
                    <p className="kind">이름</p>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='이름' />
                </div>
                <div>
                    <p className="kind">이메일</p>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='이메일' />
                </div>
            </div>
            <button className={`submit ${isFormComplete ? 'active' : ''}`} onClick={handleSubmit}>
                <p>회원정보 수정</p>
            </button>
        </div>
    );
};

export default EditInfo;
