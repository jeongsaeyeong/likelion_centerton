import React, { useState, useEffect } from 'react';
import Back from '../../../assets/img/community/backbtn.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import del from '../../../assets/img/community/del.png';

const CommWrite = () => {
    const [text, setText] = useState('');
    const [img, setImg] = useState(null);
    const [imgUrl, setImgUrl] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            if (imgUrl) {
                URL.revokeObjectURL(imgUrl);
            }
        };
    }, [imgUrl]);

    const postSubmit = () => {
        if (text === '') {
            alert('내용을 작성해주세요!');
            return;
        }

        const formData = new FormData();
        formData.append('content', text);
        if (img) {
            formData.append('image', img);
        }

        axios.post('http://3.25.237.92:8000/post/create/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 201) {
                    console.log(res);
                    navigate('/');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const ImageRemove = () => {
        setImgUrl(null);
        
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImg(file);

        if (file) {
            const url = URL.createObjectURL(file);
            setImgUrl(url);
        } else {
            setImgUrl(null);
        }
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
                 <div className="image-preview">
                    {imgUrl && (
                        <>
                            <img src={imgUrl} alt="Current" />
                            <button onClick={ImageRemove}><img src={del} alt="삭제" /></button>
                        
                        </>
                    )}
                </div>
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
