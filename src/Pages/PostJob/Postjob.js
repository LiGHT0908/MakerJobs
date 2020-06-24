import React from 'react';
import Header from '../../components/Header/Header'
import Feed from '../../components/Feed/Feed'
import Search from '../../components/Search/Search'
import Footer from '../../components/Footer/Footer'
import InputPacket from '../../components/InputPacket/InputPacket'
import TextField from '../../components/TextField/TextField' 
import Dropdown from '../../components/Dropdown/Dropdown'
import {Link} from 'react-router-dom'
import './postjob.css'



class Postjob extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            togglemenu:false
        }
    }
    
    toggleMenu = () => 
    {
        if (this.state.togglemenu)
        {
            this.setState({togglemenu:false})
        }
        else
        { 
            this.setState({togglemenu:true});
        }
    }
	render() {
        let menu;
        let style={
            right:"-700px"
        }
        if (this.state.togglemenu) 
        {
            style=
            {
            right:"0px"
            }
        }

       if(window.innerWidth<=768)
       {
        menu = (
                
            <div className="menuoverlay" style={style}>
                <ul>
                    <Link to='/browsecompanies'>
                        <li><a>Browse Companies</a></li>
                    </Link>
                    <Link to='/findjobs'>
                        <li><a>Find Jobs</a></li>
                    </Link>
                    <Link to='/postjob'>
                        <li><a>Post a Job</a></li>
                    </Link>
                </ul>
            </div>
            )
        }



	    return(
            <div className="body">
                {menu}
                <div className="body">
                    <Header togglemenu={this.toggleMenu.bind(this)} />
                        <div className="home-content-container">
                            <h1>Post your Job today</h1>
                        
                                
                            <div class="infoInput">
                                <h3>About Job</h3>
                                <div class="info-main">
                                    <Dropdown 
                                    label={"Job Type"} 
                                    options={["One-time","Part-time","Full-time"] } 
                                    description="this is the description foer the given dropdown"
                                    imp
                                    /> 

                                    
                                    <TextField
                                    label="Job Description"
                                    description="this is description box for this text feild"
                                    imp
                                    />

                                    <InputPacket 
                                    label="Location"
                                    description=" this is the description of the above input box "
                                    />

                                    <Dropdown 
                                    label={"Job Tag"} 
                                    options={["Front-end","Back-emd","Video Editing","Programming"] } 
                                    imp
                                    /> 

                                    <InputPacket 
                                    label="Job Title" 
                                    description=" this is the description of the above input box"
                                    imp
                                    />


                                    <InputPacket 
                                    label="Company"
                                    description=" this is the description of the above input box  "
                                    />

                                    <TextField
                                    label="Job Responsiblities"
                                    description="this is description box for this text feild"
                                    imp
                                    />

                                    <TextField
                                    label="Job Benifits"
                                    description="this is description box for this text feild"
                                    />

                                    <InputPacket 
                                    label="Primary Tag"
                                    description=" this is the description of the above input box  "
                                    />

                                    
                                </div>
                            </div>   

                        
                            <div class="infoInput">
                                
                        
                                <h3>About Company</h3>
                                
                                <div class="info-main">
                                    <h3 style={{fontSize:"17px",margin:"10px 0"}}>Company Logo</h3>
                                    <input type="image" class="imginp" />

                                    <InputPacket
                                    label="Company Name"
                                    placeholder="enter enter enter"
                                    description=" this is the description of the above input box  "
                                    />
                                </div>
                            </div> 

                            <button class="PostJob">Post Job</button>

                        </div>
                    <Footer />
                </div>  
            </div>
        )   
	}
}


export default Postjob;
