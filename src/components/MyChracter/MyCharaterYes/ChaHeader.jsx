import React, { useEffect, useState } from 'react'
import goMemo from '../../../assets/img/mycharacter/gomemo.svg'
import { useNavigate } from 'react-router-dom'

const ChaHeader = () => {
    const [today, setToday] = useState('');
    const navigation = useNavigate();
    
    useEffect(() => {
        const today = new Date();
        const daysOfWeek = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${daysOfWeek[today.getDay()]}`;
        setToday(formattedDate);
    }, []);

    const GoingMemo = () => {
        navigation('/mymemo');
    }

    return (
        <div className="header">
            <div className="date">
                <p>{today}</p>
                <p>날씨 : 비</p>
            </div>
            <button className="memo">
                <img src={goMemo} alt="" onClick={() => { GoingMemo() }} />
            </button>
        </div>
    )
}

export default ChaHeader