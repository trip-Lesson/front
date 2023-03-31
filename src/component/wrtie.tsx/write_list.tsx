import React,{useEffect, useState} from 'react';
import { useNavigate, useParams, } from 'react-router-dom';
import axios from 'axios';
import Page from './write.component/write.page';



function Write_list(){

    const navigate = useNavigate()
    const [likedata,setLikedata] = useState<any>()
    const [page,setPage] = useState<number>(1)
    const [search,setSearch] = useState<string>("")
    const [buttonClick,setButtonClick] = useState<any>(false)
    const [searchWord,setSearchWord] = useState<string>("")
    
    useEffect(()=>{
        if(!buttonClick){
            axios.get(`http://localhost:3001/write/getAll/like?page=${page}`,
            )
            .then(function(response){
                setLikedata(response.data)  
                
            }).catch(function(error){
                console.log(error)
            })
        }
        
        if(buttonClick){
            axios.get(`http://localhost:3001/write?searchdata=${search}&page=${page}`,
            )
            .then(function(response){
                if(response.data.data.length == 0){
                    alert("검색결과가 없습니다.")
                }else{
                    setLikedata(response.data)
                }           
            }).catch(function(error){
                console.log(error)
            })
        }
    },[buttonClick,page,searchWord])
    
    
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
                                <td>{i.postId}</td>
                                <td onClick={()=>{
                                    navigate(`/detail/${i.postId}`)
                                }}>{i.postName}</td>
                                <td>{i.user.name}</td>
                                <td>{i.updatedAt}</td>
                                <td>{i.likeWrite.length}</td>
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
                    if(search == ""){
                        setButtonClick(false)
                        alert("검색결과가 없습니다.")
                    }
                    else if(search !== ""){
                        if(!buttonClick){
                            setButtonClick(true)
                        }
                        else if(buttonClick){
                            setPage(1)
                            setSearchWord(search)
                            if(search == ""){
                                setButtonClick(false)
                                alert("검색결과가 없습니다.")
                            }                 
                        }
                    }        
                }}></img>
            </div>
            
        </div>
    )
}
export default Write_list;