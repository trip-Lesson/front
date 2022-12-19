import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div> 

      <div className="header">
          <span></span>
          <span className='header_name'>
            TRIPLOVER
          </span>      
          <span className='header_User'>
              <span className='header_my_page'>
                마이페이지
              </span>
              <span className='header_Login'>
                로그인
              </span>
          </span>
      </div>

      <div className='body'>
        <div className='body_menual'>
          <span className='body_menual_mypage'>마이페이지</span>
          <span className='body_menual_write'>글 작성하기</span>
          <span className='body_menual_write_list'>게시글 리스트</span>
        </div>
        <div className='body_news'>
          <span className='body_news_title'>여행 뉴스</span>
        </div>
        <div className='body_news_contents'>
        
        </div>
      </div>

      <div className='footer'>
        <div className='footer_top5_list'>
          <span className='footer_top5_list_name'>제일 핫한 TOP5 게시물</span>
        </div>
        <div className='footer_top1'>
          <span className='footer_top1_number'>1</span>
          <span className='footer_top1_contents'></span>
          <span className='footer_top1_like'></span>
          <span className='footer_top1_photo'></span>
        </div>
        <div className='footer_top2'>
          <span className='footer_top2_number'>2</span>
          <span className='footer_top2_contents'></span>
          <span className='footer_top2_like'></span>
          <span className='footer_top2_photo'></span>
        </div>
        <div className='footer_top3'>
          <span className='footer_top3_number'>3</span>
          <span className='footer_top3_contents'></span>
          <span className='footer_top3_like'></span>
          <span className='footer_top3_photo'></span>
        </div>
        <div className='footer_top4'>
          <span className='footer_top4_number'>4</span>
          <span className='footer_top4_contents'></span>
          <span className='footer_top4_like'></span>
          <span className='footer_top4_photo'></span>
        </div>
        <div className='footer_top5'>
          <span className='footer_top5_number'>5</span>
          <span className='footer_top5_contents'></span>
          <span className='footer_top5_like'></span>
          <span className='footer_top5_photo'></span>
        </div>
      </div>
    </div>
  );
}

export default App;
