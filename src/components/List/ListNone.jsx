import React from 'react'
import StarBin from '../../assets/img/list/star_bin.svg'
import LightBin from '../../assets/img/list/light_bin.svg'
import Plus from '../../assets/img/list/plus.svg'

const ListNone = ({ setWrite, recom, setText, setWhat }) => {

    const lifeList = [
        '오랜 친구한테 연락하기', '500만원 모으기', '여행가기'
    ]

    return (
        <div className="main">
            <div className="lifelist_wrap">
                <div className="title">
                    <h2 className='title_life'>라이프 리스트</h2>
                </div>
                <div className="lifelist list_wrap">
                    <button className="life" onClick={() => { setWrite(true); setWhat('lifelist') }}>
                        <img src={StarBin} alt="" />
                        <input className='input_life' type="text" placeholder='앞으로 이루고 싶은 목표를 입력해 보세요!' />
                    </button>
                    <div className="setlist">
                        {lifeList.map((life, index) => (
                            <button key={index} className="set" onClick={() => { setWrite(true); setText(life); setWhat('lifelist') }}>
                                <img src={Plus} alt="Plus" />
                                <p>{life}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="everylist_wrap">
                <div className="title">
                    <h2>에브리 리스트</h2>
                </div>
                <div className="everylist list_wrap">
                    <button className="every" onClick={() => { setWrite(true); setWhat('everylist') }}>
                        <img src={LightBin} alt="" />
                        <input type="text" placeholder='오늘 해야 할 일은 무엇인가요?' />
                    </button>
                    <div className="setlist">
                        {recom.map((recom, index) => (
                            <button key={index} className="set" onClick={() => { setWrite(true); setText(recom); setWhat('everylist') }}>
                                <img src={Plus} alt="Plus" />
                                <p>{recom}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListNone