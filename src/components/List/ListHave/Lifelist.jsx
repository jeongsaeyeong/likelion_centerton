import React, { useState } from 'react';
import StarBin from '../../../assets/img/list/star_bin.svg';
import StarFull from '../../../assets/img/list/star_full.svg';
import Plus from '../../../assets/img/list/plus.svg';
import Modify from '../../../assets/img/list/modify.svg';
import ListModify from '../ListModify';

const Lifelist = ({ setEverydata, setLifedata, setWhat, setWrite, lifedata, recom, setText }) => {
    const [clickstar, setClickstar] = useState(false);
    const [modifyIndex, setModifyIndex] = useState(null); // Modify 상태를 위한 인덱스

    return (
        <div className="lifelist_wrap">
            <div className="title">
                <h2 className='title_life'>라이프 리스트</h2>
            </div>
            <div className="lifelist">
                <button className="life" onClick={() => { setWrite(true); setWhat('lifelist'); }}>
                    <img src={StarBin} alt="" />
                    <input className='input_life' type="text" placeholder='앞으로 이루고 싶은 목표를 입력해 보세요!' />
                </button>
                <div className="listAll">
                    {lifedata.length === 0 ? (
                        <div className="setlist">
                            {recom.map((recom, index) => (
                                <div key={index} className="set" onClick={() => { setText(recom); setWrite(true); setWhat('lifelist'); }}>
                                    <img src={Plus} alt="plus icon" />
                                    <p>{recom}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            {lifedata.map((item, index) => (
                                <div className="list" key={index}>
                                    <img src={clickstar ? StarFull : StarBin} alt="" onClick={() => setClickstar(!clickstar)} />
                                    <div>
                                        <p>{item.description}</p>
                                        <img src={Modify} alt="Modify" onClick={() => setModifyIndex(index === modifyIndex ? null : index)} />
                                        <ListModify setEverydata={setEverydata} setLifedata={setLifedata} setWrite={setWrite} modifyshow={index === modifyIndex} setModify={() => setModifyIndex(null)} id={item.id} list={'lifelist'} />
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Lifelist;
