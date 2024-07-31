import React from 'react'
import { useNavigate } from 'react-router-dom'

const ResetOk = () => {
    const navigation = useNavigate();

    const GoingLogin = () => {
        navigation('/login')
    }

    return (
        <div className='ResetOk_wrap container'>
            <div>
                <h2>비밀번호 변경 완료</h2>
                <p>
                    비밀번호 변경이 완료되었습니다.<br />
                    새로운 비밀번호로 로그인 해주세요.
                </p>
                <button onClick={() => { GoingLogin() }}>로그인 하러 가기</button>
            </div>
            <p>
                Dream<br />
                Catcher
            </p>
        </div>
    )
}

export default ResetOk