
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
import Write_list from "./component/write.tsx/write_list";
import Write_write from "./component/write.tsx/write_write";
import Detail from "./component/write.tsx/write_detail";
const Router = () => {
    const [status,setStatus] = useState() 
    const [list_write_data,setList_write_data] = useState([])
    const [name,setName] = useState()
    const [mail,setMail] = useState()
    const [detail_write_data,setDetail_write_data] = useState([])
   
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home poststatus={status} modifystatus={setStatus}/>}/>
                    <Route path="/login" element={<Login getstatus={setStatus} get_email = {setMail} get_name={setName}/>}/>
                    <Route path="find_pwd" element={<Find_PWD/>}/>
                    <Route path="find_id" element={<Find_ID/>}/>
                    <Route path="create_membership" element={<Create_membership/>}/>
                    <Route path="/mypage" element={<Mypage/>}/>
                    <Route path="/write"  element={<Write_write post_email = {mail}  post_name={name} />}/>
                    <Route path='/detail/:id' element={<Detail  get_detail_write_data ={setDetail_write_data}  post_detail_write_data={detail_write_data}/>}/>
                    <Route path="/write_list" element={<Write_list get_list_write_data={setList_write_data} post_list_write_data={list_write_data}/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
   
export default Router; 