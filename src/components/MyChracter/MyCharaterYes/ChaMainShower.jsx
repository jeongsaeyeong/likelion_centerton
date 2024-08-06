import React, { useState } from 'react'
import Shower from '../../../assets/img/mycharacter/shawer.svg'
import ShowerWhite from '../../../assets/img/mycharacter/shawerwhite.svg'

const ChaMainShower = ({ click, whatclick, setClick, setYeswash, Wash }) => {
    const [choose, setChoose] = useState('')
    
    const Set = () => {
        if (click === 'shower') {
            setClick('');
            setChoose('')
        } else {
            whatclick('shower');
        }
    }

    return (
        <div>
            <img src={click === 'shower' ? ShowerWhite : Shower} alt="" className={click === 'shower' ? 'click' : ''} onClick={() => { Set() }} />
            <div className={click === 'shower' ? "" : 'none'}>
                <div className='showerbox'>
                    <div>
                        <p>오늘 샤워 했어?:</p>
                        <div>
                            <button className={choose === "yes" ? 'full' : ''} onClick={() => { setYeswash(true); setChoose('yes') }}>응!</button>
                            <button className={choose === "no" ? 'full' : ''} onClick={() => { setYeswash(false); setChoose('no') }}>아니?</button>
                        </div>
                    </div>
                    <button onClick={() => { Wash() }}>저장</button>
                </div>
            </div>
        </div>
    )
}

export default ChaMainShower