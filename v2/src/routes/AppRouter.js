import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
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


const AppRouter = () => (
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
            <LeftSider/>
            <RightSider/>
        </div>
    </BrowserRouter>
);

export default AppRouter;