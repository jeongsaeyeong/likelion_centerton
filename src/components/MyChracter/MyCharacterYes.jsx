import React from 'react'
import goMemo from '../../assets/img/mycharacter/gomemo.svg'
import Daram from '../../assets/img/mycharacter/chooseDaram.png'
import Eat from '../../assets/img/mycharacter/eat.svg'
import Clean from '../../assets/img/mycharacter/clen.svg'
import Run from '../../assets/img/mycharacter/run.svg'
import Shower from '../../assets/img/mycharacter/shawer.svg'

const MyCharacterYes = () => {
    return (
        <div className='MyCharacterYes_wrap'>
            <div className="header">
                <div className="date">
                    <p>2024년 7월 17일 수요일</p>
                    <p>날씨 : 비</p>
                </div>
                <button className="memo">
                    <img src={goMemo} alt="" />
                </button>
            </div>
            <div className="main">
                <div className="guage_wrap">
                    <div className="guage"></div>
                    <div className="percent">60%</div>
                </div>
                <div className="character">
                    <div className="name">
                        <p>완람이</p>
                    </div>
                    <img src={Daram} alt="" />
                </div>
                <div className="active">
                    <button><img src={Eat} alt="" /></button>
                    <button><img src={Clean} alt="" /></button>
                    <button><img src={Run} alt="" /></button>
                    <button><img src={Shower} alt="" /></button>
                </div>
            </div>
            <div className="ending">
                <button>엔딩 보러 가기</button>
            </div>
        </div>
    )
}

export default MyCharacterYes