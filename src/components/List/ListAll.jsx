import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Back from '../../assets/img/list/backbtn.svg';
import Star from '../../assets/img/list/star_full.svg';
import { useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

const ListAll = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [show, setShow] = useState([]);
    const [loading, setLoading] = useState(false)

    const Goback = () => {
        navigate(-1);
    }

    useEffect(() => {
        axios.get('http://3.25.237.92:8000/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                const combinedList = [...res.data.everylist, ...res.data.lifelist];
                const filteredList = combinedList.filter(item => item.completed);
                const formattedList = filteredList.map((item, index) => ({
                    id: item.id,
                    text: [item.task, item.goal].filter(Boolean).join(' - '),
                    even: index % 2 === 0,
                }));
                setList(formattedList);
                setShow(Array(formattedList.length).fill(false));
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err);
            });
    }, []);

    const toggleShow = (index) => {
        const newShow = [...show];
        newShow[index] = !newShow[index];
        setShow(newShow);
    };

    return (
        <div className='ListAll_wrap container'>
            {loading ? (
                <>
                    <div className="header">
                        <img src={Back} alt="Back" onClick={Goback} />
                    </div>
                    <div className="main">
                        <div className="list_wrap">
                            {['left', 'middle', 'right'].map((section, sectionIndex) => (
                                <div className={`list ${section}`} key={section}>
                                    {list.slice(sectionIndex * 4, sectionIndex * 4 + 4).map((item, index) => {
                                        const isLastInSection = (sectionIndex * 4 + index) === Math.min(list.length - 1, (sectionIndex + 1) * 4 - 1);
                                        return (
                                            <button key={item.id} className={item.even ? 'even' : ''} onClick={() => toggleShow(sectionIndex * 4 + index)}>
                                                <img src={Star} alt="" />
                                                <div className={`${show[sectionIndex * 4 + index] ? '' : 'none'} ${isLastInSection ? 'center' : ''}`}>
                                                    <p>{item.text}를 해냈었지!</p>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <PulseLoader />
            )}
        </div>
    );
}

export default ListAll;
