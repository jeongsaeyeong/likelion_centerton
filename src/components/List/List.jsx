import React, { useState } from 'react'
import Logo from '../../assets/img/list/logo.png'
import SeaStar from '../../assets/img/list/seastar.png'
import ListNone from './ListNone'
import ListHave from './ListHave'
import { useNavigate } from 'react-router-dom'
import ListAdd from './ListAdd'

const List = () => {
    const [have, setHave] = useState(true)
    const [write, setWrite] = useState(false)
    const navigation = useNavigate()

    const GoStar = () => {
        navigation('/listall')
    }

    return (
        <div className='List_wrap container'>
            <div className="header">
                <img src={Logo} alt="Logo" onClick={()=>{setHave(!have)}}/>
                <button onClick={() => {GoStar()}}>
                    <img src={SeaStar} alt="SeaStar" />
                </button>
            </div>
            {have ? (
                <ListHave setWrite={setWrite}/>
            ) : (
                <ListNone setWrite={setWrite}/>
            )}
            {write ? (
                <ListAdd setWrite={setWrite}/>
            ) : (
                <></>
            )}
        </div>
    )
}

export default List