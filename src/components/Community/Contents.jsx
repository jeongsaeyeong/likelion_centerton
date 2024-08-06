import React from 'react'
import img from '../../assets/img/community/img.svg';
import gif from '../../assets/img/community/gif.svg';
import { Link } from 'react-router-dom';

const Contents = () => {
  return (
    <div className='write-contents container'>
      <div className="header">
        <Link to='/community' className="cancel">취소</Link>
        <button className='submit' type="submit">게시하기</button>
      </div>
      <textarea className='text' placeholder='당신의 하루를 공유해 보세요!'>

      </textarea>
      <div className="add">
        <button className='addimg'>
          <img src={img} alt="img" />
        </button>
        <button className='addgif'>
          <img src={gif} alt="gif" />
        </button>
      </div>
      
    </div>
  )
}

export default Contents
