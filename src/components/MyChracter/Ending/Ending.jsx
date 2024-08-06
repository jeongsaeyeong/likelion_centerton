import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners'

const Ending = () => {
    const URL = 'https://dreamcatcherrr.store/'
    const navigation = useNavigate();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`${URL}characters/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.data[0].id) {
                    axios.get(`${URL}characters/${res.data[0].id}/ending/`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then((res) => {
                            setData(res.data)
                            setLoading(true)
                        })
                        .catch((err) => {
                            console.log(err)
                            setLoading(false)
                        })
                }
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    const RealEnding = () => {
        axios.post(`${URL}characters/end/`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    navigation('/mychracter')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='Ending_wrap container'>
            {loading ? (
                <div className="box_wrap">
                    {data.map((item, index) => (
                        <div className='box' key={index}>
                            <div className="header">
                                <p className="date">{item.date} {item.day}</p>
                                <p className="date">날씨: {item.weather}</p>
                            </div>
                            <div className="main">
                                <p>
                                    <p>
                                        아침: {item.meals.breakfast.map((item, key) => (
                                            <p key={key}>{item},</p>
                                        ))}<br />
                                    </p>
                                    <p>
                                        점심: {item.meals.lunch.map((item, key) => (
                                            <p key={key}>{item}, </p>
                                        ))}<br />
                                    </p>
                                    <p>
                                        저녁: {item.meals.dinner.map((item, key) => (
                                            <p key={key}>{item}, </p>
                                        ))}<br />
                                    </p>
                                    <p>
                                        간식: {item.meals.snack.map((item, key) => (
                                            <p key={key}>{item}, </p>
                                        ))}<br />
                                    </p>
                                    <p>
                                        청소한 장소: {item.records.cleaning.map((item, key) => (
                                            <p key={key}>{item}, </p>
                                        ))}<br />
                                    </p>
                                    <p>
                                        해낸 운동: {item.records.exercise.map((item, key) => (
                                            <p key={key}>{item}, </p>
                                        ))}<br />
                                    </p>
                                </p>
                                <p>{item.diary}</p>
                            </div>
                        </div>
                    ))}
                    <button className="change" onClick={() => { RealEnding() }}><p>드림 파트너 새로 만들기</p></button>
                </div>
            ) : (
                <div className="loading_wrap">
                    <PulseLoader />
                </div>
            )}
        </div>
    )
}

export default Ending