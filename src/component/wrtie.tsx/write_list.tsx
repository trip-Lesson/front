import React,{useEffect, useState} from 'react';
import { useNavigate, useParams, } from 'react-router-dom';
import axios from 'axios';


function Write_list({get_list_write_data, post_list_write_data}:any){

    const navigate = useNavigate()
    const [like,setLike] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:3000/write`,
        )
        .then(function(response){
            get_list_write_data(response.data)
            console.log("asd")
            
        }).catch(function(error){
            console.log(error)
        })
        },[])

    console.log(post_list_write_data)
      
        
    return(
        <div>
            <div className='write-list-header'>         
                    <div className='write-list-header-name' onClick={()=>{navigate("/")}}>TRIPLOVER</div>
                    <div className='wrtie-list-header-menu'>
                        <span className='write-list-header-mypage' onClick={()=>{navigate("/mypage")}}>마이페이지</span>
                        <span className='write-list-header-write ' onClick={()=>{navigate("/write")}}>글 작성</span>
                    </div>
            </div>

            <div className='write-list-body'>
                <div className='write-list-body-list'>
                    <div className='write-list-body-list-name-box'>
                        <div className='write-list-body-list-name'>여행게시판</div>
                    </div>
                    <div className='write-list-body-list-data'>
                        <div className='write-list-body-list-data-style'>
                            <span className='write-list-body-list-data-style-no'>No</span>
                            <span className='write-list-body-list-data-style-title'>제목</span>
                            <span className='write-list-body-list-data-style-writer'>글쓴이</span>
                            <span className='write-list-body-list-data-style-time'>작성시간</span>
                            <span className='write-list-body-list-data-style-like'>좋아요</span>
                        </div>
                        {post_list_write_data.map((item:any)=>(
                            <div className='write-list-body-list-data-value'>
                                <span className="write-list-body-list-data-data-no">{item.postid}</span>
                                <span className="write-list-body-list-data-data-name" onClick={()=>{
                                    navigate(`/detail/${item.postid}`)}
                                    }> {item.postname} </span>
                                <span> {item.name} </span>
                                <span >{item.createdAt}</span>
                                <span className="write-list-body-list-data-data-like">{like}</span>
                            </div>
                        ))}
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Write_list;