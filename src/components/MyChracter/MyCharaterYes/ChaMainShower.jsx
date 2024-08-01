import React, { useState } from 'react'
import Shower from '../../../assets/img/mycharacter/shawer.svg'
import ShowerWhite from '../../../assets/img/mycharacter/shawerwhite.svg'
import axios from 'axios'

const ChaMainShower = ({ check, setCheck, URL, data, click, whatclick, setClick }) => {
    const [choose, setChoose] = useState('')
    const [yeswash, setYeswash] = useState(false)

    // 씻기
    const Wash = () => {
        axios.post(`${URL}journal_entries/`, {
            "character": data[0].id,
            "action_type": "wash",
            "completed": yeswash
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                console.log(res.status)
                setCheck(!check)
                setClick('');
                setChoose('')
            })
            .catch((err) => {
                console.log(err)
                setCheck(!check)
                setClick('');
                setChoose('')
            })
    }

    const Set = () => {
        if (click === 'shower') {
            setClick('');
            setChoose('')
        } else {
            whatclick('shower');
        }
    }

    return (
        <div>
            <img src={click === 'shower' ? ShowerWhite : Shower} alt="" className={click === 'shower' ? 'click' : ''} onClick={() => { Set() }} />
            <div className={click === 'shower' ? "" : 'none'}>
                <div className='showerbox'>
                    <div>
                        <p>오늘 샤워 했어?:</p>
                        <div>
                            <button className={choose === "yes" ? 'full' : ''} onClick={() => { setYeswash(true); setChoose('yes') }}>응!</button>
                            <button className={choose === "no" ? 'full' : ''} onClick={() => { setYeswash(false); setChoose('no') }}>아니?</button>
                        </div>
                    </div>
                    <button onClick={() => { Wash() }}>저장</button>
                </div>
            </div>
        </div>
    )
}

export default ChaMainShower