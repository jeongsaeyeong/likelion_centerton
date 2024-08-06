import React, { useEffect, useState } from 'react'
import Back from '../../../assets/img/mycharacter/backbtn.svg'
import Write from '../../../assets/img/mycharacter/write.svg'
import { useNavigate } from 'react-router-dom'
import WriteMemo from './WriteMemo'
import axios from 'axios';
import MeMoList from './MeMoList'
import { PulseLoader } from 'react-spinners'

const MyMemo = () => {
    const URL = 'http://3.25.237.92:8000/'
    const [write, setWrite] = useState(false)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const BackBtn = () => {
        navigate(-1)
    }

    useEffect(() => {
        axios.get(`${URL}characters/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                setData([...res.data]);
                setLoading(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {

    }, [])


    return (
        <div className='MyMemo_wrap container'>
            {loading ? (
                <>
                    <div className="header">
                        <button onClick={() => { BackBtn() }}><img src={Back} alt="" /></button>
                        <h2>기록장</h2>
                    </div>
                    <MeMoList />
                    <button onClick={() => { setWrite(true) }}><img src={Write} alt="" /></button>
                    {write ? (
                        <WriteMemo setWrite={setWrite} data={data} />
                    ) : (
                        <></>
                    )}
                </>
            ) : (
                <PulseLoader />
            )}
        </div>
    )
}

export default MyMemo