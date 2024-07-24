import React from 'react'
import goMemo from '../../../assets/img/mycharacter/gomemo.svg'
import { useNavigate } from 'react-router-dom'

const ChaHeader = () => {
    const navigation = useNavigate()

    const GoingMemo = () => {
        navigation('/mymemo');
    }

    return (
        <div className="header">
            <div className="date">
                <p>2024년 7월 17일 수요일</p>
                <p>날씨 : 비</p>
            </div>
            <button className="memo">
                <img src={goMemo} alt="" onClick={() => {GoingMemo()}}/>
            </button>
        </div>
    )
}

export default ChaHeader