import React from 'react';
import Header from '../../components/Header/Header'
import Feed from '../../components/Feed/Feed'
import Search from '../../components/Search/Search'
import Footer from '../../components/Footer/Footer'
import './Home.css'


class Home extends React.Component{
    constructor(){
        super();
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
                <li><a href="">Browse Companies</a></li>
                <li><a href="">Find Jobs</a></li>
                <li><a href="">Post a Job</a></li>
                </ul>
            </div>

        )
       }
        
		return(
            <div style={{position:"relative"}}>
                {menu}
                <div className="body">
                    <Header togglemenu={this.toggleMenu.bind(this)} />
                    <div className="home-content-container">
                            
                        <div className="home-quote">
                            <h3>Are you looking for a maker/Developer Job that you wish to search here?</h3>
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
