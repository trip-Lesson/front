import React, {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { async } from 'q';

function Detail ({post_status_to_detail,post_detail_email}:any){

    interface commenttype{
        comment_id : number;
        user_email : string;
        comment_contents : string;
    }

    const test = useRef<any>([]);

    const [like,setLike] = useState('')
    const [writedata,setWritedata] = useState<any>([])
    const [reply_html,setReply_html] = useState<any>("")
    const [reply,setReply] = useState("")
    const [comment,setComment] = useState("")
    const [commentdata,setCommentdata] = useState<commenttype[]>([])
    const [comment_reply,setComment_reply] = useState<any[]>([])
    const [reply_data,setReply_data] = useState<any[]>([])
    const navigate = useNavigate()
    const id  = useParams()

    console.log(reply_html)

    useEffect(()=>{
        axios.get(`http://localhost:3001/write`
        )
        .then(function(response){
            setWritedata(response.data)
            console.log(response.data)
        }).catch(function(error){
            console.log(error)
        })
        },[])
   
    useEffect(()=>{
        axios.get(`http://localhost:3001/like/find/${post_detail_email}`
        ).then(function(response){
            if(response.data.user_email && response.data.write_id === id.id){
                setLike('♥')
                console.log(response.data.user_email) 
                console.log(post_detail_email)
            }else{
                setLike('♡')
                console.log('hello')
            }
        }).catch(function(error){
            console.log(error)
        })
        
    },[])

    useEffect(()=>{
        axios.get('http://localhost:3001/comment')
        .then(function(response){
            console.log(response.data)
            setCommentdata(response.data)
        }).catch(function(error){
            console.log(error)
        })
    },[])
    const data = writedata[Number(id.id)-1]

    useEffect(()=>{
        axios.get('http://localhost:3001/comment/all_reply_comment')
        .then(function(response){
            console.log(response.data)
            setComment_reply(response.data)
        }).catch(function(error){
            console.log(error)
        })
    },[])

    async function comment_register(){
        await axios.post(`http://localhost:3001/comment`,{
            "user_email" : data.email,
            "comment_contents" : comment,
            "write_id" : id.id
        }
        ).then(function(response){
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })
    }

    console.log(reply_data)
   
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
                        <div className='write-detail-body-user-name'>{writedata && data?.name}</div>
                        <div className='write-detail-body-user-infor'>
                            <span className='write-detail-body-user-id'>아이디 : {writedata&&data?.email}</span>
                            <span className='write-detail-body-user-category'>카테고리 : 여행</span>
                            <span className='write-detail-body-user-country'>나라 : 여행</span>
                            <span className='write-detail-body-user-address'>주소 : {writedata && data?.postaddress}</span>
                        </div>
                    </div>
                    <p className='write-detail-body-contents'>
                    {writedata && data?.postcontents}
                    </p>
                    <div className='write-detail-body-like'>
                       <span className='write-detail-body-like-heart' onClick={async()=>{
                        if(post_status_to_detail == 201 ){
                            if(like == '♡'){
                                setLike('♥')
                                await axios.post("http://localhost:3001/like",{
                                  "user_email" : post_detail_email,
                                  "write_id" : Number(id.id),
                                }).then(function(response){
                                    console.log(response)                               
                                }
                                ).catch(function(error){
                                    console.log(error);
                                    
                                })
                            }
                            if(like == '♥'){
                                setLike('♡')
                                console.log(typeof(id.id))
                                await axios.delete(`http://localhost:3001/like`,{
                                   data : {
                                    "user_email" : String(post_detail_email),
                                    "write_id" : (id.id),
                                    }
                                }
                                ).then(function(response){
                                    console.log(response)
                                })
                                .catch(function(error){
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
                        <button onClick={comment_register} className='write-detail-body-comment-button-register'>등록</button>
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
                                        <span className='write-detail-body-comment-user-comment-list-profile-name'>{i.user_email}</span>
                                    </div>
                                    <div className='write-detail-body-comment-user-comment-list-contents-box'>
                                        <span className='write-detail-body-comment-user-comment-list-contents'>{i.comment_contents}</span>
                                    </div>
                                    <div className='write-detail-body-comment-user-comment-list-reply' onClick={()=>{
                                        if(test.current[index].style.display == "none"){
                                            test.current[index].style.display = ""
                                        }else{
                                            test.current[index].style.display = "none"
                                        }

                                        setReply_data(comment_reply)
                                        console.log(comment_reply)
                                    }}>
                                        답글 작성
                                    </div>
                                </div>          
                            
                            </div>
                           
                            <div className='write-detail-body-comment-reply-comment-list-box-div' id={String(index)}  style={{display:'none'}} ref={(element)=>{test.current[index] = element}}>       
                                <ul className='write-detail-body-comment-reply-comment-list-box'>
                                    {reply_data[Number(test.current[index]?.id)]?.reply.map((i:any)=>(
                                         <li className='write-detail-body-comment-reply-comment-list'>
                                         <div className='write-detail-body-comment-reply-comment-list-profile-box'>
                                             <div className='write-detail-body-comment-reply-comment-list-profile'>
                                                 <img className='write-detail-body-comment-reply-comment-list-profile-img' src='https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png'></img>
                                                 <div className='write-detail-body-comment-reply-comment-list-profile-date'>{i.createdAt}</div>
                                             </div>
                                             <span className='write-detail-body-comment-reply-comment-list-profile-name'>{i.user_email}</span>
                                         </div>
                                         <div className='write-detail-body-comment-reply-comment-list-contents-box'>
                                             <span className='write-detail-body-comment-reply-comment-list-contents'>{i.reply_contents}</span>
                                         </div>
                                     </li>
                                    ))}
                                 
                                    <div className='write-detail-body-comment-reply-comment-input-box-div'>
                                        <div className='write-detail-body-comment-reply-comment-input-box'>
                                            <input className='write-detail-body-comment-reply-comment-input' placeholder='댓글을 작성하시려면 로그인을 해주세요' onChange={(event:any)=>{
                                                setReply(event.target.value)
                                            }} value={reply}></input>
                                        </div>
                                        <div>
                                        <button onClick={async ()=>{ 
                                            console.log(Number(test.current[index].id))                                 
                                            await axios.post(`http://localhost:3001/comment/${Number(test.current[index].id)+1}/reply`,{
                                                "user_email" : post_detail_email,
                                                "reply_contents" : reply,
                                                "comment_id" : String(Number(test.current[index].id)+1),
                                                "write_id" : String(id.id)                         
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
