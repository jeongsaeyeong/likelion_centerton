import axios from 'axios'
import Clean from '../../../assets/img/mycharacter/clen.svg'
import CleanWhite from '../../../assets/img/mycharacter/clenwhite.svg'
import React, { useEffect, useState } from 'react'

const ChaMainClean = ({ click, whatclick, setClick, URL, setCheck, check, data }) => {
    const [place, setPlace] = useState('')
    const [choose, setChoose] = useState('')
    const [keyword, setKeyword] = useState([])

    const Set = () => {
        if (click === 'clean') {
            setClick('');
            setChoose('')
        } else {
            whatclick('clean');
        }
    }

    useEffect(() => {
        axios.get(`${URL}recommendations/keyword/?keyword=${place}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setKeyword([...res.data.cleaning_spots.slice(0, 2)])
                setCheck(!check)
            })
            .catch((err) => {
                console.log(err)
                setCheck(!check)
            })

    }, [place])

    const Cleansubmit = () => {
        if (place === '') {
            alert('청소 구역을 채워주세요!');
            return;
        }

        axios.post(`${URL}journal_entries/`, {
            "character": data[0].id,
            "action_type": "cleaning",
            "action_detail": place,
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
                    setPlace('');
                }
            })
            .catch((err) => {
                console.log(err)
                setCheck(!check)
                setClick('');
                setPlace('');
            })
    }


    return (
        <div>
            <img src={click === 'clean' ? CleanWhite : Clean} alt="" className={click === 'clean' ? 'click' : ''} onClick={() => { Set(); setPlace('') }} />
            <div className={click === 'clean' ? "" : 'none'}>
                <div className='cleanbox'>
                    <div>
                        <div>
                            <p>청소 구역:</p>
                            <input type="text" value={place} onChange={(e) => { setPlace(e.target.value) }} />
                        </div>
                        <div className='btn_box'>
                            {keyword.map((keyword, key) => (
                                <button className={choose === keyword ? 'full' : ''} key={key} onClick={() => { setChoose(keyword); setPlace(keyword) }}>{keyword}</button>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => { Cleansubmit() }}>저장</button>
                </div>
            </div>
        </div>
    )
}

export default ChaMainClean