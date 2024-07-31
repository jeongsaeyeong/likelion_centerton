import React, { useEffect, useState } from 'react'
import InputEmail from './InputEmail';
import ResetPass from './ResetPass';

const FindPass = () => {
    const [email, setEmail] = useState('')
    const [change, setChange] = useState(false)

    return (
        <div className='FindPass_wrap container'>
            {change ? (
                <ResetPass setChange={setChange} setEmail={setEmail} email={email}/>
            ) : (
                <InputEmail setChange={setChange} email={email} setEmail={setEmail} />
            )}
        </div>
    )
}

export default FindPass