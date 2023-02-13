import React, {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { async } from 'q';

function Detail ({post_status_to_detail,post_detail_userId}:any){
    interface commenttype{
        comment_contents : string;
    }
    const inputId = useRef<any>([]);
    const test = useRef<any>([]);
    const getCommentId = useRef<any>([]);

    const [like,setLike] = useState('♡')
    const [writedata,setWritedata] = useState<any>([])
    const [reply,setReply] = useState("")
    const [comment,setComment] = useState("")
    const [reply_data,setReply_data] = useState<any>([])
    const [commentdata,setCommentdata] = useState<commenttype[]>([])
    const navigate = useNavigate()
    const id  = useParams()

    const data = writedata[Number(id.id)-1]

    useEffect(()=>{
        axios.get(`http://localhost:3001/write/getWrite/${Number(id.id)}`)
        .then(function(response){
            console.log(response.data)
            setWritedata(response.data)
        }).catch(function(error){
            console.log(error)
        })
    },[])

    useEffect(()=>{
        axios.get(`http://localhost:3001/comment/getAll/CommentUserReply`)
        .then(function(response){
            console.log(response.data)
            setReply_data(response.data)
        }).catch(function(error){
            console.log(error)
        })
    },[])

    useEffect(()=>{
        axios.get(`http://localhost:3001/write/getAll/CommentUserWrite/${Number(id.id)}`)
        .then(function(response){
            console.log(response.data.comment)
            setCommentdata(response.data.comment)
        }).catch(function(error){
            console.log(error)
        })
    },[])
    console.log(reply_data)
    console.log(reply)
    return(
        <div>
           <div className='write-detail-header'>         
                    <div className='write-detail-header-name' onClick={()=>{navigate("/")}}>TRIPLOVER</div>
                    <div className='wrtie-detail-header-menu'>
                        <span className='write-detail-header-mypage' onClick={()=>{navigate("/mypage")}}>마이페이지</span>
                        <span className='write-detail-header-write' onClick={()=>{navigate("/write")}}>글 작성</span>
                    </div>
            </div>

            <div className='write-detail-body'>
                <div className='write-detail-body-user-box'>
                    <div className='write-detail-body-user'>
                        <img className='write-detail-body-user-img' src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png"></img>
                        <div className='write-detail-body-user-name'>{writedata[0]?.user.name}</div>
                        <div className='write-detail-body-user-infor'>
                            <span className='write-detail-body-user-id'>아이디 : {writedata[0]?.user.email}</span>
                            <span className='write-detail-body-user-category'>카테고리 : 여행</span>
                            <span className='write-detail-body-user-country'>나라 : 여행</span>
                            <span className='write-detail-body-user-address'>주소 : {writedata[0]?.postaddress}</span>
                        </div>
                    </div>
                    <p className='write-detail-body-contents'>
                    {writedata[0]?.postcontents}
                    </p>
                    <div className='write-detail-body-like'>
                       <span className='write-detail-body-like-heart' onClick={async()=>{
                        if(post_status_to_detail == 201 ){
                            if(like == '♡'){
                                setLike('♥')
                                axios.post(`http://localhost:3001/like-write/${post_detail_userId}/${Number(id.id)}`)
                                .then(function(response){
                                    console.log(response.data)
                                }).catch(function(error){
                                    console.log(error)
                                })
                            }
                            if(like == '♥'){
                                setLike('♡')
                                axios.delete(`http://localhost:3001/like-write/delete/like/${post_detail_userId}/${Number(id.id)}`)
                                .then(function(response){
                                    console.log(response.data)
                                }).catch(function(error){
                                    console.log(error)
                                })
                            }
                        }else{
                            alert("로그인 후 이용해주세요")
                            navigate('/login')
                        }
                        }}>{like}</span>
                    </div>  
                </div>
                <div className='write-detail-body-comment-box'>

                    <div className='write-detail-body-comment-quantity'>
                        <span className='write-detail-body-comment-quantity-name'>8개의 댓글</span>
                    </div>

                    <div className='write-detail-body-comment-writing'>
                        <input className='write-detail-body-comment-input' placeholder='댓글을 작성하실려면 로그인을 해주세요' onChange={(event:any)=>{setComment(event.target.value)}} value={comment}></input>
                    </div>

                    <div className='write-detail-body-comment-button'>
                        <button className='write-detail-body-comment-button-register' onClick={()=>{
                             axios.post(`http://localhost:3001/comment/${Number(id.id)}/${post_detail_userId}/comment`,{
                                "comment_contents" : comment
                             })
                                .then(function(response){
                                    console.log(response.data)
                                }).catch(function(error){
                                    console.log(error)
                                })
                        }}>등록</button>
                    </div>
                    
                    {commentdata.map((i:any, index:number)=>(   
                        <div>

                            <div className='write-detail-body-comment-user-comment-list-box'>  
                                <div className='write-detail-body-comment-user-comment-list'>
                                    <div className='write-detail-body-comment-user-comment-list-profile-box'>
                                        <div className='write-detail-body-comment-user-comment-list-profile'>
                                            <img className='write-detail-body-comment-user-comment-list-profile-img' src='https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png'></img>
                                            <div className='write-detail-body-comment-user-comment-list-profile-date'>{i.createdAt}</div>
                                        </div>
                                        <span className='write-detail-body-comment-user-comment-list-profile-name'>{i.user.email}</span>
                                    </div>
                                    <div className='write-detail-body-comment-user-comment-list-contents-box'>
                                        <span className='write-detail-body-comment-user-comment-list-contents'>{i.comment_contents}</span>
                                    </div>
                                    <div className='write-detail-body-comment-user-comment-list-reply' id={i.comment_id} ref={(element)=>{getCommentId.current[index] = element}} onClick={()=>{                
                                        if(test.current[index].style.display == "none"){
                                            test.current[index].style.display = ""
                                        }else{
                                            test.current[index].style.display = "none"
                                        }
                                    }}>
                                        답글 작성
                                    </div>
                                </div>          
                            
                            </div>
                           
                            <div className='write-detail-body-comment-reply-comment-list-box-div' id={String(index)}  style={{display:'none'}} ref={(element)=>{test.current[index] = element}}>       
                                <ul className='write-detail-body-comment-reply-comment-list-box'>
                                    {reply_data[index]?.comment_reply?.map((i:any)=>(
                                         <li className='write-detail-body-comment-reply-comment-list'>
                                         <div className='write-detail-body-comment-reply-comment-list-profile-box'>
                                             <div className='write-detail-body-comment-reply-comment-list-profile'>
                                                 <img className='write-detail-body-comment-reply-comment-list-profile-img' src='https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png'></img>
                                                 <div className='write-detail-body-comment-reply-comment-list-profile-date'>{i.createdAt}</div>
                                             </div>
                                             <span className='write-detail-body-comment-reply-comment-list-profile-name'>{i.user.email}</span>
                                         </div>
                                         <div className='write-detail-body-comment-reply-comment-list-contents-box'>
                                             <span className='write-detail-body-comment-reply-comment-list-contents'>{i.reply_contents}</span>
                                         </div>
                                     </li>
                                    ))}
                                 
                                    <div className='write-detail-body-comment-reply-comment-input-box-div'>                          
                                        <div className='write-detail-body-comment-reply-comment-input-box'>
                                            <input className='write-detail-body-comment-reply-comment-input' placeholder='댓글을 작성하시려면 로그인을 해주세요' id={String(index)} ref={(element)=>{inputId.current[index] = element}} onChange={(event:any)=>{
                                                console.log(inputId.current[index].id)
                                                setReply(inputId.current[index].value)
                                            }}></input>
                                        </div>
                                        <div>
                                        <button onClick={async ()=>{ 
                                            console.log(Number(getCommentId.current[index].id)) 

                                            axios.post(`http://localhost:3001/reply/${Number(getCommentId.current[index].id)}/${post_detail_userId}/reply`,{
                                                "reply_contents" : reply
                                            })
                                            .then(function(response){
                                                console.log(response.data)
                                            }).catch(function(error){
                                                console.log(error)
                                            })                                                                    
                                        }}>등록</button>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>                      
                    ))}                      
        
                </div>
                
            </div>
        </div>
    )
}
export default Detail;
