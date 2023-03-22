import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home({poststatus,modifystatus,get_news_data,post_news_data} : any) {
  const navigate = useNavigate()
  const [login,setLogin] = useState("로그인")

  useEffect(()=>{
     axios.get(`http://localhost:3001/news`,
    )
    .then(function(response){
        get_news_data(response.data.items)
    }).catch(function(error){
        console.log(error)
    })
    },[])

   
  
  useEffect(()=>{
    if(poststatus === 201){
      setLogin("로그아웃")
    }
  },[])

  function loginButton(){
    if(login === "로그인"){ 
      navigate('/login')
    }
    if(login === "로그아웃"){
      setLogin("로그인")
      modifystatus(10)
    }
  }
  function mypageButton(){
    if(poststatus === 201){
    navigate('/mypage')
    }else{
      alert("로그인 후 이용해주세요")
      navigate("/login")
    }
  }
  function goMypage(){
    navigate("/mypage")
  }
  function goWrite(){
    if(poststatus === 201){
      navigate('/write')
    }else{
      alert("로그인 후 이용해주세요")
      navigate("/login")
    }
  }
  function goWriteList(){
    navigate("/write_list")
  }
  return (
    <div> 
      <div className="header">       
          <div className='header-name'>
            TRIPLOVER
          </div>      
          <div className='header-User'>
              <span className='header-my-page' onClick={mypageButton}>
                마이페이지
              </span>
              <span onClick={loginButton} className='header-Login'>
                {login}
              </span>
          </div>
      </div>

      <div className='body'>
        <div className='body-menual'>
          <span onClick={goMypage} className='body-menual-mypage'>마이페이지</span>
          <span onClick={goWrite} className='body-menual-write'>글 작성하기</span>
          <span onClick={goWriteList} className='body-menual-write-list'>게시글 리스트</span>
        </div>
        <div className='body-news'>
          <span className='body-news-title'>여행 뉴스</span>
        </div>
        <div className='body-news-contents'>
          <h1 className='body-news-contents-title'>{post_news_data && post_news_data[0]?.title}</h1>
          <p className='body-news-contents-desc'><h2>{post_news_data && post_news_data[0]?.description}({post_news_data && post_news_data[0]?.link})</h2></p>
          <h3 className='body-news-contents-time'>{post_news_data && post_news_data[0]?.pubDate}</h3>
        </div>
        
      </div>
      
      <div className='footer'>
       
      </div>
    </div>
  );
}

export default Home;