import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Axios } from 'axios';

function Write_list(){

    const write_data = []

    
    
    return(
        <div>
            <div className='write-list-header'>         
                    <div className='write-list-header-name'>TRIPLOVER</div>
                    <div className='wrtie-list-header-menu'>
                        <span className='write-list-header-mypage'>마이페이지</span>
                        <span className='write-list-header-write'>글 작성</span>
                    </div>
            </div>

            <div className='write-list-body'>
                <div className='write-list-body-list'>
                    <div className='write-list-body-list-name-box'>
                        <div className='write-list-body-list-name'>여행게시판</div>
                    </div>
                    <div className='write-list-body-list-data'>
                        <div className='write-list-body-list-data-style'>
                            <span className='write-list-body-list-data-style-no'>No</span>
                            <span className='write-list-body-list-data-style-title'>제목</span>
                            <span className='write-list-body-list-data-style-writer'>글쓴이</span>
                            <span className='write-list-body-list-data-style-time'>작성시간</span>
                            <span className='write-list-body-list-data-style-like'>좋아요</span>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Write_list;