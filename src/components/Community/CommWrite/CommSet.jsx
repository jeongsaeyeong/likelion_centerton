import React, { useState, useEffect } from 'react';
import Back from '../../../assets/img/community/backbtn.svg';
import del from '../../../assets/img/community/del.png';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CommSet = () => {
    const [text, setText] = useState('');
    const [img, setImg] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);
    const navigate = useNavigate();
    const { postId } = useParams();

    useEffect(() => {
        axios.get(`http://3.25.237.92:8000/post/${postId}/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    setText(res.data.content);
                    if (res.data.image) {
                        setCurrentImage(res.data.image);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [postId]);

    const patchSubmit = () => {
        if (text === '') {
            alert('내용을 작성해주세요!');
            return;
        }

        const formData = new FormData();
        formData.append('content', text);
        if (img) {
            formData.append('image', img);
        }

        axios.patch(`http://3.25.237.92:8000/post/update/${postId}/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res);
                    navigate(-1);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const ImageChange = (e) => {
        setImg(e.target.files[0]);
        if (e.target.files[0]) {
            const url = URL.createObjectURL(e.target.files[0]);
            setCurrentImage(url);
        } else {
            setCurrentImage(null);
        }
    };

    const ImageRemove = () => {
        setCurrentImage(null);
        setImg(null);
    };

    const GoBack = () => {
        navigate(-1);
    };

    return (
        <div className='CommSet container'>
            <div className="header">
                <button className="delete" onClick={GoBack}>
                    <img src={Back} alt="Backbtn" />
                </button>
                <button className="write" onClick={patchSubmit}>수정하기</button>
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
                    {currentImage && (
                        <>
                            <img src={currentImage} alt="Current" />
                            <button onClick={ImageRemove}><img src={del} alt="삭제" /></button>
                        
                        </>
                    )}
                </div>
                <button>
                    <input type="file" id="file" onChange={ImageChange} />
                    <label htmlFor="file" className="fileBtn"></label>
                    <input type="file" id="filegif" onChange={ImageChange} />
                    <label htmlFor="filegif" className="fileBtn gifBtn"></label>
                </button>
            </div>
        </div>
    );
}

export default CommSet;
