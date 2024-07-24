import React, { useState } from 'react'
import Daram from '../../../assets/img/mycharacter/chooseDaram.png'
import ChaMainEat from './ChaMainEat'
import ChaMainClean from './ChaMainClean'
import ChaMainRun from './ChaMainRun'
import ChaMainShower from './ChaMainShower'
import ChaMainGuage from './ChaMainGuage'

const ChaMain = () => {
    const [click, setClick] = useState('');

    const whatclick = (clickName) => {
        console.log(clickName)
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
            <ChaMainGuage />
            <div className="character">
                <div className="name">
                    <p>완람이</p>
                </div>
                <img src={Daram} alt="" />
            </div>
            <div className="active">
                <ChaMainEat click={click} whatclick={whatclick} setClick={setClick} />
                <ChaMainClean click={click} whatclick={whatclick} setClick={setClick} />
                <ChaMainRun click={click} whatclick={whatclick} setClick={setClick} />
                <ChaMainShower click={click} whatclick={whatclick} setClick={setClick} />
            </div>
        </div>
    )
}

export default ChaMain