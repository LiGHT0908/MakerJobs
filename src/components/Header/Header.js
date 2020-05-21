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
                        <nav>
                            <Link to="/browsecompanies">
                                <li>Browse Companiasdes</li>
                            </Link>
                            <Link to="/findjobs">
                                <li>Find Jobs</li>
                            </Link>
                            <Link to="/postjob">
                                <li>Post a Job</li>
                            </Link>
                            
                            
                        </nav>
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