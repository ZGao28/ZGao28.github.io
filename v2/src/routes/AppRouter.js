import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftSider from '../components/LeftSider';
import RightSider from '../components/RightSider';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ContentPage from './ContentPage';
import ResumePage from './ResumePage';
import NotFoundPage from './NotFoundPage';


export default class AppRouter extends React.Component { 
    constructor(props){
        super(props);
        this.changePage = this.changePage.bind(this);
        this.state = {
            pageState: 'home'
        }
    }
    changePage(newPage){
        this.setState(()=>({pageState: newPage}));
    }
    componentDidMount(){
        const p = window.location.pathname;
        if (p === '/content' || p === '/about' || p === '/projects' || p === '/skills' || p === '/resume' || p === '/'){
            if (p === '/'){
                this.setState({pageState: 'home'});
            } else {
                this.setState({pageState: p.substring(1)});
            }
        }  else {
            this.setState({pageState: '404'});
        }
    }
    render() {
        return ( 
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" component={HomePage} exact={true} />
                        <Route path="/projects" component={ProjectsPage} exact={true}/>
                        <Route path="/about" component={AboutPage} exact={true}/>
                        <Route path="/skills" component={SkillsPage} exact={true}/>
                        <Route path="/content" component={ContentPage} exact={true}/>
                        <Route path="/resume" component={ResumePage} exact={true}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                    <Footer/>
                    <LeftSider changePage={this.changePage}/>
                    <RightSider pageState={this.state.pageState}/>
                </div>
            </BrowserRouter>
        );
    }
}