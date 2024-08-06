import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import rightArrow from '../../assets/img/myPage/rightArrow.svg';
import searchImg from '../../assets/img/myPage/search.svg';
import qImg from '../../assets/img/myPage/Q.svg';
import ccLeft from '../../assets/img/myPage/ccLeftArrow.svg';
import { PulseLoader } from 'react-spinners';

const cuscens = [
    {
        category: '나의 캐릭터',
        title: "캐릭터 수정은 어디에서 하나요?",
        content: `<p>캐릭터 수정은<br /><br /><br /></p>
        <p>나의 캐릭터 페이지 가장 아래의 ‘드림 파트너 바꾸기’ 버튼을 통해 수정 가능합니다.  <br />
            <br /><br />
            일기를 작성하신 경우, 일기장 페이지 맨 아래의 ‘드림 파트너 바꾸기’ 버튼을 통해 수정 가능합니다.  <br /><br />
        </p>`,
    },
    {
        category: '커뮤니티',
        title: "커뮤니티 글의 이미지가 안 보여요.",
        content: `<p>커뮤니티 글의 이미지가 안 보이는 문제는<br /></p>
        <p>휴대폰의 최신 업데이트가 되지 않은 경우 발생하는 문제입니다.  <br />
          <br />휴대폰 업데이트 후, 어플을 다시 한번 켜 보시기 바랍니다. <br /><br />
        </p>`,
    }
];

const CustomerCen = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
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
                        setUserData(res.data);
                        console.log(res.data);
                    }
                } catch (err) {
                    console.error(err);
                } finally {
                    setLoading(true);
                }
            } else {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [accessToken]);

    const handlecc = (cuscennum) => {
        navigate(`/customercen/${cuscennum}`);
    };

    const Back = () => {
        navigate(-1);
    };

    return (
        <div className='CustomerCen_wrap container'>
            {loading ? (
                <>
                    <div className="header">
                        <button className='cc_ra_img' onClick={Back}>
                            <img src={rightArrow} />
                        </button>
                        <h2>고객센터</h2>
                    </div>
                    <div className="main">
                        <div className="search">
                            <h3>
                                {userData ? userData.username : '로딩 중...'}님,<br />
                                무엇을 도와드릴까요?
                            </h3>
                            <div className='searchBar'>
                                <img src={searchImg} />
                                <input type='text' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                            </div>
                        </div>
                        <div className="quik">
                            <h3>여기서 빠르게 해결하세요</h3>
                            {cuscens.map((cuscen, index) => (
                                <div className='solveBox' key={index} onClick={() => { handlecc(index) }}>
                                    <div>
                                        <img src={qImg} className='qImg' />
                                        <p>{cuscen.title}</p>
                                    </div>
                                    <img src={ccLeft} className='ccLeft' />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className="loading_wrap">
                    <PulseLoader />
                </div>
            )}
        </div>
    );
};

export default CustomerCen;
