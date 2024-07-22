import React, { useState } from 'react'
import MyChracternone from './MyChracternone'
import MyCharacterChoose from './MyCharacterChoose'
import MyCharacterYes from './MyCharacterYes'

const MyChracter = () => {
    const [have, setHave] = useState(false)
    const [create, setCreate] = useState(false)

    return (
        <div className='container'>
            {have ? (
                <MyCharacterYes />
            ) : (
                <>
                    {create ? (
                        <MyCharacterChoose setHave={setHave}/>
                    ) : (
                        <MyChracternone setCreate={setCreate} />
                    )}
                </>
            )}
        </div>
    )
}

export default MyChracter