import React, { useState } from 'react'
import Back from '../../../assets/img/community/backbtn.svg'
import { useNavigate } from 'react-router-dom';

const CommWrite = () => {
    const [text, setText] = useState('');
    const navigation = useNavigate();

    const subMit = () => {
        if(text === ''){
            alert('내용을 작성해주세요!');
            return
        }
    }

    const GoBack = () => {
        navigation(-1)
    }

    return (
        <div className='Comm_Write_wrap container'>
            <div className="header">
                <button className="delete">
                    <img src={Back} alt="Backbtn" onClick={() => {GoBack()}}/>
                </button>
                <button className="write" onClick={() => {subMit()}}>게시하기</button>
            </div>
            <div className="main">
                <textarea value={text} onChange={(e) => {setText(e.target.value)}} name="content" id="content" placeholder='당신의 하루를 공유해보세요!'></textarea>
                <button>
                    <input type="file" id="file" />
                    <label for="file" class="fileBtn"></label>
                    <input type="file" id="filegif" />
                    <label for="filegif" class="fileBtn gifBtn"></label>
                </button>
            </div>
        </div>
    )
}

export default CommWrite