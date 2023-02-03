import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { string } from 'yargs';
import { useNavigate } from 'react-router-dom';


function Mypage_Like({post_mypage_like_name, post_mypage_like_email}:any){

    const navigate = useNavigate()
    
    interface likedata {
        likeid : number;
        user_email : string;
        write_id : string;
    }
    
    interface listdata{
        postid : number;
        name : string;
        email : string;
        postname : string;
        postcategory : string;
        postcountry : string;
        postaddress : string;
        postcontents : string;
    }

    const [like_data,setLike_data] = useState<likedata[]>([])
    const [list_data,setList_data] = useState<listdata[]>([])

    useEffect(()=>{
        axios.get(`http://localhost:3001/like/findall/${post_mypage_like_email}`
        ).then(function(response){
            setLike_data(response.data)
            console.log(response.data)
        }).catch(function(error){
            console.log(error)
        })
    },[])

    useEffect(()=>{
        axios.get(`http://localhost:3001/write`,
        )
        .then(function(response){
            setList_data(response.data)
            console.log(response.data)
        }).catch(function(error){
            console.log(error)
        })
    },[])

    
    console.log(list_data)
    
    const a = like_data.map((i:any, index:any)=>{
       return list_data.filter(a=>Number(a.postid) === Number(i.write_id))
    })
   
    console.log(a)
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
                            {a.map((i:any,index:any)=>{
                                return <tr>
                                    <td>{index+1}</td>
                                    <td>{i[0]?.postname}</td>
                                    <td>{i[0]?.updatedAt}</td>
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