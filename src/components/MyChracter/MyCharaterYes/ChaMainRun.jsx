import React, { useEffect, useState } from 'react';
import Run from '../../../assets/img/mycharacter/run.svg';
import RunWhite from '../../../assets/img/mycharacter/runwhite.svg';
import axios from 'axios';

const ChaMainRun = ({ click, data, whatclick, setClick, setCheck, check }) => {
    const URL = 'https://dreamcatcherrr.store/'
    const [running, setRunning] = useState('');
    const [keyword, setKeyword] = useState([])
    const [choose, setChoose] = useState('')

    const Set = () => {
        if (click === 'run') {
            setClick('');
        } else {
            whatclick('run');
        }
    }

    useEffect(() => {
        axios.get(`${URL}recommendations/keyword/?keyword=${running}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                setKeyword([...res.data.walking_places.slice(0, 2)])
                setCheck(!check)
            })
            .catch((err) => {
                console.log(err)
                setCheck(!check)
            })

    }, [running])

    const Runsubmit = () => {
        if (running === '') {
            alert('운동 기록을 채워주세요!');
            return;
        }

        axios.post(`${URL}journal_entries/`, {
            "character": data[0].id,
            "action_type": "walk",
            "action_detail": running,
            "completed": true
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 201) {
                    setCheck(!check)
                    setClick('');
                    setRunning('');
                }
            })
            .catch((err) => {
                setCheck(!check)
                console.log(err)
            })
    }

    return (
        <div>
            <img src={click === 'run' ? RunWhite : Run} alt="run icon" className={click === 'run' ? 'click' : ''} onClick={() => {Set(); setRunning('')}} />
            <div className={click === 'run' ? "" : 'none'}>
                <div className='runbox'>
                    <div>
                        <div>
                            <p>운동 기록:</p>
                            <input value={running} onChange={(e) => setRunning(e.target.value)} type="text" />
                        </div>
                        <div className='btn_box'>
                            {keyword.map((keyword, key) => (
                                <button className={choose === keyword ? 'full' : ''} key={key} onClick={() => { setChoose(keyword); setRunning(keyword) }}>{keyword}</button>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => { Runsubmit() }}>저장</button>
                </div>
            </div>
        </div>
    )
}

export default ChaMainRun;
