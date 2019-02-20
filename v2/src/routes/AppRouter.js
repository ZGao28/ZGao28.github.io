import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftSider from '../components/LeftSider';
import RightSider from '../components/RightSider';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import ExperiencePage from './ExperiencePage';
import SkillsPage from './SkillsPage';
import ContentPage from './ContentPage';
import NotFoundPage from './NotFoundPage';
import MenuSlider from '../components/MenuSlider';
import { CSSTransitionGroup } from 'react-transition-group';

export default class AppRouter extends React.Component { 
    constructor(props){
        super(props);
        this.changePage = this.changePage.bind(this);
        this.openMenu = this.openMenu.bind(this);
        this.state = {
            pageState: 'home',
            menuOpen: false,
            pageStateNumber: 0,
            pageStates: ['home', 'projects', 'about', 'experience', 'skills', 'content'],
            scrollOffset: 0,
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount(){
        const p = window.location.pathname;
        if (p === '/content' || p === '/about' || p === '/projects' || p=== '/experience' || p === '/skills' || p === '/resume' || p === '/'){
            if (p === '/'){
                this.setState({pageState: 'home'});
            } else {
                this.setState({pageState: p.substring(1)});
            }
        }  else {
            this.setState({pageState: '404'});
        }
    }
    changePage(newPage){
        this.setState(()=>({pageState: newPage}));
    }
    openMenu(){
        this.setState((prevState)=>({menuOpen: !prevState.menuOpen}));
    }
    handleScroll(){
        this.setState((prevState)=>{
            return {
                pageStateNumber: (prevState.pageStateNumber--)%6,
                pageState: prevState.pageStates[(prevState.pageStateNumber--)%6],
            }
        });
    }
    render() {
        return ( 
            <BrowserRouter onWheel={this.handleScroll}>
                <div>
                    <Header openMenu={this.openMenu} changePage={this.changePage}/>
                    <Switch>
                        <Route path="/" component={HomePage} exact={true} />
                        <Route path="/projects" component={ProjectsPage} exact={true}/>
                        <Route path="/about" component={AboutPage} exact={true}/>
                        <Route path="/experience" component={ExperiencePage} exact={true}/>
                        <Route path="/skills" component={SkillsPage} exact={true}/>
                        <Route path="/content" component={ContentPage} exact={true}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                    <Footer/>
                    <LeftSider changePage={this.changePage}/>
                    <RightSider pageState={this.state.pageState}/>
                    <CSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        {this.state.menuOpen && <MenuSlider key='menu_component' closeMenu={this.openMenu} changePage={this.changePage}/>}
                    </CSSTransitionGroup>
                </div>
            </BrowserRouter>
        );
    }
}