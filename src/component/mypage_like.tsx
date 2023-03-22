import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { string } from 'yargs';
import { useNavigate } from 'react-router-dom';


const userLike = (email:string) => axios.get(`http://localhost:3001/user/getAll/UserLike/${email}`)

function Mypage_Like({post_mypage_like_name, post_mypage_like_email}:any){

    const navigate = useNavigate()
    const [list_data,setList_data] = useState<any[]>([])

    useEffect(()=>{
       userLike(post_mypage_like_email).then(function(response){setList_data(response.data)})
    },[]) 


      return(
        <div>
           <div className='mypage-header'>
                <img className='mypage-header-profile' src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png"></img>
                <div className='mypage-header-name'>{post_mypage_like_name}({post_mypage_like_email})</div>
           </div>

           <div className='mypage-body'>
                <div className='mypage-body-box'>
                    <div className='mypage-body-box-menual'>
                        <div className='mypage-body-box-menual-write' onClick={()=>{navigate('/mypage')}}>글작성</div>
                        <div className='mypage-body-box-menual-like'>좋아요 누른 게시물</div>
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
                            {list_data[0]?.like_write.map((i:any,index:any)=>{
                                return <tr>
                                    <td>{index+1}</td>
                                    <td>{i?.write?.postname}</td>
                                    <td>{i?.write?.updatedAt}</td>
                                </tr>
                            })}
                        </tbody>
                    </table> 
                </div>
           </div>
        </div>
    )
}
export default Mypage_Like;