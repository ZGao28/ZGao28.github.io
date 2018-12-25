import React from 'react';

const goToLink = (link) => {
    console.log(link);
    location.href = link;
}

const Footer = () => (
    <footer className='Footer width-100'>
        <div className='Footer_icon_container'>
            <img className='Footer_icon' src='./images/email.png' onClick={()=>goToLink('mailto:zi.s.gao@gmail.com?Subject=Hello')}/>
            <img className='Footer_icon' src='./images/linkedin.png' onClick={()=>goToLink('https://www.linkedin.com/in/zigao')}/>
            <img className='Footer_icon' src='./images/github.png' onClick={()=>goToLink('https://www.github.com/zgao28')}/>
            <img className='Footer_icon' src='./images/blog.png' onClick={()=>goToLink('http://zigao.io/blog')}/>
            <img className='Footer_icon' src='./images/resume.png' onClick={()=>goToLink('./images/zi_gao_resume.pdf')}/>
        </div>
        <p className='Footer_logo_text'>
            Made With <i className="em em-coffee"></i> && <i className="em em-blue_heart"></i>
        </p>
    </footer>
);

export default Footer;