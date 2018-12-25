import React from 'react';

const Footer = () => (
    <footer className='Footer width-100'>
        <div className='Footer_icon_container'>
            <img id='email_icon' className='Footer_icon' src='./images/email_icon_black.png'/>
            <img className='Footer_icon' src='./images/linkedin_icon_black.png'/>
            <img className='Footer_icon' src='./images/github_icon_black.png'/>
            <img className='Footer_icon' src='./images/instagram_icon_black.png'/>
            <img className='Footer_icon' src='./images/facebook_icon_black.png'/>
        </div>
        <p className='Footer_logo_text'>
            Made With <i className="em em-coffee"></i> && <i className="em em-blue_heart"></i>
        </p>
    </footer>
);

export default Footer;