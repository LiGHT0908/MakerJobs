import React from 'react';
import Header from '../../components/Header/Header'
import Feed from '../../components/Feed/Feed'
import Search from '../../components/Search/Search'
import Footer from '../../components/Footer/Footer'
import {Link} from 'react-router-dom'
import './Home.css'


class Home extends React.Component{
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

                    <div className="home-quote">
                    <h3>Are you looking for a Maker/Developer Job that you wish to search here?</h3>
                    </div>
                    <Search placeHolder="Search Jobs" buttonTitle="Search"/>
                    <Feed />    
                        
                    </div>
                    <Footer />
                </div>  
            </div>
        )   
	}
}


export default Home;
