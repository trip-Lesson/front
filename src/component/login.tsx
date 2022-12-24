import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate()
    const [iddel,setIddel] = useState("")
    const [pwddel,setPwddel] = useState("")

    function Login_name(){
        navigate('/')
    }
    function Login_id_delete(){
       setIddel("")
    }
    function Login_id_input(event:any){
        setIddel(event.target.value)
    }
    function Login_pwd_delete(){
      setPwddel("")
    }
    function Login_pwd_input(event:any){
        setPwddel(event.target.value)
    } 
    function find_password(){
      navigate('/find_pwd')
    }
    function find_id(){
      navigate('/find_id')
    }   
    function create_membership(){
      navigate('create_membership')
    }
    return(
    <div>
        <div className='Login'>
          <div className='Login-header'>
            <span className='Login-header-name' onClick={Login_name}>TRIPLOVER</span>
          </div>

          <div className='Login-body'>
            <div className='Login-body-login'>
                <div className='Login-body-login-id'>
                    <input className='Login-body-login-id-input' placeholder='아이디' value={iddel} onChange={Login_id_input}></input>
                    <img src='delete.png' className='Login-body-login-id-delete' onClick={Login_id_delete}></img>
                </div>
                <div className='Login-body-login-pwd'>
                    <input className='Login-body-login-pwd-input' placeholder='비밀번호' value={pwddel} onChange={Login_pwd_input}></input>
                    <img src='delete.png' className='Login-body-login-pwd-delete' onClick={Login_pwd_delete}></img>
                </div>
                <div className='Login-body-login-button'>
                    <span className='Login-body-login-button-name'>로그인</span>
                </div>
            </div>
          </div>

          <div className='Login-footer'>
            <span className='Login-footer-find-password' onClick={find_password}> 비밀번호 찾기 ㅣ</span>
            <span className='Login-footer-find-id' onClick={find_id}> 아이디 찾기 ㅣ</span>
            <span className='Login-footer-membership' onClick={create_membership}>회원가입</span>
          </div>
         
        </div>
    </div>
    )
}

export default Login;