import React from 'react';
import rightArrow from '../../assets/img/myPage/rightArrow.svg';
import { useNavigate, useParams } from 'react-router-dom';

const cuscens = [
    {
        category: '나의 캐릭터',
        title: "캐릭터 수정은 어디에서 하나요?",
        content: `<p>캐릭터 수정은<br /><br /><br /></p>
        <p>나의 캐릭터 페이지 가장 아래의 ‘드림 파트너 바꾸기’ 버튼을 통해 수정 가능합니다.  <br />
            <br /><br />
            일기를 작성하신 경우, 일기장 페이지 맨 아래의 ‘드림 파트너 바꾸기’ 버튼을 통해 수정 가능합니다.  <br /><br />
        </p>`,
    },
    {
        category: '커뮤니티',
        title: "커뮤니티 글의 이미지가 안 보여요.",
        content: `<p>커뮤니티 글의 이미지가 안 보이는 문제는<br /></p>
        <p>휴대폰의 최신 업데이트가 되지 않은 경우 발생하는 문제입니다.  <br />
          <br />휴대폰 업데이트 후, 어플을 다시 한번 켜 보시기 바랍니다. <br /><br />
        </p>`,
    }
];

const CusCenContent = () => {
    const { cuscennum } = useParams();
    const cuscenIndex = parseInt(cuscennum, 10);

    const navigate = useNavigate();

    const Back = () => {
        navigate(-1);
    };

    const cuscen = cuscens[cuscenIndex];

    return (
        <div className='NoticeContent_wrap container'>
            {cuscen ? (
                <>
                    <button onClick={Back}>
                        <img src={rightArrow} alt="Back" />
                    </button>
                    <div className="header">
                        <span className='tage'>{cuscen.category}</span>
                        <h2 className='title'>{cuscen.title}</h2>
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{ __html: cuscen.content }} />
                </>
            ) : (
                <p>찾을 수 없습니다.</p>
            )}
        </div>
    );
};

export default CusCenContent;