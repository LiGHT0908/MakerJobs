import React from 'react';
import Header from '../../components/Header/Header'
import Feed from '../../components/Feed/Feed'
import Search from '../../components/Search/Search'
import Footer from '../../components/Footer/Footer'



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
                <li><a href="">Browse Companies</a></li>
                <li><a href="">Find Jobs</a></li>
                <li><a href="">Post a Job</a></li>
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

                    <h1>This page is under Development :(</h1>    
                        
                    </div>
                    <Footer />
                </div>  
            </div>
        )   
	}
}


export default Postjob;
