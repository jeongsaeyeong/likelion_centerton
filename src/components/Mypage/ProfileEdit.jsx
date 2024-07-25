import React from 'react'
import rightArrow from '../../assets/img/myPage/rightArrow.svg'
import profileImgEdit from '../../assets/img/myPage/proImgEdit.svg'
import '../../assets/sass/section/_profileedit.scss'

const ProfileEdit = () => {
  return (
    <div className='container'>
      <div className='pe_container'>
        <div className='rightArrow'>
          <img src={rightArrow} />
        </div>
        <span>프로필 수정</span>
        <p>저장</p>
      </div>
      <div>
        <img src={profileImgEdit} className='proImgEdit' />
      </div>
      <input type='text'placeholder='해피해피캣' className='idChange' />
    </div>
  )
}

export default ProfileEdit