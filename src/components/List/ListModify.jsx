import React from 'react'
import Delete from '../../assets/img/community/delete.svg'
import ModifyPost from '../../assets/img/community/modifypost.svg'
import axios from 'axios'

const ListModify = ({ modifyshow, setWrite, setModify, item, list, setEverydata, setLifedata }) => {

    const DelList = () => {
        axios.delete(`http://3.25.237.92:8000/board/${list}/${item.id}/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 204) {
                    axios.get(`http://3.25.237.92:8000/`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then((res) => {
                            setEverydata(res.data.everylist)
                            setLifedata(res.data.lifelist)
                            setWrite(false)
                            setModify(false); 
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className={modifyshow ? "modify" : "none"}>
            <button className="postdelete" onClick={() => { DelList() }}>
                <p>삭제하기</p>
                <img src={Delete} alt="Delete" />
            </button>
            <button className="postmodify" onClick={() => { setWrite(true); setModify(false); }}>
                <p>수정하기</p>
                <img src={ModifyPost} alt="ModifyPost" />
            </button>
        </div >
    )
}

export default ListModify