import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ReactElement } from 'react';

function Detail ({post_detail_write_data,get_detail_write_data}:any)  {
    const [img,setImg] = useState('heart.png')
 

    useEffect(()=>{
        axios.get(`http://localhost:3000/write`,
        )
        .then(function(response){
            get_detail_write_data(response.data)
            console.log(response.data)
        }).catch(function(error){
            console.log(error)
        })
        },[])


     console.log(post_detail_write_data[1]?.postid)
    return(
        <div>
           <div className='write-detail-header'>         
                    <div className='write-detail-header-name'>TRIPLOVER</div>
                    <div className='wrtie-detail-header-menu'>
                        <span className='write-detail-header-mypage'>마이페이지</span>
                        <span className='write-detail-header-write '>글 작성</span>
                    </div>
            </div>

            <div className='write-detail-body'>
                <div className='write-detail-body-user-box'>
                    <div className='write-detail-body-user'>
                        <img className='write-detail-body-user-img' src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png"></img>
                        <div className='write-detail-body-user-name'>권용준</div>
                        <div className='write-detail-body-user-infor'>
                            <span className='write-detail-body-user-id'>아이디 : rnjsdydwns3002</span>
                            <span className='write-detail-body-user-category'>카테고리 : 여행</span>
                            <span className='write-detail-body-user-country'>나라 : 여행</span>
                            <span className='write-detail-body-user-address'>주소 :땡땡시땡땡동떙땡땡</span>
                        </div>
                    </div>
                    <p className='write-detail-body-contents'>
                    ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
                    </p>
                    <div className='write-detail-body-like'>
                        <img onClick={()=>{if(img==='heart.png'){
                            setImg('fill.heart.png')
                        }else if(img==='fill.heart.png'){
                            setImg('heart.png')
                        }}} className='write-detail-body-heart' src={img}></img>
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default Detail;