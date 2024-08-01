import React, { useState } from 'react'
import Daram from '../../../assets/img/mycharacter/chooseDaram.png'
import Dolphin from '../../../assets/img/mycharacter/chooseDolphin.png'
import squirrel from '../../../assets/img/mycharacter/chooseBird.png'
import ChaMainEat from './ChaMainEat'
import ChaMainClean from './ChaMainClean'
import ChaMainRun from './ChaMainRun'
import ChaMainShower from './ChaMainShower'
import ChaMainGuage from './ChaMainGuage'
import axios from 'axios'

const ChaMain = ({ data, check, setCheck }) => {
    const URL = 'http://3.25.237.92:8000/'
    const [click, setClick] = useState('');
    const [yeswash, setYeswash] = useState(false)

    const whatclick = (clickName) => {
        switch (clickName) {
            case 'eat':
                return setClick('eat');
            case 'clean':
                return setClick('clean');
            case 'run':
                return setClick('run');
            case 'shower':
                return setClick('shower');
            default:
                return setClick('');
        }
    }

    // 씻기
    const Wash = () => {
        axios.post(`${URL}journal_entries/`, {
            "character": data[0].id,
            "action_type": "wash",
            "completed": yeswash
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                console.log(res.status)
                setCheck(!check)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="main">
            <ChaMainGuage data={data} />
            <div className="character">
                <div className="name">
                    <p>{data[0].name}</p>
                </div>
                {data[0].type === 'parrot' ? (
                    <img src={Daram} alt="" />
                ) : (<>
                    {data[0].type === 'dolphin' ? (
                        <img src={Dolphin} alt="" />
                    ) : (
                        <img src={squirrel} alt="" />
                    )}</>
                )}
            </div>
            <div className="active">
                <ChaMainEat click={click} whatclick={whatclick} setClick={setClick} />
                <ChaMainClean click={click} whatclick={whatclick} setClick={setClick} />
                <ChaMainRun click={click} whatclick={whatclick} setClick={setClick} />
                <ChaMainShower click={click} whatclick={whatclick} setClick={setClick} setYeswash={setYeswash} Wash={Wash} />
            </div>
        </div>
    )
}

export default ChaMain