import React, { useEffect, useState } from 'react'
import AddBtn from '../../assets/img/list/addbtn.svg'
import Nope from '../../assets/img/list/nope.svg'
import ListTimeset from './ListTimeset'
import ListMap from './ListMap'
import { motion } from 'framer-motion'
import axios from 'axios'

const ListAdd = ({ setWrite, setText, text, recom, what, URL, setEverydata, setLifedata }) => {
    const [today, setToday] = useState('');
    const [thisday, setThisday] = useState('');
    const [thistime, setThisTime] = useState('');
    const [selectedTime, setSelectedTime] = useState('1:00 PM');

    useEffect(() => {
        const today = new Date();
        const daysOfWeek = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${daysOfWeek[today.getDay()]}`;
        setToday(formattedDate);
        const day = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
        setThisday(day)
        const formattedTime = today.toTimeString().split(' ')[0];
        setThisTime(formattedTime);
    }, []);

    const ListSubmit = () => {
        console.log(what)
        const apiUrl = `${URL}board/${what === 'everylist' ? 'everylist' : 'lifelist'}/`;
        const data = what === 'everylist' ?
            { "task": text, "due_date": thisday, "due_time": thistime, "completed": false } :
            { "goal": text, "description": text, "target_date": thisday, "target_time": thistime, "completed": false };

        axios.post(apiUrl, data, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 201) {
                    axios.get(`${URL}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then((res) => {
                            setEverydata(res.data.everylist)
                            setLifedata(res.data.lifelist)
                            setWrite(false)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <motion.div className='ListAdd_wrap' initial={{ opacity: 0, }} animate={{ opacity: 1, }} transition={{ duration: 0.8, }}>
            <motion.div initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1, type: "spring" }}>
                <button className='nopebtn' onClick={() => { setWrite(false) }}>
                    <img src={Nope} alt="" />
                </button>
                <input value={text} onChange={(e) => { setText(e.target.value) }} type="text" placeholder='새로 입력' />
                <ListMap text={text} setText={setText} recom={recom} />
                <ListTimeset today={today} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
                <button className="add" onClick={() => { ListSubmit() }}>
                    <img src={AddBtn} alt="" />
                </button>
            </motion.div>
        </motion.div>
    )
}

export default ListAdd