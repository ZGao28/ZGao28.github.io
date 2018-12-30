import React from 'react';

const ContentPage = () => (
    <div className='center-div ContentPage'>
        <div className='ContentPage_thirds' id='Blog_Div' style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/blog_backdrop.jpeg)"}}>
            <h1 className='ContentPage_titles'>
                bloG_
            </h1>
        </div>
        <div className='ContentPage_fifth'>
        </div>
        <div className='ContentPage_thirds' id='Coding_Div' style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/code_backdrop.jpeg)"}}>
            <h1 className='ContentPage_titles'>
                codinG
                <br/>
                &nbsp; videos
            </h1>
        </div>
        <div className='ContentPage_fifth'>
        </div>
        <div className='ContentPage_thirds' id='Vlog_Div' style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(./images/vlog_backdrop.jpeg)"}}>
            <h1 className='ContentPage_titles'>
                _vloG
            </h1>
        </div>
    </div>
);

export default ContentPage;