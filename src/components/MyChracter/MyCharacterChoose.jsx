import React, { useState } from 'react'
import Daram from '../../assets/img/mycharacter/chooseDaram.png'
import Dolphin from '../../assets/img/mycharacter/chooseDolphin.png'
import Bird from '../../assets/img/mycharacter/chooseBird.png'

const MyCharacterChoose = ({setHave}) => {
    const [choose, setChoose] = useState('dolphin');
    const [nick, setNick] = useState('');

    const CreateCha = () => {
        if(nick === ''){
            alert('이름을 채워주세요!');
            return
        } else {
            setHave(true);
        }
    }

    return (
        <div className='MyCharacterChoose_wrap'>
            <input type="text" placeholder='이름' value={nick} onChange={(e) => {setNick(e.target.value)}}/>
            <div className="main">
                <div className='chooseback'>
                    <img src={choose === 'dolphin' ? Dolphin : choose === 'daram' ? Daram : Bird} alt="Daram" />
                </div>
                <div className="choose_list">
                    <div className='list'>
                        <div className="dol" onClick={() => {setChoose('dolphin')}}>
                            <img src={Dolphin} alt="Dolphin" />
                        </div>
                        <div className="bird" onClick={() => {setChoose('bird')}}>
                            <img src={Bird} alt="Bird" />
                        </div>
                        <div className="da" onClick={() => {setChoose('daram')}}>
                            <img src={Daram} alt="Daram" />
                        </div>
                    </div>
                    <div className="background"></div>
                </div>
                <button onClick={() => {CreateCha()}}>완료</button>
            </div>
        </div>
    )
}

export default MyCharacterChoose