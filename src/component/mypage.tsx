import axios from 'axios';
import React, {useEffect, useState} from 'react';


function Mypage({post_mypage_name, post_mypage_email}:any){

    type information = {
       
    }

    const [mypage_data,setMypage_data] = useState<information[]>([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/write/mail/${post_mypage_email}`,
        )
        .then(function(response){
            setMypage_data(response.data)
            console.log(response.data)
        }).catch(function(error){
            console.log(error)
        })
        },[])
    
    console.log()
   
  
    return(
        <div>
           <div className='mypage-header'>
                <img className='mypage-header-profile' src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png"></img>
                <div className='mypage-header-name'>{post_mypage_name}({post_mypage_email})</div>
           </div>

           <div className='mypage-body'>
                <div className='mypage-body-box'>
                    <div className='mypage-body-box-menual'>
                        <div className='mypage-body-box-menual-write'>글작성</div>
                        <div className='mypage-body-box-menual-like'>좋아요 누른 게시물</div>
                    </div>
                    <div className='mypage-body-box-data-box'>
                        <span className='mypage-body-box-data-box-num'>글번호</span>
                        <span className='mypage-body-box-data-box-title'>제목</span>
                        <span className='mypage-body-box-data-box-date'>작성일</span>
                    </div>
                   
                </div>
           </div>
        </div>
    )
}
export default Mypage;