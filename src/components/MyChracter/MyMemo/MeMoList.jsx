import React, { useEffect, useState } from 'react';
import Star01 from '../../../assets/img/mycharacter/star01.png';
import Star02 from '../../../assets/img/mycharacter/star02.png';
import Star03 from '../../../assets/img/mycharacter/star03.png';
import Star04 from '../../../assets/img/mycharacter/star04.png';
import axios from 'axios';
import Memosea from './Memosea';

const MeMoList = () => {
    const URL = 'https://dreamcatcherrr.store/';
    const [memos, setMemos] = useState([]);
    const [click, setClick] = useState(false);
    const [chaid, setChaid] = useState(0);
    const [today, setToday] = useState('');

    const starImages = [Star01, Star02, Star03, Star04];

    useEffect(() => {
        axios.get(`${URL}user-activity-dates/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                const dates = res.data;
                const formattedMemos = dates.map((date, index) => {
                    const [year, month, day] = date.split('-');
                    const formattedDate = `${parseInt(month, 10)}월 ${parseInt(day, 10)}일`;
                    return {
                        id: index + 1,
                        img: starImages[index % starImages.length],
                        date: formattedDate,
                    };
                });
                setMemos(formattedMemos);
            })
            .catch((err) => {
                console.log(err);
            });

        axios.get(`${URL}user/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                setChaid(res.data.id)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <>
            {click ? (
                <>
                    <Memosea setClick={setClick} URL={URL} chaid={chaid} today={today}/>
                </>
            ) : (
                <div className="memolist">
                    <div className='memo'>
                        {memos.map((memo) => (
                            <div key={memo.id} onClick={() => { setClick(true); setToday(memo.date)}}>
                                <img src={memo.img} alt="" />
                                <p>{memo.date}</p>
                            </div>
                        ))}
                    </div >
                </div >
            )}

        </>
    );
}

export default MeMoList;
