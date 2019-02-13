import React from 'react';

export default class ContentPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hover: false
        }
        this.openHoveredState = this.openHoveredState.bind(this);
        this.closeHoveredState = this.closeHoveredState.bind(this);
        this.returnStyle = this.returnStyle.bind(this);
    }
    openHoveredState(){
        if (window.innerWidth > 900){
            this.setState(()=>({hover: true}));
        }
    }
    closeHoveredState(){
        if (window.innerWidth > 900){
            this.setState(()=>({hover: false}));
        }
    }
    returnStyle(url){
        if (this.state.hover){
            return ({
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url("+url+")",
                top: "47%"
            });
        } else {
            return ({
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url("+url+")"
            });
        }
    }
    click
    render(){
        return (
            <div className='center-div ContentPage'>
                <div className='ContentPage_thirds' 
                    id='Blog_Div' 
                    style={this.returnStyle('./images/blog_backdrop.jpeg')}
                    onMouseEnter={this.openHoveredState}
                    onMouseLeave={this.closeHoveredState}
                >
                    <h1 className='ContentPage_titles'>
                        bloG_
                    </h1>
                    <p>
                        I like to write stuff. I talk about scientific findings, life insights, and cool personal experiences. 
                        You can also find my cooking recipes and show reviews here.
                    </p>
                </div>
                <div className='ContentPage_fifth'
                    onMouseEnter={this.openHoveredState}
                    onMouseLeave={this.closeHoveredState}
                >
                </div>
                <div className='ContentPage_thirds' 
                    id='Coding_Div' 
                    style={this.returnStyle('./images/code_backdrop.jpeg')}
                    onMouseEnter={this.openHoveredState}
                    onMouseLeave={this.closeHoveredState}
                >
                    <h1 className='ContentPage_titles'>
                        codinG
                        <br/>
                        &nbsp; videos
                    </h1>
                    <p>
                        Check out my programming videos! I cover topics like data structures and algorithms, 
                        interview problems, and end to end project tutorials. 
                    </p>
                </div>
                <div className='ContentPage_fifth'
                    onMouseEnter={this.openHoveredState}
                    onMouseLeave={this.closeHoveredState}
                >
                </div>
                <div className='ContentPage_thirds' 
                    id='Vlog_Div' 
                    style={this.returnStyle('./images/vlog_backdrop.jpeg')}
                    onMouseEnter={this.openHoveredState}
                    onMouseLeave={this.closeHoveredState}
                >
                    <h1 className='ContentPage_titles'>
                        _vloG
                    </h1>
                    <p>
                        Experimenting with short movie making and vlogging. I love to tell stories and portray them in cool ways.
                        Huge Casey Neistat fan!
                    </p>
                </div>
            </div>
        );
    }
}
