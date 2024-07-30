import React, { useState } from 'react';
import rightArrow from '../../assets/img/myPage/rightArrow.svg';
import { useNavigate } from 'react-router-dom';

const Appset = () => {
    const navigation = useNavigate();

    const Back = () => {
        navigation(-1);
    };

    const Toggle = ({ initialChecked }) => {
        const [checked, setChecked] = useState(initialChecked);

        const handleToggle = () => {
            setChecked(!checked);
        };

        return (
            <div className={`toggle ${checked ? 'checked' : 'unchecked'}`} onClick={handleToggle}>
                <div className="circle" />
            </div>
        );
    };

    return (
        <div className="as_wrap container">
            <div className="header">
                <button className='rightArrow' onClick={Back}>
                    <img src={rightArrow} alt="Back" />
                </button>
                <h2>앱 설정</h2>
            </div>
            <div className="main">
                <h3 className='noSet'>알림 설정</h3>
                <div className="push">
                    <h3>푸쉬 알림</h3>
                    <div>
                        <div>
                            <p>좋아요 알림</p>
                            <Toggle initialChecked={true} />
                        </div>
                        <div>
                            <p>서비스 공지 및 안내 사항 알림</p>
                            <Toggle initialChecked={false} />
                        </div>
                        <div>
                            <p>나의 캐릭터 행동 입력 안내 알림</p>
                            <Toggle initialChecked={true} />
                        </div>
                    </div>
                </div>
                <div className="email">
                    <h3>이메일 알림</h3>
                    <div>
                        <div>
                            <p className='checkEmail'>이메일 알림</p>
                            <Toggle initialChecked={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appset;
