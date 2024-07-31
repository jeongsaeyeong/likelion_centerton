import React, { useState } from 'react';
import StarBin from '../../../assets/img/list/star_bin.svg';
import StarFull from '../../../assets/img/list/star_full.svg';
import Plus from '../../../assets/img/list/plus.svg';
import Modify from '../../../assets/img/list/modify.svg';
import ListModify from '../ListModify';
import axios from 'axios';

const Lifelist = ({setChooseData, setEverydata, setLifedata, setWhat, setWrite, lifedata, recom, setText }) => {
    const [clickedStars, setClickedStars] = useState(lifedata.map(() => false));
    const [modifyIndex, setModifyIndex] = useState(null);

    const lifeList = [
        '오랜 친구한테 연락하기', '500만원 모으기', '여행가기'
    ]

    const toggleStar = (index) => {
        const newClickedStars = [...clickedStars];
        newClickedStars[index] = !newClickedStars[index];
        setClickedStars(newClickedStars);
        Change(index);
    };

    const Change = (index) => {
        const item = lifedata[index];
        const updatedCompletedStatus = !item.completed;

        axios.put(`http://3.25.237.92:8000/board/lifelist/${item.id}/`,
            {
                goal: item.goal,
                description: item.description,
                target_date: item.target_date,
                target_time: item.target_time,
                completed: updatedCompletedStatus
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
        )
            .then((res) => {
                const updatedLifedata = [...lifedata];
                updatedLifedata[index] = { ...item, completed: updatedCompletedStatus };
                setLifedata(updatedLifedata);
            })
            .catch((err) => {
                console.log(err);
            });
    }

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
                            {lifeList.map((lifeList, index) => (
                                <div key={index} className="set" onClick={() => { setText(lifeList); setWrite(true); setWhat('lifelist'); }}>
                                    <img src={Plus} alt="plus icon" />
                                    <p>{lifeList}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            {lifedata.map((item, index) => (
                                <div className="list" key={index}>
                                    <img
                                        src={item.completed ? StarFull : StarBin}
                                        alt=""
                                        onClick={() => toggleStar(index)}
                                    />
                                    <div>
                                        <p>{item.description}</p>
                                        <img src={Modify} alt="Modify" onClick={() => setModifyIndex(index === modifyIndex ? null : index)} />
                                        <ListModify setChooseData={setChooseData} setText={setText} setEverydata={setEverydata} setLifedata={setLifedata} setWrite={setWrite} modifyshow={index === modifyIndex} setModify={() => setModifyIndex(null)} item={item} list={'lifelist'} />
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
