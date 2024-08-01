import React from 'react'

const ChaMainGuage = ({ data }) => {
    const fillPercentage = Math.min(Math.max(data[0].gauge, 0), 100);

    return (
        <div className="guage_wrap">
            <div className="guage">
                <div className="guage_fill" style={{ height: `${fillPercentage}%` }}></div>
            </div>
            <div className="percent">{`${fillPercentage}%`}</div>
        </div>
    )
}

export default ChaMainGuage