import React from 'react'
import ChaHeader from './ChaHeader'
import ChaMain from './ChaMain'
import { useNavigate } from 'react-router-dom'

const MyCharacterYes = ({ data, setCheck, check }) => {
    const navigation = useNavigate();

    const GoEnding = () => {
        navigation('/ending')
    }

    return (
        <div className='MyCharacterYes_wrap'>
            <ChaHeader />
            <ChaMain data={data} setCheck={setCheck} check={check} />
            <div className={data[0].gauge >= 100 ? 'ending' : 'none'} onClick={() => { GoEnding() }}>
                <button>엔딩 보러 가기</button>
            </div>
        </div>
    )
}

export default MyCharacterYes