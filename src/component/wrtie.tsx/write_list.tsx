import React,{useEffect, useState} from 'react';
import { useNavigate, useParams, } from 'react-router-dom';
import axios from 'axios';


function Write_list({get_list_write_data, post_list_write_data}:any){

    const navigate = useNavigate()
    const [like,setLike] = useState<any[]>([])

    useEffect(()=>{
        axios.get(`http://localhost:3001/write`,
        )
        .then(function(response){
            get_list_write_data(response.data)
            console.log("asd")
            
        }).catch(function(error){
            console.log(error)
        })
        },[])

    useEffect(()=>{ 
        axios.get(`http://localhost:3001/like`,
        )
        .then(function(response){
            setLike(response.data)
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })
       
        },[])

    
    console.log(post_list_write_data)
    const a = like.filter(a=>Number(a.write_id)===1).length
    console.log(a)
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
                    
                    <table className='write-list-body-list-data-box'>
                    
                        <thead>
                            <tr>
                                <th className='write-list-body-list-data-box-NO'>NO</th>
                                <th className='write-list-body-list-data-box-title'>제목</th>
                                <th className='write-list-body-list-data-box-writer'>글쓴이</th>
                                <th className='write-list-body-list-data-box-time'>작성시간</th>
                                <th className='write-list-body-list-data-box-like'>좋아요</th>   
                            </tr>
                        </thead>  
                        
                        <tbody>
                        {post_list_write_data.map((i:any, index:any)=>(
                            <tr>
                                <td>{i.postid}</td>
                                <td onClick={()=>{navigate(`/detail/${i.postid}`)}}>{i.postname}</td>
                                <td>{i.name}</td>
                                <td>{i.updatedAt}</td>
                                <td>{like.filter(a=>Number(a.write_id)===index+1).length}</td>
                                
                            </tr>
                        ))}            
                        </tbody>

                    </table>
                                 
                </div>
            </div>
        </div>
    )
}
export default Write_list;