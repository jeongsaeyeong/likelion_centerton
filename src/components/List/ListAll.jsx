import React, { useState } from 'react'
import Back from '../../assets/img/list/backbtn.svg'
import Star from '../../assets/img/list/star_full.svg'
import { useNavigate } from 'react-router-dom'

const ListAll = () => {
    const [show, setShow] = useState(false)
    const navigation = useNavigate()

    const Goback = () => {
        navigation(-1)
    }

    return (
        <div className='ListAll_wrap container'>
            <div className="header">
                <img src={Back} alt="Back" onClick={() => { Goback() }} />
            </div>
            <div className="main">
                <div className="list_wrap">
                    <div className="list left">
                        <button onClick={() => { setShow(!show) }}>
                            <img src={Star} alt="" />
                            <div className={show ? '' : 'none'}>
                                <p>뜨개 지갑 만들기를 해냈었지!</p>
                            </div>
                        </button>
                        <button className='even'>
                            <img src={Star} alt="" />
                            <div className='none'>
                                <p>뜨개 지갑 만들기를 해냈었지!</p>
                            </div>
                        </button>
                        <button>
                            <img src={Star} alt="" />
                            <div className='none'>
                                <p>뜨개 지갑 만들기를 해냈었지!</p>
                            </div>
                        </button>
                        <button className='even'>
                            <img src={Star} alt="" />
                            <div className='none'>
                                <p>뜨개 지갑 만들기를 해냈었지!</p>
                            </div>
                        </button>
                    </div>
                    <div className="list middle">
                        <button>
                            <img src={Star} alt="" />
                            <div className='none'>
                                <p>뜨개 지갑 만들기를 해냈었지!</p>
                            </div>
                        </button>
                        <button className='even'>
                            <img src={Star} alt="" />
                            <div className='none'>
                                <p>뜨개 지갑 만들기를 해냈었지!</p>
                            </div>
                        </button>
                        <button>
                            <img src={Star} alt="" />
                            <div className='none'>
                                <p>뜨개 지갑 만들기를 해냈었지!</p>
                            </div>
                        </button>
                        <button className='even'>
                            <img src={Star} alt="" />
                            <div className='none'>
                                <p>뜨개 지갑 만들기를 해냈었지!</p>
                            </div>
                        </button>
                    </div>
                    <div className="list right">
                        <button>
                            <img src={Star} alt="" />
                            <div className='none'>
                                <p>뜨개 지갑 만들기를 해냈었지!</p>
                            </div>
                        </button>
                        <button className='even'>
                            <img src={Star} alt="" />
                            <div className='none'>
                                <p>뜨개 지갑 만들기를 해냈었지!</p>
                            </div>
                        </button>
                        <button>
                            <img src={Star} alt="" />
                            <div className='none'>
                                <p>뜨개 지갑 만들기를 해냈었지!</p>
                            </div>
                        </button>
                        <button className='even'>
                            <img src={Star} alt="" />
                            <div className='none'>
                                <p>뜨개 지갑 만들기를 해냈었지!</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListAll