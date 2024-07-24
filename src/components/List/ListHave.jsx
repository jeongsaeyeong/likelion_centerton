import React, { useState } from 'react'
import StarBin from '../../assets/img/list/star_bin.svg'
import LightBin from '../../assets/img/list/light_bin.svg'
import StarFull from '../../assets/img/list/star_full.svg'
import LightFull from '../../assets/img/list/light_full.svg'
import Modify from '../../assets/img/list/modify.svg'
import ListModify from './ListModify'

const ListHave = ({ setWrite }) => {
    const [modify, setModify] = useState(false)
    const [clickstar, setClickstar] = useState(false);
    const [clicklight, setClickLight] = useState(false);

    return (
        <div className="main">
            <div className="lifelist_wrap">
                <div className="title">
                    <h2 className='title_life'>라이프 리스트</h2>
                </div>
                <div className="lifelist">
                    <div className="listAll">
                        <div className="list">
                            <img src={clickstar ? StarFull : StarBin} alt="" onClick={() => {setClickstar(!clickstar)}}/>
                            <div>
                                <p>토플 자격증 따기</p>
                                <img src={Modify} alt="Modify" onClick={() => setModify(!modify)} />
                                <ListModify setWrite={setWrite} modifyshow={modify} setModify={setModify}/>
                            </div>
                        </div>
                        <div className="list">
                            <img src={StarBin} alt="" />
                            <div>
                                <p>토플 자격증 따기</p>
                                <img src={Modify} alt="Modify" />
                            </div>
                        </div>
                        <div className="list">
                            <img src={StarBin} alt="" />
                            <div>
                                <p>토플 자격증 따기</p>
                                <img src={Modify} alt="Modify" />
                            </div>
                        </div>
                    </div>
                    <button className="life" onClick={() => { setWrite(true) }}>
                        <img src={StarBin} alt="" />
                        <input className='input_life' type="text" placeholder='앞으로 이루고 싶은 목표를 입력해 보세요!' />
                    </button>
                </div>
            </div>
            <div className="everylist_wrap">
                <div className="title">
                    <h2>에브리 리스트</h2>
                </div>
                <div className="everylist">
                    <div className="listAll">
                        <div className="list">
                            <img src={clicklight ? LightFull : LightBin} alt="" onClick={() => {setClickLight(!clicklight)}}/>
                            <div>
                                <p>토플 자격증 따기</p>
                                <img src={ Modify} alt="Modify" />
                            </div>
                        </div>
                        <div className="list">
                            <img src={LightBin} alt="" />
                            <div>
                                <p>토플 자격증 따기</p>
                                <img src={Modify} alt="Modify" />
                            </div>
                        </div>
                        <div className="list">
                            <img src={LightBin} alt="" />
                            <div>
                                <p>토플 자격증 따기</p>
                                <img src={Modify} alt="Modify" />
                            </div>
                        </div>
                    </div>
                    <button className="life" onClick={() => { setWrite(true) }}>
                        <img src={LightBin} alt="" />
                        <input type="text" placeholder='오늘 해야 할 일은 무엇인가요?' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListHave