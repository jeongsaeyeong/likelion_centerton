import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '../../assets/img/user/back.svg';
import Terms from './Terms';
import axios from 'axios';

const Signup = () => {
    const URL = 'https://dreamcatcherrr.store/';

    const [allterms, setAllterms] = useState(false);
    const [userid, setUserId] = useState('');
    const [sameOk, setSameOk] = useState(false);
    const [useridMsg, setUserIdMsg] = useState('');
    const [password, setPassword] = useState('');
    const [passwordre, setPasswordre] = useState('');
    const [passwordMsg, setPasswordMsg] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profile, setProfile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const Backbtn = () => {
        navigate(-1);
    };

    // 아이디 중복 체크
    const SameId = () => {
        if (userid === '') {
            alert('아이디를 채워주세요!');
            return;
        }

        axios.post(`${URL}check_user_id/`, { user_id: userid })
            .then((res) => {
                if (res.status === 200) {
                    setUserIdMsg('사용 가능한 아이디입니다.');
                    setSameOk(true);
                } else {
                    setUserIdMsg('사용이 불가한 아이디입니다.');
                    setSameOk(false);
                }
            })
            .catch(() => {
                setUserIdMsg('서버 오류가 발생했습니다. 다시 시도해주세요.');
                setSameOk(false);
            });
    };

    // 비밀번호 중복 체크
    useEffect(() => {
        if (password !== passwordre) {
            setPasswordMsg('비밀번호가 일치하지 않습니다.');
        } else {
            setPasswordMsg('');
        }
    }, [password, passwordre]);

    // 회원가입 
    const SubmitJoin = () => {
        if (!allterms) {
            alert('약관에 동의해주세요.');
            return;
        }

        if (!sameOk) {
            alert('아이디 중복검사 해주세요.');
            return;
        }

        if (userid !== '' && password !== '' && name !== '' && email !== '') {
            setLoading(true);
            const formData = new FormData();
            formData.append('user_id', userid);
            formData.append('username', name);
            formData.append('password', password);
            formData.append('email', email);
            if (profile) {
                formData.append('photo', profile);
            }

            axios.post(`${URL}signup/`, formData)
                .then((res) => {
                    setLoading(false);
                    if (res.status === 201) {
                        alert('회원가입 성공');
                        navigate('/login');
                    } else {
                        console.log(res.status);
                    }
                })
                .catch((err) => {
                    setLoading(false);
                    console.log(err);
                });
        } else {
            alert('빈칸을 모두 채워주세요!');
        }
    };

    return (
        <div className='container signup'>
            <button className="back" onClick={Backbtn}>
                <img src={Back} alt="Back" />
            </button>
            <h1>회원가입</h1>
            <div className="pro-img">
                {preview === null ? (
                    <>
                        <input type="file" id='profile' onChange={handleFileChange} />
                        <label htmlFor='profile'></label>
                    </>
                ) : (
                    <>
                        <img src={preview} alt="Profile Preview" style={{ width: '100px', height: '100px', borderRadius: '100px', objectFit: 'cover', zIndex: 1, position: 'relative' }} />
                        <input type="file" id='profile_input' onChange={handleFileChange} />
                        <label className='profile_input' htmlFor='profile_input'></label>
                    </>
                )}
            </div>
            <div className='info'>
                <div className="id">
                    <input type="text" placeholder='아이디' value={userid} onChange={(e) => setUserId(e.target.value)} />
                    <button type="button" onClick={SameId}>중복 확인</button>
                </div>
                <p className={useridMsg === '사용 가능한 아이디입니다.' ? 'id_ok' : 'id_no'}>{useridMsg}</p>

                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='비밀번호' />
                <input value={passwordre} onChange={(e) => setPasswordre(e.target.value)} type="password" placeholder='비밀번호 확인' />
                <p className={passwordMsg === '비밀번호가 일치하지 않습니다.' ? 'id_no' : ''}>{passwordMsg}</p>

                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='이름' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='이메일' />

                <div className='submitbox'>
                    <button type="submit" className='signupbtn' onClick={SubmitJoin} disabled={loading}>
                        {loading ? '가입 중...' : '가입하기'}
                    </button>
                </div>
            </div>

            <Terms setAllterms={setAllterms} />
        </div>
    );
};

export default Signup;
