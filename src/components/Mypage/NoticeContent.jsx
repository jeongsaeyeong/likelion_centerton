import React from 'react';
import rightArrow from '../../assets/img/myPage/rightArrow.svg';
import { useNavigate, useParams } from 'react-router-dom';

const notices = [
    {
        title: "드림캐쳐 개인정보처리방침 개정 안내",
        content: `<p>안녕하세요 드림캐쳐입니다.<br /><br /></p>
                  <p>
                  드림캐쳐 개인정보처리방침이 아래와 같이 변경됨에 따라 변경내역을 공지하오니 참고 바랍니다.<br />
                  <br />
                  <b>개정 일자 :</b> 2024-6-28 부터<br /><br />
                  <b>개정 사유 :</b> 개인정보의 제 3자 제공, 개인정보처리의 위탁, 처리하는 개인정보의 항목, 권익침해 구제 방법 등에 관한 사항 내용 삭제·추가 및 변경에 따른 개인정보 처리방침 개정<br /><br />
                  <b>개인정보 처리방침 버전 :</b> V9.5 → V9.6
                  </p>`,
        date: "2024/06/30"
    },
    {
        title: "알림 관련 안내드립니다.",
        content: `<p>안녕하세요 드림캐쳐입니다.<br /><br /><br /></p>
                  <p>
                  최근 드림캐쳐 커뮤니티에 알림은 뜨나 실제 확인 시, 알림의 내용이 아무것도 확인되지 않으신다는
                  장애 메일이 지속적으로 접수되고 있습니다. <br />
                  <br /><br />
                  이러한 분들의 경우 아래 사항에 해당되시는지 먼저 확인해 보시기 바랍니다.<br /><br /><br />
                  드림캐쳐를 로그아웃 후 앱을 완전히 끄고 재로그인 해 보시기 바랍니다. <br /><br />
                  </p>`,
        date: "2024/05/30"
    }
];

const NoticeContent = () => {
    const { noticenum } = useParams();
    const noticeIndex = parseInt(noticenum, 10);

    const navigate = useNavigate();

    const Back = () => {
        navigate(-1);
    }

    const notice = notices[noticeIndex];

    return (
        <div className='NoticeContent_wrap container'>
            {notice ? (
                <>
                    <button onClick={Back}>
                        <img src={rightArrow} alt="Back" />
                    </button>
                    <div className="header">
                        <span className='tage'>공지사항</span>
                        <h2 className='title'>{notice.title}</h2>
                        <span className='date'>{notice.date}</span>
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{ __html: notice.content }} />
                </>
            ) : (
                <p>공지사항을 찾을 수 없습니다.</p>
            )}
        </div>
    );
}

export default NoticeContent;
