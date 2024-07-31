import React, { useEffect } from 'react';
import Del from '../../../assets/img/mycharacter/delete.svg';

const Memosea = ({ setClick, diary }) => {
    useEffect(() => {
        console.log(diary);
    }, [diary]);

    const convertDayToKorean = (day) => {
        const dayMap = { Monday: '월요일', Tuesday: '화요일', Wednesday: '수요일', Thursday: '목요일', Friday: '금요일', Saturday: '토요일', Sunday: '일요일', };
        return dayMap[day] || day;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    };

    return (
        <div className='Memosea_wrap'>
            <div>
                <button className="delete" onClick={() => { setClick(false) }}><img src={Del} alt="delete" /></button>
                <div className="header">
                    <p className="date">{formatDate(diary.date)} {convertDayToKorean(diary.day)}</p>
                    <p className="date">날씨: {diary.weather}</p>
                </div>
                <div className="main">
                    <p>
                        {diary.diary}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Memosea;
