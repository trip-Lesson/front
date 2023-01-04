import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Home({poststatus,modifystatus} : any) {
  const navigate = useNavigate()
  const [login,setLogin] = useState("로그인")
  
  useEffect(()=>{
    if(poststatus === 201){
      setLogin("로그아웃")
    }
  },[])

  function Login_Button(){
    if(login === "로그인"){ 
      navigate('/login')
    }
    if(login === "로그아웃"){
      setLogin("로그인")
      modifystatus(10)
    }
  }
  function Mypage_Button(){
    if(poststatus === 201){
    navigate('/mypage')
    }else{
      alert("로그인 후 이용해주세요")
      navigate("/login")
    }
  }
  function go_mypage(){
    navigate("/mypage")
  }
  function go_write(){
    if(poststatus === 201){
      navigate('/write')
    }else{
      alert("로그인 후 이용해주세요")
      navigate("/login")
    }
  }
  function go_write_list(){
    navigate("/write_list")
  }
  return (
    <div> 
      <div className="header">
          <span className='header_header'></span>
          
          <span className='header_name'>
            TRIPLOVER
          </span>      
          <div className='header_User'>
              <span className='header_my_page' onClick={Mypage_Button}>
                마이페이지
              </span>
              <span onClick={Login_Button} className='header_Login'>
                {login}
              </span>
          </div>
      </div>

      <div className='body'>
        <div className='body_menual'>
          <span onClick={go_mypage} className='body_menual_mypage'>마이페이지</span>
          <span onClick={go_write} className='body_menual_write'>글 작성하기</span>
          <span onClick={go_write_list} className='body_menual_write_list'>게시글 리스트</span>
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