import Clean from '../../../assets/img/mycharacter/clen.svg'
import CleanWhite from '../../../assets/img/mycharacter/clenwhite.svg'
import React, { useState } from 'react'

const ChaMainClean = ({click, whatclick, setClick }) => {
    const [choose, setChoose] = useState('')

    const Set = () => {
        if (click === 'clean') {
            setClick('');
            setChoose('')
        } else {
            whatclick('clean');
        }
    }

    return (
        <div>
            <img src={click === 'clean' ? CleanWhite : Clean} alt="" className={click === 'clean' ? 'click' : ''} onClick={() => { Set() }} />
            <div className={click === 'clean' ? "" : 'none'}>
                <div className='cleanbox'>
                    <div>
                        <div>
                            <p>청소 구역:</p>
                            <input type="text" />
                        </div>
                        <div className='btn_box'>
                            <button>화장실</button>
                            <button>부엌</button>
                        </div>
                    </div>
                    <button onClick={() => {}}>저장</button>
                </div>
            </div>
        </div>
    )
}

export default ChaMainClean