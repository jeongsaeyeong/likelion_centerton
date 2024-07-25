import React from 'react';
import '../../assets/sass/section/_popup.scss'

const PopUp = ({ onClose }) => {
    return (
        <div className='container'>
            <div className='overlay'>
                <div className='popup'>
                    <p className='text'>정말로 회원 탈퇴하시겠습니까?</p>
                    <div className='bar1'></div>
                    <div className='buttons'>
                        <button className='button' onClick={() => alert('회원 탈퇴 처리')}>
                            네
                        </button>
                        <div className='bar2'></div>
                        <button className='button' onClick={onClose}>
                            아니요
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// const styles = {
//   overlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   popup: {
//     backgroundColor: 'white',
//     padding: '20px',
//     borderRadius: '10px',
//     textAlign: 'center',
//     boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//   },
//   text: {
//     marginBottom: '20px',
//   },
//   buttons: {
//     display: 'flex',
//     justifyContent: 'space-around',
//   },
//   button: {
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px',
//   },
// };

export default PopUp;
