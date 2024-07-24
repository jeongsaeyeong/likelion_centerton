import React, { useState } from 'react'
import Back from '../../../assets/img/mycharacter/backbtn.svg'
import Star01 from '../../../assets/img/mycharacter/star01.png'
import Star02 from '../../../assets/img/mycharacter/star02.png'
import Star03 from '../../../assets/img/mycharacter/star03.png'
import Star04 from '../../../assets/img/mycharacter/star04.png'

const MyMemo = () => {
    const [click, setClick] = useState(false)

    return (
        <div className='MyMemo_wrap container'>
            <div className="header">
                <button><img src={Back} alt="" /></button>
                <h2>기록장</h2>
            </div>
            <div className="memolist">
                <div className='memo'>
                    <div onClick={() => {setClick(true)}}>
                        <img src={Star01} alt="" />
                        <p>7월 13일</p>
                    </div>
                    <div>
                        <img src={Star02} alt="" />
                        <p>7월 14일</p>
                    </div>
                    <div>
                        <img src={Star03} alt="" />
                        <p>7월 15일</p>
                    </div>
                    <div>
                        <img src={Star04} alt="" />
                        <p>7월 16일</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyMemo