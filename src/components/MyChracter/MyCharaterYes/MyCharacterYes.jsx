import React from 'react'
import ChaHeader from './ChaHeader'
import ChaMain from './ChaMain'

const MyCharacterYes = ({ data, setCheck, check }) => {

    return (
        <div className='MyCharacterYes_wrap'>
            <ChaHeader />
            <ChaMain data={data} setCheck={setCheck} check={check} />
            <div className={data[0].gauge === 100 ? 'ending' : 'none'}>
                <button>엔딩 보러 가기</button>
            </div>
        </div>
    )
}

export default MyCharacterYes