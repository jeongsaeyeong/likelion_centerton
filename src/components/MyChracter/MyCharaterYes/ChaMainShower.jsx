import React from 'react'
import Shower from '../../../assets/img/mycharacter/shawer.svg'
import ShowerWhite from '../../../assets/img/mycharacter/shawerwhite.svg'

const ChaMainShower = ({click, whatclick, setClick }) => {
    return (
        <div>
            <img src={click === 'shower' ? ShowerWhite : Shower} alt="" className={click === 'shower' ? 'click' : ''} onClick={() => { whatclick('shower') }} />
            <div className={click === 'shower' ? "" : 'none'}>
                <div className='showerbox'>
                    <div>
                        <p>오늘 샤워 했어?:</p>
                        <div>
                            <button className="yes">응!</button>
                            <button className="no">아니?</button>
                        </div>
                    </div>
                    <button onClick={() => setClick('')}>저장</button>
                </div>
            </div>
        </div>
    )
}

export default ChaMainShower