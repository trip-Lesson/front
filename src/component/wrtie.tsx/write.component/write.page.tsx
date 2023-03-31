import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Page({totalPage,get_pageData}:any){
    const [currentPage, setCurrentPage] = useState(1);

    const Next = () => {
        setCurrentPage(currentPage+1);
        get_pageData(currentPage*5 + 1)
    };
    const Prev = () => {
        setCurrentPage(currentPage-1);
        get_pageData((currentPage-2) * 5 + 1)
    };
    const renderButton = () => {
        const buttons = [];
        const start = (currentPage-1) * 5 + 1;
        for(let i = start; i<start+5; i++){
            if(i>totalPage){
                break;
            }
            buttons.push(<button onClick={()=>{
                get_pageData(i)
            }} style={{
                width:40,
                height:35,
                backgroundColor:'white',
                cursor:'pointer',
            }}>{i}</button>)
        }
        
        return buttons
    }
    return(
        <div>
            <button style={{
                    width:40,
                    height:35,
                    backgroundColor:'white',
                    cursor:'pointer',
                }} onClick={Prev}>Prev</button>
            {renderButton()}
            <button style={{
                width:40,
                height:35,
                backgroundColor:'white',
                cursor:'pointer',
            }} onClick={Next}>Next</button>
        </div>
    )
}
export default Page;