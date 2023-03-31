import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Home({poststatus,modifystatus,get_news_data,post_news_data} : any) {

  const navigate = useNavigate()
  const [login,setLogin] = useState<string>("로그인하기")
  
 return(
    <div >
      <div className='header_back'>
        <div className='InHeaderTitle'>
          <span style={{marginLeft:50}}>TripWorld</span>
        </div>
        <div className='InHeaderIntro'>
            <span style={{marginLeft:90}}>여행의 모든 것은 TW에서 함께</span>
        </div>
        <div className='InHeaderFooter'>
          <div className='InHeaderMenu'>
            <div className='InHeaderMenuWrite'>
              <button className='InHeaderMenuWriteButton' onClick={()=>{
                if(poststatus==201){
                  navigate('write')
                }else{
                  alert('로그인을 해주세요')
                  navigate('login')
                } 
              }}>글 작성하러 가기 ➡️</button>
            </div>
            <div className='InHeaderMenuList'>
              <button className='InHeaderMenuListButton' onClick={()=>{navigate('write_list')}}>사람들이 작성한 글 보러가기 ➡️</button>
            </div>
            <div className='InHeaderMp'>
              <button className='InHeaderMenuMpButton' onClick={()=>{
                if(poststatus==201){
                  navigate('mypage')
                }else{
                  alert('로그인을 해주세요')
                  navigate('login')
                } 
              }}>마이페이지로 가기 ➡️</button>
            </div>
          </div>
          <div className='InHeaderLogin'>
            <button className='InHeaderLoginButton' onClick={()=>{navigate('login')}}>
              {login}
            </button>
          </div>
        </div>  
      </div>
     
      
    </div>
 )
}

export default Home;