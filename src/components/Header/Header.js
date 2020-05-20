import React from 'react';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggleDropdown : false
           
        }
    }


    render = () => {
        if(this.state.toggleDropdown){
            var dropmenu = (
                <div>
                    <div className="dropmenu">
                        <ul>
                            <li>Browse Companies</li>
                            <li>Find Jobs</li>
                            <li>Post a Job</li>
                        </ul>
                    </div>
                </div>
            )
        }
        return(
            <div>
                <div className="Header">
                    <Link style={{textDecoration:"none",color:"white"}} to='/'>
                        <h1>Maker<span>Jobs</span>.</h1>
                    </Link>
                    <Nav dropit={this.props.togglemenu.bind(this)}/>
                </div>

                {dropmenu}
            
            </div>
        )
    }
}
export default Header;