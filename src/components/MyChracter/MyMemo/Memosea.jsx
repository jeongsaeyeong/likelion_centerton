import React, { useEffect, useState } from 'react';
import Del from '../../../assets/img/mycharacter/delete.svg';
import axios from 'axios';

const Memosea = ({ URL, setClick, chaid, today }) => {
    const [loading, setLoading] = useState(false);
    const [diary, setDiary] = useState([])
    const [getdate, setGetDate] = useState('');
    const [fast, setFast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);
    const [snack, setSnack] = useState([]);

    const convertDayToKorean = (day) => {
        const dayMap = { Monday: '월요일', Tuesday: '화요일', Wednesday: '수요일', Thursday: '목요일', Friday: '금요일', Saturday: '토요일', Sunday: '일요일', };
        return dayMap[day] || day;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    };

    useEffect(() => {
        const match = today.match(/^(\d+)월 (\d+)일$/);

        if (match) {
            const month = match[1].padStart(2, '0');
            const day = match[2].padStart(2, '0');
            const formattedDate = `2024-${month}-${day}`;
            setGetDate(formattedDate)
        }

        if (chaid !== 0 && getdate !== '') {
            axios.get(`${URL}characters/${chaid}/journal/${getdate}/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then((res) => {
                    if (res.status === 200) {
                        setDiary(res.data);
                        setFast([...res.data.meals.breakfast]);
                        setLunch([...res.data.meals.lunch]);
                        setDinner([...res.data.meals.dinner]);
                        setSnack([...res.data.meals.snack]);
                        setLoading(true)
                    } else {
                        setLoading(false)
                    }
                })
                .catch((err) => {
                    console.log(err)
                    setLoading(false)
                })
        }
    })

    return (
        <div className='Memosea_wrap'>
            <div>
                <button className="delete" onClick={() => { setClick(false) }}><img src={Del} alt="delete" /></button>
                {loading ? (
                    <>
                        <div className="header">
                            <p className="date">{formatDate(diary.date)} {convertDayToKorean(diary.day)}</p>
                            <p className="date">날씨: {diary.weather}</p>
                        </div>
                        <div className="main">
                            <p className='morning'>
                                아침:{fast.map((fast, key) => (
                                    <p key={key}>{fast},</p>
                                ))}
                            </p>
                            <p className='morning'>
                                점심:{lunch.map((fast, key) => (
                                    <p key={key}>{fast},</p>
                                ))}
                            </p>
                            <p className='morning'>
                                저녁:{dinner.map((fast, key) => (
                                    <p key={key}>{fast},</p>
                                ))}
                            </p>
                            <p className='morning'>
                                간식:{snack.map((fast, key) => (
                                    <p key={key}>{fast},</p>
                                ))}
                            </p>
                            <p>
                                {diary.diary}
                            </p>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default Memosea;
