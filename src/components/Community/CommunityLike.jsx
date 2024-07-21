import React from 'react'
import Declaration from '../../assets/img/community/declaration.svg'
import HartFull from '../../assets/img/community/hart_full.svg'
import HartBin from '../../assets/img/community/hart_bin.svg'

const CommunityLike = ({ hartclick, setHartClick, setShowDe }) => {
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
                        <img onClick={() => { setShowDe(true); }} src={Declaration} alt="Declaration" />
                    </div>
                    <div className="post_text">
                        <p>좋아요 페이지</p>
                        <div></div>
                    </div>
                    <div className="like">
                        <img src={hartclick ? HartFull : HartBin} alt="HartBin" onClick={() => { setHartClick((!hartclick)) }} />
                        <p>20</p>
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
                        <img src={Declaration} alt="Declaration" />
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
                        <img src={Declaration} alt="Declaration" />
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

export default CommunityLike