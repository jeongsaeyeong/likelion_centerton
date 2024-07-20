import React, { useState } from 'react'
import List from '../../assets/img/nav/list.svg'
import Chracter from '../../assets/img/nav/mychracter.svg'
import Community from '../../assets/img/nav/community.svg'
import Mypage from '../../assets/img/nav/mypage.svg'

import ListClick from '../../assets/img/nav/listclick.svg'
import ChracterClick from '../../assets/img/nav/mychracterclick.svg'
import CommunityClick from '../../assets/img/nav/communityclick.svg'
import MypageClick from '../../assets/img/nav/mypageclick.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [check, setCheck] = useState('community');

    return (
        <div className='Nav_wrap'>
            <Link to={'/list'} className='nav' onClick={() => { setCheck('list') }}>
                <img src={check === 'list' ? ListClick : List} alt="List" />
                <p>리스트</p>
            </Link>
            <Link to={'/mychracter'} className='nav' onClick={() => {setCheck('mychracter')}}>
                <img src={check === 'mychracter' ?  ChracterClick : Chracter} alt="Chracter" />
                <p>나의 캐릭터</p>
            </Link>
            <Link to={'/community'} className='nav' onClick={() => {setCheck('community')}}>
                <img src={check === 'community' ?  CommunityClick : Community} alt="Community" />
                <p>커뮤니티</p>
            </Link>
            <Link to={'/mypage'} className='nav' onClick={() => {setCheck('mypage')}}>
                <img src={check === 'mypage' ?  MypageClick : Mypage} alt="Mypage" />
                <p>마이페이지</p>
            </Link>
        </div>
    )
}

export default Nav