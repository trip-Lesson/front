import React,{useEffect, useState} from 'react';
import { useNavigate, useParams, } from 'react-router-dom';
import axios from 'axios';
import Page from './write.component/write.page';



function Write_list(){

    const navigate = useNavigate()
    const [likedata,setLikedata] = useState<any>()
    const [page,setPage] = useState(1)
    const [search,setSearch] = useState("")
    const [buttonClick,setButtonClick] = useState(false)
    
    useEffect(()=>{
        if(buttonClick==false){
            axios.get(`http://localhost:3001/write/getAll/like?page=${page}`,
            )
            .then(function(response){
                setLikedata(response.data)  
                
            }).catch(function(error){
                console.log(error)
            })
        }
        
        if(buttonClick == true){
            axios.get(`http://localhost:3001/write?searchdata=${search}&${page}`,
            )
            .then(function(response){
                setLikedata(response.data)
                
            }).catch(function(error){
                console.log(error)
            })
        }
    },[buttonClick,page])
    

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
                        {likedata?.data.map((i:any, index:any)=>(
                            <tr>
                                <td>{i.postid}</td>
                                <td onClick={()=>{
                                    navigate(`/detail/${i.postid}`)
                                }}>{i.postname}</td>
                                <td>{i.user.name}</td>
                                <td>{i.updatedAt}</td>
                                <td>{i.like_write.length}</td>
                            </tr>
                        ))}            
                        </tbody>

                    </table>
                                 
                </div>
            </div>
            <div className='write-list-footer'>
                <Page totalPage={likedata?.meta?.last_page} get_pageData={setPage}></Page>
            </div>
            <div className='write-list-search'>
                <input className='write-list-search-input' placeholder='제목 및 작성자의 이름을 검색해주세요' value={search} onChange={(e:any)=>{
                    setSearch(e.target.value)
                }}></input>
                <img src='search.png' style={{
                    height:30,
                    position :'relative',
                    right:42,
                    top:5.7,
                    cursor:'pointer'
                }} onClick={()=>{
                    if(buttonClick==false){
                        setButtonClick(true)
                    }else if(buttonClick==true){
                        axios.get(`http://localhost:3001/write?searchdata=${search}&${page}`,
                        )
                        .then(function(response){
                            setLikedata(response.data)
                            
                        }).catch(function(error){
                            console.log(error)
                        })
                    }
                
                }}></img>
            </div>
            
        </div>
    )
}
export default Write_list;