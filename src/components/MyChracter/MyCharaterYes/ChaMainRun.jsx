import React from 'react'
import Run from '../../../assets/img/mycharacter/run.svg'
import RunWhite from '../../../assets/img/mycharacter/runwhite.svg'

const ChaMainRun = ({click, whatclick, setClick }) => {
    return (
        <div>
            <img src={click === 'run' ? RunWhite : Run} alt="" className={click === 'run' ? 'click' : ''} onClick={() => { whatclick('run') }} />
            <div className={click === 'run' ? "" : 'none'}>
                <div className='runbox'>
                    <div>
                        <div>
                            <p>운동 기록:</p>
                            <input type="text" />
                        </div>
                        <div className='btn_box'>
                            <button>상체 20분</button>
                        </div>
                    </div>
                    <button onClick={() => setClick('')}>저장</button>
                </div>
            </div>
        </div>
    )
}

export default ChaMainRun