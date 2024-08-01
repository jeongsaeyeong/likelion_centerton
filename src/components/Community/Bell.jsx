import React from 'react'
import Back from '../../assets/img/community/backbtn.svg'
import HartFull from '../../assets/img/community/hart_full.svg'
import { useNavigate } from 'react-router-dom'

const Bell = () => {
    const navigation = useNavigate();

    const GoBack = () => {
        navigation(-1)
    }

    return (
        <div className='Bell_wrap container'>
            <div className="header">
                <img src={Back} alt="Backbtn" onClick={() => {GoBack()}}/>
                <h2>알림</h2>
            </div>
            <div className="main">
                <div className="like">
                    <img src={HartFull} alt="HartFull" />
                    <div>
                        <div className="people">
                            <div></div>
                            <div></div>
                        </div>
                        <p className="info">
                            <em>물고기</em>님과 <em>설탕토마토</em>님이 내 게시물을 좋아합니다.
                        </p>
                        <p className="text">
                            알바 다녀와서 밥도 못 먹었다.
                            씻기 너무 귀찮다.
                            그래도 오늘 부지런하게 살았네
                            내일은 늦잠 자야지.
                        </p>
                    </div>
                </div>
                <div className="like">
                    <img src={HartFull} alt="HartFull" />
                    <div>
                        <div className="people">
                            <div></div>
                        </div>
                        <p className="info">
                            <em>물고기</em>님이 내 게시물을 좋아합니다.
                        </p>
                        <p className="text">
                            알바 다녀와서 밥도 못 먹었다.
                            씻기 너무 귀찮다.
                            그래도 오늘 부지런하게 살았네
                            내일은 늦잠 자야지.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bell