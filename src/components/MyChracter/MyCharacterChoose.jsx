import React, { useState } from 'react'
import Daram from '../../assets/img/mycharacter/chooseDaram.png'
import Dolphin from '../../assets/img/mycharacter/chooseDolphin.png'
import Bird from '../../assets/img/mycharacter/chooseBird.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MyCharacterChoose = ({ setHave }) => {
    const [choose, setChoose] = useState('dolphin');
    const [nick, setNick] = useState('');
    const navigation = useNavigate()

    const CreateCha = () => {
        if (nick === '') {
            alert('이름을 채워주세요!');
            return
        } else {
            axios.post('https://dreamcatcherrr.store/characters/', {
                name: nick,
                type: choose
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then((res) => {
                    if (res.status === 201) {
                        navigation('/mychracter')
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }

    return (
        <div className='MyCharacterChoose_wrap'>
            <input type="text" placeholder='이름' value={nick} onChange={(e) => { setNick(e.target.value) }} />
            <div className="main">
                <div className='chooseback'>
                    <img src={choose === 'dolphin' ? Dolphin : choose === 'parrot' ? Daram : Bird} alt="parrot" />
                </div>
                <div className="choose_list">
                    <div className='list'>
                        <div className="dol" onClick={() => { setChoose('dolphin') }}>
                            <img src={Dolphin} alt="Dolphin" />
                        </div>
                        <div className="bird" onClick={() => { setChoose('squirrel') }}>
                            <img src={Bird} alt="Bird" />
                        </div>
                        <div className="da" onClick={() => { setChoose('parrot') }}>
                            <img src={Daram} alt="Daram" />
                        </div>
                    </div>
                    <div className="background"></div>
                </div>
                <button onClick={() => { CreateCha() }}>완료</button>
            </div>
        </div>
    )
}

export default MyCharacterChoose