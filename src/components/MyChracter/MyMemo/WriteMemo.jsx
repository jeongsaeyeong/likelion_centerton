import React, { useEffect, useState } from 'react'
import Del from '../../../assets/img/mycharacter/delete.svg'
import Write from '../../../assets/img/mycharacter/writesubmit.svg'
import axios from 'axios';
import { motion } from 'framer-motion'

const WriteMemo = ({ setWrite, data }) => {
    const URL = 'http://3.25.237.92:8000/'
    const [today, setToday] = useState('');
    const [weather, setWeather] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const today = new Date();
        const daysOfWeek = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${daysOfWeek[today.getDay()]}`;
        setToday(formattedDate);
    }, []);

    const WriteSubmit = () => {
        if (weather === '' && content === '') {
            alert('빈칸을 모두 채워주세요!');
            return;
        }

        axios.post(`${URL}diary_entries/`, {
            "character": data[0].id,
            "weather": weather,
            "diary_text": content
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 201) {
                    setWrite(false)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <motion.div className='WriteMemo_wrap' initial={{ opacity: 0, }} animate={{ opacity: 1, }} transition={{ duration: 0.8, }}>
            <motion.div className="WriteMemo" initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1, type: "spring" }}>
                <button className="nope" onClick={() => { setWrite(false) }}><img src={Del} alt="Del" /></button>
                <div className="header">
                    <p>{today}</p>
                    <div>
                        <p>날씨: </p>
                        <input type="text" value={weather} onChange={(e) => { setWeather(e.target.value) }} />
                    </div>
                </div>
                <div className="main">
                    <textarea value={content} onChange={(e) => { setContent(e.target.value) }} ></textarea>
                </div>
                <button className="write" onClick={() => { WriteSubmit() }}><img src={Write} alt="Write" /></button>
            </motion.div>
        </motion.div>
    )
}

export default WriteMemo