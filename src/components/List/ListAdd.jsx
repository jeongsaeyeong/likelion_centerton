import React, { useState } from 'react'
import Plus from '../../assets/img/list/plus.svg'
import Time from '../../assets/img/list/time.svg'
import Roof from '../../assets/img/list/roof.svg'
import Memo from '../../assets/img/list/memo.svg'
import AddBtn from '../../assets/img/list/addbtn.svg'
import Nope from '../../assets/img/list/nope.svg'

const ListAdd = ({ setWrite }) => {
    const [allday, setAllday] = useState(false)

    return (
        <div className='ListAdd_wrap'>
            <div>
                <button className='nopebtn' onClick={() => {setWrite(false)}}>
                    <img src={Nope} alt="" />
                </button>
                <input type="text" placeholder='새로 입력' />
                <div className="setlist">
                    <div className="set">
                        <img src={Plus} alt="" />
                        <p>영어 단어 30개 외우기</p>
                    </div>
                    <div className="set">
                        <img src={Plus} alt="" />
                        <p>영어 단어 30개 외우기</p>
                    </div>
                    <div className="set">
                        <img src={Plus} alt="" />
                        <p>영어 단어 30개 외우기</p>
                    </div>
                    <div className="set">
                        <img src={Plus} alt="" />
                        <p>영어 단어 30개 외우기</p>
                    </div>
                </div>
                <div className="timeset">
                    <div>
                        <img src={Time} alt="" />
                        <input type="time" />
                    </div>
                    <button onClick={() => { setAllday(!allday) }} className={allday ? 'all' : ''}>하루종일</button>
                </div>
                <div className="roof">
                    <img src={Roof} alt="" />
                    <p>루틴 등록하기</p>
                </div>
                <div className="memo">
                    <img src={Memo} alt="" />
                    <p>메모</p>
                </div>
                <button className="add">
                    <img src={AddBtn} alt="" />
                </button>
            </div>

        </div>
    )
}

export default ListAdd