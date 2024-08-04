import React, { useEffect, useState } from 'react'
import Eat from '../../../assets/img/mycharacter/eat.svg'
import EatWhite from '../../../assets/img/mycharacter/eatwhite.svg'
import Eatup from '../../../assets/img/mycharacter/eatup.svg'
import axios from 'axios'

const ChaMainEat = ({ click, whatclick, setClick, URL, setCheck, check, data }) => {
    const [eatbox, setEatbox] = useState([])
    const [choose, setChoose] = useState('')
    const [morning, setMorning] = useState(['밥', '국', '찌개', '햄']);
    const [launch, setLaunch] = useState(['밥', '국', '찌개', '햄']);
    const [evening, setEvening] = useState(['밥', '국', '찌개', '햄']);
    const [desert, setDesert] = useState(['밥', '국', '찌개', '햄']);
    const [morninginput, setMorninginput] = useState('');
    const [launchinput, setLaunchinput] = useState('');
    const [eveninginput, setEveninginput] = useState('');
    const [desertinput, setDesertinput] = useState('');
    const [morningkeyword, setMorningkeyword] = useState('');
    const [launchkeyword, setLaunchkeyword] = useState('');
    const [eveningkeyword, setEveningkeyword] = useState('');
    const [desertkeyword, setDeserkeywordt] = useState('');

    const [loading, setLoading] = useState(false)


    const Set = () => {
        if (click === 'eat') {
            setClick('');
            setChoose('')
        } else {
            whatclick('eat');
        }
    }

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const [morningRes, launchRes, eveningRes, desertRes] = await Promise.all([
                    axios.get(`${URL}recommendations/keyword/?keyword=${morninginput}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    }),
                    axios.get(`${URL}recommendations/keyword/?keyword=${launchinput}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    }),
                    axios.get(`${URL}recommendations/keyword/?keyword=${eveningkeyword}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    }),
                    axios.get(`${URL}recommendations/keyword/?keyword=${desertkeyword}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                ]);

                setMorningkeyword([...morningRes.data.foods.slice(0, 2)]);
                setLaunchkeyword([...launchRes.data.foods.slice(0, 2)]);
                setEveningkeyword([...eveningRes.data.foods.slice(0, 2)]);
                setDeserkeywordt([...desertRes.data.foods.slice(0, 2)]);

                setCheck(!check);
                setLoading(true);
            } catch (err) {
                console.log(err);
                setCheck(!check);
                setLoading(false);
            }
        };

        fetchRecommendations();
    }, [morninginput, launchinput, eveninginput, desertinput]);

    return (
        <>
            {loading ? (
                <div>
                    <img src={click === 'eat' ? EatWhite : Eat} alt="" className={click === 'eat' ? 'click' : ''} onClick={() => { Set(); setMorninginput(''); setLaunchinput(''); setEveninginput(''); setDesertinput(''); }} />
                    <div className={click === 'eat' ? "eatbox" : 'none'}>
                        <div>
                            <div>
                                <div className='eat_pbox'>
                                    <p>아침:
                                        {morning.map((mor, key) => (
                                            <em key={key}>{mor} |</em>
                                        ))}
                                    </p>
                                    <div>
                                        <input value={morninginput} onChange={(e) => { setMorninginput(e.target.value) }} type="text" />
                                        <button><img src={Eatup} alt="" /></button>
                                    </div>
                                </div>
                                <div className='btn_box in_eat'>
                                    {morningkeyword.map((mor, key) => (
                                        <button className={choose === mor ? 'full' : ''} key={key} onClick={() => { setMorninginput(mor); setChoose(mor) }}>{mor}</button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className='eat_pbox'>
                                    <p>점심:
                                        {launch.map((mor, key) => (
                                            <em key={key}>{mor} |</em>
                                        ))}
                                    </p>
                                    <div>
                                        <input value={launchinput} onChange={(e) => { setLaunchinput(e.target.value) }} type="text" />
                                        <button><img src={Eatup} alt="" /></button>
                                    </div>
                                </div>
                                <div className='btn_box in_eat'>
                                    {launchkeyword.map((mor, key) => (
                                        <button className={choose === mor ? 'full' : ''} key={key} onClick={() => { setLaunchinput(mor); setChoose(mor) }}>{mor}</button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className='eat_pbox'>
                                    <p>저녁:
                                        {evening.map((mor, key) => (
                                            <em key={key}>{mor} |</em>
                                        ))}
                                    </p>
                                    <div>
                                        <input value={eveninginput} onChange={(e) => { setEveninginput(e.target.value) }} type="text" />
                                        <button><img src={Eatup} alt="" /></button>
                                    </div>
                                </div>
                                <div className='btn_box in_eat'>
                                    {eveningkeyword.map((mor, key) => (
                                        <button className={choose === mor ? 'full' : ''} key={key} onClick={() => { setEveninginput(mor); setChoose(mor) }}>{mor}</button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className='eat_pbox'>
                                    <p>간식:
                                        {desert.map((mor, key) => (
                                            <em key={key}>{mor} |</em>
                                        ))}
                                    </p>
                                    <div>
                                        <input value={desertinput} onChange={(e) => { setDesertinput(e.target.value) }} type="text" />
                                        <button><img src={Eatup} alt="" /></button>
                                    </div>
                                </div>
                                <div className='btn_box in_eat'>
                                    {desertkeyword.map((mor, key) => (
                                        <button className={choose === mor ? 'full' : ''} key={key} onClick={() => { setDesertinput(mor); setChoose(mor) }}>{mor}</button>
                                    ))}
                                </div>
                            </div>
                            <button onClick={() => { Set() }}>저장</button>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>

    )
}

export default ChaMainEat