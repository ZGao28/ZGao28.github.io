import React from 'react';
import { NavLink } from 'react-router-dom';
export default class LeftSider extends React.Component {
    render(){
        return (
            <div className='LeftSider'>
                <div className='side_container'>
                    <NavLink activeClassName='selected' to='/' exact={true}><div className='LeftSider_nav_square' onClick={()=>{this.props.changePage('home')}}></div></NavLink>
                    <NavLink activeClassName='selected' to='/projects'><div className='LeftSider_nav_square' onClick={()=>{this.props.changePage('projects')}}></div></NavLink>
                    <NavLink activeClassName='selected' to='/about'><div className='LeftSider_nav_square' onClick={()=>{this.props.changePage('about')}}></div></NavLink>
                    <NavLink activeClassName='selected' to='/skills'><div className='LeftSider_nav_square' onClick={()=>{this.props.changePage('skills')}}></div></NavLink>
                    <NavLink activeClassName='selected' to='/content'><div className='LeftSider_nav_square' onClick={()=>{this.props.changePage('content')}}></div></NavLink>
                    <NavLink activeClassName='selected' to='/resume'><div className='LeftSider_nav_square' onClick={()=>{this.props.changePage('resume')}}></div></NavLink>
                </div>
            </div>
        );
    }
}