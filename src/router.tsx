import React, {useState} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useParams,
} from "react-router-dom";
import Home from "./component/home";
import Login from "./component/login";
import Mypage from "./component/mypage";
import Find_PWD from "./component/login_inner.tsx/login.find_pwd";
import Find_ID from "./component/login_inner.tsx/login.find_id";
import Create_membership from "./component/login_inner.tsx/login.create_membership";
import Write_list from "./component/wrtie.tsx/write_list";
import Write_write from "./component/wrtie.tsx/write_write";
import Detail from "./component/wrtie.tsx/write_detail";
import Mypage_Like from "./component/mypage_like";
import Mypage_Revise from "./component/mypage.revise";
import Update_write from "./component/wrtie.tsx/update.write";
const Router = () => {
    const [status,setStatus] = useState() 
    const [list_write_data,setList_write_data] = useState([])
    const [name,setName] = useState()
    const [mail,setMail] = useState()
    const [home_news_data,setHome_news_data] = useState()
    const [updateWithPostId,setUpdateWithPostId] = useState("")
  
    console.log(updateWithPostId)
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home get_news_data={setHome_news_data} post_news_data={home_news_data} poststatus={status} modifystatus={setStatus}/>}/>
                    <Route path="/login" element={<Login getstatus={setStatus} get_email = {setMail} get_name={setName}/>}/>
                    <Route path="find_pwd" element={<Find_PWD/>}/>
                    <Route path="find_id" element={<Find_ID/>}/>
                    <Route path="create_membership" element={<Create_membership/>}/>
                    <Route path="/mypage" element={<Mypage getPostId={setUpdateWithPostId} post_mypage_email = {mail} post_mypage_name = {name} />}/>
                    <Route path="/write"  element={<Write_write post_email = {mail}  post_name={name} />}/>
                    <Route path="/write_list" element={<Write_list get_list_write_data={setList_write_data} post_list_write_data={list_write_data}/>}/>
                    <Route path='/detail/:id' element={<Detail post_detail_email={mail} post_status_to_detail={status}/>}/>
                    <Route path="/mypage_like" element={<Mypage_Like  post_mypage_like_email = {mail} post_mypage_like_name={name}/>}/>
                    <Route path="/mypage_revise" element={<Mypage_Revise/>}></Route>
                    <Route path="/update_write" element={<Update_write post_emailForUpdate={mail} post_nameForUpdate={name} post_PostId={updateWithPostId}/>}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
   
export default Router; 