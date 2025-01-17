import React, { useEffect, useState } from 'react'
import Daram from '../../../assets/img/mycharacter/chooseDaram.png'
import Dolphin from '../../../assets/img/mycharacter/chooseDolphin.png'
import squirrel from '../../../assets/img/mycharacter/chooseBird.png'
import ChaMainEat from './ChaMainEat'
import ChaMainClean from './ChaMainClean'
import ChaMainRun from './ChaMainRun'
import ChaMainShower from './ChaMainShower'
import ChaMainGuage from './ChaMainGuage'

const ChaMain = ({ data, check, setCheck }) => {
    const URL = 'http://3.25.237.92:8000/'
    const [click, setClick] = useState('');

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
                <ChaMainEat click={click} check={check} setCheck={setCheck} whatclick={whatclick} setClick={setClick} data={data}  URL={URL} />
                <ChaMainClean click={click} check={check} setCheck={setCheck} whatclick={whatclick} setClick={setClick} data={data}  URL={URL} />
                <ChaMainRun click={click} check={check} setCheck={setCheck} whatclick={whatclick} setClick={setClick} data={data}  URL={URL} />
                <ChaMainShower click={click} check={check} setCheck={setCheck} whatclick={whatclick} setClick={setClick} data={data} URL={URL} />
            </div>
        </div>
    )
}

export default ChaMain