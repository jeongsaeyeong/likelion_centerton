import React from 'react'
import ChaHeader from './ChaHeader'
import ChaMain from './ChaMain'

const MyCharacterYes = () => {
    return (
        <div className='MyCharacterYes_wrap'>
            <ChaHeader />
            <ChaMain />
            <div className="ending">
                <button>엔딩 보러 가기</button>
            </div>
        </div>
    )
}

export default MyCharacterYes