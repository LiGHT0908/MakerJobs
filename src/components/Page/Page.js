import React from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Page.css'


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

                      {this.props.content}      
                        
                    </div>
                    <Footer />
                </div>  
            </div>
        )   
	}
}

export default Home;