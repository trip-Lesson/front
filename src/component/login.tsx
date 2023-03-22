import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({getstatus,get_name,get_email,get_User_id} : any){
  const [iddel,setIddel] = useState("")
  const [pwddel,setPwddel] = useState("")
  const usenavigate = useNavigate()

  
  async function loginButton(event:any){
    const token : any = await axios.post("http://localhost:3001/auth/signin",
    {
      "email" : iddel,
      "password" : pwddel,
    }).then(function(res){
        console.log(res)
        return{
          status : res.status,
          token : res.data.token
        }
    }).catch(function(error){
        console.log(error);
    })

    await axios.get("http://localhost:3001/user",{
      headers : {
          "Authorization" : "Bearer " + token.token
      }
    })
    .then((res)=>{
      {get_User_id(res.data.id)}
      {get_name(res.data.name)}
      {get_email(res.data.email)}
    })
    .catch((error)=>{
      console.log(error)
    })
  
    {getstatus(token.status)}
       
    if(token.status === 201) { 
      usenavigate("/")
    }
  
  }

  function id_delete(){
    setIddel("")
  }
  function id_onchange(event:any){
    setIddel(event.target.value)
  }
  function pwd_delete(){
    setPwddel("")
  }
  function pwd_onchange(event:any){
    setPwddel(event.target.value)
  }
  function go_membership(){
    usenavigate('/create_membership')
  }
  function go_home(){
    usenavigate('/')
  }
  function go_find_id(){
    usenavigate('/find_id')
  }
  function go_find_pwd(){
    usenavigate('/find_pwd')
  }
  return(
    <div>
      <div className='Login-header'>
        <div className='Login-header-title' onClick={go_home}>TRIPLOVER</div>
      </div>

      <div className='Login-body'>
        <div className='Login-body-pannel'>
          <div className='Login-body-contents'>
            <div className='Login-body-pannel-id'>
              <input  placeholder='아이디' className='Login-body-pannel-id-input' value={iddel} onChange={id_onchange}></input>
              <img onClick={id_delete} className='Login-body-pannel-id-png' src='delete.png'></img>
            </div>
            <div className='Login-body-pannel-pwd'>
              <input placeholder='비밀번호' className='Login-body-pannel-pwd-input' value={pwddel} onChange={pwd_onchange}></input>
              <img onClick={pwd_delete} className='Login-body-pannel-pwd-png' src='delete.png'></img>

            </div>
            
            <div className='Login-body-pannel-button'>
              <button onClick={loginButton} className='Login-body-pannel-button-name'>로그인</button>
            </div>
            <div>
             
            </div>
          </div>
        <div className='Login-body-find-user'>
            <span className='Login-body-find-user-id' onClick={go_find_id}>아이디 찾기 ㅣ</span>
            <span className='Login-body-find-user-pwd' onClick={go_find_pwd}>비밀번호 찾기 ㅣ</span>
            <span onClick={go_membership} className='Login-body-find-user-membership'>회원가입</span>
        </div>
        </div>
       
      </div>

    </div>
  )
}

export default Login;