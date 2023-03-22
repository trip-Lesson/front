import React, { useState } from 'react';
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create_membership(){
    const usenavigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")

    function sendUser(){
        axios.post("http://localhost:3001/auth/signUp",
        {
            "email" : email,
            "password" : password,
            "name" : name
        }
        ).then(function(response){
            console.log(response)
            alert("가입에 성공하셨습니다!")
            usenavigate("/")
        }
        ).catch(function(error){
            console.log(error);
            alert("이미 존재하는 정보입니다.")
        })

       
    }   
    function goHome(){
        usenavigate('/')
    }
    return(
        <div>
           <div className='membership-header'>
                <div onClick={goHome} className='membership-header-name'>TRIPLOVER</div>
           </div>

           <div className='membership-body'>

                <div className='membership-body-user'>
                    <div className='membership-body-user-email'>
                        <span className='membership-body-user-email-name'>이메일</span> 
                        <input className='membership-body-user-email-input' onChange={(event:any)=>{setEmail(event.target.value)}} value={email}></input>                  
                    </div>
                    <div className='membership-body-user-pwd'>
                        <div className='membership-body-user-pwd-name'>비밀번호</div> 
                        <input className='membership-body-user-pwd-input' onChange={(event:any)=>{setPassword(event.target.value)}} value={password}></input>                  
                    </div>
                    <div className='membership-body-user-pwd-confirm'>
                        <div className='membership-body-user-pwd-confirm-name'>비밀번호 재확인</div> 
                        <input className='membership-body-user-pwd-confirm-input'></input>                  
                    </div>
                    <div className='membership-body-user-name'>
                        <div className='membership-body-user-name-name' >이름</div> 
                        <input className='membership-body-user-name-input' onChange={(event:any)=>{setName(event.target.value)}} value={name}></input>                  
                    </div>

                    <div className='membership-body-button'>
                        <button onClick={sendUser} className='membership-body-button-name'>가입하기</button>
                    </div>
                </div>
                
           </div>

        </div>
    )
}
export default Create_membership;