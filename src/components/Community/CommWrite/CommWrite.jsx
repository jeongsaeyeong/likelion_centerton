import React, { useState } from 'react';
import Back from '../../../assets/img/community/backbtn.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CommWrite = () => {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('제목');
    const [img, setImg] = useState(null);
    const navigate = useNavigate();

    const postSubmit = () => {
        if (text === '') {
            alert('내용을 작성해주세요!');
            return;
        }
        else{
            axios.post('http://3.25.237.92:8000/post/create/', {
                title : title,
                content: text,
                image: img
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then((res) => {
                    if (res.status === 201) {
                        navigate('/');
                    }
                })
                .catch((err) => {
    
                    console.log(err);
    
                });
        }

       
    };

    const handleImageChange = (e) => {
        setImg(e.target.files[0]);
    };

    const GoBack = () => {
        navigate(-1);
    };

    return (
        <div className='Comm_Write_wrap container'>
            <div className="header">
                <button className="delete">
                    <img src={Back} alt="Backbtn" onClick={GoBack} />
                </button>
                <button className="write" onClick={postSubmit}>게시하기</button>
            </div>
            <div className="main">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    name="content"
                    id="content"
                    placeholder='당신의 하루를 공유해보세요!'
                ></textarea>
                <button>
                    <input type="file" id="file" onChange={handleImageChange} />
                    <label htmlFor="file" className="fileBtn"></label>
                    <input type="file" id="filegif" onChange={handleImageChange} />
                    <label htmlFor="filegif" className="fileBtn gifBtn"></label>
                </button>
            </div>
        </div>
    );
}

export default CommWrite;
