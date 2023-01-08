import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './write.css'
import axios from 'axios';

function Write_write({postdata,post_name,post_email}:any){
    const navigate = useNavigate()
    const country = ["나라선택","일본","미국","캐나다"]
    const category = ["카테고리 선택","먹거리","문화","여행"]
    const [postname,setPostname] = useState("")
    const [postcategory,setPostcategory] = useState("")
    const [postcountry,setPostcountry] = useState("")
    const [postaddress, setPostaddress] = useState("")
    const [postcontents,setPostcontents] = useState("")
   

    async function save_button(){
        await axios.post("http://localhost:3000/write",{
            "name" : post_name,
            "email" : post_email,
            "postname" : postname,
            "postcategory" : postcategory,
            "postcountry" : postcountry,
            "postaddress" : postaddress,
            "postcontents" : postcontents
        }).then(function(response){
            console.log(response)
            alert("저장되었습니다.")
          
        }
        ).catch(function(error){
            console.log(error);
            alert("저장에 실패하였습니다.")
        })

        navigate("/write_list")
    }
    return(
        <div>
            <div className='write-header'>
                <span className='write-header-name'>게시글 설정</span>
            </div>
            <div className='write-body'>
                <div className='write-body-option'>

                    <div className='write-body-option-title'>
                        <div className='write-body-option-title-name-1'>
                            <div className='write-body-option-title-name-2'>게시판명</div>
                        </div>
                        <input className='write-body-option-title-input' placeholder='title' onChange={(event:any)=>{setPostname(event.target.value)}} value={postname}></input>
                    </div>


                    <div className='write-body-option-category'>
                        <div className='write-body-option-category-name-1'>
                            <div className='write-body-option-category-name-2'>카테고리</div>
                        </div>
                        <select className='write-body-option-category-select'>
                           <option onClick={()=>{setPostcategory("문화")}}>문화</option>
                           <option><span onClick={(e:any)=>{setPostcategory("여행")}}>여행</span></option>
                        </select>
                    </div>

                    <div className='write-body-option-country'>
                        <div className='write-body-option-country-name-1'>
                            <div className='write-body-option-country-name-2'>나라선택</div>
                        </div>
                        <select className='write-body-option-country-select'>
                            {country.map((item)=>(
                                <option onClick={()=>{setPostcountry(item)}}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className='write-body-option-address'>
                        <div className='write-body-option-address-name-1'>
                            <div className='write-body-option-address-name-2'>상세주소</div>
                        </div>
                        <input className='write-body-option-address-input' placeholder='address' onChange={(event:any)=>{setPostaddress(event.target.value)}} value={postaddress}></input>
                    </div>

                </div>
                <div className='write-body-contents'>
                    <div className='write-body-contents-name'>게시글 작성</div>
                </div>
                <div className='write-body-contents-box'>
                    <div className='write-body-contents-box-box'>                      
                        <input className='write-body-contents-box-input' onChange={(event:any)=>{setPostcontents(event.target.value)}} value={postcontents} ></input>                  
                    </div>                   
                </div>
                <div className='write-footer'>
                    <button onClick={save_button} className='write-footer-button'>저장</button>
                </div>
            </div>
        </div>
    )
}
export default Write_write;