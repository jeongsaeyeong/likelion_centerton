import React, { useState } from 'react'
import Modify from '../../assets/img/community/modify.svg'
import HartFull from '../../assets/img/community/hart_full.svg'
import HartBin from '../../assets/img/community/hart_bin.svg'
import CommunityModify from './CommunityModify'

const CommunityMy = ({ hartclick, setHartClick }) => {
    const [modifyshow, setModifyshow] = useState(false)

    return (
        <>
            <div className="post_box">
                <div className="profile"></div>
                <div className="post">
                    <div className="info">
                        <div>
                            <h3>이불요정</h3>
                            <p>5분</p>
                        </div>
                        <img onClick={() => { setModifyshow(!modifyshow) }} src={Modify} alt="Modify" />
                    </div>
                    <div className="post_text">
                        <p>마이페이지 글</p>
                        <div></div>
                    </div>
                    <div className="like">
                        <img src={hartclick ? HartFull : HartBin} alt="HartBin" onClick={() => { setHartClick((!hartclick)) }} />
                        <p>20</p>
                    </div>
                </div>
                <CommunityModify modifyshow={modifyshow}/>
            </div>
            <div className="post_box">
                <div className="profile"></div>
                <div className="post">
                    <div className="info">
                        <div>
                            <h3>이불요정</h3>
                            <p>5분</p>
                        </div>
                        <img src={Modify} alt="Modify" />
                    </div>
                    <div className="post_text">
                        <p>오늘 에브리스트 다 완수함!</p>
                        <div></div>
                    </div>
                    <div className="like">
                        <img src={HartBin} alt="HartBin" />
                        20
                    </div>
                </div>
            </div>
            <div className="post_box">
                <div className="profile"></div>
                <div className="post">
                    <div className="info">
                        <div>
                            <h3>이불요정</h3>
                            <p>5분</p>
                        </div>
                        <img src={Modify} alt="Modify" />
                    </div>
                    <div className="post_text">
                        <p>오늘 에브리스트 다 완수함!</p>
                        <div></div>
                    </div>
                    <div className="like">
                        <img src={HartBin} alt="HartBin" />
                        20
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommunityMy