
import React, {useState} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./component/home";
import Login from "./component/login";
import Mypage from "./component/mypage";
import Find_PWD from "./component/login_inner.tsx/login.find_pwd";
import Find_ID from "./component/login_inner.tsx/login.find_id";
import Create_membership from "./component/login_inner.tsx/login.create_membership";
import Write_list from "./component/write.tsx/write_list";
import Write_write from "./component/write.tsx/write_write";
const Router = () => {
    const [status,setStatus] = useState() 
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home poststatus={status} modifystatus={setStatus}/>}/>
                    <Route path="/login" element={<Login getstatus={setStatus}/>}/>
                    <Route path="find_pwd" element={<Find_PWD/>}/>
                    <Route path="find_id" element={<Find_ID/>}/>
                    <Route path="create_membership" element={<Create_membership/>}/>
                    <Route path="/mypage" element={<Mypage/>}/>
                    <Route path="/write" element={<Write_write/>}/>
                    <Route path="/write_list" element={<Write_list/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
   
export default Router; 