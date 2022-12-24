import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  
  function Login_Button(){
      navigate('/login')
  }
  function Mypage_Button(){
    navigate('/mypage')
  }
  return (
    <div> 
      <div className="header">
          <span></span>
          <span className='header_name'>
            TRIPLOVER
          </span>      
          <span className='header_User'>
              <span className='header_my_page' onClick={Mypage_Button}>
                마이페이지
              </span>
              <span onClick={Login_Button} className='header_Login'>
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
       
      </div>
    </div>
  );
}

export default Home;