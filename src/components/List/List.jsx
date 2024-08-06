import React, { useEffect, useState } from 'react'
import Logo from '../../assets/img/list/logo.png'
import SeaStar from '../../assets/img/list/seastar.png'
import ListNone from './ListNone'
import ListHave from './ListHave'
import { useNavigate } from 'react-router-dom'
import ListAdd from './ListAdd'
import axios from 'axios'
import { PulseLoader } from 'react-spinners'

const List = () => {
    const URL = 'https://dreamcatcherrr.store/'
    const [loading, setLoading] = useState(false)
    const [have, setHave] = useState(false)
    const [write, setWrite] = useState(false)
    const [everydata, setEverydata] = useState([])
    const [lifedata, setLifedata] = useState([])
    const [cha, setCha] = useState([])
    const [recom, setRecom] = useState([])
    const [text, setText] = useState('')
    const [what, setWhat] = useState('everylist')
    const [choosedata, setChooseData] = useState([])

    const navigation = useNavigate()

    const GoStar = () => {
        navigation('/listall')
    }

    // 리스트가 있는지 확인 
    useEffect(() => {
        axios.get(`${URL}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                setEverydata(res.data.everylist)
                setLifedata(res.data.lifelist)
                setLoading(true)
            })
            .catch((err) => {
                console.log(err)
            })

        axios.get(`${URL}characters/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                setCha([...res.data])
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    // 아무것도 없을 때
    useEffect(() => {
        if (everydata[0] === undefined && lifedata[0] === undefined && cha[0] !== undefined) {
            setHave(false);
        } else {
            setHave(true);
        }

        if (cha[0] !== undefined) {
            axios.post(`${URL}board/recommend/`, {
                "character_id": cha[0].id
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then((res) => {
                    setRecom([...res.data.recommendations.slice(0, 4)])
                    setLoading(true)
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    }, [everydata, lifedata, cha]);

    return (
        <>{loading ? (
            <div className='List_wrap container'>
                <div className="header">
                    <img src={Logo} alt="Logo" onClick={() => { setHave(!have) }} />
                    <button onClick={() => { GoStar() }}>
                        <img src={SeaStar} alt="SeaStar" />
                    </button>
                </div>
                {have ? (
                    <ListHave setChooseData={setChooseData} setWhat={setWhat} setWrite={setWrite} recom={recom} setText={setText} lifedata={lifedata} everydata={everydata} setEverydata={setEverydata} setLifedata={setLifedata}/>
                ) : (
                    <ListNone setWrite={setWrite} recom={recom} setText={setText} text={text} setWhat={setWhat} />
                )}
                {write ? (
                    <ListAdd setChooseData={setChooseData} choosedata={choosedata} setWrite={setWrite} setText={setText} text={text} URL={URL} recom={recom} what={what} setLifedata={setLifedata} setEverydata={setEverydata}/>
                ) : (
                    <></>
                )}
            </div>
        ) : (
            <div className="container loading_wrap">
                <PulseLoader />
            </div>
        )}
        </>
    )
}

export default List