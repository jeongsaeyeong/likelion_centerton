import React from 'react'

const CommunityPop = ({ showDe, setShowDe }) => {
    return (
        <div className={showDe ? "popup" : "none"}>
            <div>
                <button className="decla">신고하기</button>
                <button className="nope" onClick={() => { setShowDe(false) }}>취소</button>
            </div>
        </div>
    )
}

export default CommunityPop