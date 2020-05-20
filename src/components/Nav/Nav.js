import React from 'react';
import { Link } from 'react-router-dom'
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
        let navStyle={
            color:"white",
            padding:"13px",
            textDecoration:"none"
        }
        let menu;
        let drop;
        if(this.state.width>768)
        {
            menu = (
                <div className="navigation">
                    <nav className="Navi">
                         <Link style={navStyle} to='/browsecompanies'>
                            <li>Browse Companies</li>
                        </Link>
                        <Link style={navStyle} to='/findjobs'>
                            <li>Find Jobs</li>
                        </Link>
                        <Link style={navStyle} to='/postjob'>
                            <li>Post a Job</li>
                        </Link>
                    </nav>
                </div>
            )
        }
        else 
        {
            menu = (
                <div className="dropdown">
                    <a onClick={this.props.dropit}><img src={hamburger}></img></a>
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