import React from 'react'
import Create from '../../assets/img/mycharacter/createbtn.png'

const MyChracternone = ({setCreate}) => {
    return (
        <div className='MyChracternone'>
            <div className="header">
                <h2>
                    Dream<br />
                    Catcher
                </h2>
                <button onClick={() => {setCreate(true)}}>
                    <p>
                        드림파트너<br />
                        만들기
                    </p>
                    <img src={Create} alt="Create" />
                </button>
            </div>
        </div>
    )
}

export default MyChracternone