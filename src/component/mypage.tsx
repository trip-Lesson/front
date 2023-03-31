import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function Mypage({post_mypage_name, post_mypage_email, getPostId, post_User_id}:any){
    const navigate = useNavigate()
    const update_profile_ref = useRef<any>()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    const [mypage_data,setMypage_data] = useState<any[]>([])
    
    useEffect(()=>{
        axios.get(`http://localhost:3001/user/getAll/UserWrite/${post_mypage_email}`,
        )
        .then(function(response){
            setMypage_data(response.data)
            console.log(response.data)
        }).catch(function(error){
            console.log(error)
        })
        },[]) //o

    function updateUser(){
        axios.put(`http://localhost:3001/auth/${post_User_id}`,
        {
            "email" : email,
            "name" : name
        }
        )
        .catch(function(error){
            console.log(error)
        })
    }
   
    return(
        <div>
           <div className='mypage-header'>
                <img className='mypage-header-profile' src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png"></img>

                <div className='mypage-header-name'  onClick={(e:any)=>{
                    e.target.style.display='none'
                    update_profile_ref.current.style.display = ""
                }} style={{display:''}}>{post_mypage_name}({post_mypage_email})</div>
                
                <div className='mypage-header-profile-update' ref={update_profile_ref} style={{display:"none"}}>
                    <input className='mypage-header-profile-update-name' placeholder='이름' onChange={(event:any)=>{setName(event.target.value)}} value={name}></input>
                    <input className='mypage-header-profile-update-email' placeholder='이메일' onChange={(event:any)=>{setEmail(event.target.value)}} value={email}></input>
                    <button className='mypage-header-profile-update-save' onClick={updateUser}>저장</button>
                </div>
           </div>

           <div className='mypage-body'>
                <div className='mypage-body-box'>
                    <div className='mypage-body-box-menual'>
                        <div className='mypage-body-box-menual-write'>글작성</div>
                        <div className='mypage-body-box-menual-like' onClick={()=>{navigate('/mypage_like')}}>좋아요 누른 게시물</div>
                    </div>
                    <table className='mypage-body-box-data'>
                        <thead className=''>
                            <tr>
                                <th>글번호</th>
                                <th>제목</th>
                                <th>작성시간</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mypage_data[0]?.write.map((i:any,index:any)=>{
                                return <tr>
                                    <td>{index+1}</td>
                                    <td>{i.postname}</td>
                                    <td>{i.updatedAt}</td>
                                    <td><button className='mypage-body-box-data-revise' onClick={()=>{
                                        getPostId(i.postid)
                                        navigate('/update_write')
                                    }}>수정</button><button className='mypage-body-box-data-delete' onClick={async()=>{
                                        await axios.delete(`http://localhost:3001/user/delete/write/${post_mypage_email}/${index}`,{
                                            data : {
                                                    "postid" : i.postid,
                                                    "email" : i.email
                                                }
                                        }
                                        ).then(function(response){
                                            console.log(response)
                                        })
                                        .catch(function(error){
                                            console.log(error)
                                        })
                                    }}>삭제</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table> 
                </div>
           </div>
        </div>
    )
}
export default Mypage;