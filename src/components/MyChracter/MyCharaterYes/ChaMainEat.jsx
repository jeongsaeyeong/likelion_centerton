import React from 'react'
import Eat from '../../../assets/img/mycharacter/eat.svg'
import EatWhite from '../../../assets/img/mycharacter/eatwhite.svg'

const ChaMainEat = ({ click, whatclick, setClick }) => {
    return (
        <div>
            <img src={click === 'eat' ? EatWhite : Eat} alt="" className={click === 'eat' ? 'click' : ''} onClick={() => { whatclick('eat') }} />
            <div className={click === 'eat' ? "eatbox" : 'none'}>
                <div>
                    <div>
                        <div>
                            <p>아침:</p>
                            <input type="text" placeholder='식빵과 버터, 우유' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>점심:</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>저녁:</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>간식:</p>
                            <input type="text" />
                        </div>
                    </div>

                    <button onClick={() => setClick('')}>저장</button>
                </div>
            </div>
        </div>
    )
}

export default ChaMainEat