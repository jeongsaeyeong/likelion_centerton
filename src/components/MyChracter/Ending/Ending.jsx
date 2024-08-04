import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Ending = () => {
    const navigation = useNavigate();

    const Going = () => {
        navigation('/mychracter')
    }

    const data = [
        {
            date: "2024년 7월 13일 토요일",
            weather: "맑음",
            content: "임시 텍스트"
        },
        {
            date: "2024년 7월 13일 토요일",
            weather: "맑음",
            content: "임시 텍스트"
        },
        {
            date: "2024년 7월 13일 토요일",
            weather: "맑음",
            content: "임시 텍스트"
        },
        {
            date: "2024년 7월 13일 토요일",
            weather: "맑음",
            content: "임시 텍스트"
        },
        {
            date: "2024년 7월 13일 토요일",
            weather: "맑음",
            content: "임시 텍스트"
        },
        {
            date: "2024년 7월 13일 토요일",
            weather: "맑음",
            content: "임시 텍스트"
        },

    ];

    useEffect(() => {
        axios.get('http://3.25.237.92:8000/character/ending/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className='Ending_wrap container'>
            <div className="box_wrap">
                {data.map((item, index) => (
                    <div className='box' key={index}>
                        <div className="header">
                            <p className="date">{item.date}</p>
                            <p className="date">날씨: {item.weather}</p>
                        </div>
                        <div className="main">
                            <p>
                                {item.content} <br />
                                {item.content} <br />
                                {item.content} <br />
                                {item.content} <br />
                                {item.content} <br />
                                {item.content} <br />
                                {item.content} <br />
                            </p>
                        </div>
                    </div>
                ))}
                <button className="change" onClick={() => { Going() }}><p>드림 파트너 새로 만들기</p></button>
            </div>
        </div>
    )
}

export default Ending