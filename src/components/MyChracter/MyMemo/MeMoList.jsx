import React, { useEffect, useState } from 'react';
import Star01 from '../../../assets/img/mycharacter/star01.png';
import Star02 from '../../../assets/img/mycharacter/star02.png';
import Star03 from '../../../assets/img/mycharacter/star03.png';
import Star04 from '../../../assets/img/mycharacter/star04.png';
import axios from 'axios';
import Memosea from './Memosea';

const MeMoList = () => {
    const URL = 'http://3.25.237.92:8000/';
    const [memos, setMemos] = useState([]);
    const [click, setClick] = useState(false);
    const [chaid, setChaid] = useState(0)
    const [getdate, getsetDate] = useState('');
    const [diary, setDiary] = useState([])

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

    const GetMemo = (date) => {
        const match = date.match(/^(\d+)월 (\d+)일$/);
        if (match) {
            const month = match[1].padStart(2, '0');
            const day = match[2].padStart(2, '0');
            const formattedDate = `2024-${month}-${day}`;
            getsetDate(formattedDate)
        }

        if (chaid !== 0 && getdate !== '') {
            axios.get(`${URL}characters/${chaid}/journal/${getdate}/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then((res) => {
                    setDiary(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <>
            {click ? (
                <>
                    <Memosea setClick={setClick} diary={diary} />
                </>
            ) : (
                <div className="memolist">
                    <div className='memo'>
                        {memos.map((memo) => (
                            <div key={memo.id} onClick={() => { setClick(true); GetMemo(memo.date) }}>
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
