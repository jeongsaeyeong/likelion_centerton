import React from 'react'
import Del from '../../../assets/img/mycharacter/delete.svg'

const Memosea = ({ setClick }) => {
    return (
        <div className='Memosea_wrap'>
            <div>
                <button className="delete" onClick={() => { setClick(false) }}><img src={Del} alt="delete" /></button>
                <div className="header">
                    <p className="date">2017년 9월 12일 토요일</p>
                    <p className="date">날씨: 맑음</p>
                </div>
                <div className="main">
                    <p>
                        임시 텍스트 <br />
                        임시 텍스트 <br />
                        임시 텍스트 <br />
                        임시 텍스트 <br />
                        임시 텍스트 <br />
                        임시 텍스트 <br />
                        임시 텍스트 <br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Memosea