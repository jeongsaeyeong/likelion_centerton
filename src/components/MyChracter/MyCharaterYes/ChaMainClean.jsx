import Clean from '../../../assets/img/mycharacter/clen.svg'
import CleanWhite from '../../../assets/img/mycharacter/clenwhite.svg'
import React from 'react'

const ChaMainClean = ({click, whatclick, setClick }) => {
    return (
        <div>
            <img src={click === 'clean' ? CleanWhite : Clean} alt="" className={click === 'clean' ? 'click' : ''} onClick={() => { whatclick('clean') }} />
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
                    <button onClick={() => setClick('')}>저장</button>
                </div>
            </div>
        </div>
    )
}

export default ChaMainClean