import React from 'react';
import Nav from '../Nav/Nav';
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
                    <h1>Maker<span>Jobs</span>.</h1>
                    <Nav dropit={this.props.togglemenu.bind(this)}/>
                </div>

                {dropmenu}
            
            </div>
        )
    }
}
export default Header;