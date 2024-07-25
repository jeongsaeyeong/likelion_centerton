import React from 'react'
import Delete from '../../assets/img/community/delete.svg'
import ModifyPost from '../../assets/img/community/modifypost.svg'

const ListModify = ({modifyshow, setWrite, setModify}) => {
    return (
        <div className={modifyshow ? "modify" : "none"}>
            <button className="postdelete">
                <p>삭제하기</p>
                <img src={Delete} alt="Delete" />
            </button>
            <button className="postmodify" onClick={() => {setWrite(true); setModify(false)}}>
                <p>수정하기</p>
                <img src={ModifyPost} alt="ModifyPost" />
            </button>
        </div >
    )
}

export default ListModify