import React, { useState } from 'react'
import Plus from '../../assets/img/list/plus.svg'

const ListMap = ({ setText, recom }) => {
    return (
        <div className="setlist">
            {recom.map((recom, index) => (
                <div
                    key={index}
                    className="set"
                    onClick={() => setText(recom)}
                >
                    <img src={Plus} alt="plus icon" />
                    <p>{recom}</p>
                </div>
            ))}
        </div>
    )
}

export default ListMap