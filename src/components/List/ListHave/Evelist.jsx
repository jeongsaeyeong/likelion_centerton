import React, { useState } from 'react'
import LightBin from '../../../assets/img/list/light_bin.svg'
import LightFull from '../../../assets/img/list/light_full.svg'
import Plus from '../../../assets/img/list/plus.svg'
import Modify from '../../../assets/img/list/modify.svg'
import ListModify from '../ListModify'
import axios from 'axios'

const Evelist = ({ setChooseData, setEverydata, setLifedata, setWhat, setWrite, everydata, recom, setText }) => {
    const [clicklight, setClickLight] = useState(everydata.map(() => false));
    const [modifyIndex, setModifyIndex] = useState(null);

    const toggleLight = (index) => {
        const newClickLight = [...clicklight];
        newClickLight[index] = !newClickLight[index];
        setClickLight(newClickLight);
        Change(index);
    };

    const Change = (index) => {
        const item = everydata[index];
        const updatedCompletedStatus = !item.completed;

        axios.put(`https://dreamcatcherrr.store/board/everylist/${item.id}/`,
            {
                task: item.task,
                due_date: item.due_date,
                due_time: item.due_time,
                completed: updatedCompletedStatus
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
        )
            .then((res) => {
                const updatedEverydata = [...everydata];
                updatedEverydata[index] = { ...item, completed: updatedCompletedStatus };
                setEverydata(updatedEverydata);
            })
            .catch((err) => {
                console.log(err);
            });
    }

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
                                    <img
                                        src={item.completed ? LightFull : LightBin}
                                        alt=""
                                        onClick={() => toggleLight(index)}
                                    />
                                    <div>
                                        <p>{item.task}</p>
                                        <img src={Modify} alt="Modify" onClick={() => setModifyIndex(index === modifyIndex ? null : index)} />
                                        <ListModify setWhat={setWhat} setChooseData={setChooseData} setText={setText} setEverydata={setEverydata} setLifedata={setLifedata} setWrite={setWrite} modifyshow={index === modifyIndex} setModify={() => setModifyIndex(null)} item={item} list={'everylist'} />
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
