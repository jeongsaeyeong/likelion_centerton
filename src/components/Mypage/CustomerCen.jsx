import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import rightArrow from '../../assets/img/myPage/rightArrow.svg'
import searchImg from '../../assets/img/myPage/search.svg'
import qImg from '../../assets/img/myPage/Q.svg'
import ccLeft from '../../assets/img/myPage/ccLeftArrow.svg'

const CustomerCen = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate();

    const handleccq1 = () => {
        navigate('/ccques1');
    };

    const Back = () => {
        navigate(-1)
    }

    return (
        <div className='CustomerCen_wrap container'>
            <div className="header">
                <button className='cc_ra_img' onClick={() => {Back()}}>
                    <img src={rightArrow} />
                </button>
                <h2>고객센터</h2>
            </div>
            <div className="main">
                <div className="search">
                    <h3>
                        해피해피캣님,<br />
                        무엇을 도와드릴까요?
                    </h3>
                    <div className='searchBar'>
                        <img src={searchImg} />
                        <input type='text' value={search} onChange={(e) => {setSearch(e.target.value)}}/>
                    </div>
                </div>
                <div className="quik">
                    <h3>여기서 빠르게 해결하세요</h3>
                    <div className='solveBox' onClick={() => { handleccq1() }}>
                        <div>
                            <img src={qImg} className='qImg' />
                            <p>캐릭터 수정은 어디에서 하나요?</p>
                        </div>
                        <img src={ccLeft} className='ccLeft' />
                    </div>
                    <div className='solveBox'>
                        <div>
                            <img src={qImg} className='qImg' />
                            <p>커뮤니티 글의 이미지가 안 보여요.</p>
                        </div>
                        <img src={ccLeft} className='ccLeft' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerCen
