import React, { useState } from 'react'
import LightBin from '../../../assets/img/list/light_bin.svg'
import LightFull from '../../../assets/img/list/light_full.svg'
import Plus from '../../../assets/img/list/plus.svg'
import Modify from '../../../assets/img/list/modify.svg'
import ListModify from '../ListModify'

const Evelist = ({ setEverydata, setLifedata, setWhat, setWrite, everydata, recom, setText }) => {
    const [clicklight, setClickLight] = useState(false);
    const [modifyIndex, setModifyIndex] = useState(null); // Modify 상태를 위한 인덱스

    return (
        <div className="everylist_wrap">
            <div className="title">
                <h2>에브리 리스트</h2>
            </div>
            <div className="everylist">
                <button className="life" onClick={() => { setWrite(true); setWhat('everylist'); }}>
                    <img src={LightBin} alt="" />
                    <input type="text" placeholder='오늘 해야 할 일은 무엇인가요?' />
                </button>
                <div className="listAll">
                    {everydata.length === 0 ? (
                        <div className="setlist">
                            {recom.map((recom, index) => (
                                <div key={index} className="set" onClick={() => { setText(recom); setWrite(true); setWhat('everylist'); }} >
                                    <img src={Plus} alt="plus icon" />
                                    <p>{recom}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            {everydata.map((item, index) => (
                                <div className="list" key={index}>
                                    <img src={clicklight ? LightFull : LightBin} alt="" onClick={() => setClickLight(!clicklight)} />
                                    <div>
                                        <p>{item.task}</p>
                                        <img src={Modify} alt="Modify" onClick={() => setModifyIndex(index === modifyIndex ? null : index)} />
                                        <ListModify setEverydata={setEverydata} setLifedata={setLifedata} setWrite={setWrite} modifyshow={index === modifyIndex} setModify={() => setModifyIndex(null)} id={item.id} list={'everylist'} />
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Evelist;
