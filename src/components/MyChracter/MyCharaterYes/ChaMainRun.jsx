import React, { useEffect, useState } from 'react';
import Run from '../../../assets/img/mycharacter/run.svg';
import RunWhite from '../../../assets/img/mycharacter/runwhite.svg';
import axios from 'axios';

const ChaMainRun = ({ click, whatclick, setClick }) => {
    const [running, setRunning] = useState('');

    const Set = () => {
        if (click === 'run') {
            setClick('');
        } else {
            whatclick('run');
        }
    }

    useEffect(() => {
        axios.get(`http://3.25.237.92:8000/recommendations/keyword/?keyword=${running}/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                console.log('추천', res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [running])

    return (
        <div>
            <img src={click === 'run' ? RunWhite : Run} alt="run icon" className={click === 'run' ? 'click' : ''} onClick={Set} />
            <div className={click === 'run' ? "" : 'none'}>
                <div className='runbox'>
                    <div>
                        <div>
                            <p>운동 기록:</p>
                            <input value={running} onChange={(e) => setRunning(e.target.value)} type="text" />
                        </div>
                        <div className='btn_box'>
                            <button>상체 20분</button>
                        </div>
                    </div>
                    <button onClick={() => { console.log('저장 버튼 클릭'); }}>저장</button>
                </div>
            </div>
        </div>
    )
}

export default ChaMainRun;
