import React from 'react';
import hamburger from '../../assets/Images/Menu-dropdown.png'
import './Navi.css';

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width : window.innerWidth,
            drop: false,
            toggle: false
        }
    }
    render = () =>
    {
        let menu;
        let drop;
        if(this.state.toggle){
            drop=(
            <h1>yolo bitches</h1>
            )
        }
        if(this.state.width>768)
        {
            menu = (
                <div className="navigation">
                    <nav className="Navi">
                        <li>Browse Companies</li>
                        <li>Find Jobs</li>
                    <   li>Post a Job</li>
                    </nav>
                </div>
            )
        }
        else 
        {
            menu = (
                <div className="dropdown">
                    <a onClick={this.toggle}><img src={hamburger}></img></a>
                    {drop}
                </div>
            )
        }

        return(   
            <div>{menu}</div>
        )
    }

    toggle = () =>{
        if (this.state.toggle)
        {
            this.setState({toggle:false})
        }
        else
        {
            this.setState({toggle:true})
        }
       
    }
}
export default Nav;