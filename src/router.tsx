import path from "path";
import React from "react";
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
const Router = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="find_pwd" element={<Find_PWD/>}/>
                    <Route path="find_id" element={<Find_ID/>}/>
                    <Route path="create_membership" element={<Create_membership/>}/>
                    <Route path="/mypage" element={<Mypage/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
   
export default Router; 