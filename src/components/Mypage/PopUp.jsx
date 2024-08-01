import React from 'react';

const PopUp = ({ onClose }) => {
    return (
        <div className='popup_wrap'>
            <div className='popup'>
                <p className='text'>정말로 회원 탈퇴하시겠습니까?</p>
                <div className='buttons'>
                    <button className='yes' onClick={() => alert('회원 탈퇴 처리')}>
                        네
                    </button>
                    <button className='no' onClick={onClose}>
                        아니요
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
