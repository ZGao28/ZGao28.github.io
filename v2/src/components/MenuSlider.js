import React from 'react';
import { NavLink } from 'react-router-dom';


const MenuSlider = (props) => (
    <div className='MenuSlider'>
        <div className='MenuSlider_header'>
            <span>
                &#9672;
            </span>
        </div>
        <div className='MenuSlider_menu_container'>
            <NavLink className='MenuSlider_nav' activeClassName='selected_menu' to='/' exact={true}>
                <div onClick={()=>{props.changePage('home'); props.closeMenu();}}>HOME</div>
            </NavLink>
            <NavLink className='MenuSlider_nav' activeClassName='selected_menu' to='/projects'>
                <div onClick={()=>{props.changePage('projects'); props.closeMenu();}}>PROJECTS</div>
            </NavLink>
            <NavLink className='MenuSlider_nav' activeClassName='selected_menu' to='/about'>
                <div onClick={()=>{props.changePage('about'); props.closeMenu();}}>ABOUT</div>
            </NavLink>
            <NavLink className='MenuSlider_nav' activeClassName='selected_menu' to='/experience'>
                <div onClick={()=>{props.changePage('experience'); props.closeMenu();}}>EXPERIENCE</div>
            </NavLink>
            <NavLink className='MenuSlider_nav' activeClassName='selected_menu' to='/skills'>
                <div onClick={()=>{props.changePage('skills'); props.closeMenu();}}>SKILLS</div>
            </NavLink>
            <NavLink className='MenuSlider_nav' activeClassName='selected_menu' to='/interests'>
                <div onClick={()=>{props.changePage('interests'); props.closeMenu();}}>INTERESTS</div>
            </NavLink>
            <NavLink className='MenuSlider_nav' activeClassName='selected_menu' to='/content'>
                <div onClick={()=>{props.changePage('content'); props.closeMenu();}}>CONTENT</div>
            </NavLink>
        </div>
        <div className='MenuSlider_header'>
            <span>
                &#9672;
            </span>
        </div>
    </div>
);

export default MenuSlider;