import React from 'react'
import rightArrow from '../../assets/img/myPage/rightArrow.svg'

const CcQuse1 = () => {
    return (
        <div className='container'>
            <div className='noticeIn_container'>
                <div className='rightArrow'>
                    <img src={rightArrow} />
                </div>
                <span className='textnoti'>나의 캐릭터</span>
                <p className='noTitle'>캐릭터 수정은 어디에서 하나요?</p>
                <div className='no_bar'></div>
                <div className='restP1'>
                    <p >캐릭터 수정은<br /><br /><br /></p>
                    <p>나의 캐릭터 페이지 가장 아래의 ‘드림 파트너 바꾸기’ 버튼을 통해 수정 가능합니다.  <br />
                        <br /><br />
                        일기를 작성하신 경우, 일기장 페이지 맨 아래의 ‘드림 파트너 바꾸기’ 버튼을 통해 수정 가능합니다.  <br /><br />
                    </p>
                </div>

            </div>
        </div>
    )
}

export default CcQuse1
